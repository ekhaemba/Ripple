(function(glob, factory) {
    glob.eve = factory();
})(this, function() {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        wildcard = "*",
        fun = function() {},
        numsort = function(a, b) {
            return a - b;
        },
        current_event, stop, events = {
            n: {}
        },
        eve = function(name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l, indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) {
                if ("zIndex" in listeners[i]) {
                    indexed.push(listeners[i].zIndex);
                    if (listeners[i].zIndex < 0) {
                        queue[listeners[i].zIndex] = listeners[i];
                    }
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l);
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out.length ? out : null;
        };
    eve._events = events;
    eve.listeners = function(name) {
        var names = name.split(separator),
            e = events,
            item, items, k, i, ii, j, jj, nes, es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    eve.on = function(name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function() {};
        }
        var names = name.split(separator),
            e = events;
        for (var i = 0, ii = names.length; i < ii; i++) {
            e = e.n;
            e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {
                n: {}
            });
        }
        e.f = e.f || [];
        for (i = 0, ii = e.f.length; i < ii; i++) {
            if (e.f[i] == f) {
                return fun;
            }
        }
        e.f.push(f);
        return function(zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    eve.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    eve.stop = function() {
        stop = 1;
    };
    eve.nt = function(subname) {
        if (subname) {
            return (new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)")).test(current_event);
        }
        return current_event;
    };
    eve.nts = function() {
        return current_event.split(separator);
    };
    eve.off = eve.unbind = function(name, f) {
        if (!name) {
            eve._events = events = {
                n: {}
            };
            return;
        }
        var names = name.split(separator),
            e, key, splice, i, ii, j, jj, cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) {
                        if (e[has](key)) {
                            splice.push(e[key]);
                        }
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) {
                            if (e.f[j] == f) {
                                e.f.splice(j, 1);
                                break;
                            }
                        }!e.f.length && delete e.f;
                    }
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            var funcs = e.n[key].f;
                            for (j = 0, jj = funcs.length; j < jj; j++) {
                                if (funcs[j] == f) {
                                    funcs.splice(j, 1);
                                    break;
                                }
                            }!funcs.length && delete e.n[key].f;
                        }
                    }
                } else {
                    delete e.f;
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            delete e.n[key].f;
                        }
                    }
                }
                e = e.n;
            }
        }
    };
    eve.once = function(name, f) {
        var f2 = function() {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    eve.version = version;
    eve.toString = function() {
        return "You are running Eve " + version;
    };
    return eve;
});
(function(glob, factory) {
    factory(glob, glob.eve);
})(this, function(window, eve) {
    function R(first) {
        if (R.is(first, "function")) {
            return loaded ? first() : eve.on("raphael.DOMload", first);
        } else if (R.is(first, array)) {
            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
        } else {
            var args = Array.prototype.slice.call(arguments, 0);
            if (R.is(args[args.length - 1], "function")) {
                var f = args.pop();
                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function() {
                    f.call(R._engine.create[apply](R, args));
                });
            } else {
                return R._engine.create[apply](R, arguments);
            }
        }
    }
    R.version = "2.1.0";
    R.eve = eve;
    var loaded, separator = /[, ]+/,
        elements = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        formatrg = /\{(\d+)\}/g,
        proto = "prototype",
        has = "hasOwnProperty",
        g = {
            doc: document,
            win: window
        },
        oldRaphael = {
            was: Object.prototype[has].call(g.win, "Raphael"),
            is: g.win.Raphael
        },
        Paper = function() {
            this.ca = this.customAttributes = {};
        },
        paperproto, appendChild = "appendChild",
        apply = "apply",
        concat = "concat",
        supportsTouch = "ontouchstart" in g.win || g.win.DocumentTouch && g.doc instanceof DocumentTouch,
        E = "",
        S = " ",
        Str = String,
        split = "split",
        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [split](S),
        touchMap = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        lowerCase = Str.prototype.toLowerCase,
        math = Math,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        pow = math.pow,
        PI = math.PI,
        nu = "number",
        string = "string",
        array = "array",
        toString = "toString",
        fillString = "fill",
        objectToString = Object.prototype.toString,
        paper = {},
        push = "push",
        ISURL = R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        isnan = {
            NaN: 1,
            Infinity: 1,
            '-Infinity': 1
        },
        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        round = math.round,
        setAttribute = "setAttribute",
        toFloat = parseFloat,
        toInt = parseInt,
        upperCase = Str.prototype.toUpperCase,
        availableAttrs = R._availableAttrs = {
            'arrow-end': "none",
            'arrow-start': "none",
            blur: 0,
            'clip-rect': "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            'fill-opacity': 1,
            font: "10px \"Arial\"",
            'font-family': "\"Arial\"",
            'font-size': "10",
            'font-style': "normal",
            'font-weight': 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            'letter-spacing': 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            'stroke-dasharray': "",
            'stroke-linecap': "butt",
            'stroke-linejoin': "butt",
            'stroke-miterlimit': 0,
            'stroke-opacity': 1,
            'stroke-width': 1,
            target: "_blank",
            'text-anchor': "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        availableAnimAttrs = R._availableAnimAttrs = {
            blur: nu,
            'clip-rect': "csv",
            cx: nu,
            cy: nu,
            fill: "colour",
            'fill-opacity': nu,
            'font-size': nu,
            height: nu,
            opacity: nu,
            path: "path",
            r: nu,
            rx: nu,
            ry: nu,
            stroke: "colour",
            'stroke-opacity': nu,
            'stroke-width': nu,
            transform: "transform",
            width: nu,
            x: nu,
            y: nu
        },
        whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        hsrg = {
            hs: 1,
            rg: 1
        },
        p2s = /,?([achlmqrstvxz]),?/gi,
        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
        eldata = {},
        sortByKey = function(a, b) {
            return a.key - b.key;
        },
        sortByNumber = function(a, b) {
            return toFloat(a) - toFloat(b);
        },
        fun = function() {},
        pipe = function(x) {
            return x;
        },
        rectPath = R._rectPath = function(x, y, w, h, r) {
            if (r) {
                return [
                    ["M", x + r, y],
                    ["l", w - r * 2, 0],
                    ["a", r, r, 0, 0, 1, r, r],
                    ["l", 0, h - r * 2],
                    ["a", r, r, 0, 0, 1, -r, r],
                    ["l", r * 2 - w, 0],
                    ["a", r, r, 0, 0, 1, -r, -r],
                    ["l", 0, r * 2 - h],
                    ["a", r, r, 0, 0, 1, r, -r],
                    ["z"]
                ];
            }
            return [
                ["M", x, y],
                ["l", w, 0],
                ["l", 0, h],
                ["l", -w, 0],
                ["z"]
            ];
        },
        ellipsePath = function(x, y, rx, ry) {
            if (ry == null) {
                ry = rx;
            }
            return [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        },
        getPath = R._getPath = {
            path: function(el) {
                return el.attr("path");
            },
            circle: function(el) {
                var a = el.attrs;
                return ellipsePath(a.cx, a.cy, a.r);
            },
            ellipse: function(el) {
                var a = el.attrs;
                return ellipsePath(a.cx, a.cy, a.rx, a.ry);
            },
            rect: function(el) {
                var a = el.attrs;
                return rectPath(a.x, a.y, a.width, a.height, a.r);
            },
            image: function(el) {
                var a = el.attrs;
                return rectPath(a.x, a.y, a.width, a.height);
            },
            text: function(el) {
                var bbox = el._getBBox();
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
            },
            set: function(el) {
                var bbox = el._getBBox();
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
            }
        },
        mapPath = R.mapPath = function(path, matrix) {
            if (!matrix) {
                return path;
            }
            var x, y, i, j, ii, jj, pathi;
            path = path2curve(path);
            for (i = 0, ii = path.length; i < ii; i++) {
                pathi = path[i];
                for (j = 1, jj = pathi.length; j < jj; j += 2) {
                    x = matrix.x(pathi[j], pathi[j + 1]);
                    y = matrix.y(pathi[j], pathi[j + 1]);
                    pathi[j] = x;
                    pathi[j + 1] = y;
                }
            }
            return path;
        };
    R._g = g;
    R.type = g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (R.type == "VML") {
        var d = g.doc.createElement("div"),
            b;
        d.innerHTML = "<v:shape adj=\"1\"/>";
        b = d.firstChild;
        b.style.behavior = "url(#default#VML)";
        if (!(b && typeof b.adj == "object")) {
            return R.type = E;
        }
        d = null;
    }
    R.svg = !(R.vml = R.type == "VML");
    R._Paper = Paper;
    R.fn = paperproto = Paper.prototype = R.prototype;
    R._id = 0;
    R._oid = 0;
    R.is = function(o, type) {
        type = lowerCase.call(type);
        if (type == "finite") {
            return !isnan[has](+o);
        }
        if (type == "array") {
            return o instanceof Array;
        }
        return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || type == "array" && Array.isArray && Array.isArray(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
    };

    function clone(obj) {
        if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
        }
        var res = new obj.constructor;
        for (var key in obj) {
            if (obj[has](key)) {
                res[key] = clone(obj[key]);
            }
        }
        return res;
    }
    R.angle = function(x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
        } else {
            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
        }
    };
    R.rad = function(deg) {
        return deg % 360 * PI / 180;
    };
    R.deg = function(rad) {
        return rad * 180 / PI % 360;
    };
    R.snapTo = function(values, value, tolerance) {
        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
        if (R.is(values, array)) {
            var i = values.length;
            while (i--) {
                if (abs(values[i] - value) <= tolerance) {
                    return values[i];
                }
            }
        } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };
    var createUUID = R.createUUID = (function(uuidRegEx, uuidReplacer) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
        };
    })(/[xy]/g, function(c) {
        var r = math.random() * 16 | 0,
            v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
    });
    R.setWindow = function(newwin) {
        eve("raphael.setWindow", R, g.win, newwin);
        g.win = newwin;
        g.doc = g.win.document;
        if (R._engine.initWin) {
            R._engine.initWin(g.win);
        }
    };
    var toHex = function(color) {
            if (R.vml) {
                var trim = /^\s+|\s+$/g;
                var bod;
                try {
                    var docum = new ActiveXObject("htmlfile");
                    docum.write("<body>");
                    docum.close();
                    bod = docum.body;
                } catch (e) {
                    bod = createPopup().document.body;
                }
                var range = bod.createTextRange();
                toHex = cacher(function(color) {
                    try {
                        bod.style.color = Str(color).replace(trim, E);
                        var value = range.queryCommandValue("ForeColor");
                        value = (value & 255) << 16 | value & 65280 | (value & 16711680) >>> 16;
                        return "#" + ("000000" + value.toString(16)).slice(-6);
                    } catch (e) {
                        return "none";
                    }
                });
            } else {
                var i = g.doc.createElement("i");
                i.title = "Rapha\xEBl Colour Picker";
                i.style.display = "none";
                g.doc.body.appendChild(i);
                toHex = cacher(function(color) {
                    i.style.color = color;
                    return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
                });
            }
            return toHex(color);
        },
        hsbtoString = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")";
        },
        hsltoString = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")";
        },
        rgbtoString = function() {
            return this.hex;
        },
        prepareRGB = function(r, g, b) {
            if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
                b = r.b;
                g = r.g;
                r = r.r;
            }
            if (g == null && R.is(r, string)) {
                var clr = R.getRGB(r);
                r = clr.r;
                g = clr.g;
                b = clr.b;
            }
            if (r > 1 || g > 1 || b > 1) {
                r /= 255;
                g /= 255;
                b /= 255;
            }
            return [r, g, b];
        },
        packageRGB = function(r, g, b, o) {
            r *= 255;
            g *= 255;
            b *= 255;
            var rgb = {
                r: r,
                g: g,
                b: b,
                hex: R.rgb(r, g, b),
                toString: rgbtoString
            };
            R.is(o, "finite") && (rgb.opacity = o);
            return rgb;
        };
    R.color = function(clr) {
        var rgb;
        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = R.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = R.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
        } else {
            if (R.is(clr, "string")) {
                clr = R.getRGB(clr);
            }
            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
                rgb = R.rgb2hsl(clr);
                clr.h = rgb.h;
                clr.s = rgb.s;
                clr.l = rgb.l;
                rgb = R.rgb2hsb(clr);
                clr.v = rgb.b;
            } else {
                clr = {
                    hex: "none"
                };
                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            }
        }
        clr.toString = rgbtoString;
        return clr;
    };
    R.hsb2rgb = function(h, s, v, o) {
        if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            h = h.h;
            o = h.o;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;
        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    R.hsl2rgb = function(h, s, l, o) {
        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = 2 * s * (l < 0.5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;
        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    R.rgb2hsb = function(r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];
        var H, S, V, C;
        V = mmax(r, g, b);
        C = V - mmin(r, g, b);
        H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        S = C == 0 ? 0 : C / V;
        return {
            h: H,
            s: S,
            b: V,
            toString: hsbtoString
        };
    };
    R.rgb2hsl = function(r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];
        var H, S, L, M, m, C;
        M = mmax(r, g, b);
        m = mmin(r, g, b);
        C = M - m;
        H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        L = (M + m) / 2;
        S = C == 0 ? 0 : L < 0.5 ? C / (2 * L) : C / (2 - 2 * L);
        return {
            h: H,
            s: S,
            l: L,
            toString: hsltoString
        };
    };
    R._path2string = function() {
        return this.join(",").replace(p2s, "$1");
    };

    function repush(array, item) {
        for (var i = 0, ii = array.length; i < ii; i++) {
            if (array[i] === item) {
                return array.push(array.splice(i, 1)[0]);
            }
        }
    }

    function cacher(f, scope, postprocessor) {
        function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join("\u2400"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache[has](args)) {
                repush(count, args);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count.length >= 1000 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f[apply](scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }
    var preload = R._preload = function(src, f) {
        var img = g.doc.createElement("img");
        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        img.onload = function() {
            f.call(this);
            this.onload = null;
            g.doc.body.removeChild(this);
        };
        img.onerror = function() {
            g.doc.body.removeChild(this);
        };
        g.doc.body.appendChild(img);
        img.src = src;
    };

    function clrToString() {
        return this.hex;
    }
    R.getRGB = cacher(function(colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: clrToString
            };
        }
        if (colour == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: clrToString
            };
        }!(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
        var res, red, green, blue, opacity, t, values, rgb = colour.match(colourRegExp);
        if (rgb) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xB0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return R.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xB0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return R.hsl2rgb(red, green, blue, opacity);
            }
            rgb = {
                r: red,
                g: green,
                b: blue,
                toString: clrToString
            };
            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
            R.is(opacity, "finite") && (rgb.opacity = opacity);
            return rgb;
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: clrToString
        };
    }, R);
    R.hsb = cacher(function(h, s, b) {
        return R.hsb2rgb(h, s, b).hex;
    });
    R.hsl = cacher(function(h, s, l) {
        return R.hsl2rgb(h, s, l).hex;
    });
    R.rgb = cacher(function(r, g, b) {
        return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
    });
    R.getColor = function(value) {
        var start = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: value || 0.75
            },
            rgb = this.hsb2rgb(start.h, start.s, start.b);
        start.h += 0.075;
        if (start.h > 1) {
            start.h = 0;
            start.s -= 0.2;
            start.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: start.b
            });
        }
        return rgb.hex;
    };
    R.getColor.reset = function() {
        delete this.start;
    };

    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
                x: +crp[i - 2],
                y: +crp[i - 1]
            }, {
                x: +crp[i],
                y: +crp[i + 1]
            }, {
                x: +crp[i + 2],
                y: +crp[i + 3]
            }, {
                x: +crp[i + 4],
                y: +crp[i + 5]
            }];
            if (z) {
                if (!i) {
                    p[0] = {
                        x: +crp[iLen - 2],
                        y: +crp[iLen - 1]
                    };
                } else if (iLen - 4 == i) {
                    p[3] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                } else if (iLen - 2 == i) {
                    p[2] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                    p[3] = {
                        x: +crp[2],
                        y: +crp[3]
                    };
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {
                        x: +crp[i],
                        y: +crp[i + 1]
                    };
                }
            }
            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
        }
        return d;
    }
    R.parsePathString = function(pathString) {
        if (!pathString) {
            return null;
        }
        var pth = paths(pathString);
        if (pth.arr) {
            return pathClone(pth.arr);
        }
        var paramCounts = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            data = [];
        if (R.is(pathString, array) && R.is(pathString[0], array)) {
            data = pathClone(pathString);
        }
        if (!data.length) {
            Str(pathString).replace(pathCommand, function(a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([b][concat](params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "r") {
                    data.push([b][concat](params));
                } else {
                    while (params.length >= paramCounts[name]) {
                        data.push([b][concat](params.splice(0, paramCounts[name])));
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                }
            });
        }
        data.toString = R._path2string;
        pth.arr = pathClone(data);
        return data;
    };
    R.parseTransformString = cacher(function(TString) {
        if (!TString) {
            return null;
        }
        var paramCounts = {
                r: 3,
                s: 4,
                t: 2,
                m: 6
            },
            data = [];
        if (R.is(TString, array) && R.is(TString[0], array)) {
            data = pathClone(TString);
        }
        if (!data.length) {
            Str(TString).replace(tCommand, function(a, b, c) {
                var params = [],
                    name = lowerCase.call(b);
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                data.push([b][concat](params));
            });
        }
        data.toString = R._path2string;
        return data;
    });
    var paths = function(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function() {
            for (var key in p) {
                if (p[has](key) && key != ps) {
                    p[key].sleep--;
                    !p[key].sleep && delete p[key];
                }
            }
        });
        return p[ps];
    };
    R.findDotsAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {
                x: mx,
                y: my
            },
            n: {
                x: nx,
                y: ny
            },
            start: {
                x: ax,
                y: ay
            },
            end: {
                x: cx,
                y: cy
            },
            alpha: alpha
        };
    };
    R.bezierBBox = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!R.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return {
            x: bbox.min.x,
            y: bbox.min.y,
            x2: bbox.max.x,
            y2: bbox.max.y,
            width: bbox.max.x - bbox.min.x,
            height: bbox.max.y - bbox.min.y
        };
    };
    R.isPointInsideBBox = function(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
    };
    R.isBBoxIntersect = function(bbox1, bbox2) {
        var i = R.isPointInsideBBox;
        return i(bbox2, bbox1.x, bbox1.y) || i(bbox2, bbox1.x2, bbox1.y) || i(bbox2, bbox1.x, bbox1.y2) || i(bbox2, bbox1.x2, bbox1.y2) || i(bbox1, bbox2.x, bbox2.y) || i(bbox1, bbox2.x2, bbox2.y) || i(bbox1, bbox2.x, bbox2.y2) || i(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    };

    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }

    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
            Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }

    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l, e = 0.01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }

    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
        }
        return {
            x: px,
            y: py
        };
    }

    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }

    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }

    function interHelper(bez1, bez2, justCount) {
        var bbox1 = R.bezierBBox(bez1),
            bbox2 = R.bezierBBox(bez2);
        if (!R.isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = mmax(~~(l1 / 5), 1),
            n2 = mmax(~~(l2 / 5), 1),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
            dots1.push({
                x: p.x,
                y: p.y,
                t: i / n1
            });
        }
        for (i = 0; i < n2 + 1; i++) {
            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
            dots2.push({
                x: p.x,
                y: p.y,
                t: i / n2
            });
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < 0.001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < 0.001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: mmin(t1, 1),
                                t2: mmin(t2, 1)
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    R.pathIntersection = function(path1, path2) {
        return interPathHelper(path1, path2);
    };
    R.pathIntersectionNumber = function(path1, path2) {
        return interPathHelper(path1, path2, 1);
    };

    function interPathHelper(path1, path2, justCount) {
        path1 = R._path2curve(path1);
        path2 = R._path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    R.isPointInsidePath = function(path, x, y) {
        var bbox = R.pathBBox(path);
        return R.isPointInsideBBox(bbox, x, y) && interPathHelper(path, [
            ["M", x, y],
            ["H", bbox.x2 + 10]
        ], 1) % 2 == 1;
    };
    R._removedFactory = function(methodname) {
        return function() {
            eve("raphael.log", null, "Rapha\xEBl: you are calling to method \u201C" + methodname + "\u201D of removed object", methodname);
        };
    };
    var pathDimensions = R.pathBBox = function(path) {
            var pth = paths(path);
            if (pth.bbox) {
                return clone(pth.bbox);
            }
            if (!path) {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0
                };
            }
            path = path2curve(path);
            var x = 0,
                y = 0,
                X = [],
                Y = [],
                p;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = p[1];
                    y = p[2];
                    X.push(x);
                    Y.push(y);
                } else {
                    var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    X = X[concat](dim.min.x, dim.max.x);
                    Y = Y[concat](dim.min.y, dim.max.y);
                    x = p[5];
                    y = p[6];
                }
            }
            var xmin = mmin[apply](0, X),
                ymin = mmin[apply](0, Y),
                xmax = mmax[apply](0, X),
                ymax = mmax[apply](0, Y),
                width = xmax - xmin,
                height = ymax - ymin,
                bb = {
                    x: xmin,
                    y: ymin,
                    x2: xmax,
                    y2: ymax,
                    width: width,
                    height: height,
                    cx: xmin + width / 2,
                    cy: ymin + height / 2
                };
            pth.bbox = clone(bb);
            return bb;
        },
        pathClone = function(pathArray) {
            var res = clone(pathArray);
            res.toString = R._path2string;
            return res;
        },
        pathToRelative = R._pathToRelative = function(pathArray) {
            var pth = paths(pathArray);
            if (pth.rel) {
                return pathClone(pth.rel);
            }
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
                pathArray = R.parsePathString(pathArray);
            }
            var res = [],
                x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0;
            if (pathArray[0][0] == "M") {
                x = pathArray[0][1];
                y = pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res.push(["M", x, y]);
            }
            for (var i = start, ii = pathArray.length; i < ii; i++) {
                var r = res[i] = [],
                    pa = pathArray[i];
                if (pa[0] != lowerCase.call(pa[0])) {
                    r[0] = lowerCase.call(pa[0]);
                    switch (r[0]) {
                        case "a":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] - x).toFixed(3);
                            r[7] = +(pa[7] - y).toFixed(3);
                            break;
                        case "v":
                            r[1] = +(pa[1] - y).toFixed(3);
                            break;
                        case "m":
                            mx = pa[1];
                            my = pa[2];
                        default:
                            for (var j = 1, jj = pa.length; j < jj; j++) {
                                r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                            }
                    }
                } else {
                    r = res[i] = [];
                    if (pa[0] == "m") {
                        mx = pa[1] + x;
                        my = pa[2] + y;
                    }
                    for (var k = 0, kk = pa.length; k < kk; k++) {
                        res[i][k] = pa[k];
                    }
                }
                var len = res[i].length;
                switch (res[i][0]) {
                    case "z":
                        x = mx;
                        y = my;
                        break;
                    case "h":
                        x += +res[i][len - 1];
                        break;
                    case "v":
                        y += +res[i][len - 1];
                        break;
                    default:
                        x += +res[i][len - 2];
                        y += +res[i][len - 1];
                }
            }
            res.toString = R._path2string;
            pth.rel = pathClone(res);
            return res;
        },
        pathToAbsolute = R._pathToAbsolute = function(pathArray) {
            var pth = paths(pathArray);
            if (pth.abs) {
                return pathClone(pth.abs);
            }
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) {
                pathArray = R.parsePathString(pathArray);
            }
            if (!pathArray || !pathArray.length) {
                return [
                    ["M", 0, 0]
                ];
            }
            var res = [],
                x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = ["M", x, y];
            }
            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                if (pa[0] != upperCase.call(pa[0])) {
                    r[0] = upperCase.call(pa[0]);
                    switch (r[0]) {
                        case "A":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] + x);
                            r[7] = +(pa[7] + y);
                            break;
                        case "V":
                            r[1] = +pa[1] + y;
                            break;
                        case "H":
                            r[1] = +pa[1] + x;
                            break;
                        case "R":
                            var dots = [x, y][concat](pa.slice(1));
                            for (var j = 2, jj = dots.length; j < jj; j++) {
                                dots[j] = +dots[j] + x;
                                dots[++j] = +dots[j] + y;
                            }
                            res.pop();
                            res = res[concat](catmullRom2bezier(dots, crz));
                            break;
                        case "M":
                            mx = +pa[1] + x;
                            my = +pa[2] + y;
                        default:
                            for (j = 1, jj = pa.length; j < jj; j++) {
                                r[j] = +pa[j] + (j % 2 ? x : y);
                            }
                    }
                } else if (pa[0] == "R") {
                    dots = [x, y][concat](pa.slice(1));
                    res.pop();
                    res = res[concat](catmullRom2bezier(dots, crz));
                    r = ["R"][concat](pa.slice(-2));
                } else {
                    for (var k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                switch (r[0]) {
                    case "Z":
                        x = mx;
                        y = my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
            res.toString = R._path2string;
            pth.abs = pathClone(res);
            return res;
        },
        l2c = function(x1, y1, x2, y2) {
            return [x1, y1, x2, y2, x2, y2];
        },
        q2c = function(x1, y1, ax, ay, x2, y2) {
            var _13 = 0.3333333333333333,
                _23 = 0.6666666666666666;
            return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
        },
        a2c = function(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
            var _120 = PI * 120 / 180,
                rad = PI / 180 * (+angle || 0),
                res = [],
                xy, rotate = cacher(function(x, y, rad) {
                    var X = x * math.cos(rad) - y * math.sin(rad),
                        Y = x * math.sin(rad) + y * math.cos(rad);
                    return {
                        x: X,
                        y: Y
                    };
                });
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                var cos = math.cos(PI / 180 * angle),
                    sin = math.sin(PI / 180 * angle),
                    x = (x1 - x2) / 2,
                    y = (y1 - y2) / 2;
                var h = x * x / (rx * rx) + y * y / (ry * ry);
                if (h > 1) {
                    h = math.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                var rx2 = rx * rx,
                    ry2 = ry * ry,
                    k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                    cx = k * rx * y / ry + (x1 + x2) / 2,
                    cy = k * -ry * x / rx + (y1 + y2) / 2,
                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));
                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                f1 < 0 && (f1 = PI * 2 + f1);
                f2 < 0 && (f2 = PI * 2 + f2);
                if (sweep_flag && f1 > f2) {
                    f1 = f1 - PI * 2;
                }
                if (!sweep_flag && f2 > f1) {
                    f2 = f2 - PI * 2;
                }
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            var df = f2 - f1;
            if (abs(df) > _120) {
                var f2old = f2,
                    x2old = x2,
                    y2old = y2;
                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math.cos(f2);
                y2 = cy + ry * math.sin(f2);
                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
            }
            df = f2 - f1;
            var c1 = math.cos(f1),
                s1 = math.sin(f1),
                c2 = math.cos(f2),
                s2 = math.sin(f2),
                t = math.tan(df / 4),
                hx = 1.3333333333333333 * rx * t,
                hy = 1.3333333333333333 * ry * t,
                m1 = [x1, y1],
                m2 = [x1 + hx * s1, y1 - hy * c1],
                m3 = [x2 + hx * s2, y2 - hy * c2],
                m4 = [x2, y2];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) {
                return [m2, m3, m4][concat](res);
            } else {
                res = [m2, m3, m4][concat](res).join()[split](",");
                var newres = [];
                for (var i = 0, ii = res.length; i < ii; i++) {
                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                }
                return newres;
            }
        },
        findDotAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
            var t1 = 1 - t;
            return {
                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
            };
        },
        curveDim = cacher(function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
            var a = c2x - 2 * c1x + p1x - (p2x - 2 * c2x + c1x),
                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
                c = p1x - c1x,
                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
                y = [p1y, p2y],
                x = [p1x, p2x],
                dot;
            abs(t1) > "1e12" && (t1 = 0.5);
            abs(t2) > "1e12" && (t2 = 0.5);
            if (t1 > 0 && t1 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                x.push(dot.x);
                y.push(dot.y);
            }
            if (t2 > 0 && t2 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                x.push(dot.x);
                y.push(dot.y);
            }
            a = c2y - 2 * c1y + p1y - (p2y - 2 * c2y + c1y);
            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
            c = p1y - c1y;
            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
            abs(t1) > "1e12" && (t1 = 0.5);
            abs(t2) > "1e12" && (t2 = 0.5);
            if (t1 > 0 && t1 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                x.push(dot.x);
                y.push(dot.y);
            }
            if (t2 > 0 && t2 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                x.push(dot.x);
                y.push(dot.y);
            }
            return {
                min: {
                    x: mmin[apply](0, x),
                    y: mmin[apply](0, y)
                },
                max: {
                    x: mmax[apply](0, x),
                    y: mmax[apply](0, y)
                }
            };
        }),
        path2curve = R._path2curve = cacher(function(path, path2) {
            var pth = !path2 && paths(path);
            if (!path2 && pth.curve) {
                return pathClone(pth.curve);
            }
            var p = pathToAbsolute(path),
                p2 = path2 && pathToAbsolute(path2),
                attrs = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                attrs2 = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                processPath = function(path, d, pcom) {
                    var nx, ny;
                    if (!path) {
                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                    }!(path[0] in {
                        T: 1,
                        Q: 1
                    }) && (d.qx = d.qy = null);
                    switch (path[0]) {
                        case "M":
                            d.X = path[1];
                            d.Y = path[2];
                            break;
                        case "A":
                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
                            break;
                        case "S":
                            if (pcom == "C" || pcom == "S") {
                                nx = d.x * 2 - d.bx;
                                ny = d.y * 2 - d.by;
                            } else {
                                nx = d.x;
                                ny = d.y;
                            }
                            path = ["C", nx, ny][concat](path.slice(1));
                            break;
                        case "T":
                            if (pcom == "Q" || pcom == "T") {
                                d.qx = d.x * 2 - d.qx;
                                d.qy = d.y * 2 - d.qy;
                            } else {
                                d.qx = d.x;
                                d.qy = d.y;
                            }
                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                            break;
                        case "Q":
                            d.qx = path[1];
                            d.qy = path[2];
                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                            break;
                        case "L":
                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
                            break;
                        case "H":
                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
                            break;
                        case "V":
                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
                            break;
                        case "Z":
                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
                            break;
                        default:
                            ;
                    }
                    return path;
                },
                fixArc = function(pp, i) {
                    if (pp[i].length > 7) {
                        pp[i].shift();
                        var pi = pp[i];
                        while (pi.length) {
                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
                        }
                        pp.splice(i, 1);
                        ii = mmax(p.length, p2 && p2.length || 0);
                    }
                },
                fixM = function(path1, path2, a1, a2, i) {
                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                        path2.splice(i, 0, ["M", a2.x, a2.y]);
                        a1.bx = 0;
                        a1.by = 0;
                        a1.x = path1[i][1];
                        a1.y = path1[i][2];
                        ii = mmax(p.length, p2 && p2.length || 0);
                    }
                };
            for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
                p[i] = processPath(p[i], attrs);
                fixArc(p, i);
                p2 && (p2[i] = processPath(p2[i], attrs2));
                p2 && fixArc(p2, i);
                fixM(p, p2, attrs, attrs2, i);
                fixM(p2, p, attrs2, attrs, i);
                var seg = p[i],
                    seg2 = p2 && p2[i],
                    seglen = seg.length,
                    seg2len = p2 && seg2.length;
                attrs.x = seg[seglen - 2];
                attrs.y = seg[seglen - 1];
                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
                attrs2.x = p2 && seg2[seg2len - 2];
                attrs2.y = p2 && seg2[seg2len - 1];
            }
            if (!p2) {
                pth.curve = pathClone(p);
            }
            return p2 ? [p, p2] : p;
        }, null, pathClone),
        parseDots = R._parseDots = cacher(function(gradient) {
            var dots = [];
            for (var i = 0, ii = gradient.length; i < ii; i++) {
                var dot = {},
                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
                dot.color = R.getRGB(par[1]);
                if (dot.color.error) {
                    return null;
                }
                dot.color = dot.color.hex;
                par[2] && (dot.offset = par[2] + "%");
                dots.push(dot);
            }
            for (i = 1, ii = dots.length - 1; i < ii; i++) {
                if (!dots[i].offset) {
                    var start = toFloat(dots[i - 1].offset || 0),
                        end = 0;
                    for (var j = i + 1; j < ii; j++) {
                        if (dots[j].offset) {
                            end = dots[j].offset;
                            break;
                        }
                    }
                    if (!end) {
                        end = 100;
                        j = ii;
                    }
                    end = toFloat(end);
                    var d = (end - start) / (j - i + 1);
                    for (; i < j; i++) {
                        start += d;
                        dots[i].offset = start + "%";
                    }
                }
            }
            return dots;
        }),
        tear = R._tear = function(el, paper) {
            el == paper.top && (paper.top = el.prev);
            el == paper.bottom && (paper.bottom = el.next);
            el.next && (el.next.prev = el.prev);
            el.prev && (el.prev.next = el.next);
        },
        tofront = R._tofront = function(el, paper) {
            if (paper.top === el) {
                return;
            }
            tear(el, paper);
            el.next = null;
            el.prev = paper.top;
            paper.top.next = el;
            paper.top = el;
        },
        toback = R._toback = function(el, paper) {
            if (paper.bottom === el) {
                return;
            }
            tear(el, paper);
            el.next = paper.bottom;
            el.prev = null;
            paper.bottom.prev = el;
            paper.bottom = el;
        },
        insertafter = R._insertafter = function(el, el2, paper) {
            tear(el, paper);
            el2 == paper.top && (paper.top = el);
            el2.next && (el2.next.prev = el);
            el.next = el2.next;
            el.prev = el2;
            el2.next = el;
        },
        insertbefore = R._insertbefore = function(el, el2, paper) {
            tear(el, paper);
            el2 == paper.bottom && (paper.bottom = el);
            el2.prev && (el2.prev.next = el);
            el.prev = el2.prev;
            el2.prev = el;
            el.next = el2;
        },
        toMatrix = R.toMatrix = function(path, transform) {
            var bb = pathDimensions(path),
                el = {
                    _: {
                        transform: E
                    },
                    getBBox: function() {
                        return bb;
                    }
                };
            extractTransform(el, transform);
            return el.matrix;
        },
        transformPath = R.transformPath = function(path, transform) {
            return mapPath(path, toMatrix(path, transform));
        },
        extractTransform = R._extractTransform = function(el, tstr) {
            if (tstr == null) {
                return el._.transform;
            }
            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
            var tdata = R.parseTransformString(tstr),
                deg = 0,
                dx = 0,
                dy = 0,
                sx = 1,
                sy = 1,
                _ = el._,
                m = new Matrix;
            _.transform = tdata || [];
            if (tdata) {
                for (var i = 0, ii = tdata.length; i < ii; i++) {
                    var t = tdata[i],
                        tlen = t.length,
                        command = Str(t[0]).toLowerCase(),
                        absolute = t[0] != command,
                        inver = absolute ? m.invert() : 0,
                        x1, y1, x2, y2, bb;
                    if (command == "t" && tlen == 3) {
                        if (absolute) {
                            x1 = inver.x(0, 0);
                            y1 = inver.y(0, 0);
                            x2 = inver.x(t[1], t[2]);
                            y2 = inver.y(t[1], t[2]);
                            m.translate(x2 - x1, y2 - y1);
                        } else {
                            m.translate(t[1], t[2]);
                        }
                    } else if (command == "r") {
                        if (tlen == 2) {
                            bb = bb || el.getBBox(1);
                            m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                            deg += t[1];
                        } else if (tlen == 4) {
                            if (absolute) {
                                x2 = inver.x(t[2], t[3]);
                                y2 = inver.y(t[2], t[3]);
                                m.rotate(t[1], x2, y2);
                            } else {
                                m.rotate(t[1], t[2], t[3]);
                            }
                            deg += t[1];
                        }
                    } else if (command == "s") {
                        if (tlen == 2 || tlen == 3) {
                            bb = bb || el.getBBox(1);
                            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                            sx *= t[1];
                            sy *= t[tlen - 1];
                        } else if (tlen == 5) {
                            if (absolute) {
                                x2 = inver.x(t[3], t[4]);
                                y2 = inver.y(t[3], t[4]);
                                m.scale(t[1], t[2], x2, y2);
                            } else {
                                m.scale(t[1], t[2], t[3], t[4]);
                            }
                            sx *= t[1];
                            sy *= t[2];
                        }
                    } else if (command == "m" && tlen == 7) {
                        m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    _.dirtyT = 1;
                    el.matrix = m;
                }
            }
            el.matrix = m;
            _.sx = sx;
            _.sy = sy;
            _.deg = deg;
            _.dx = dx = m.e;
            _.dy = dy = m.f;
            if (sx == 1 && sy == 1 && !deg && _.bbox) {
                _.bbox.x += +dx;
                _.bbox.y += +dy;
            } else {
                _.dirtyT = 1;
            }
        },
        getEmpty = function(item) {
            var l = item[0];
            switch (l.toLowerCase()) {
                case "t":
                    return [l, 0, 0];
                case "m":
                    return [l, 1, 0, 0, 1, 0, 0];
                case "r":
                    if (item.length == 4) {
                        return [l, 0, item[2], item[3]];
                    } else {
                        return [l, 0];
                    }
                case "s":
                    if (item.length == 5) {
                        return [l, 1, 1, item[3], item[4]];
                    } else if (item.length == 3) {
                        return [l, 1, 1];
                    } else {
                        return [l, 1];
                    }
                default:
                    ;
            }
        },
        equaliseTransform = R._equaliseTransform = function(t1, t2) {
            t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
            t1 = R.parseTransformString(t1) || [];
            t2 = R.parseTransformString(t2) || [];
            var maxlength = mmax(t1.length, t2.length),
                from = [],
                to = [],
                i = 0,
                j, jj, tt1, tt2;
            for (; i < maxlength; i++) {
                tt1 = t1[i] || getEmpty(t2[i]);
                tt2 = t2[i] || getEmpty(tt1);
                if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                    return;
                }
                from[i] = [];
                to[i] = [];
                for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
                    j in tt1 && (from[i][j] = tt1[j]);
                    j in tt2 && (to[i][j] = tt2[j]);
                }
            }
            return {
                from: from,
                to: to
            };
        };
    R._getContainer = function(x, y, w, h) {
        var container;
        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
        if (container == null) {
            return;
        }
        if (container.tagName) {
            if (y == null) {
                return {
                    container: container,
                    width: container.style.pixelWidth || container.offsetWidth,
                    height: container.style.pixelHeight || container.offsetHeight
                };
            } else {
                return {
                    container: container,
                    width: y,
                    height: w
                };
            }
        }
        return {
            container: 1,
            x: x,
            y: y,
            width: w,
            height: h
        };
    };
    R.pathToRelative = pathToRelative;
    R._engine = {};
    R.path2curve = path2curve;
    R.matrix = function(a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };

    function Matrix(a, b, c, d, e, f) {
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }(function(matrixproto) {
        matrixproto.add = function(a, b, c, d, e, f) {
            var out = [
                    [],
                    [],
                    []
                ],
                m = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                matrix = [
                    [a, c, e],
                    [b, d, f],
                    [0, 0, 1]
                ],
                x, y, z, res;
            if (a && a instanceof Matrix) {
                matrix = [
                    [a.a, a.c, a.e],
                    [a.b, a.d, a.f],
                    [0, 0, 1]
                ];
            }
            for (x = 0; x < 3; x++) {
                for (y = 0; y < 3; y++) {
                    res = 0;
                    for (z = 0; z < 3; z++) {
                        res += m[x][z] * matrix[z][y];
                    }
                    out[x][y] = res;
                }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
        };
        matrixproto.invert = function() {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        matrixproto.clone = function() {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        matrixproto.translate = function(x, y) {
            this.add(1, 0, 0, 1, x, y);
        };
        matrixproto.scale = function(x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
        };
        matrixproto.rotate = function(a, x, y) {
            a = R.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            this.add(1, 0, 0, 1, -x, -y);
        };
        matrixproto.x = function(x, y) {
            return x * this.a + y * this.c + this.e;
        };
        matrixproto.y = function(x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function(i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function() {
            return R.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
        };
        matrixproto.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
        };
        matrixproto.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };

        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }

        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        matrixproto.split = function() {
            var out = {};
            out.dx = this.e;
            out.dy = this.f;
            var row = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);
            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;
            var sin = -row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = R.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = R.deg(math.asin(sin));
            }
            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        matrixproto.toTransformString = function(shorter) {
            var s = shorter || this[split]();
            if (s.isSimple) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [s.rotate, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    var version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    if (navigator.vendor == "Apple Computer, Inc." && (version && version[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && version && version[1] < 8) {
        paperproto.safari = function() {
            var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: "none"
            });
            setTimeout(function() {
                rect.remove();
            });
        };
    } else {
        paperproto.safari = fun;
    }
    var preventDefault = function() {
            this.returnValue = false;
        },
        preventTouch = function() {
            return this.originalEvent.preventDefault();
        },
        stopPropagation = function() {
            this.cancelBubble = true;
        },
        stopTouch = function() {
            return this.originalEvent.stopPropagation();
        },
        getEventPosition = function(e) {
            var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
            return {
                x: e.clientX + scrollX,
                y: e.clientY + scrollY
            };
        },
        addEvent = (function() {
            if (g.doc.addEventListener) {
                return function(obj, type, fn, element) {
                    var f = function(e) {
                        var pos = getEventPosition(e);
                        return fn.call(element, e, pos.x, pos.y);
                    };
                    obj.addEventListener(type, f, false);
                    if (supportsTouch && touchMap[type]) {
                        var _f = function(e) {
                            var pos = getEventPosition(e),
                                olde = e;
                            for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                                if (e.targetTouches[i].target == obj) {
                                    e = e.targetTouches[i];
                                    e.originalEvent = olde;
                                    e.preventDefault = preventTouch;
                                    e.stopPropagation = stopTouch;
                                    break;
                                }
                            }
                            return fn.call(element, e, pos.x, pos.y);
                        };
                        obj.addEventListener(touchMap[type], _f, false);
                    }
                    return function() {
                        obj.removeEventListener(type, f, false);
                        if (supportsTouch && touchMap[type]) {
                            obj.removeEventListener(touchMap[type], f, false);
                        }
                        return true;
                    };
                };
            } else if (g.doc.attachEvent) {
                return function(obj, type, fn, element) {
                    var f = function(e) {
                        e = e || g.win.event;
                        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                            x = e.clientX + scrollX,
                            y = e.clientY + scrollY;
                        e.preventDefault = e.preventDefault || preventDefault;
                        e.stopPropagation = e.stopPropagation || stopPropagation;
                        return fn.call(element, e, x, y);
                    };
                    obj.attachEvent("on" + type, f);
                    var detacher = function() {
                        obj.detachEvent("on" + type, f);
                        return true;
                    };
                    return detacher;
                };
            }
        })(),
        drag = [],
        dragMove = function(e) {
            var x = e.clientX,
                y = e.clientY,
                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                dragi, j = drag.length;
            while (j--) {
                dragi = drag[j];
                if (supportsTouch && e.touches) {
                    var i = e.touches.length,
                        touch;
                    while (i--) {
                        touch = e.touches[i];
                        if (touch.identifier == dragi.el._drag.id) {
                            x = touch.clientX;
                            y = touch.clientY;
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break;
                        }
                    }
                } else {
                    e.preventDefault();
                }
                var node = dragi.el.node,
                    o, next = node.nextSibling,
                    parent = node.parentNode,
                    display = node.style.display;
                g.win.opera && parent.removeChild(node);
                node.style.display = "none";
                o = dragi.el.paper.getElementByPoint(x, y);
                node.style.display = display;
                g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
                o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
                x += scrollX;
                y += scrollY;
                eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
            }
        },
        dragUp = function(e) {
            R.unmousemove(dragMove).unmouseup(dragUp);
            var i = drag.length,
                dragi;
            while (i--) {
                dragi = drag[i];
                dragi.el._drag = {};
                eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            }
            drag = [];
        },
        elproto = R.el = {};
    for (var i = events.length; i--;) {
        (function(eventName) {
            R[eventName] = elproto[eventName] = function(fn, scope) {
                if (R.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)
                    });
                }
                return this;
            };
            R["un" + eventName] = elproto["un" + eventName] = function(fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) {
                    if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
                        events[l].unbind();
                        events.splice(l, 1);
                        !events.length && delete this.events;
                    }
                }
                return this;
            };
        })(events[i]);
    }
    elproto.data = function(key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0) {
            return data;
        }
        if (arguments.length == 1) {
            if (R.is(key, "object")) {
                for (var i in key) {
                    if (key[has](i)) {
                        this.data(i, key[i]);
                    }
                }
                return this;
            }
            eve("raphael.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("raphael.data.set." + this.id, this, value, key);
        return this;
    };
    elproto.removeData = function(key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    elproto.getData = function() {
        return clone(eldata[this.id] || {});
    };
    elproto.hover = function(f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    elproto.unhover = function(f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
        function start(e) {
            (e.originalEvent || e).preventDefault();
            var x = e.clientX,
                y = e.clientY,
                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
            this._drag.id = e.identifier;
            if (supportsTouch && e.touches) {
                var i = e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    this._drag.id = touch.identifier;
                    if (touch.identifier == this._drag.id) {
                        x = touch.clientX;
                        y = touch.clientY;
                        break;
                    }
                }
            }
            this._drag.x = x + scrollX;
            this._drag.y = y + scrollY;
            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
            drag.push({
                el: this,
                move_scope: move_scope,
                start_scope: start_scope,
                end_scope: end_scope
            });
            onstart && eve.on("raphael.drag.start." + this.id, onstart);
            onmove && eve.on("raphael.drag.move." + this.id, onmove);
            onend && eve.on("raphael.drag.end." + this.id, onend);
            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
        }
        this._drag = {};
        draggable.push({
            el: this,
            start: start
        });
        this.mousedown(start);
        return this;
    };
    elproto.onDragOver = function(f) {
        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
    };
    elproto.undrag = function() {
        var i = draggable.length;
        while (i--) {
            if (draggable[i].el == this) {
                this.unmousedown(draggable[i].start);
                draggable.splice(i, 1);
                eve.unbind("raphael.drag.*." + this.id);
            }
        }!draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
        drag = [];
    };
    paperproto.circle = function(x, y, r) {
        var out = R._engine.circle(this, x || 0, y || 0, r || 0);
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.rect = function(x, y, w, h, r) {
        var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.ellipse = function(x, y, rx, ry) {
        var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.path = function(pathString) {
        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
        var out = R._engine.path(R.format[apply](R, arguments), this);
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.image = function(src, x, y, w, h) {
        var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.text = function(x, y, text) {
        var out = R._engine.text(this, x || 0, y || 0, Str(text));
        this.__set__ && this.__set__.push(out);
        return out;
    };
    paperproto.set = function(itemsArray) {
        !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
        var out = new Set(itemsArray);
        this.__set__ && this.__set__.push(out);
        out.paper = this;
        out.type = "set";
        return out;
    };
    paperproto.setStart = function(set) {
        this.__set__ = set || this.set();
    };
    paperproto.setFinish = function(set) {
        var out = this.__set__;
        delete this.__set__;
        return out;
    };
    paperproto.setSize = function(width, height) {
        return R._engine.setSize.call(this, width, height);
    };
    paperproto.setViewBox = function(x, y, w, h, fit) {
        return R._engine.setViewBox.call(this, x, y, w, h, fit);
    };
    paperproto.top = paperproto.bottom = null;
    paperproto.raphael = R;
    var getOffset = function(elem) {
        var box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            y: top,
            x: left
        };
    };
    paperproto.getElementByPoint = function(x, y) {
        var paper = this,
            svg = paper.canvas,
            target = g.doc.elementFromPoint(x, y);
        if (g.win.opera && target.tagName == "svg") {
            var so = getOffset(svg),
                sr = svg.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = svg.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        while (target.parentNode && target != svg.parentNode && !target.raphael) {
            target = target.parentNode;
        }
        target == paper.canvas.parentNode && (target = svg);
        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
        return target;
    };
    paperproto.getElementsByBBox = function(bbox) {
        var set = this.set();
        this.forEach(function(el) {
            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
                set.push(el);
            }
        });
        return set;
    };
    paperproto.getById = function(id) {
        var bot = this.bottom;
        while (bot) {
            if (bot.id == id) {
                return bot;
            }
            bot = bot.next;
        }
        return null;
    };
    paperproto.forEach = function(callback, thisArg) {
        var bot = this.bottom;
        while (bot) {
            if (callback.call(thisArg, bot) === false) {
                return this;
            }
            bot = bot.next;
        }
        return this;
    };
    paperproto.getElementsByPoint = function(x, y) {
        var set = this.set();
        this.forEach(function(el) {
            if (el.isPointInside(x, y)) {
                set.push(el);
            }
        });
        return set;
    };

    function x_y() {
        return this.x + S + this.y;
    }

    function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " \xD7 " + this.height;
    }
    elproto.isPointInside = function(x, y) {
        var rp = this.realPath = getPath[this.type](this);
        if (this.attr("transform") && this.attr("transform").length) {
            rp = R.transformPath(rp, this.attr("transform"));
        }
        return R.isPointInsidePath(rp, x, y);
    };
    elproto.getBBox = function(isWithoutTransform) {
        if (this.removed) {
            return {};
        }
        var _ = this._;
        if (isWithoutTransform) {
            if (_.dirty || !_.bboxwt) {
                this.realPath = getPath[this.type](this);
                _.bboxwt = pathDimensions(this.realPath);
                _.bboxwt.toString = x_y_w_h;
                _.dirty = 0;
            }
            return _.bboxwt;
        }
        if (_.dirty || _.dirtyT || !_.bbox) {
            if (_.dirty || !this.realPath) {
                _.bboxwt = 0;
                this.realPath = getPath[this.type](this);
            }
            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
            _.bbox.toString = x_y_w_h;
            _.dirty = _.dirtyT = 0;
        }
        return _.bbox;
    };
    elproto.clone = function() {
        if (this.removed) {
            return null;
        }
        var out = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(out);
        return out;
    };
    elproto.glow = function(glow) {
        if (this.type == "text") {
            return null;
        }
        glow = glow || {};
        var s = {
                width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
                fill: glow.fill || false,
                opacity: glow.opacity || 0.5,
                offsetx: glow.offsetx || 0,
                offsety: glow.offsety || 0,
                color: glow.color || "#000"
            },
            c = s.width / 2,
            r = this.paper,
            out = r.set(),
            path = this.realPath || getPath[this.type](this);
        path = this.matrix ? mapPath(path, this.matrix) : path;
        for (var i = 1; i < c + 1; i++) {
            out.push(r.path(path).attr({
                stroke: s.color,
                fill: s.fill ? s.color : "none",
                'stroke-linejoin': "round",
                'stroke-linecap': "round",
                'stroke-width': +(s.width / c * i).toFixed(3),
                opacity: +(s.opacity / c).toFixed(3)
            }));
        }
        return out.insertBefore(this).translate(s.offsetx, s.offsety);
    };
    var curveslengths = {},
        getPointAtSegmentLength = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
            if (length == null) {
                return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
            } else {
                return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
            }
        },
        getLengthFactory = function(istotal, subpath) {
            return function(path, length, onlystart) {
                path = path2curve(path);
                var x, y, p, l, sp = "",
                    subpaths = {},
                    point, len = 0;
                for (var i = 0, ii = path.length; i < ii; i++) {
                    p = path[i];
                    if (p[0] == "M") {
                        x = +p[1];
                        y = +p[2];
                    } else {
                        l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                        if (len + l > length) {
                            if (subpath && !subpaths.start) {
                                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                                if (onlystart) {
                                    return sp;
                                }
                                subpaths.start = sp;
                                sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                                len += l;
                                x = +p[5];
                                y = +p[6];
                                continue;
                            }
                            if (!istotal && !subpath) {
                                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                return {
                                    x: point.x,
                                    y: point.y,
                                    alpha: point.alpha
                                };
                            }
                        }
                        len += l;
                        x = +p[5];
                        y = +p[6];
                    }
                    sp += p.shift() + p;
                }
                subpaths.end = sp;
                point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
                point.alpha && (point = {
                    x: point.x,
                    y: point.y,
                    alpha: point.alpha
                });
                return point;
            };
        };
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    R.getTotalLength = getTotalLength;
    R.getPointAtLength = getPointAtLength;
    R.getSubpath = function(path, from, to) {
        if (this.getTotalLength(path) - to < 0.000001) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    elproto.getTotalLength = function() {
        var path = this.getPath();
        if (!path) {
            return;
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
        return getTotalLength(path);
    };
    elproto.getPointAtLength = function(length) {
        var path = this.getPath();
        if (!path) {
            return;
        }
        return getPointAtLength(path, length);
    };
    elproto.getPath = function() {
        var path, getPath = R._getPath[this.type];
        if (this.type == "text" || this.type == "set") {
            return;
        }
        if (getPath) {
            path = getPath(this);
        }
        return path;
    };
    elproto.getSubpath = function(from, to) {
        var path = this.getPath();
        if (!path) {
            return;
        }
        return R.getSubpath(path, from, to);
    };
    var ef = R.easing_formulas = {
        linear: function(n) {
            return n;
        },
        '<': function(n) {
            return pow(n, 1.7);
        },
        '>': function(n) {
            return pow(n, 0.48);
        },
        '<>': function(n) {
            var q = 0.48 - n / 1.04,
                Q = math.sqrt(0.1734 + q * q),
                x = Q - q,
                X = pow(abs(x), 0.3333333333333333) * (x < 0 ? -1 : 1),
                y = -Q - q,
                Y = pow(abs(y), 0.3333333333333333) * (y < 0 ? -1 : 1),
                t = X + Y + 0.5;
            return (1 - t) * 3 * t * t + t * t * t;
        },
        backIn: function(n) {
            var s = 1.70158;
            return n * n * ((s + 1) * n - s);
        },
        backOut: function(n) {
            n = n - 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n + s) + 1;
        },
        elastic: function(n) {
            if (n == !!n) {
                return n;
            }
            return pow(2, -10 * n) * math.sin((n - 0.075) * (2 * PI) / 0.3) + 1;
        },
        bounce: function(n) {
            var s = 7.5625,
                p = 2.75,
                l;
            if (n < 1 / p) {
                l = s * n * n;
            } else {
                if (n < 2 / p) {
                    n -= 1.5 / p;
                    l = s * n * n + 0.75;
                } else {
                    if (n < 2.5 / p) {
                        n -= 2.25 / p;
                        l = s * n * n + 0.9375;
                    } else {
                        n -= 2.625 / p;
                        l = s * n * n + 0.984375;
                    }
                }
            }
            return l;
        }
    };
    ef.easeIn = ef['ease-in'] = ef['<'];
    ef.easeOut = ef['ease-out'] = ef['>'];
    ef.easeInOut = ef['ease-in-out'] = ef['<>'];
    ef['back-in'] = ef.backIn;
    ef['back-out'] = ef.backOut;
    var animationElements = [],
        requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            setTimeout(callback, 16);
        },
        animation = function() {
            var Now = +new Date,
                l = 0;
            for (; l < animationElements.length; l++) {
                var e = animationElements[l];
                if (e.el.removed || e.paused) {
                    continue;
                }
                var time = Now - e.start,
                    ms = e.ms,
                    easing = e.easing,
                    from = e.from,
                    diff = e.diff,
                    to = e.to,
                    t = e.t,
                    that = e.el,
                    set = {},
                    now, init = {},
                    key;
                if (e.initstatus) {
                    time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
                    e.status = e.initstatus;
                    delete e.initstatus;
                    e.stop && animationElements.splice(l--, 1);
                } else {
                    e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
                }
                if (time < 0) {
                    continue;
                }
                if (time < ms) {
                    var pos = easing(time / ms);
                    for (var attr in from) {
                        if (from[has](attr)) {
                            switch (availableAnimAttrs[attr]) {
                                case nu:
                                    now = +from[attr] + pos * ms * diff[attr];
                                    break;
                                case "colour":
                                    now = "rgb(" + [upto255(round(from[attr].r + pos * ms * diff[attr].r)), upto255(round(from[attr].g + pos * ms * diff[attr].g)), upto255(round(from[attr].b + pos * ms * diff[attr].b))].join(",") + ")";
                                    break;
                                case "path":
                                    now = [];
                                    for (var i = 0, ii = from[attr].length; i < ii; i++) {
                                        now[i] = [from[attr][i][0]];
                                        for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                            now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
                                        }
                                        now[i] = now[i].join(S);
                                    }
                                    now = now.join(S);
                                    break;
                                case "transform":
                                    if (diff[attr].real) {
                                        now = [];
                                        for (i = 0, ii = from[attr].length; i < ii; i++) {
                                            now[i] = [from[attr][i][0]];
                                            for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                                now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                                            }
                                        }
                                    } else {
                                        var get = function(i) {
                                            return +from[attr][i] + pos * ms * diff[attr][i];
                                        };
                                        now = [
                                            ["m", get(0), get(1), get(2), get(3), get(4), get(5)]
                                        ];
                                    }
                                    break;
                                case "csv":
                                    if (attr == "clip-rect") {
                                        now = [];
                                        i = 4;
                                        while (i--) {
                                            now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                        }
                                    }
                                    break;
                                default:
                                    var from2 = [][concat](from[attr]);
                                    now = [];
                                    i = that.paper.customAttributes[attr].length;
                                    while (i--) {
                                        now[i] = +from2[i] + pos * ms * diff[attr][i];
                                    }
                                    break;
                            }
                            set[attr] = now;
                        }
                    }
                    that.attr(set);
                    (function(id, that, anim) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + id, that, anim);
                        });
                    })(that.id, that, e.anim);
                } else {
                    (function(f, el, a) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + el.id, el, a);
                            eve("raphael.anim.finish." + el.id, el, a);
                            R.is(f, "function") && f.call(el);
                        });
                    })(e.callback, that, e.anim);
                    that.attr(to);
                    animationElements.splice(l--, 1);
                    if (e.repeat > 1 && !e.next) {
                        for (key in to) {
                            if (to[has](key)) {
                                init[key] = e.totalOrigin[key];
                            }
                        }
                        e.el.attr(init);
                        runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
                    }
                    if (e.next && !e.stop) {
                        runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
                    }
                }
            }
            R.svg && that && that.paper && that.paper.safari();
            animationElements.length && requestAnimFrame(animation);
        },
        upto255 = function(color) {
            return color > 255 ? 255 : color < 0 ? 0 : color;
        };
    elproto.animateWith = function(el, anim, params, ms, easing, callback) {
        var element = this;
        if (element.removed) {
            callback && callback.call(element);
            return element;
        }
        var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
            x, y;
        runAnimation(a, element, a.percents[0], null, element.attr());
        for (var i = 0, ii = animationElements.length; i < ii; i++) {
            if (animationElements[i].anim == anim && animationElements[i].el == el) {
                animationElements[ii - 1].start = animationElements[i].start;
                break;
            }
        }
        return element;
    };

    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
        var cx = 3 * p1x,
            bx = 3 * (p2x - p1x) - cx,
            ax = 1 - cx - bx,
            cy = 3 * p1y,
            by = 3 * (p2y - p1y) - cy,
            ay = 1 - cy - by;

        function sampleCurveX(t) {
            return ((ax * t + bx) * t + cx) * t;
        }

        function solve(x, epsilon) {
            var t = solveCurveX(x, epsilon);
            return ((ay * t + by) * t + cy) * t;
        }

        function solveCurveX(x, epsilon) {
            var t0, t1, t2, x2, d2, i;
            for (t2 = x, i = 0; i < 8; i++) {
                x2 = sampleCurveX(t2) - x;
                if (abs(x2) < epsilon) {
                    return t2;
                }
                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
                if (abs(d2) < 0.000001) {
                    break;
                }
                t2 = t2 - x2 / d2;
            }
            t0 = 0;
            t1 = 1;
            t2 = x;
            if (t2 < t0) {
                return t0;
            }
            if (t2 > t1) {
                return t1;
            }
            while (t0 < t1) {
                x2 = sampleCurveX(t2);
                if (abs(x2 - x) < epsilon) {
                    return t2;
                }
                if (x > x2) {
                    t0 = t2;
                } else {
                    t1 = t2;
                }
                t2 = (t1 - t0) / 2 + t0;
            }
            return t2;
        }
        return solve(t, 1 / (200 * duration));
    }
    elproto.onAnimation = function(f) {
        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
        return this;
    };

    function Animation(anim, ms) {
        var percents = [],
            newAnim = {};
        this.ms = ms;
        this.times = 1;
        if (anim) {
            for (var attr in anim) {
                if (anim[has](attr)) {
                    newAnim[toFloat(attr)] = anim[attr];
                    percents.push(toFloat(attr));
                }
            }
            percents.sort(sortByNumber);
        }
        this.anim = newAnim;
        this.top = percents[percents.length - 1];
        this.percents = percents;
    }
    Animation.prototype.delay = function(delay) {
        var a = new Animation(this.anim, this.ms);
        a.times = this.times;
        a.del = +delay || 0;
        return a;
    };
    Animation.prototype.repeat = function(times) {
        var a = new Animation(this.anim, this.ms);
        a.del = this.del;
        a.times = math.floor(mmax(times, 0)) || 1;
        return a;
    };

    function runAnimation(anim, element, percent, status, totalOrigin, times) {
        percent = toFloat(percent);
        var params, isInAnim, isInAnimSet, percents = [],
            next, prev, timestamp, ms = anim.ms,
            from = {},
            to = {},
            diff = {};
        if (status) {
            for (i = 0, ii = animationElements.length; i < ii; i++) {
                var e = animationElements[i];
                if (e.el.id == element.id && e.anim == anim) {
                    if (e.percent != percent) {
                        animationElements.splice(i, 1);
                        isInAnimSet = 1;
                    } else {
                        isInAnim = e;
                    }
                    element.attr(e.totalOrigin);
                    break;
                }
            }
        } else {
            status = +to;
        }
        for (var i = 0, ii = anim.percents.length; i < ii; i++) {
            if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
                percent = anim.percents[i];
                prev = anim.percents[i - 1] || 0;
                ms = ms / anim.top * (percent - prev);
                next = anim.percents[i + 1];
                params = anim.anim[percent];
                break;
            } else if (status) {
                element.attr(anim.anim[anim.percents[i]]);
            }
        }
        if (!params) {
            return;
        }
        if (!isInAnim) {
            for (var attr in params) {
                if (params[has](attr)) {
                    if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
                        from[attr] = element.attr(attr);
                        from[attr] == null && (from[attr] = availableAttrs[attr]);
                        to[attr] = params[attr];
                        switch (availableAnimAttrs[attr]) {
                            case nu:
                                diff[attr] = (to[attr] - from[attr]) / ms;
                                break;
                            case "colour":
                                from[attr] = R.getRGB(from[attr]);
                                var toColour = R.getRGB(to[attr]);
                                diff[attr] = {
                                    r: (toColour.r - from[attr].r) / ms,
                                    g: (toColour.g - from[attr].g) / ms,
                                    b: (toColour.b - from[attr].b) / ms
                                };
                                break;
                            case "path":
                                var pathes = path2curve(from[attr], to[attr]),
                                    toPath = pathes[1];
                                from[attr] = pathes[0];
                                diff[attr] = [];
                                for (i = 0, ii = from[attr].length; i < ii; i++) {
                                    diff[attr][i] = [0];
                                    for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                        diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                                    }
                                }
                                break;
                            case "transform":
                                var _ = element._,
                                    eq = equaliseTransform(_[attr], to[attr]);
                                if (eq) {
                                    from[attr] = eq.from;
                                    to[attr] = eq.to;
                                    diff[attr] = [];
                                    diff[attr].real = true;
                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
                                        diff[attr][i] = [from[attr][i][0]];
                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                            diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                                        }
                                    }
                                } else {
                                    var m = element.matrix || new Matrix,
                                        to2 = {
                                            _: {
                                                transform: _.transform
                                            },
                                            getBBox: function() {
                                                return element.getBBox(1);
                                            }
                                        };
                                    from[attr] = [m.a, m.b, m.c, m.d, m.e, m.f];
                                    extractTransform(to2, to[attr]);
                                    to[attr] = to2._.transform;
                                    diff[attr] = [(to2.matrix.a - m.a) / ms, (to2.matrix.b - m.b) / ms, (to2.matrix.c - m.c) / ms, (to2.matrix.d - m.d) / ms, (to2.matrix.e - m.e) / ms, (to2.matrix.f - m.f) / ms];
                                }
                                break;
                            case "csv":
                                var values = Str(params[attr])[split](separator),
                                    from2 = Str(from[attr])[split](separator);
                                if (attr == "clip-rect") {
                                    from[attr] = from2;
                                    diff[attr] = [];
                                    i = from2.length;
                                    while (i--) {
                                        diff[attr][i] = (values[i] - from[attr][i]) / ms;
                                    }
                                }
                                to[attr] = values;
                                break;
                            default:
                                values = [][concat](params[attr]);
                                from2 = [][concat](from[attr]);
                                diff[attr] = [];
                                i = element.paper.customAttributes[attr].length;
                                while (i--) {
                                    diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
                                }
                                break;
                        }
                    }
                }
            }
            var easing = params.easing,
                easyeasy = R.easing_formulas[easing];
            if (!easyeasy) {
                easyeasy = Str(easing).match(bezierrg);
                if (easyeasy && easyeasy.length == 5) {
                    var curve = easyeasy;
                    easyeasy = function(t) {
                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                    };
                } else {
                    easyeasy = pipe;
                }
            }
            timestamp = params.start || anim.start || +new Date;
            e = {
                anim: anim,
                percent: percent,
                timestamp: timestamp,
                start: timestamp + (anim.del || 0),
                status: 0,
                initstatus: status || 0,
                stop: false,
                ms: ms,
                easing: easyeasy,
                from: from,
                diff: diff,
                to: to,
                el: element,
                callback: params.callback,
                prev: prev,
                next: next,
                repeat: times || anim.times,
                origin: element.attr(),
                totalOrigin: totalOrigin
            };
            animationElements.push(e);
            if (status && !isInAnim && !isInAnimSet) {
                e.stop = true;
                e.start = new Date - ms * status;
                if (animationElements.length == 1) {
                    return animation();
                }
            }
            if (isInAnimSet) {
                e.start = new Date - e.ms * status;
            }
            animationElements.length == 1 && requestAnimFrame(animation);
        } else {
            isInAnim.initstatus = status;
            isInAnim.start = new Date - isInAnim.ms * status;
        }
        eve("raphael.anim.start." + element.id, element, anim);
    }
    R.animation = function(params, ms, easing, callback) {
        if (params instanceof Animation) {
            return params;
        }
        if (R.is(easing, "function") || !easing) {
            callback = callback || easing || null;
            easing = null;
        }
        params = Object(params);
        ms = +ms || 0;
        var p = {},
            json, attr;
        for (attr in params) {
            if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
                json = true;
                p[attr] = params[attr];
            }
        }
        if (!json) {
            return new Animation(params, ms);
        } else {
            easing && (p.easing = easing);
            callback && (p.callback = callback);
            return new Animation({
                100: p
            }, ms);
        }
    };
    elproto.animate = function(params, ms, easing, callback) {
        var element = this;
        if (element.removed) {
            callback && callback.call(element);
            return element;
        }
        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
        runAnimation(anim, element, anim.percents[0], null, element.attr());
        return element;
    };
    elproto.setTime = function(anim, value) {
        if (anim && value != null) {
            this.status(anim, mmin(value, anim.ms) / anim.ms);
        }
        return this;
    };
    elproto.status = function(anim, value) {
        var out = [],
            i = 0,
            len, e;
        if (value != null) {
            runAnimation(anim, this, -1, mmin(value, 1));
            return this;
        } else {
            len = animationElements.length;
            for (; i < len; i++) {
                e = animationElements[i];
                if (e.el.id == this.id && (!anim || e.anim == anim)) {
                    if (anim) {
                        return e.status;
                    }
                    out.push({
                        anim: e.anim,
                        status: e.status
                    });
                }
            }
            if (anim) {
                return 0;
            }
            return out;
        }
    };
    elproto.pause = function(anim) {
        for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
                    animationElements[i].paused = true;
                }
            }
        }
        return this;
    };
    elproto.resume = function(anim) {
        for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                var e = animationElements[i];
                if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
                    delete e.paused;
                    this.status(e.anim, e.status);
                }
            }
        }
        return this;
    };
    elproto.stop = function(anim) {
        for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
                if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
                    animationElements.splice(i--, 1);
                }
            }
        }
        return this;
    };

    function stopAnimation(paper) {
        for (var i = 0; i < animationElements.length; i++) {
            if (animationElements[i].el.paper == paper) {
                animationElements.splice(i--, 1);
            }
        }
    }
    eve.on("raphael.remove", stopAnimation);
    eve.on("raphael.clear", stopAnimation);
    elproto.toString = function() {
        return "Rapha\xEBl\u2019s object";
    };
    var Set = function(items) {
            this.items = [];
            this.length = 0;
            this.type = "set";
            if (items) {
                for (var i = 0, ii = items.length; i < ii; i++) {
                    if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                        this[this.items.length] = this.items[this.items.length] = items[i];
                        this.length++;
                    }
                }
            }
        },
        setproto = Set.prototype;
    setproto.push = function() {
        var item, len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    setproto.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    setproto.forEach = function(callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    for (var method in elproto) {
        if (elproto[has](method)) {
            setproto[method] = (function(methodname) {
                return function() {
                    var arg = arguments;
                    return this.forEach(function(el) {
                        el[methodname][apply](el, arg);
                    });
                };
            })(method);
        }
    }
    setproto.attr = function(name, value) {
        if (name && R.is(name, array) && R.is(name[0], "object")) {
            for (var j = 0, jj = name.length; j < jj; j++) {
                this.items[j].attr(name[j]);
            }
        } else {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                this.items[i].attr(name, value);
            }
        }
        return this;
    };
    setproto.clear = function() {
        while (this.length) {
            this.pop();
        }
    };
    setproto.splice = function(index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    setproto.exclude = function(el) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
        }
    };
    setproto.animate = function(params, ms, easing, callback) {
        (R.is(easing, "function") || !easing) && (callback = easing || null);
        var len = this.items.length,
            i = len,
            item, set = this,
            collector;
        if (!len) {
            return this;
        }
        callback && (collector = function() {
            !--len && callback.call(set);
        });
        easing = R.is(easing, string) ? easing : collector;
        var anim = R.animation(params, ms, easing, collector);
        item = this.items[--i].animate(anim);
        while (i--) {
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
            this.items[i] && !this.items[i].removed || len--;
        }
        return this;
    };
    setproto.insertAfter = function(el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function() {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
        }
        x = mmin[apply](0, x);
        y = mmin[apply](0, y);
        x2 = mmax[apply](0, x2);
        y2 = mmax[apply](0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y
        };
    };
    setproto.clone = function(s) {
        s = this.paper.set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function() {
        return "Rapha\xEBl\u2018s set";
    };
    setproto.glow = function(glowConfig) {
        var ret = this.paper.set();
        this.forEach(function(shape, index) {
            var g = shape.glow(glowConfig);
            if (g != null) {
                g.forEach(function(shape2, index2) {
                    ret.push(shape2);
                });
            }
        });
        return ret;
    };
    setproto.isPointInside = function(x, y) {
        var isPointInside = false;
        this.forEach(function(el) {
            if (el.isPointInside(x, y)) {
                console.log("runned");
                isPointInside = true;
                return false;
            }
        });
        return isPointInside;
    };
    R.registerFont = function(font) {
        if (!font.face) {
            return font;
        }
        this.fonts = this.fonts || {};
        var fontcopy = {
                w: font.w,
                face: {},
                glyphs: {}
            },
            family = font.face['font-family'];
        for (var prop in font.face) {
            if (font.face[has](prop)) {
                fontcopy.face[prop] = font.face[prop];
            }
        }
        if (this.fonts[family]) {
            this.fonts[family].push(fontcopy);
        } else {
            this.fonts[family] = [fontcopy];
        }
        if (!font.svg) {
            fontcopy.face['units-per-em'] = toInt(font.face['units-per-em'], 10);
            for (var glyph in font.glyphs) {
                if (font.glyphs[has](glyph)) {
                    var path = font.glyphs[glyph];
                    fontcopy.glyphs[glyph] = {
                        w: path.w,
                        k: {},
                        d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function(command) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[command] || "M";
                        }) + "z"
                    };
                    if (path.k) {
                        for (var k in path.k) {
                            if (path[has](k)) {
                                fontcopy.glyphs[glyph].k[k] = path.k[k];
                            }
                        }
                    }
                }
            }
        }
        return font;
    };
    paperproto.getFont = function(family, weight, style, stretch) {
        stretch = stretch || "normal";
        style = style || "normal";
        weight = +weight || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[weight] || 400;
        if (!R.fonts) {
            return;
        }
        var font = R.fonts[family];
        if (!font) {
            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
            for (var fontName in R.fonts) {
                if (R.fonts[has](fontName)) {
                    if (name.test(fontName)) {
                        font = R.fonts[fontName];
                        break;
                    }
                }
            }
        }
        var thefont;
        if (font) {
            for (var i = 0, ii = font.length; i < ii; i++) {
                thefont = font[i];
                if (thefont.face['font-weight'] == weight && (thefont.face['font-style'] == style || !thefont.face['font-style']) && thefont.face['font-stretch'] == stretch) {
                    break;
                }
            }
        }
        return thefont;
    };
    paperproto.print = function(x, y, string, font, size, origin, letter_spacing, line_spacing) {
        origin = origin || "middle";
        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
        line_spacing = mmax(mmin(line_spacing || 1, 3), 1);
        var letters = Str(string)[split](E),
            shift = 0,
            notfirst = 0,
            path = E,
            scale;
        R.is(font, "string") && (font = this.getFont(font));
        if (font) {
            scale = (size || 16) / font.face['units-per-em'];
            var bb = font.face.bbox[split](separator),
                top = +bb[0],
                lineHeight = bb[3] - bb[1],
                shifty = 0,
                height = +bb[1] + (origin == "baseline" ? lineHeight + +font.face.descent : lineHeight / 2);
            for (var i = 0, ii = letters.length; i < ii; i++) {
                if (letters[i] == "\n") {
                    shift = 0;
                    curr = 0;
                    notfirst = 0;
                    shifty += lineHeight * line_spacing;
                } else {
                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                        curr = font.glyphs[letters[i]];
                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + font.w * letter_spacing : 0;
                    notfirst = 1;
                }
                if (curr && curr.d) {
                    path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
                }
            }
        }
        return this.path(path).attr({
            fill: "#000",
            stroke: "none"
        });
    };
    paperproto.add = function(json) {
        if (R.is(json, "array")) {
            var res = this.set(),
                i = 0,
                ii = json.length,
                j;
            for (; i < ii; i++) {
                j = json[i] || {};
                elements[has](j.type) && res.push(this[j.type]().attr(j));
            }
        }
        return res;
    };
    R.format = function(token, params) {
        var args = R.is(params, array) ? [0][concat](params) : arguments;
        token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function(str, i) {
            return args[++i] == null ? E : args[i];
        }));
        return token || E;
    };
    R.fullfill = (function() {
        var tokenRegex = /\{([^\}]+)\}/g,
            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            replacer = function(all, key, obj) {
                var res = obj;
                key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc) {
                    name = name || quotedName;
                    if (res) {
                        if (name in res) {
                            res = res[name];
                        }
                        typeof res == "function" && isFunc && (res = res());
                    }
                });
                res = (res == null || res == obj ? all : res) + "";
                return res;
            };
        return function(str, obj) {
            return String(str).replace(tokenRegex, function(all, key) {
                return replacer(all, key, obj);
            });
        };
    })();
    R.ninja = function() {
        oldRaphael.was ? (g.win.Raphael = oldRaphael.is) : delete window.Raphael;
        return R;
    };
    R.st = setproto;
    (function(doc, loaded, f) {
        if (doc.readyState == null && doc.addEventListener) {
            doc.addEventListener(loaded, f = function() {
                doc.removeEventListener(loaded, f, false);
                doc.readyState = "complete";
            }, false);
            doc.readyState = "loading";
        }

        function isLoaded() {
            /in/.test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
        }
        isLoaded();
    })(document, "DOMContentLoaded");
    eve.on("raphael.DOMload", function() {
        loaded = true;
    });
    (function() {
        if (!R.svg) {
            return;
        }
        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            toInt = parseInt,
            math = Math,
            mmax = math.max,
            abs = math.abs,
            pow = math.pow,
            separator = /[, ]+/,
            eve = R.eve,
            E = "",
            S = " ";
        var xlink = "http://www.w3.org/1999/xlink",
            markers = {
                block: "M5,0 0,2.5 5,5z",
                classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                open: "M6,1 1,3.5 6,6",
                oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
            },
            markerCounter = {};
        R.toString = function() {
            return "Your browser supports SVG.\nYou are running Rapha\xEBl " + this.version;
        };
        var $ = function(el, attr) {
                if (attr) {
                    if (typeof el == "string") {
                        el = $(el);
                    }
                    for (var key in attr) {
                        if (attr[has](key)) {
                            if (key.substring(0, 6) == "xlink:") {
                                el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
                            } else {
                                el.setAttribute(key, Str(attr[key]));
                            }
                        }
                    }
                } else {
                    el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
                    el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                }
                return el;
            },
            addGradientFill = function(element, gradient) {
                var type = "linear",
                    id = element.id + gradient,
                    fx = 0.5,
                    fy = 0.5,
                    o = element.node,
                    SVG = element.paper,
                    s = o.style,
                    el = R._g.doc.getElementById(id);
                if (!el) {
                    gradient = Str(gradient).replace(R._radial_gradient, function(all, _fx, _fy) {
                        type = "radial";
                        if (_fx && _fy) {
                            fx = toFloat(_fx);
                            fy = toFloat(_fy);
                            var dir = (fy > 0.5) * 2 - 1;
                            pow(fx - 0.5, 2) + pow(fy - 0.5, 2) > 0.25 && (fy = math.sqrt(0.25 - pow(fx - 0.5, 2)) * dir + 0.5) && fy != 0.5 && (fy = fy.toFixed(5) - 0.00001 * dir);
                        }
                        return E;
                    });
                    gradient = gradient.split(/\s*\-\s*/);
                    if (type == "linear") {
                        var angle = gradient.shift();
                        angle = -toFloat(angle);
                        if (isNaN(angle)) {
                            return null;
                        }
                        var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
                            max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                        vector[2] *= max;
                        vector[3] *= max;
                        if (vector[2] < 0) {
                            vector[0] = -vector[2];
                            vector[2] = 0;
                        }
                        if (vector[3] < 0) {
                            vector[1] = -vector[3];
                            vector[3] = 0;
                        }
                    }
                    var dots = R._parseDots(gradient);
                    if (!dots) {
                        return null;
                    }
                    id = id.replace(/[\(\)\s,\xb0#]/g, "_");
                    if (element.gradient && id != element.gradient.id) {
                        SVG.defs.removeChild(element.gradient);
                        delete element.gradient;
                    }
                    if (!element.gradient) {
                        el = $(type + "Gradient", {
                            id: id
                        });
                        element.gradient = el;
                        $(el, type == "radial" ? {
                            fx: fx,
                            fy: fy
                        } : {
                            x1: vector[0],
                            y1: vector[1],
                            x2: vector[2],
                            y2: vector[3],
                            gradientTransform: element.matrix.invert()
                        });
                        SVG.defs.appendChild(el);
                        for (var i = 0, ii = dots.length; i < ii; i++) {
                            el.appendChild($("stop", {
                                offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
                                'stop-color': dots[i].color || "#fff"
                            }));
                        }
                    }
                }
                $(o, {
                    fill: "url(#" + id + ")",
                    opacity: 1,
                    'fill-opacity': 1
                });
                s.fill = E;
                s.opacity = 1;
                s.fillOpacity = 1;
                return 1;
            },
            updatePosition = function(o) {
                var bbox = o.getBBox(1);
                $(o.pattern, {
                    patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"
                });
            },
            addArrow = function(o, value, isEnd) {
                if (o.type == "path") {
                    var values = Str(value).toLowerCase().split("-"),
                        p = o.paper,
                        se = isEnd ? "end" : "start",
                        node = o.node,
                        attrs = o.attrs,
                        stroke = attrs['stroke-width'],
                        i = values.length,
                        type = "classic",
                        from, to, dx, refX, attr, w = 3,
                        h = 3,
                        t = 5;
                    while (i--) {
                        switch (values[i]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                type = values[i];
                                break;
                            case "wide":
                                h = 5;
                                break;
                            case "narrow":
                                h = 2;
                                break;
                            case "long":
                                w = 5;
                                break;
                            case "short":
                                w = 2;
                                break;
                            default:
                                ;
                        }
                    }
                    if (type == "open") {
                        w += 2;
                        h += 2;
                        t += 2;
                        dx = 1;
                        refX = isEnd ? 4 : 1;
                        attr = {
                            fill: "none",
                            stroke: attrs.stroke
                        };
                    } else {
                        refX = dx = w / 2;
                        attr = {
                            fill: attrs.stroke,
                            stroke: "none"
                        };
                    }
                    if (o._.arrows) {
                        if (isEnd) {
                            o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                            o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
                        } else {
                            o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                            o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
                        }
                    } else {
                        o._.arrows = {};
                    }
                    if (type != "none") {
                        var pathId = "raphael-marker-" + type,
                            markerId = "raphael-marker-" + se + type + w + h;
                        if (!R._g.doc.getElementById(pathId)) {
                            p.defs.appendChild($($("path"), {
                                'stroke-linecap': "round",
                                d: markers[type],
                                id: pathId
                            }));
                            markerCounter[pathId] = 1;
                        } else {
                            markerCounter[pathId]++;
                        }
                        var marker = R._g.doc.getElementById(markerId),
                            use;
                        if (!marker) {
                            marker = $($("marker"), {
                                id: markerId,
                                markerHeight: h,
                                markerWidth: w,
                                orient: "auto",
                                refX: refX,
                                refY: h / 2
                            });
                            use = $($("use"), {
                                'xlink:href': "#" + pathId,
                                transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                                'stroke-width': (1 / ((w / t + h / t) / 2)).toFixed(4)
                            });
                            marker.appendChild(use);
                            p.defs.appendChild(marker);
                            markerCounter[markerId] = 1;
                        } else {
                            markerCounter[markerId]++;
                            use = marker.getElementsByTagName("use")[0];
                        }
                        $(use, attr);
                        var delta = dx * (type != "diamond" && type != "oval");
                        if (isEnd) {
                            from = o._.arrows.startdx * stroke || 0;
                            to = R.getTotalLength(attrs.path) - delta * stroke;
                        } else {
                            from = delta * stroke;
                            to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                        }
                        attr = {};
                        attr["marker-" + se] = "url(#" + markerId + ")";
                        if (to || from) {
                            attr.d = R.getSubpath(attrs.path, from, to);
                        }
                        $(node, attr);
                        o._.arrows[se + "Path"] = pathId;
                        o._.arrows[se + "Marker"] = markerId;
                        o._.arrows[se + "dx"] = delta;
                        o._.arrows[se + "Type"] = type;
                        o._.arrows[se + "String"] = value;
                    } else {
                        if (isEnd) {
                            from = o._.arrows.startdx * stroke || 0;
                            to = R.getTotalLength(attrs.path) - from;
                        } else {
                            from = 0;
                            to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                        }
                        o._.arrows[se + "Path"] && $(node, {
                            d: R.getSubpath(attrs.path, from, to)
                        });
                        delete o._.arrows[se + "Path"];
                        delete o._.arrows[se + "Marker"];
                        delete o._.arrows[se + "dx"];
                        delete o._.arrows[se + "Type"];
                        delete o._.arrows[se + "String"];
                    }
                    for (attr in markerCounter) {
                        if (markerCounter[has](attr) && !markerCounter[attr]) {
                            var item = R._g.doc.getElementById(attr);
                            item && item.parentNode.removeChild(item);
                        }
                    }
                }
            },
            dasharray = {
                '': [0],
                none: [0],
                '-': [3, 1],
                '.': [1, 1],
                '-.': [3, 1, 1, 1],
                '-..': [3, 1, 1, 1, 1, 1],
                '. ': [1, 3],
                '- ': [4, 3],
                '--': [8, 3],
                '- .': [4, 3, 1, 3],
                '--.': [8, 3, 1, 3],
                '--..': [8, 3, 1, 3, 1, 3]
            },
            addDashes = function(o, value, params) {
                value = dasharray[Str(value).toLowerCase()];
                if (value) {
                    var width = o.attrs['stroke-width'] || "1",
                        butt = {
                            round: width,
                            square: width,
                            butt: 0
                        }[o.attrs['stroke-linecap'] || params['stroke-linecap']] || 0,
                        dashes = [],
                        i = value.length;
                    while (i--) {
                        dashes[i] = value[i] * width + (i % 2 ? 1 : -1) * butt;
                    }
                    $(o.node, {
                        'stroke-dasharray': dashes.join(",")
                    });
                }
            },
            setFillAndStroke = function(o, params) {
                var node = o.node,
                    attrs = o.attrs,
                    vis = node.style.visibility;
                node.style.visibility = "hidden";
                for (var att in params) {
                    if (params[has](att)) {
                        if (!R._availableAttrs[has](att)) {
                            continue;
                        }
                        var value = params[att];
                        attrs[att] = value;
                        switch (att) {
                            case "blur":
                                o.blur(value);
                                break;
                            case "href":
                            case "title":
                                var hl = $("title");
                                var val = R._g.doc.createTextNode(value);
                                hl.appendChild(val);
                                node.appendChild(hl);
                                break;
                            case "target":
                                var pn = node.parentNode;
                                if (pn.tagName.toLowerCase() != "a") {
                                    var hl = $("a");
                                    pn.insertBefore(hl, node);
                                    hl.appendChild(node);
                                    pn = hl;
                                }
                                if (att == "target") {
                                    pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
                                } else {
                                    pn.setAttributeNS(xlink, att, value);
                                }
                                break;
                            case "cursor":
                                node.style.cursor = value;
                                break;
                            case "transform":
                                o.transform(value);
                                break;
                            case "arrow-start":
                                addArrow(o, value);
                                break;
                            case "arrow-end":
                                addArrow(o, value, 1);
                                break;
                            case "clip-rect":
                                var rect = Str(value).split(separator);
                                if (rect.length == 4) {
                                    o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                                    var el = $("clipPath"),
                                        rc = $("rect");
                                    el.id = R.createUUID();
                                    $(rc, {
                                        x: rect[0],
                                        y: rect[1],
                                        width: rect[2],
                                        height: rect[3]
                                    });
                                    el.appendChild(rc);
                                    o.paper.defs.appendChild(el);
                                    $(node, {
                                        'clip-path': "url(#" + el.id + ")"
                                    });
                                    o.clip = rc;
                                }
                                if (!value) {
                                    var path = node.getAttribute("clip-path");
                                    if (path) {
                                        var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
                                        clip && clip.parentNode.removeChild(clip);
                                        $(node, {
                                            'clip-path': E
                                        });
                                        delete o.clip;
                                    }
                                }
                                break;
                            case "path":
                                if (o.type == "path") {
                                    $(node, {
                                        d: value ? (attrs.path = R._pathToAbsolute(value)) : "M0,0"
                                    });
                                    o._.dirty = 1;
                                    if (o._.arrows) {
                                        "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                        "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                    }
                                }
                                break;
                            case "width":
                                node.setAttribute(att, value);
                                o._.dirty = 1;
                                if (attrs.fx) {
                                    att = "x";
                                    value = attrs.x;
                                } else {
                                    break;
                                }
                            case "x":
                                if (attrs.fx) {
                                    value = -attrs.x - (attrs.width || 0);
                                }
                            case "rx":
                                if (att == "rx" && o.type == "rect") {
                                    break;
                                }
                            case "cx":
                                node.setAttribute(att, value);
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case "height":
                                node.setAttribute(att, value);
                                o._.dirty = 1;
                                if (attrs.fy) {
                                    att = "y";
                                    value = attrs.y;
                                } else {
                                    break;
                                }
                            case "y":
                                if (attrs.fy) {
                                    value = -attrs.y - (attrs.height || 0);
                                }
                            case "ry":
                                if (att == "ry" && o.type == "rect") {
                                    break;
                                }
                            case "cy":
                                node.setAttribute(att, value);
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case "r":
                                if (o.type == "rect") {
                                    $(node, {
                                        rx: value,
                                        ry: value
                                    });
                                } else {
                                    node.setAttribute(att, value);
                                }
                                o._.dirty = 1;
                                break;
                            case "src":
                                if (o.type == "image") {
                                    node.setAttributeNS(xlink, "href", value);
                                }
                                break;
                            case "stroke-width":
                                if (o._.sx != 1 || o._.sy != 1) {
                                    value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                                }
                                if (o.paper._vbSize) {
                                    value *= o.paper._vbSize;
                                }
                                node.setAttribute(att, value);
                                if (attrs['stroke-dasharray']) {
                                    addDashes(o, attrs['stroke-dasharray'], params);
                                }
                                if (o._.arrows) {
                                    "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                    "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                }
                                break;
                            case "stroke-dasharray":
                                addDashes(o, value, params);
                                break;
                            case "fill":
                                var isURL = Str(value).match(R._ISURL);
                                if (isURL) {
                                    $(node, {
                                        fill: value
                                    });
                                    break;
                                }
                                var clr = R.getRGB(value);
                                if (!clr.error) {
                                    delete params.gradient;
                                    delete attrs.gradient;
                                    !R.is(attrs.opacity, "undefined") && R.is(params.opacity, "undefined") && $(node, {
                                        opacity: attrs.opacity
                                    });
                                    !R.is(attrs['fill-opacity'], "undefined") && R.is(params['fill-opacity'], "undefined") && $(node, {
                                        'fill-opacity': attrs['fill-opacity']
                                    });
                                } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
                                    if ("opacity" in attrs || "fill-opacity" in attrs) {
                                        var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                        if (gradient) {
                                            var stops = gradient.getElementsByTagName("stop");
                                            $(stops[stops.length - 1], {
                                                'stop-opacity': ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs['fill-opacity'] : 1)
                                            });
                                        }
                                    }
                                    attrs.gradient = value;
                                    attrs.fill = "none";
                                    break;
                                }
                                clr[has]("opacity") && $(node, {
                                    'fill-opacity': clr.opacity > 1 ? clr.opacity / 100 : clr.opacity
                                });
                            case "stroke":
                                clr = R.getRGB(value);
                                node.setAttribute(att, clr.hex);
                                att == "stroke" && clr[has]("opacity") && $(node, {
                                    'stroke-opacity': clr.opacity > 1 ? clr.opacity / 100 : clr.opacity
                                });
                                if (att == "stroke" && o._.arrows) {
                                    "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                                    "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                }
                                break;
                            case "gradient":
                                (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
                                break;
                            case "opacity":
                                if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                                    $(node, {
                                        'stroke-opacity': value > 1 ? value / 100 : value
                                    });
                                }
                            case "fill-opacity":
                                if (attrs.gradient) {
                                    gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                    if (gradient) {
                                        stops = gradient.getElementsByTagName("stop");
                                        $(stops[stops.length - 1], {
                                            'stop-opacity': value
                                        });
                                    }
                                    break;
                                }
                            default:
                                att == "font-size" && (value = toInt(value, 10) + "px");
                                var cssrule = att.replace(/(\-.)/g, function(w) {
                                    return w.substring(1).toUpperCase();
                                });
                                node.style[cssrule] = value;
                                o._.dirty = 1;
                                node.setAttribute(att, value);
                                break;
                        }
                    }
                }
                tuneText(o, params);
                node.style.visibility = vis;
            },
            leading = 1.2,
            tuneText = function(el, params) {
                if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
                    return;
                }
                var a = el.attrs,
                    node = el.node,
                    fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;
                if (params[has]("text")) {
                    a.text = params.text;
                    while (node.firstChild) {
                        node.removeChild(node.firstChild);
                    }
                    var texts = Str(params.text).split("\n"),
                        tspans = [],
                        tspan;
                    for (var i = 0, ii = texts.length; i < ii; i++) {
                        tspan = $("tspan");
                        i && $(tspan, {
                            dy: fontSize * leading,
                            x: a.x
                        });
                        tspan.appendChild(R._g.doc.createTextNode(texts[i]));
                        node.appendChild(tspan);
                        tspans[i] = tspan;
                    }
                } else {
                    tspans = node.getElementsByTagName("tspan");
                    for (i = 0, ii = tspans.length; i < ii; i++) {
                        if (i) {
                            $(tspans[i], {
                                dy: fontSize * leading,
                                x: a.x
                            });
                        } else {
                            $(tspans[0], {
                                dy: 0
                            });
                        }
                    }
                }
                $(node, {
                    x: a.x,
                    y: a.y
                });
                el._.dirty = 1;
                var bb = el._getBBox(),
                    dif = a.y - (bb.y + bb.height / 2);
                dif && R.is(dif, "finite") && $(tspans[0], {
                    dy: dif
                });
            },
            Element = function(node, svg) {
                var X = 0,
                    Y = 0;
                this[0] = this.node = node;
                node.raphael = true;
                this.id = R._oid++;
                node.raphaelid = this.id;
                this.matrix = R.matrix();
                this.realPath = null;
                this.paper = svg;
                this.attrs = this.attrs || {};
                this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1
                };
                !svg.bottom && (svg.bottom = this);
                this.prev = svg.top;
                svg.top && (svg.top.next = this);
                svg.top = this;
                this.next = null;
            },
            elproto = R.el;
        Element.prototype = elproto;
        elproto.constructor = Element;
        R._engine.path = function(pathString, SVG) {
            var el = $("path");
            SVG.canvas && SVG.canvas.appendChild(el);
            var p = new Element(el, SVG);
            p.type = "path";
            setFillAndStroke(p, {
                fill: "none",
                stroke: "#000",
                path: pathString
            });
            return p;
        };
        elproto.rotate = function(deg, cx, cy) {
            if (this.removed) {
                return this;
            }
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = this.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            this.transform(this._.transform.concat([
                ["r", deg, cx, cy]
            ]));
            return this;
        };
        elproto.scale = function(sx, sy, cx, cy) {
            if (this.removed) {
                return this;
            }
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = this.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            this.transform(this._.transform.concat([
                ["s", sx, sy, cx, cy]
            ]));
            return this;
        };
        elproto.translate = function(dx, dy) {
            if (this.removed) {
                return this;
            }
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            this.transform(this._.transform.concat([
                ["t", dx, dy]
            ]));
            return this;
        };
        elproto.transform = function(tstr) {
            var _ = this._;
            if (tstr == null) {
                return _.transform;
            }
            R._extractTransform(this, tstr);
            this.clip && $(this.clip, {
                transform: this.matrix.invert()
            });
            this.pattern && updatePosition(this);
            this.node && $(this.node, {
                transform: this.matrix
            });
            if (_.sx != 1 || _.sy != 1) {
                var sw = this.attrs[has]("stroke-width") ? this.attrs['stroke-width'] : 1;
                this.attr({
                    'stroke-width': sw
                });
            }
            return this;
        };
        elproto.hide = function() {
            !this.removed && this.paper.safari(this.node.style.display = "none");
            return this;
        };
        elproto.show = function() {
            !this.removed && this.paper.safari(this.node.style.display = "");
            return this;
        };
        elproto.remove = function() {
            if (this.removed || !this.node.parentNode) {
                return;
            }
            var paper = this.paper;
            paper.__set__ && paper.__set__.exclude(this);
            eve.unbind("raphael.*.*." + this.id);
            if (this.gradient) {
                paper.defs.removeChild(this.gradient);
            }
            R._tear(this, paper);
            if (this.node.parentNode.tagName.toLowerCase() == "a") {
                this.node.parentNode.parentNode.removeChild(this.node.parentNode);
            } else {
                this.node.parentNode.removeChild(this.node);
            }
            for (var i in this) {
                this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            }
            this.removed = true;
        };
        elproto._getBBox = function() {
            if (this.node.style.display == "none") {
                this.show();
                var hide = true;
            }
            var bbox = {};
            try {
                bbox = this.node.getBBox();
            } catch (e) {} finally {
                bbox = bbox || {};
            }
            hide && this.hide();
            return bbox;
        };
        elproto.attr = function(name, value) {
            if (this.removed) {
                return this;
            }
            if (name == null) {
                var res = {};
                for (var a in this.attrs) {
                    if (this.attrs[has](a)) {
                        res[a] = this.attrs[a];
                    }
                }
                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                return res;
            }
            if (value == null && R.is(name, "string")) {
                if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient;
                }
                if (name == "transform") {
                    return this._.transform;
                }
                var names = name.split(separator),
                    out = {};
                for (var i = 0, ii = names.length; i < ii; i++) {
                    name = names[i];
                    if (name in this.attrs) {
                        out[name] = this.attrs[name];
                    } else if (R.is(this.paper.customAttributes[name], "function")) {
                        out[name] = this.paper.customAttributes[name].def;
                    } else {
                        out[name] = R._availableAttrs[name];
                    }
                }
                return ii - 1 ? out : out[names[0]];
            }
            if (value == null && R.is(name, "array")) {
                out = {};
                for (i = 0, ii = name.length; i < ii; i++) {
                    out[name[i]] = this.attr(name[i]);
                }
                return out;
            }
            if (value != null) {
                var params = {};
                params[name] = value;
            } else if (name != null && R.is(name, "object")) {
                params = name;
            }
            for (var key in params) {
                eve("raphael.attr." + key + "." + this.id, this, params[key]);
            }
            for (key in this.paper.customAttributes) {
                if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                    var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
                    this.attrs[key] = params[key];
                    for (var subkey in par) {
                        if (par[has](subkey)) {
                            params[subkey] = par[subkey];
                        }
                    }
                }
            }
            setFillAndStroke(this, params);
            return this;
        };
        elproto.toFront = function() {
            if (this.removed) {
                return this;
            }
            if (this.node.parentNode.tagName.toLowerCase() == "a") {
                this.node.parentNode.parentNode.appendChild(this.node.parentNode);
            } else {
                this.node.parentNode.appendChild(this.node);
            }
            var svg = this.paper;
            svg.top != this && R._tofront(this, svg);
            return this;
        };
        elproto.toBack = function() {
            if (this.removed) {
                return this;
            }
            var parent = this.node.parentNode;
            if (parent.tagName.toLowerCase() == "a") {
                parent.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild);
            } else if (parent.firstChild != this.node) {
                parent.insertBefore(this.node, this.node.parentNode.firstChild);
            }
            R._toback(this, this.paper);
            var svg = this.paper;
            return this;
        };
        elproto.insertAfter = function(element) {
            if (this.removed) {
                return this;
            }
            var node = element.node || element[element.length - 1].node;
            if (node.nextSibling) {
                node.parentNode.insertBefore(this.node, node.nextSibling);
            } else {
                node.parentNode.appendChild(this.node);
            }
            R._insertafter(this, element, this.paper);
            return this;
        };
        elproto.insertBefore = function(element) {
            if (this.removed) {
                return this;
            }
            var node = element.node || element[0].node;
            node.parentNode.insertBefore(this.node, node);
            R._insertbefore(this, element, this.paper);
            return this;
        };
        elproto.blur = function(size) {
            var t = this;
            if (+size !== 0) {
                var fltr = $("filter"),
                    blur = $("feGaussianBlur");
                t.attrs.blur = size;
                fltr.id = R.createUUID();
                $(blur, {
                    stdDeviation: +size || 1.5
                });
                fltr.appendChild(blur);
                t.paper.defs.appendChild(fltr);
                t._blur = fltr;
                $(t.node, {
                    filter: "url(#" + fltr.id + ")"
                });
            } else {
                if (t._blur) {
                    t._blur.parentNode.removeChild(t._blur);
                    delete t._blur;
                    delete t.attrs.blur;
                }
                t.node.removeAttribute("filter");
            }
            return t;
        };
        R._engine.circle = function(svg, x, y, r) {
            var el = $("circle");
            svg.canvas && svg.canvas.appendChild(el);
            var res = new Element(el, svg);
            res.attrs = {
                cx: x,
                cy: y,
                r: r,
                fill: "none",
                stroke: "#000"
            };
            res.type = "circle";
            $(el, res.attrs);
            return res;
        };
        R._engine.rect = function(svg, x, y, w, h, r) {
            var el = $("rect");
            svg.canvas && svg.canvas.appendChild(el);
            var res = new Element(el, svg);
            res.attrs = {
                x: x,
                y: y,
                width: w,
                height: h,
                r: r || 0,
                rx: r || 0,
                ry: r || 0,
                fill: "none",
                stroke: "#000"
            };
            res.type = "rect";
            $(el, res.attrs);
            return res;
        };
        R._engine.ellipse = function(svg, x, y, rx, ry) {
            var el = $("ellipse");
            svg.canvas && svg.canvas.appendChild(el);
            var res = new Element(el, svg);
            res.attrs = {
                cx: x,
                cy: y,
                rx: rx,
                ry: ry,
                fill: "none",
                stroke: "#000"
            };
            res.type = "ellipse";
            $(el, res.attrs);
            return res;
        };
        R._engine.image = function(svg, src, x, y, w, h) {
            var el = $("image");
            $(el, {
                x: x,
                y: y,
                width: w,
                height: h,
                preserveAspectRatio: "none"
            });
            el.setAttributeNS(xlink, "href", src);
            svg.canvas && svg.canvas.appendChild(el);
            var res = new Element(el, svg);
            res.attrs = {
                x: x,
                y: y,
                width: w,
                height: h,
                src: src
            };
            res.type = "image";
            return res;
        };
        R._engine.text = function(svg, x, y, text) {
            var el = $("text");
            svg.canvas && svg.canvas.appendChild(el);
            var res = new Element(el, svg);
            res.attrs = {
                x: x,
                y: y,
                'text-anchor': "middle",
                text: text,
                font: R._availableAttrs.font,
                stroke: "none",
                fill: "#000"
            };
            res.type = "text";
            setFillAndStroke(res, res.attrs);
            return res;
        };
        R._engine.setSize = function(width, height) {
            this.width = width || this.width;
            this.height = height || this.height;
            this.canvas.setAttribute("width", this.width);
            this.canvas.setAttribute("height", this.height);
            if (this._viewBox) {
                this.setViewBox.apply(this, this._viewBox);
            }
            return this;
        };
        R._engine.create = function() {
            var con = R._getContainer.apply(0, arguments),
                container = con && con.container,
                x = con.x,
                y = con.y,
                width = con.width,
                height = con.height;
            if (!container) {
                throw new Error("SVG container not found.");
            }
            var cnvs = $("svg"),
                css = "overflow:hidden;",
                isFloating;
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            $(cnvs, {
                height: height,
                version: 1.1,
                width: width,
                xmlns: "http://www.w3.org/2000/svg"
            });
            if (container == 1) {
                cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";
                R._g.doc.body.appendChild(cnvs);
                isFloating = 1;
            } else {
                cnvs.style.cssText = css + "position:relative";
                if (container.firstChild) {
                    container.insertBefore(cnvs, container.firstChild);
                } else {
                    container.appendChild(cnvs);
                }
            }
            container = new R._Paper;
            container.width = width;
            container.height = height;
            container.canvas = cnvs;
            container.clear();
            container._left = container._top = 0;
            isFloating && (container.renderfix = function() {});
            container.renderfix();
            return container;
        };
        R._engine.setViewBox = function(x, y, w, h, fit) {
            eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
            var size = mmax(w / this.width, h / this.height),
                top = this.top,
                aspectRatio = fit ? "meet" : "xMinYMin",
                vb, sw;
            if (x == null) {
                if (this._vbSize) {
                    size = 1;
                }
                delete this._vbSize;
                vb = "0 0 " + this.width + S + this.height;
            } else {
                this._vbSize = size;
                vb = x + S + y + S + w + S + h;
            }
            $(this.canvas, {
                viewBox: vb,
                preserveAspectRatio: aspectRatio
            });
            while (size && top) {
                sw = "stroke-width" in top.attrs ? top.attrs['stroke-width'] : 1;
                top.attr({
                    'stroke-width': sw
                });
                top._.dirty = 1;
                top._.dirtyT = 1;
                top = top.prev;
            }
            this._viewBox = [x, y, w, h, !!fit];
            return this;
        };
        R.prototype.renderfix = function() {
            var cnvs = this.canvas,
                s = cnvs.style,
                pos;
            try {
                pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
            } catch (e) {
                pos = cnvs.createSVGMatrix();
            }
            var left = -pos.e % 1,
                top = -pos.f % 1;
            if (left || top) {
                if (left) {
                    this._left = (this._left + left) % 1;
                    s.left = this._left + "px";
                }
                if (top) {
                    this._top = (this._top + top) % 1;
                    s.top = this._top + "px";
                }
            }
        };
        R.prototype.clear = function() {
            R.eve("raphael.clear", this);
            var c = this.canvas;
            while (c.firstChild) {
                c.removeChild(c.firstChild);
            }
            this.bottom = this.top = null;
            (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xEBl " + R.version));
            c.appendChild(this.desc);
            c.appendChild(this.defs = $("defs"));
        };
        R.prototype.remove = function() {
            eve("raphael.remove", this);
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var i in this) {
                this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            }
        };
        var setproto = R.st;
        for (var method in elproto) {
            if (elproto[has](method) && !setproto[has](method)) {
                setproto[method] = (function(methodname) {
                    return function() {
                        var arg = arguments;
                        return this.forEach(function(el) {
                            el[methodname].apply(el, arg);
                        });
                    };
                })(method);
            }
        }
    })();
    (function() {
        if (!R.vml) {
            return;
        }
        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            math = Math,
            round = math.round,
            mmax = math.max,
            mmin = math.min,
            abs = math.abs,
            fillString = "fill",
            separator = /[, ]+/,
            eve = R.eve,
            ms = " progid:DXImageTransform.Microsoft",
            S = " ",
            E = "",
            map = {
                M: "m",
                L: "l",
                C: "c",
                Z: "x",
                m: "t",
                l: "r",
                c: "v",
                z: "x"
            },
            bites = /([clmz]),?([^clmz]*)/gi,
            blurregexp = / progid:\S+Blur\([^\)]+\)/g,
            val = /-?[^,\s-]+/g,
            cssDot = "position:absolute;left:0;top:0;width:1px;height:1px",
            zoom = 21600,
            pathTypes = {
                path: 1,
                rect: 1,
                image: 1
            },
            ovalTypes = {
                circle: 1,
                ellipse: 1
            },
            path2vml = function(path) {
                var total = /[ahqstv]/gi,
                    command = R._pathToAbsolute;
                Str(path).match(total) && (command = R._path2curve);
                total = /[clmz]/g;
                if (command == R._pathToAbsolute && !Str(path).match(total)) {
                    var res = Str(path).replace(bites, function(all, command, args) {
                        var vals = [],
                            isMove = command.toLowerCase() == "m",
                            res = map[command];
                        args.replace(val, function(value) {
                            if (isMove && vals.length == 2) {
                                res += vals + map[command == "m" ? "l" : "L"];
                                vals = [];
                            }
                            vals.push(round(value * zoom));
                        });
                        return res + vals;
                    });
                    return res;
                }
                var pa = command(path),
                    p, r;
                res = [];
                for (var i = 0, ii = pa.length; i < ii; i++) {
                    p = pa[i];
                    r = pa[i][0].toLowerCase();
                    r == "z" && (r = "x");
                    for (var j = 1, jj = p.length; j < jj; j++) {
                        r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                    }
                    res.push(r);
                }
                return res.join(S);
            },
            compensation = function(deg, dx, dy) {
                var m = R.matrix();
                m.rotate(-deg, 0.5, 0.5);
                return {
                    dx: m.x(dx, dy),
                    dy: m.y(dx, dy)
                };
            },
            setCoords = function(p, sx, sy, dx, dy, deg) {
                var _ = p._,
                    m = p.matrix,
                    fillpos = _.fillpos,
                    o = p.node,
                    s = o.style,
                    y = 1,
                    flip = "",
                    dxdy, kx = zoom / sx,
                    ky = zoom / sy;
                s.visibility = "hidden";
                if (!sx || !sy) {
                    return;
                }
                o.coordsize = abs(kx) + S + abs(ky);
                s.rotation = deg * (sx * sy < 0 ? -1 : 1);
                if (deg) {
                    var c = compensation(deg, dx, dy);
                    dx = c.dx;
                    dy = c.dy;
                }
                sx < 0 && (flip += "x");
                sy < 0 && (flip += " y") && (y = -1);
                s.flip = flip;
                o.coordorigin = dx * -kx + S + dy * -ky;
                if (fillpos || _.fillsize) {
                    var fill = o.getElementsByTagName(fillString);
                    fill = fill && fill[0];
                    o.removeChild(fill);
                    if (fillpos) {
                        c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                        fill.position = c.dx * y + S + c.dy * y;
                    }
                    if (_.fillsize) {
                        fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
                    }
                    o.appendChild(fill);
                }
                s.visibility = "visible";
            };
        R.toString = function() {
            return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xEBl " + this.version;
        };
        var addArrow = function(o, value, isEnd) {
                var values = Str(value).toLowerCase().split("-"),
                    se = isEnd ? "end" : "start",
                    i = values.length,
                    type = "classic",
                    w = "medium",
                    h = "medium";
                while (i--) {
                    switch (values[i]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            type = values[i];
                            break;
                        case "wide":
                        case "narrow":
                            h = values[i];
                            break;
                        case "long":
                        case "short":
                            w = values[i];
                            break;
                        default:
                            ;
                    }
                }
                var stroke = o.node.getElementsByTagName("stroke")[0];
                stroke[se + "arrow"] = type;
                stroke[se + "arrowlength"] = w;
                stroke[se + "arrowwidth"] = h;
            },
            setFillAndStroke = function(o, params) {
                o.attrs = o.attrs || {};
                var node = o.node,
                    a = o.attrs,
                    s = node.style,
                    xy, newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
                    isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
                    res = o;
                for (var par in params) {
                    if (params[has](par)) {
                        a[par] = params[par];
                    }
                }
                if (newpath) {
                    a.path = R._getPath[o.type](o);
                    o._.dirty = 1;
                }
                params.href && (node.href = params.href);
                params.title && (node.title = params.title);
                params.target && (node.target = params.target);
                params.cursor && (s.cursor = params.cursor);
                "blur" in params && o.blur(params.blur);
                if (params.path && o.type == "path" || newpath) {
                    node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
                    if (o.type == "image") {
                        o._.fillpos = [a.x, a.y];
                        o._.fillsize = [a.width, a.height];
                        setCoords(o, 1, 1, 0, 0, 0);
                    }
                }
                "transform" in params && o.transform(params.transform);
                if (isOval) {
                    var cx = +a.cx,
                        cy = +a.cy,
                        rx = +a.rx || +a.r || 0,
                        ry = +a.ry || +a.r || 0;
                    node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
                    o._.dirty = 1;
                }
                if ("clip-rect" in params) {
                    var rect = Str(params['clip-rect']).split(separator);
                    if (rect.length == 4) {
                        rect[2] = +rect[2] + +rect[0];
                        rect[3] = +rect[3] + +rect[1];
                        var div = node.clipRect || R._g.doc.createElement("div"),
                            dstyle = div.style;
                        dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                        if (!node.clipRect) {
                            dstyle.position = "absolute";
                            dstyle.top = 0;
                            dstyle.left = 0;
                            dstyle.width = o.paper.width + "px";
                            dstyle.height = o.paper.height + "px";
                            node.parentNode.insertBefore(div, node);
                            div.appendChild(node);
                            node.clipRect = div;
                        }
                    }
                    if (!params['clip-rect']) {
                        node.clipRect && (node.clipRect.style.clip = "auto");
                    }
                }
                if (o.textpath) {
                    var textpathStyle = o.textpath.style;
                    params.font && (textpathStyle.font = params.font);
                    params['font-family'] && (textpathStyle.fontFamily = "\"" + params['font-family'].split(",")[0].replace(/^['"]+|['"]+$/g, E) + "\"");
                    params['font-size'] && (textpathStyle.fontSize = params['font-size']);
                    params['font-weight'] && (textpathStyle.fontWeight = params['font-weight']);
                    params['font-style'] && (textpathStyle.fontStyle = params['font-style']);
                }
                if ("arrow-start" in params) {
                    addArrow(res, params['arrow-start']);
                }
                if ("arrow-end" in params) {
                    addArrow(res, params['arrow-end'], 1);
                }
                if (params.opacity != null || params['stroke-width'] != null || params.fill != null || params.src != null || params.stroke != null || params['stroke-width'] != null || params['stroke-opacity'] != null || params['fill-opacity'] != null || params['stroke-dasharray'] != null || params['stroke-miterlimit'] != null || params['stroke-linejoin'] != null || params['stroke-linecap'] != null) {
                    var fill = node.getElementsByTagName(fillString),
                        newfill = false;
                    fill = fill && fill[0];
                    !fill && (newfill = fill = createNode(fillString));
                    if (o.type == "image" && params.src) {
                        fill.src = params.src;
                    }
                    params.fill && (fill.on = true);
                    if (fill.on == null || params.fill == "none" || params.fill === null) {
                        fill.on = false;
                    }
                    if (fill.on && params.fill) {
                        var isURL = Str(params.fill).match(R._ISURL);
                        if (isURL) {
                            fill.parentNode == node && node.removeChild(fill);
                            fill.rotate = true;
                            fill.src = isURL[1];
                            fill.type = "tile";
                            var bbox = o.getBBox(1);
                            fill.position = bbox.x + S + bbox.y;
                            o._.fillpos = [bbox.x, bbox.y];
                            R._preload(isURL[1], function() {
                                o._.fillsize = [this.offsetWidth, this.offsetHeight];
                            });
                        } else {
                            fill.color = R.getRGB(params.fill).hex;
                            fill.src = E;
                            fill.type = "solid";
                            if (R.getRGB(params.fill).error && (res.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                                a.fill = "none";
                                a.gradient = params.fill;
                                fill.rotate = false;
                            }
                        }
                    }
                    if ("fill-opacity" in params || "opacity" in params) {
                        var opacity = ((+a['fill-opacity'] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
                        opacity = mmin(mmax(opacity, 0), 1);
                        fill.opacity = opacity;
                        if (fill.src) {
                            fill.color = "none";
                        }
                    }
                    node.appendChild(fill);
                    var stroke = node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0],
                        newstroke = false;
                    !stroke && (newstroke = stroke = createNode("stroke"));
                    if (params.stroke && params.stroke != "none" || params['stroke-width'] || params['stroke-opacity'] != null || params['stroke-dasharray'] || params['stroke-miterlimit'] || params['stroke-linejoin'] || params['stroke-linecap']) {
                        stroke.on = true;
                    }(params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params['stroke-width'] == 0) && (stroke.on = false);
                    var strokeColor = R.getRGB(params.stroke);
                    stroke.on && params.stroke && (stroke.color = strokeColor.hex);
                    opacity = ((+a['stroke-opacity'] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
                    var width = (toFloat(params['stroke-width']) || 1) * 0.75;
                    opacity = mmin(mmax(opacity, 0), 1);
                    params['stroke-width'] == null && (width = a['stroke-width']);
                    params['stroke-width'] && (stroke.weight = width);
                    width && width < 1 && (opacity *= width) && (stroke.weight = 1);
                    stroke.opacity = opacity;
                    params['stroke-linejoin'] && (stroke.joinstyle = params['stroke-linejoin'] || "miter");
                    stroke.miterlimit = params['stroke-miterlimit'] || 8;
                    params['stroke-linecap'] && (stroke.endcap = params['stroke-linecap'] == "butt" ? "flat" : params['stroke-linecap'] == "square" ? "square" : "round");
                    if (params['stroke-dasharray']) {
                        var dasharray = {
                            '-': "shortdash",
                            '.': "shortdot",
                            '-.': "shortdashdot",
                            '-..': "shortdashdotdot",
                            '. ': "dot",
                            '- ': "dash",
                            '--': "longdash",
                            '- .': "dashdot",
                            '--.': "longdashdot",
                            '--..': "longdashdotdot"
                        };
                        stroke.dashstyle = dasharray[has](params['stroke-dasharray']) ? dasharray[params['stroke-dasharray']] : E;
                    }
                    newstroke && node.appendChild(stroke);
                }
                if (res.type == "text") {
                    res.paper.canvas.style.display = E;
                    var span = res.paper.span,
                        m = 100,
                        fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
                    s = span.style;
                    a.font && (s.font = a.font);
                    a['font-family'] && (s.fontFamily = a['font-family']);
                    a['font-weight'] && (s.fontWeight = a['font-weight']);
                    a['font-style'] && (s.fontStyle = a['font-style']);
                    fontSize = toFloat(a['font-size'] || fontSize && fontSize[0]) || 10;
                    s.fontSize = fontSize * m + "px";
                    res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                    var brect = span.getBoundingClientRect();
                    res.W = a.w = (brect.right - brect.left) / m;
                    res.H = a.h = (brect.bottom - brect.top) / m;
                    res.X = a.x;
                    res.Y = a.y + res.H / 2;
                    ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
                    var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                    for (var d = 0, dd = dirtyattrs.length; d < dd; d++) {
                        if (dirtyattrs[d] in params) {
                            res._.dirty = 1;
                            break;
                        }
                    }
                    switch (a['text-anchor']) {
                        case "start":
                            res.textpath.style['v-text-align'] = "left";
                            res.bbx = res.W / 2;
                            break;
                        case "end":
                            res.textpath.style['v-text-align'] = "right";
                            res.bbx = -res.W / 2;
                            break;
                        default:
                            res.textpath.style['v-text-align'] = "center";
                            res.bbx = 0;
                            break;
                    }
                    res.textpath.style['v-text-kern'] = true;
                }
            },
            addGradientFill = function(o, gradient, fill) {
                o.attrs = o.attrs || {};
                var attrs = o.attrs,
                    pow = Math.pow,
                    opacity, oindex, type = "linear",
                    fxfy = ".5 .5";
                o.attrs.gradient = gradient;
                gradient = Str(gradient).replace(R._radial_gradient, function(all, fx, fy) {
                    type = "radial";
                    if (fx && fy) {
                        fx = toFloat(fx);
                        fy = toFloat(fy);
                        pow(fx - 0.5, 2) + pow(fy - 0.5, 2) > 0.25 && (fy = math.sqrt(0.25 - pow(fx - 0.5, 2)) * ((fy > 0.5) * 2 - 1) + 0.5);
                        fxfy = fx + S + fy;
                    }
                    return E;
                });
                gradient = gradient.split(/\s*\-\s*/);
                if (type == "linear") {
                    var angle = gradient.shift();
                    angle = -toFloat(angle);
                    if (isNaN(angle)) {
                        return null;
                    }
                }
                var dots = R._parseDots(gradient);
                if (!dots) {
                    return null;
                }
                o = o.shape || o.node;
                if (dots.length) {
                    o.removeChild(fill);
                    fill.on = true;
                    fill.method = "none";
                    fill.color = dots[0].color;
                    fill.color2 = dots[dots.length - 1].color;
                    var clrs = [];
                    for (var i = 0, ii = dots.length; i < ii; i++) {
                        dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
                    }
                    fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
                    if (type == "radial") {
                        fill.type = "gradientTitle";
                        fill.focus = "100%";
                        fill.focussize = "0 0";
                        fill.focusposition = fxfy;
                        fill.angle = 0;
                    } else {
                        fill.type = "gradient";
                        fill.angle = (270 - angle) % 360;
                    }
                    o.appendChild(fill);
                }
                return 1;
            },
            Element = function(node, vml) {
                this[0] = this.node = node;
                node.raphael = true;
                this.id = R._oid++;
                node.raphaelid = this.id;
                this.X = 0;
                this.Y = 0;
                this.attrs = {};
                this.paper = vml;
                this.matrix = R.matrix();
                this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1
                };
                !vml.bottom && (vml.bottom = this);
                this.prev = vml.top;
                vml.top && (vml.top.next = this);
                vml.top = this;
                this.next = null;
            };
        var elproto = R.el;
        Element.prototype = elproto;
        elproto.constructor = Element;
        elproto.transform = function(tstr) {
            if (tstr == null) {
                return this._.transform;
            }
            var vbs = this.paper._viewBoxShift,
                vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
                oldt;
            if (vbs) {
                oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
            }
            R._extractTransform(this, vbt + tstr);
            var matrix = this.matrix.clone(),
                skew = this.skew,
                o = this.node,
                split, isGrad = ~Str(this.attrs.fill).indexOf("-"),
                isPatt = !Str(this.attrs.fill).indexOf("url(");
            matrix.translate(1, 1);
            if (isPatt || isGrad || this.type == "image") {
                skew.matrix = "1 0 0 1";
                skew.offset = "0 0";
                split = matrix.split();
                if (isGrad && split.noRotation || !split.isSimple) {
                    o.style.filter = matrix.toFilter();
                    var bb = this.getBBox(),
                        bbt = this.getBBox(1),
                        dx = bb.x - bbt.x,
                        dy = bb.y - bbt.y;
                    o.coordorigin = dx * -zoom + S + dy * -zoom;
                    setCoords(this, 1, 1, dx, dy, 0);
                } else {
                    o.style.filter = E;
                    setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
                }
            } else {
                o.style.filter = E;
                skew.matrix = Str(matrix);
                skew.offset = matrix.offset();
            }
            oldt && (this._.transform = oldt);
            return this;
        };
        elproto.rotate = function(deg, cx, cy) {
            if (this.removed) {
                return this;
            }
            if (deg == null) {
                return;
            }
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = this.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            this._.dirtyT = 1;
            this.transform(this._.transform.concat([
                ["r", deg, cx, cy]
            ]));
            return this;
        };
        elproto.translate = function(dx, dy) {
            if (this.removed) {
                return this;
            }
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            if (this._.bbox) {
                this._.bbox.x += dx;
                this._.bbox.y += dy;
            }
            this.transform(this._.transform.concat([
                ["t", dx, dy]
            ]));
            return this;
        };
        elproto.scale = function(sx, sy, cx, cy) {
            if (this.removed) {
                return this;
            }
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
                isNaN(cx) && (cx = null);
                isNaN(cy) && (cy = null);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = this.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            this.transform(this._.transform.concat([
                ["s", sx, sy, cx, cy]
            ]));
            this._.dirtyT = 1;
            return this;
        };
        elproto.hide = function() {
            !this.removed && (this.node.style.display = "none");
            return this;
        };
        elproto.show = function() {
            !this.removed && (this.node.style.display = E);
            return this;
        };
        elproto._getBBox = function() {
            if (this.removed) {
                return {};
            }
            return {
                x: this.X + (this.bbx || 0) - this.W / 2,
                y: this.Y - this.H,
                width: this.W,
                height: this.H
            };
        };
        elproto.remove = function() {
            if (this.removed || !this.node.parentNode) {
                return;
            }
            this.paper.__set__ && this.paper.__set__.exclude(this);
            R.eve.unbind("raphael.*.*." + this.id);
            R._tear(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var i in this) {
                this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            }
            this.removed = true;
        };
        elproto.attr = function(name, value) {
            if (this.removed) {
                return this;
            }
            if (name == null) {
                var res = {};
                for (var a in this.attrs) {
                    if (this.attrs[has](a)) {
                        res[a] = this.attrs[a];
                    }
                }
                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                return res;
            }
            if (value == null && R.is(name, "string")) {
                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient;
                }
                var names = name.split(separator),
                    out = {};
                for (var i = 0, ii = names.length; i < ii; i++) {
                    name = names[i];
                    if (name in this.attrs) {
                        out[name] = this.attrs[name];
                    } else if (R.is(this.paper.customAttributes[name], "function")) {
                        out[name] = this.paper.customAttributes[name].def;
                    } else {
                        out[name] = R._availableAttrs[name];
                    }
                }
                return ii - 1 ? out : out[names[0]];
            }
            if (this.attrs && value == null && R.is(name, "array")) {
                out = {};
                for (i = 0, ii = name.length; i < ii; i++) {
                    out[name[i]] = this.attr(name[i]);
                }
                return out;
            }
            var params;
            if (value != null) {
                params = {};
                params[name] = value;
            }
            value == null && R.is(name, "object") && (params = name);
            for (var key in params) {
                eve("raphael.attr." + key + "." + this.id, this, params[key]);
            }
            if (params) {
                for (key in this.paper.customAttributes) {
                    if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                        var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
                        this.attrs[key] = params[key];
                        for (var subkey in par) {
                            if (par[has](subkey)) {
                                params[subkey] = par[subkey];
                            }
                        }
                    }
                }
                if (params.text && this.type == "text") {
                    this.textpath.string = params.text;
                }
                setFillAndStroke(this, params);
            }
            return this;
        };
        elproto.toFront = function() {
            !this.removed && this.node.parentNode.appendChild(this.node);
            this.paper && this.paper.top != this && R._tofront(this, this.paper);
            return this;
        };
        elproto.toBack = function() {
            if (this.removed) {
                return this;
            }
            if (this.node.parentNode.firstChild != this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                R._toback(this, this.paper);
            }
            return this;
        };
        elproto.insertAfter = function(element) {
            if (this.removed) {
                return this;
            }
            if (element.constructor == R.st.constructor) {
                element = element[element.length - 1];
            }
            if (element.node.nextSibling) {
                element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
            } else {
                element.node.parentNode.appendChild(this.node);
            }
            R._insertafter(this, element, this.paper);
            return this;
        };
        elproto.insertBefore = function(element) {
            if (this.removed) {
                return this;
            }
            if (element.constructor == R.st.constructor) {
                element = element[0];
            }
            element.node.parentNode.insertBefore(this.node, element.node);
            R._insertbefore(this, element, this.paper);
            return this;
        };
        elproto.blur = function(size) {
            var s = this.node.runtimeStyle,
                f = s.filter;
            f = f.replace(blurregexp, E);
            if (+size !== 0) {
                this.attrs.blur = size;
                s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
                s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
            } else {
                s.filter = f;
                s.margin = 0;
                delete this.attrs.blur;
            }
            return this;
        };
        R._engine.path = function(pathString, vml) {
            var el = createNode("shape");
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = vml.coordorigin;
            var p = new Element(el, vml),
                attr = {
                    fill: "none",
                    stroke: "#000"
                };
            pathString && (attr.path = pathString);
            p.type = "path";
            p.path = [];
            p.Path = E;
            setFillAndStroke(p, attr);
            vml.canvas.appendChild(el);
            var skew = createNode("skew");
            skew.on = true;
            el.appendChild(skew);
            p.skew = skew;
            p.transform(E);
            return p;
        };
        R._engine.rect = function(vml, x, y, w, h, r) {
            var path = R._rectPath(x, y, w, h, r),
                res = vml.path(path),
                a = res.attrs;
            res.X = a.x = x;
            res.Y = a.y = y;
            res.W = a.width = w;
            res.H = a.height = h;
            a.r = r;
            a.path = path;
            res.type = "rect";
            return res;
        };
        R._engine.ellipse = function(vml, x, y, rx, ry) {
            var res = vml.path(),
                a = res.attrs;
            res.X = x - rx;
            res.Y = y - ry;
            res.W = rx * 2;
            res.H = ry * 2;
            res.type = "ellipse";
            setFillAndStroke(res, {
                cx: x,
                cy: y,
                rx: rx,
                ry: ry
            });
            return res;
        };
        R._engine.circle = function(vml, x, y, r) {
            var res = vml.path(),
                a = res.attrs;
            res.X = x - r;
            res.Y = y - r;
            res.W = res.H = r * 2;
            res.type = "circle";
            setFillAndStroke(res, {
                cx: x,
                cy: y,
                r: r
            });
            return res;
        };
        R._engine.image = function(vml, src, x, y, w, h) {
            var path = R._rectPath(x, y, w, h),
                res = vml.path(path).attr({
                    stroke: "none"
                }),
                a = res.attrs,
                node = res.node,
                fill = node.getElementsByTagName(fillString)[0];
            a.src = src;
            res.X = a.x = x;
            res.Y = a.y = y;
            res.W = a.width = w;
            res.H = a.height = h;
            a.path = path;
            res.type = "image";
            fill.parentNode == node && node.removeChild(fill);
            fill.rotate = true;
            fill.src = src;
            fill.type = "tile";
            res._.fillpos = [x, y];
            res._.fillsize = [w, h];
            node.appendChild(fill);
            setCoords(res, 1, 1, 0, 0, 0);
            return res;
        };
        R._engine.text = function(vml, x, y, text) {
            var el = createNode("shape"),
                path = createNode("path"),
                o = createNode("textpath");
            x = x || 0;
            y = y || 0;
            text = text || "";
            path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
            path.textpathok = true;
            o.string = Str(text);
            o.on = true;
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = "0 0";
            var p = new Element(el, vml),
                attr = {
                    fill: "#000",
                    stroke: "none",
                    font: R._availableAttrs.font,
                    text: text
                };
            p.shape = el;
            p.path = path;
            p.textpath = o;
            p.type = "text";
            p.attrs.text = Str(text);
            p.attrs.x = x;
            p.attrs.y = y;
            p.attrs.w = 1;
            p.attrs.h = 1;
            setFillAndStroke(p, attr);
            el.appendChild(o);
            el.appendChild(path);
            vml.canvas.appendChild(el);
            var skew = createNode("skew");
            skew.on = true;
            el.appendChild(skew);
            p.skew = skew;
            p.transform(E);
            return p;
        };
        R._engine.setSize = function(width, height) {
            var cs = this.canvas.style;
            this.width = width;
            this.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            cs.width = width;
            cs.height = height;
            cs.clip = "rect(0 " + width + " " + height + " 0)";
            if (this._viewBox) {
                R._engine.setViewBox.apply(this, this._viewBox);
            }
            return this;
        };
        R._engine.setViewBox = function(x, y, w, h, fit) {
            R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
            var width = this.width,
                height = this.height,
                size = 1 / mmax(w / width, h / height),
                H, W;
            if (fit) {
                H = height / h;
                W = width / w;
                if (w * H < width) {
                    x -= (width - w * H) / 2 / H;
                }
                if (h * W < height) {
                    y -= (height - h * W) / 2 / W;
                }
            }
            this._viewBox = [x, y, w, h, !!fit];
            this._viewBoxShift = {
                dx: -x,
                dy: -y,
                scale: size
            };
            this.forEach(function(el) {
                el.transform("...");
            });
            return this;
        };
        var createNode;
        R._engine.initWin = function(win) {
            var doc = win.document;
            doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
                createNode = function(tagName) {
                    return doc.createElement("<rvml:" + tagName + " class=\"rvml\">");
                };
            } catch (e) {
                createNode = function(tagName) {
                    return doc.createElement("<" + tagName + " xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">");
                };
            }
        };
        R._engine.initWin(R._g.win);
        R._engine.create = function() {
            var con = R._getContainer.apply(0, arguments),
                container = con.container,
                height = con.height,
                s, width = con.width,
                x = con.x,
                y = con.y;
            if (!container) {
                throw new Error("VML container not found.");
            }
            var res = new R._Paper,
                c = res.canvas = R._g.doc.createElement("div"),
                cs = c.style;
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            res.width = width;
            res.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            res.coordsize = zoom * 1000 + S + zoom * 1000;
            res.coordorigin = "0 0";
            res.span = R._g.doc.createElement("span");
            res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
            c.appendChild(res.span);
            cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
            if (container == 1) {
                R._g.doc.body.appendChild(c);
                cs.left = x + "px";
                cs.top = y + "px";
                cs.position = "absolute";
            } else {
                if (container.firstChild) {
                    container.insertBefore(c, container.firstChild);
                } else {
                    container.appendChild(c);
                }
            }
            res.renderfix = function() {};
            return res;
        };
        R.prototype.clear = function() {
            R.eve("raphael.clear", this);
            this.canvas.innerHTML = E;
            this.span = R._g.doc.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas.appendChild(this.span);
            this.bottom = this.top = null;
        };
        R.prototype.remove = function() {
            R.eve("raphael.remove", this);
            this.canvas.parentNode.removeChild(this.canvas);
            for (var i in this) {
                this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            }
            return true;
        };
        var setproto = R.st;
        for (var method in elproto) {
            if (elproto[has](method) && !setproto[has](method)) {
                setproto[method] = (function(methodname) {
                    return function() {
                        var arg = arguments;
                        return this.forEach(function(el) {
                            el[methodname].apply(el, arg);
                        });
                    };
                })(method);
            }
        }
    })();
    oldRaphael.was ? (g.win.Raphael = R) : (window.Raphael = R);
    return R;
});
(function() {
    var root = this || Function("return this")();
    var Tweenable = (function() {
        var formula;
        var DEFAULT_SCHEDULE_FUNCTION;
        var DEFAULT_EASING = "linear";
        var DEFAULT_DURATION = 500;
        var UPDATE_TIME = 16.666666666666668;
        var _now = Date.now ? Date.now : function() {
            return +new Date;
        };
        var now = typeof SHIFTY_DEBUG_NOW !== "undefined" ? SHIFTY_DEBUG_NOW : _now;
        if (typeof window !== "undefined") {
            DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout;
        } else {
            DEFAULT_SCHEDULE_FUNCTION = setTimeout;
        }

        function noop() {}

        function each(obj, fn) {
            var key;
            for (key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    fn(key);
                }
            }
        }

        function shallowCopy(targetObj, srcObj) {
            each(srcObj, function(prop) {
                targetObj[prop] = srcObj[prop];
            });
            return targetObj;
        }

        function defaults(target, src) {
            each(src, function(prop) {
                if (typeof target[prop] === "undefined") {
                    target[prop] = src[prop];
                }
            });
        }

        function tweenProps(forPosition, currentState, originalState, targetState, duration, timestamp, easing) {
            var normalizedPosition = forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;
            var prop;
            var easingObjectProp;
            var easingFn;
            for (prop in currentState) {
                if (currentState.hasOwnProperty(prop)) {
                    easingObjectProp = easing[prop];
                    easingFn = typeof easingObjectProp === "function" ? easingObjectProp : formula[easingObjectProp];
                    currentState[prop] = tweenProp(originalState[prop], targetState[prop], easingFn, normalizedPosition);
                }
            }
            return currentState;
        }

        function tweenProp(start, end, easingFunc, position) {
            return start + (end - start) * easingFunc(position);
        }

        function applyFilter(tweenable, filterName) {
            var filters = Tweenable.prototype.filter;
            var args = tweenable._filterArgs;
            each(filters, function(name) {
                if (typeof filters[name][filterName] !== "undefined") {
                    filters[name][filterName].apply(tweenable, args);
                }
            });
        }
        var timeoutHandler_endTime;
        var timeoutHandler_currentTime;
        var timeoutHandler_isEnded;
        var timeoutHandler_offset;

        function timeoutHandler(tweenable, timestamp, delay, duration, currentState, originalState, targetState, easing, step, schedule, opt_currentTimeOverride) {
            timeoutHandler_endTime = timestamp + delay + duration;
            timeoutHandler_currentTime = Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);
            timeoutHandler_isEnded = timeoutHandler_currentTime >= timeoutHandler_endTime;
            timeoutHandler_offset = duration - (timeoutHandler_endTime - timeoutHandler_currentTime);
            if (tweenable.isPlaying()) {
                if (timeoutHandler_isEnded) {
                    step(targetState, tweenable._attachment, timeoutHandler_offset);
                    tweenable.stop(true);
                } else {
                    tweenable._scheduleId = schedule(tweenable._timeoutHandler, UPDATE_TIME);
                    applyFilter(tweenable, "beforeTween");
                    if (timeoutHandler_currentTime < timestamp + delay) {
                        tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
                    } else {
                        tweenProps(timeoutHandler_currentTime, currentState, originalState, targetState, duration, timestamp + delay, easing);
                    }
                    applyFilter(tweenable, "afterTween");
                    step(currentState, tweenable._attachment, timeoutHandler_offset);
                }
            }
        }

        function composeEasingObject(fromTweenParams, easing) {
            var composedEasing = {};
            var typeofEasing = typeof easing;
            if (typeofEasing === "string" || typeofEasing === "function") {
                each(fromTweenParams, function(prop) {
                    composedEasing[prop] = easing;
                });
            } else {
                each(fromTweenParams, function(prop) {
                    if (!composedEasing[prop]) {
                        composedEasing[prop] = easing[prop] || DEFAULT_EASING;
                    }
                });
            }
            return composedEasing;
        }

        function Tweenable(opt_initialState, opt_config) {
            this._currentState = opt_initialState || {};
            this._configured = false;
            this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;
            if (typeof opt_config !== "undefined") {
                this.setConfig(opt_config);
            }
        }
        Tweenable.prototype.tween = function(opt_config) {
            if (this._isTweening) {
                return this;
            }
            if (opt_config !== undefined || !this._configured) {
                this.setConfig(opt_config);
            }
            this._timestamp = now();
            this._start(this.get(), this._attachment);
            return this.resume();
        };
        Tweenable.prototype.setConfig = function(config) {
            config = config || {};
            this._configured = true;
            this._attachment = config.attachment;
            this._pausedAtTime = null;
            this._scheduleId = null;
            this._delay = config.delay || 0;
            this._start = config.start || noop;
            this._step = config.step || noop;
            this._finish = config.finish || noop;
            this._duration = config.duration || DEFAULT_DURATION;
            this._currentState = shallowCopy({}, config.from || this.get());
            this._originalState = this.get();
            this._targetState = shallowCopy({}, config.to || this.get());
            var self = this;
            this._timeoutHandler = function() {
                timeoutHandler(self, self._timestamp, self._delay, self._duration, self._currentState, self._originalState, self._targetState, self._easing, self._step, self._scheduleFunction);
            };
            var currentState = this._currentState;
            var targetState = this._targetState;
            defaults(targetState, currentState);
            this._easing = composeEasingObject(currentState, config.easing || DEFAULT_EASING);
            this._filterArgs = [currentState, this._originalState, targetState, this._easing];
            applyFilter(this, "tweenCreated");
            return this;
        };
        Tweenable.prototype.get = function() {
            return shallowCopy({}, this._currentState);
        };
        Tweenable.prototype.set = function(state) {
            this._currentState = state;
        };
        Tweenable.prototype.pause = function() {
            this._pausedAtTime = now();
            this._isPaused = true;
            return this;
        };
        Tweenable.prototype.resume = function() {
            if (this._isPaused) {
                this._timestamp += now() - this._pausedAtTime;
            }
            this._isPaused = false;
            this._isTweening = true;
            this._timeoutHandler();
            return this;
        };
        Tweenable.prototype.seek = function(millisecond) {
            millisecond = Math.max(millisecond, 0);
            var currentTime = now();
            if (this._timestamp + millisecond === 0) {
                return this;
            }
            this._timestamp = currentTime - millisecond;
            if (!this.isPlaying()) {
                this._isTweening = true;
                this._isPaused = false;
                timeoutHandler(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, currentTime);
                this.pause();
            }
            return this;
        };
        Tweenable.prototype.stop = function(gotoEnd) {
            this._isTweening = false;
            this._isPaused = false;
            this._timeoutHandler = noop;
            (root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.oCancelAnimationFrame || root.msCancelAnimationFrame || root.mozCancelRequestAnimationFrame || root.clearTimeout)(this._scheduleId);
            if (gotoEnd) {
                applyFilter(this, "beforeTween");
                tweenProps(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing);
                applyFilter(this, "afterTween");
                applyFilter(this, "afterTweenEnd");
                this._finish.call(this, this._currentState, this._attachment);
            }
            return this;
        };
        Tweenable.prototype.isPlaying = function() {
            return this._isTweening && !this._isPaused;
        };
        Tweenable.prototype.setScheduleFunction = function(scheduleFunction) {
            this._scheduleFunction = scheduleFunction;
        };
        Tweenable.prototype.dispose = function() {
            var prop;
            for (prop in this) {
                if (this.hasOwnProperty(prop)) {
                    delete this[prop];
                }
            }
        };
        Tweenable.prototype.filter = {};
        Tweenable.prototype.formula = {
            linear: function(pos) {
                return pos;
            }
        };
        formula = Tweenable.prototype.formula;
        shallowCopy(Tweenable, {
            now: now,
            each: each,
            tweenProps: tweenProps,
            tweenProp: tweenProp,
            applyFilter: applyFilter,
            shallowCopy: shallowCopy,
            defaults: defaults,
            composeEasingObject: composeEasingObject
        });
        if (typeof SHIFTY_DEBUG_NOW === "function") {
            root.timeoutHandler = timeoutHandler;
        }
        root.Tweenable = Tweenable;
        return Tweenable;
    })();
    (function() {
        Tweenable.shallowCopy(Tweenable.prototype.formula, {
            easeInQuad: function(pos) {
                return Math.pow(pos, 2);
            },
            easeOutQuad: function(pos) {
                return -(Math.pow(pos - 1, 2) - 1);
            },
            easeInOutQuad: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 2);
                }
                return -0.5 * ((pos -= 2) * pos - 2);
            },
            easeInCubic: function(pos) {
                return Math.pow(pos, 3);
            },
            easeOutCubic: function(pos) {
                return Math.pow(pos - 1, 3) + 1;
            },
            easeInOutCubic: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 3);
                }
                return 0.5 * (Math.pow(pos - 2, 3) + 2);
            },
            easeInQuart: function(pos) {
                return Math.pow(pos, 4);
            },
            easeOutQuart: function(pos) {
                return -(Math.pow(pos - 1, 4) - 1);
            },
            easeInOutQuart: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 4);
                }
                return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },
            easeInQuint: function(pos) {
                return Math.pow(pos, 5);
            },
            easeOutQuint: function(pos) {
                return Math.pow(pos - 1, 5) + 1;
            },
            easeInOutQuint: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow(pos - 2, 5) + 2);
            },
            easeInSine: function(pos) {
                return -Math.cos(pos * (Math.PI / 2)) + 1;
            },
            easeOutSine: function(pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function(pos) {
                return -0.5 * (Math.cos(Math.PI * pos) - 1);
            },
            easeInExpo: function(pos) {
                return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
            },
            easeOutExpo: function(pos) {
                return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
            },
            easeInOutExpo: function(pos) {
                if (pos === 0) {
                    return 0;
                }
                if (pos === 1) {
                    return 1;
                }
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(2, 10 * (pos - 1));
                }
                return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
            },
            easeInCirc: function(pos) {
                return -(Math.sqrt(1 - pos * pos) - 1);
            },
            easeOutCirc: function(pos) {
                return Math.sqrt(1 - Math.pow(pos - 1, 2));
            },
            easeInOutCirc: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
                }
                return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
            },
            easeOutBounce: function(pos) {
                if (pos < 0.36363636363636365) {
                    return 7.5625 * pos * pos;
                } else if (pos < 0.7272727272727273) {
                    return 7.5625 * (pos -= 0.5454545454545454) * pos + 0.75;
                } else if (pos < 0.9090909090909091) {
                    return 7.5625 * (pos -= 0.8181818181818182) * pos + 0.9375;
                } else {
                    return 7.5625 * (pos -= 0.9545454545454546) * pos + 0.984375;
                }
            },
            easeInBack: function(pos) {
                var s = 1.70158;
                return pos * pos * ((s + 1) * pos - s);
            },
            easeOutBack: function(pos) {
                var s = 1.70158;
                return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
            },
            easeInOutBack: function(pos) {
                var s = 1.70158;
                if ((pos /= 0.5) < 1) {
                    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
                }
                return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },
            elastic: function(pos) {
                return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
            },
            swingFromTo: function(pos) {
                var s = 1.70158;
                return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },
            swingFrom: function(pos) {
                var s = 1.70158;
                return pos * pos * ((s + 1) * pos - s);
            },
            swingTo: function(pos) {
                var s = 1.70158;
                return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
            },
            bounce: function(pos) {
                if (pos < 0.36363636363636365) {
                    return 7.5625 * pos * pos;
                } else if (pos < 0.7272727272727273) {
                    return 7.5625 * (pos -= 0.5454545454545454) * pos + 0.75;
                } else if (pos < 0.9090909090909091) {
                    return 7.5625 * (pos -= 0.8181818181818182) * pos + 0.9375;
                } else {
                    return 7.5625 * (pos -= 0.9545454545454546) * pos + 0.984375;
                }
            },
            bouncePast: function(pos) {
                if (pos < 0.36363636363636365) {
                    return 7.5625 * pos * pos;
                } else if (pos < 0.7272727272727273) {
                    return 2 - (7.5625 * (pos -= 0.5454545454545454) * pos + 0.75);
                } else if (pos < 0.9090909090909091) {
                    return 2 - (7.5625 * (pos -= 0.8181818181818182) * pos + 0.9375);
                } else {
                    return 2 - (7.5625 * (pos -= 0.9545454545454546) * pos + 0.984375);
                }
            },
            easeFromTo: function(pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 4);
                }
                return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },
            easeFrom: function(pos) {
                return Math.pow(pos, 4);
            },
            easeTo: function(pos) {
                return Math.pow(pos, 0.25);
            }
        });
    })();
    (function() {
        function cubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
            var ax = 0,
                bx = 0,
                cx = 0,
                ay = 0,
                by = 0,
                cy = 0;

            function sampleCurveX(t) {
                return ((ax * t + bx) * t + cx) * t;
            }

            function sampleCurveY(t) {
                return ((ay * t + by) * t + cy) * t;
            }

            function sampleCurveDerivativeX(t) {
                return (3 * ax * t + 2 * bx) * t + cx;
            }

            function solveEpsilon(duration) {
                return 1 / (200 * duration);
            }

            function solve(x, epsilon) {
                return sampleCurveY(solveCurveX(x, epsilon));
            }

            function fabs(n) {
                if (n >= 0) {
                    return n;
                } else {
                    return 0 - n;
                }
            }

            function solveCurveX(x, epsilon) {
                var t0, t1, t2, x2, d2, i;
                for (t2 = x, i = 0; i < 8; i++) {
                    x2 = sampleCurveX(t2) - x;
                    if (fabs(x2) < epsilon) {
                        return t2;
                    }
                    d2 = sampleCurveDerivativeX(t2);
                    if (fabs(d2) < 0.000001) {
                        break;
                    }
                    t2 = t2 - x2 / d2;
                }
                t0 = 0;
                t1 = 1;
                t2 = x;
                if (t2 < t0) {
                    return t0;
                }
                if (t2 > t1) {
                    return t1;
                }
                while (t0 < t1) {
                    x2 = sampleCurveX(t2);
                    if (fabs(x2 - x) < epsilon) {
                        return t2;
                    }
                    if (x > x2) {
                        t0 = t2;
                    } else {
                        t1 = t2;
                    }
                    t2 = (t1 - t0) * 0.5 + t0;
                }
                return t2;
            }
            cx = 3 * p1x;
            bx = 3 * (p2x - p1x) - cx;
            ax = 1 - cx - bx;
            cy = 3 * p1y;
            by = 3 * (p2y - p1y) - cy;
            ay = 1 - cy - by;
            return solve(t, solveEpsilon(duration));
        }

        function getCubicBezierTransition(x1, y1, x2, y2) {
            return function(pos) {
                return cubicBezierAtTime(pos, x1, y1, x2, y2, 1);
            };
        }
        Tweenable.setBezierFunction = function(name, x1, y1, x2, y2) {
            var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
            cubicBezierTransition.displayName = name;
            cubicBezierTransition.x1 = x1;
            cubicBezierTransition.y1 = y1;
            cubicBezierTransition.x2 = x2;
            cubicBezierTransition.y2 = y2;
            return Tweenable.prototype.formula[name] = cubicBezierTransition;
        };
        Tweenable.unsetBezierFunction = function(name) {
            delete Tweenable.prototype.formula[name];
        };
    })();
    (function() {
        function getInterpolatedValues(from, current, targetState, position, easing, delay) {
            return Tweenable.tweenProps(position, current, from, targetState, 1, delay, easing);
        }
        var mockTweenable = new Tweenable;
        mockTweenable._filterArgs = [];
        Tweenable.interpolate = function(from, targetState, position, easing, opt_delay) {
            var current = Tweenable.shallowCopy({}, from);
            var delay = opt_delay || 0;
            var easingObject = Tweenable.composeEasingObject(from, easing || "linear");
            mockTweenable.set({});
            var filterArgs = mockTweenable._filterArgs;
            filterArgs.length = 0;
            filterArgs[0] = current;
            filterArgs[1] = from;
            filterArgs[2] = targetState;
            filterArgs[3] = easingObject;
            Tweenable.applyFilter(mockTweenable, "tweenCreated");
            Tweenable.applyFilter(mockTweenable, "beforeTween");
            var interpolatedValues = getInterpolatedValues(from, current, targetState, position, easingObject, delay);
            Tweenable.applyFilter(mockTweenable, "afterTween");
            return interpolatedValues;
        };
    })();
    (function(Tweenable) {
        var formatManifest;
        var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
        var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
        var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
        var R_RGB = new RegExp("rgb\\(" + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + "\\)", "g");
        var R_RGB_PREFIX = /^.*\(/;
        var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
        var VALUE_PLACEHOLDER = "VAL";

        function getFormatChunksFrom(rawValues, prefix) {
            var accumulator = [];
            var rawValuesLength = rawValues.length;
            var i;
            for (i = 0; i < rawValuesLength; i++) {
                accumulator.push("_" + prefix + "_" + i);
            }
            return accumulator;
        }

        function getFormatStringFrom(formattedString) {
            var chunks = formattedString.match(R_FORMAT_CHUNKS);
            if (!chunks) {
                chunks = ["", ""];
            } else if (chunks.length === 1 || formattedString.charAt(0).match(R_NUMBER_COMPONENT)) {
                chunks.unshift("");
            }
            return chunks.join(VALUE_PLACEHOLDER);
        }

        function sanitizeObjectForHexProps(stateObject) {
            Tweenable.each(stateObject, function(prop) {
                var currentProp = stateObject[prop];
                if (typeof currentProp === "string" && currentProp.match(R_HEX)) {
                    stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
                }
            });
        }

        function sanitizeHexChunksToRGB(str) {
            return filterStringChunks(R_HEX, str, convertHexToRGB);
        }

        function convertHexToRGB(hexString) {
            var rgbArr = hexToRGBArray(hexString);
            return "rgb(" + rgbArr[0] + "," + rgbArr[1] + "," + rgbArr[2] + ")";
        }
        var hexToRGBArray_returnArray = [];

        function hexToRGBArray(hex) {
            hex = hex.replace(/#/, "");
            if (hex.length === 3) {
                hex = hex.split("");
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
            hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
            hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));
            return hexToRGBArray_returnArray;
        }

        function hexToDec(hex) {
            return parseInt(hex, 16);
        }

        function filterStringChunks(pattern, unfilteredString, filter) {
            var pattenMatches = unfilteredString.match(pattern);
            var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);
            if (pattenMatches) {
                var pattenMatchesLength = pattenMatches.length;
                var currentChunk;
                for (var i = 0; i < pattenMatchesLength; i++) {
                    currentChunk = pattenMatches.shift();
                    filteredString = filteredString.replace(VALUE_PLACEHOLDER, filter(currentChunk));
                }
            }
            return filteredString;
        }

        function sanitizeRGBChunks(formattedString) {
            return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
        }

        function sanitizeRGBChunk(rgbChunk) {
            var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
            var numbersLength = numbers.length;
            var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];
            for (var i = 0; i < numbersLength; i++) {
                sanitizedString += parseInt(numbers[i], 10) + ",";
            }
            sanitizedString = sanitizedString.slice(0, -1) + ")";
            return sanitizedString;
        }

        function getFormatManifests(stateObject) {
            var manifestAccumulator = {};
            Tweenable.each(stateObject, function(prop) {
                var currentProp = stateObject[prop];
                if (typeof currentProp === "string") {
                    var rawValues = getValuesFrom(currentProp);
                    manifestAccumulator[prop] = {
                        formatString: getFormatStringFrom(currentProp),
                        chunkNames: getFormatChunksFrom(rawValues, prop)
                    };
                }
            });
            return manifestAccumulator;
        }

        function expandFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function(prop) {
                var currentProp = stateObject[prop];
                var rawValues = getValuesFrom(currentProp);
                var rawValuesLength = rawValues.length;
                for (var i = 0; i < rawValuesLength; i++) {
                    stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
                }
                delete stateObject[prop];
            });
        }

        function collapseFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function(prop) {
                var currentProp = stateObject[prop];
                var formatChunks = extractPropertyChunks(stateObject, formatManifests[prop].chunkNames);
                var valuesList = getValuesList(formatChunks, formatManifests[prop].chunkNames);
                currentProp = getFormattedValues(formatManifests[prop].formatString, valuesList);
                stateObject[prop] = sanitizeRGBChunks(currentProp);
            });
        }

        function extractPropertyChunks(stateObject, chunkNames) {
            var extractedValues = {};
            var currentChunkName, chunkNamesLength = chunkNames.length;
            for (var i = 0; i < chunkNamesLength; i++) {
                currentChunkName = chunkNames[i];
                extractedValues[currentChunkName] = stateObject[currentChunkName];
                delete stateObject[currentChunkName];
            }
            return extractedValues;
        }
        var getValuesList_accumulator = [];

        function getValuesList(stateObject, chunkNames) {
            getValuesList_accumulator.length = 0;
            var chunkNamesLength = chunkNames.length;
            for (var i = 0; i < chunkNamesLength; i++) {
                getValuesList_accumulator.push(stateObject[chunkNames[i]]);
            }
            return getValuesList_accumulator;
        }

        function getFormattedValues(formatString, rawValues) {
            var formattedValueString = formatString;
            var rawValuesLength = rawValues.length;
            for (var i = 0; i < rawValuesLength; i++) {
                formattedValueString = formattedValueString.replace(VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
            }
            return formattedValueString;
        }

        function getValuesFrom(formattedString) {
            return formattedString.match(R_UNFORMATTED_VALUES);
        }

        function expandEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function(prop) {
                var currentProp = tokenData[prop];
                var chunkNames = currentProp.chunkNames;
                var chunkLength = chunkNames.length;
                var easing = easingObject[prop];
                var i;
                if (typeof easing === "string") {
                    var easingChunks = easing.split(" ");
                    var lastEasingChunk = easingChunks[easingChunks.length - 1];
                    for (i = 0; i < chunkLength; i++) {
                        easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
                    }
                } else {
                    for (i = 0; i < chunkLength; i++) {
                        easingObject[chunkNames[i]] = easing;
                    }
                }
                delete easingObject[prop];
            });
        }

        function collapseEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function(prop) {
                var currentProp = tokenData[prop];
                var chunkNames = currentProp.chunkNames;
                var chunkLength = chunkNames.length;
                var firstEasing = easingObject[chunkNames[0]];
                var typeofEasings = typeof firstEasing;
                if (typeofEasings === "string") {
                    var composedEasingString = "";
                    for (var i = 0; i < chunkLength; i++) {
                        composedEasingString += " " + easingObject[chunkNames[i]];
                        delete easingObject[chunkNames[i]];
                    }
                    easingObject[prop] = composedEasingString.substr(1);
                } else {
                    easingObject[prop] = firstEasing;
                }
            });
        }
        Tweenable.prototype.filter.token = {
            tweenCreated: function(currentState, fromState, toState, easingObject) {
                sanitizeObjectForHexProps(currentState);
                sanitizeObjectForHexProps(fromState);
                sanitizeObjectForHexProps(toState);
                this._tokenData = getFormatManifests(currentState);
            },
            beforeTween: function(currentState, fromState, toState, easingObject) {
                expandEasingObject(easingObject, this._tokenData);
                expandFormattedProperties(currentState, this._tokenData);
                expandFormattedProperties(fromState, this._tokenData);
                expandFormattedProperties(toState, this._tokenData);
            },
            afterTween: function(currentState, fromState, toState, easingObject) {
                collapseFormattedProperties(currentState, this._tokenData);
                collapseFormattedProperties(fromState, this._tokenData);
                collapseFormattedProperties(toState, this._tokenData);
                collapseEasingObject(easingObject, this._tokenData);
            }
        };
    })(Tweenable);
}).call(null);

(function(plugin_name) {
    (function() {
        (function(funcName, baseObj) {
            funcName = funcName || "docReady";
            baseObj = baseObj || window;
            var readyList = [];
            var readyFired = false;
            var readyEventHandlersInstalled = false;

            function ready() {
                if (!readyFired) {
                    readyFired = true;
                    for (var i = 0; i < readyList.length; i++) {
                        readyList[i].fn.call(window, readyList[i].ctx);
                    }
                    readyList = [];
                }
            }

            function readyStateChange() {
                if (document.readyState === "complete") {
                    ready();
                }
            }
            baseObj[funcName] = function(callback, context) {
                if (readyFired) {
                    setTimeout(function() {
                        callback(context);
                    }, 1);
                    return;
                } else {
                    readyList.push({
                        fn: callback,
                        ctx: context
                    });
                }
                if (document.readyState === "complete" || !document.attachEvent && document.readyState === "interactive") {
                    setTimeout(ready, 1);
                } else if (!readyEventHandlersInstalled) {
                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", ready, false);
                        window.addEventListener("load", ready, false);
                    } else {
                        document.attachEvent("onreadystatechange", readyStateChange);
                        window.attachEvent("onload", ready);
                    }
                    readyEventHandlersInstalled = true;
                }
            };
        })("docReady", window);
        (function(console, Object, Array) {
            if (typeof console === "undefined" || typeof console.log === "undefined") {
                console = {};
                console.log = function() {};
            }
            if (typeof Object.create !== "function") {
                Object.create = function(o) {
                    function F() {}
                    F.prototype = o;
                    return new F;
                };
            }
            if (!Array.prototype.forEach) {
                Array.prototype.forEach = function(fn, scope) {
                    for (var i = 0, len = this.length; i < len; ++i) {
                        fn.call(scope, this[i], i, this);
                    }
                };
            }
        })(window.console, window.Object, window.Array);
    })();
    var helper = (function() {
        function delete_element(e) {
            e.parentNode.removeChild(e);
        }

        function clear_sets(arr) {
            for (var i = 0; i < arr.length; i++) {
                var set = arr[i];
                set.forEach(function(e) {
                    e.remove();
                });
                set.splice(0, set.length);
            }
        }

        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, "g"), replace);
        }

        function to_float(str) {
            var num = parseFloat(str);
            if (isNaN(num)) {
                return false;
            } else {
                return num;
            }
        }

        function addEvent(obj, type, fn) {
            if (obj.attachEvent) {
                obj["e" + type + fn] = fn;
                obj[type + fn] = function() {
                    obj["e" + type + fn](window.event);
                };
                obj.attachEvent("on" + type, obj[type + fn]);
            } else {
                obj.addEventListener(type, fn, false);
            }
        }

        function linePath(startX, startY, endX, endY) {
            var start = {
                x: startX,
                y: startY
            };
            var end = {
                x: endX,
                y: endY
            };
            return "M" + start.x + " " + start.y + " L" + end.x + " " + end.y;
        }

        function clone(srcInstance) {
            if (typeof srcInstance != "object" || srcInstance === null) {
                return srcInstance;
            }
            var newInstance = srcInstance.constructor();
            for (var i in srcInstance) {
                newInstance[i] = clone(srcInstance[i]);
            }
            return newInstance;
        }
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera\sMini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };

        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
        }

        function findPos(obj) {
            function getStyle(obj, styleProp) {
                if (obj.currentStyle) {
                    var y = obj.currentStyle[styleProp];
                } else if (window.getComputedStyle) {
                    var y = window.getComputedStyle(obj, null)[styleProp];
                }
                return y;
            }

            function scrollDist() {
                var html = document.getElementsByTagName("html")[0];
                if (html.scrollTop && document.documentElement.scrollTop) {
                    return [html.scrollLeft, html.scrollTop];
                } else if (html.scrollTop || document.documentElement.scrollTop) {
                    return [html.scrollLeft + document.documentElement.scrollLeft, html.scrollTop + document.documentElement.scrollTop];
                } else if (document.body.scrollTop) {
                    return [document.body.scrollLeft, document.body.scrollTop];
                }
                return [0, 0];
            }
            var body_position = getStyle(document.body, "position");
            if (body_position == "relative") {
                document.body.style.position = "static";
            }
            var current = getStyle(document.body, "position");
            var curtop;
            var curleft = curtop = 0,
                scr = obj,
                fixed = false;
            while ((scr = scr.parentNode) && scr != document.body) {
                curleft -= scr.scrollLeft || 0;
                curtop -= scr.scrollTop || 0;
                if (getStyle(scr, "position") == "fixed") {
                    fixed = true;
                }
            }
            if (fixed && !window.opera) {
                var scrDist = scrollDist();
                curleft += scrDist[0];
                curtop += scrDist[1];
            }
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            document.body.style.position = body_position;
            return [curleft, curtop];
        }

        function distance(xy0, xy1) {
            var x0 = xy0.x;
            var y0 = xy0.y;
            var x1 = xy1.x;
            var y1 = xy1.y;
            var dx = x1 - x0;
            var dy = y1 - y0;
            return Math.sqrt(dy * dy + dx * dx);
        }

        function rotate(point, transform) {
            var x = point[0];
            var y = point[1];
            var str = Raphael.transformPath("M" + x + "," + y, transform).toString();
            var re = /M(-?\d+.?\d*),(-?\d+.?\d*)/;
            var m = re.exec(str);
            return [m[1], m[2]];
        }

        function bbox_union(arr) {
            var xa = [];
            var x2a = [];
            var y2a = [];
            var ya = [];
            for (var i = 0; i < arr.length; i++) {
                var bb = arr[i];
                xa.push(bb.x);
                x2a.push(bb.x2);
                ya.push(bb.y);
                y2a.push(bb.y2);
            }
            var x = helper.min(xa);
            var x2 = helper.max(x2a);
            var y = helper.min(ya);
            var y2 = helper.max(y2a);
            return {
                x: x,
                x2: x2,
                y: y,
                y2: y2,
                width: x2 - x,
                height: y2 - y
            };
        }

        function min(array) {
            return Math.min.apply(Math, array);
        }

        function max(array) {
            return Math.max.apply(Math, array);
        }

        function rotate_bbox(bbox, transform) {
            var a = [bbox.x, bbox.y];
            var b = [bbox.x2, bbox.y];
            var c = [bbox.x, bbox.y2];
            var d = [bbox.x2, bbox.y2];
            var a2 = rotate(a, transform);
            var b2 = rotate(b, transform);
            var c2 = rotate(c, transform);
            var d2 = rotate(d, transform);
            var x_array = [a2[0], b2[0], c2[0], d2[0]];
            var y_array = [a2[1], b2[1], c2[1], d2[1]];
            var x_min = min(x_array);
            var x_max = max(x_array);
            var y_min = min(y_array);
            var y_max = max(y_array);
            return {
                x: x_min,
                y: y_min,
                x2: x_max,
                y2: y_max,
                width: x_max - x_min,
                height: y_max - y_min
            };
        }

        function x_in_array(x, a) {
            var i = a.length;
            while (i--) {
                if (a[i] === x) {
                    return true;
                }
            }
            return false;
        }
        return {
            min: min,
            max: max,
            addEvent: addEvent,
            isMobile: isMobile,
            linePath: linePath,
            clone: clone,
            isFunction: isFunction,
            findPos: findPos,
            replaceAll: replaceAll,
            rotate_bbox: rotate_bbox,
            rotate: rotate,
            bbox_union: bbox_union,
            distance: distance,
            x_in_array: x_in_array,
            clear_sets: clear_sets,
            delete_element: delete_element,
            to_float: to_float
        };
    })();
    var mapdata = window[plugin_name + "_mapdata"] ? window[plugin_name + "_mapdata"] : false;
    var mapinfo = window[plugin_name + "_mapinfo"] ? window[plugin_name + "_mapinfo"] : false;
    var mapname = plugin_name.substring(0, plugin_name.length - 3).replace("simplemaps_", "");
    var demo = true;
    var branded = false;
    var autoload_array = [];
    var hooks_object = {
        over_state: false,
        over_region: false,
        over_location: false,
        out_state: false,
        out_region: false,
        out_location: false,
        click_state: false,
        click_region: false,
        click_location: false,
        close_popup: false,
        zoomable_click_state: false,
        zoomable_click_region: false,
        complete: false,
        refresh_complete: false,
        zooming_complete: false,
        back: false,
        click_xy: false
    };
    var plugin_hooks = {
        over_state: [],
        over_region: [],
        over_location: [],
        out_state: [],
        out_region: [],
        out_location: [],
        click_state: [],
        click_region: [],
        click_location: [],
        preclick_state: [],
        preclick_region: [],
        preclick_location: [],
        close_popup: [],
        zoomable_click_state: [],
        zoomable_click_region: [],
        complete: [],
        refresh_complete: [],
        zooming_complete: [],
        back: [],
        click_xy: []
    };
    var api_object = {
        mapdata: mapdata,
        mapinfo: mapinfo,
        load: load,
        hooks: helper.clone(hooks_object),
        plugin_hooks: helper.clone(plugin_hooks),
        copy: function() {
            var new_plugin = {
                mapdata: helper.clone(this.mapdata),
                mapinfo: helper.clone(this.mapinfo),
                hooks: helper.clone(hooks_object),
                plugin_hooks: helper.clone(plugin_hooks),
                copy: this.copy,
                load: load
            };
            autoload_array.push(new_plugin);
            return new_plugin;
        },
        create: function() {
            var new_plugin = {
                mapdata: window[plugin_name + "_mapdata"] ? helper.clone(window[plugin_name + "_mapdata"]) : false,
                mapinfo: window[plugin_name + "_mapinfo"] ? helper.clone(window[plugin_name + "_mapinfo"]) : false,
                hooks: helper.clone(hooks_object),
                plugin_hooks: helper.clone(plugin_hooks),
                copy: this.copy,
                load: load
            };
            autoload_array.push(new_plugin);
            return new_plugin;
        },
        mobile_device: helper.isMobile.any() ? true : false
    };

    function load() {
        var api_object = this;
        var mapdata = api_object.mapdata;
        var mapinfo = api_object.mapinfo;
        if (!mapdata || !mapinfo) {
            console.log("The mapdata or mapinfo object is missing or corrupted.");
            return;
        }
        var hooks_object = api_object.hooks;
        var plugin_hooks = api_object.plugin_hooks;
        var back_image, images_directory, directory, state_specific, main_settings, normalizing_factor;

        function preload() {
            state_specific = mapdata.state_specific;
            main_settings = mapdata.main_settings;
            var scripts = document.getElementsByTagName("script");
            var mysrc = scripts[scripts.length - 1].src;
            back_image = main_settings.back_image != "no" ? main_settings.back_image : false;
            images_directory = main_settings.images_directory != "default" ? main_settings.images_directory : false;
            directory = images_directory ? images_directory : mysrc.substring(0, mysrc.lastIndexOf("/worldmap.js") + 1) + "map_images/";
        }
        var ignore_pos, fly_in, rotate, manual_zoom, responsive, div, initial_zoom, initial_zoom_solo, tooltip_manual, last_clicked, tooltip_up, regions;

        function get_map_info() {
            div = main_settings.div === undefined ? "map" : main_settings.div;
            initial_zoom = main_settings.initial_zoom === undefined ? -1 : main_settings.initial_zoom;
            initial_zoom_solo = main_settings.initial_zoom_solo == "yes" && initial_zoom != -1 ? true : false;
            fly_in = main_settings.fly_in_from === undefined || main_settings.fly_in_from == "no" ? false : main_settings.fly_in_from;
            responsive = main_settings.width == "responsive" ? true : false;
            rotate = main_settings.rotate ? main_settings.rotate : false;
            if (rotate == "0") {
                rotate = false;
            }
            zooming_on = main_settings.zoom == "no" ? false : true;
            manual_zoom = main_settings.manual_zoom == "yes" ? true : false;
            regions = mapinfo.default_regions && zooming_on ? mapinfo.default_regions : false;
            if (mapdata.regions) {
                regions = mapdata.regions;
            }
            if (mapdata.labels) {
                labels = mapdata.labels;
            }
            tooltip_manual = false;
            last_clicked = false;
            tooltip_up = false;
            ignore_pos = false;
        }
        var background_image_url, background_image_bbox, zoom_time, zoom_mobile, zoom_increment, custom_shapes, popup_centered, popup_orientation, order_number, zoom_percentage, initial_back, link_text, zooming_on, fade_time, hide_eastern_labels, labels, ignore_default_labels;
        var adjacent_opacity;
        var opacity;
        var incremental;
        var label_size;
        var label_color;
        var label_opacity;
        var new_tab;
        var default_location_opacity;
        var hooks;
        var border_size;
        var popup_color;
        var popup_maxwidth;
        var popup_opacity;
        var popup_shadow;
        var popup_corners;
        var popup_nocss;
        var popup_font;

        function get_refreshable_info() {
            background_image_url = main_settings.background_image_url ? main_settings.background_image_url : false;
            background_image_bbox = main_settings.background_image_bbox ? main_settings.background_image_bbox : false;
            opacity = main_settings.background_transparent == "yes" ? 0 : 1;
            label_size = main_settings.label_size ? main_settings.label_size : 22;
            label_color = main_settings.label_color ? main_settings.label_color : "#ffffff";
            new_tab = main_settings.url_new_tab == "yes" ? true : false;
            default_location_opacity = main_settings.location_opacity ? main_settings.location_opacity : 1;
            hooks = main_settings.js_hooks == "yes" ? true : false;
            border_size = main_settings.border_size ? main_settings.border_size : 1.5;
            popup_color = main_settings.popup_color ? main_settings.popup_color : "#ffffff";
            popup_orientation = main_settings.popup_orientation ? main_settings.popup_orientation : "auto";
            popup_centered = main_settings.popup_centered ? main_settings.popup_centered : "auto";
            popup_opacity = main_settings.popup_opacity ? main_settings.popup_opacity : 0.9;
            popup_shadow = main_settings.popup_shadow > -1 ? main_settings.popup_shadow : 1;
            popup_corners = main_settings.popup_corners ? main_settings.popup_corners : 5;
            popup_nocss = main_settings.popup_nocss == "yes" ? true : false;
            popup_maxwidth = main_settings.popup_maxwidth ? main_settings.popup_maxwidth : false;
            popup_font = main_settings.popup_font ? main_settings.popup_font : "12px/1.5 Verdana, Arial, Helvetica, sans-serif";
            incremental = main_settings.zoom_out_incrementally == "no" ? false : true;
            adjacent_opacity = main_settings.adjacent_opacity ? main_settings.adjacent_opacity : 0.3;
            zoom_time = main_settings.zoom_time ? main_settings.zoom_time : 0.5;
            zoom_increment = main_settings.zoom_increment ? main_settings.zoom_increment : 2;
            zoom_mobile = main_settings.zoom_mobile == "no" ? false : true;
            fade_time = main_settings.fade_time ? main_settings.fade_time * 1000 : 200;
            labels = mapdata.labels;
            custom_shapes = main_settings.custom_shapes ? main_settings.custom_shapes : {};
            initial_back = main_settings.initial_back && main_settings.initial_back != "no" ? main_settings.initial_back : false;
            hide_eastern_labels = main_settings.hide_eastern_labels == "yes" ? true : false;
            link_text = main_settings.link_text ? main_settings.link_text : "View Website";
            back_image = main_settings.back_image != "no" ? main_settings.back_image : false;
            order_number = main_settings.order_number ? main_settings.order_number : false;
            zoom_percentage = main_settings.zoom_percentage ? main_settings.zoom_percentage : 0.99;
        }

        function is_onclick(popups) {
            if (popups == "on_click") {
                return true;
            } else if (popups == "detect" && touch) {
                return true;
            } else {
                return false;
            }
        }

        function is_off(popups) {
            if (popups == "off") {
                return true;
            } else {
                return false;
            }
        }
        var vml;
        var tough;
        var ie;
        var ios;
        var on_click;
        var popup_off = false;
        var reload = false;
        var touch;
        var popups;

        function get_client_info() {
            vml = Raphael.type == "VML" ? true : false;
            ie = document.all ? true : false;
            ios = helper.isMobile.iOS() ? true : false;
            touch = helper.isMobile.any() ? true : false;
            popups = main_settings.pop_ups ? main_settings.pop_ups : main_settings.popups;
            on_click = false;
            popup_off = is_off(popups);
        }
        var map_outer;
        var map_inner;
        var mapdiv;
        var map_holder;
        var map_zoom;

        function create_dom_structure() {
            mapdiv = document.getElementById(div);
            map_holder = document.getElementById(div + "_holder") ? document.getElementById(div + "_holder") : false;
            if (map_holder) {
                mapdiv.removeChild(map_holder);
                var tt_to_del = document.getElementById("tt_sm_" + div);
                if (tt_to_del) {
                    tt_to_del.parentNode.removeChild(tt_to_del);
                }
            }
            map_holder = document.createElement("div");
            map_outer = document.createElement("div");
            map_zoom = document.createElement("div");
            map_inner = document.createElement("div");
            map_outer.id = div + "_outer";
            map_zoom.id = div + "_zoom";
            map_inner.id = div + "_inner";
            map_holder.id = div + "_holder";
            map_holder.style.position = "relative";
            map_inner.style.position = "relative";
            map_outer.style.position = "absolute";
            map_outer.style.left = "3px";
            map_zoom.style.position = "absolute";
            map_zoom.style.top = "40px";
            map_zoom.style.left = "3px";
            map_zoom.style.zIndex = "1";
            map_outer.style.zIndex = "1";
            mapdiv.appendChild(map_holder);
            map_holder.appendChild(map_zoom);
            map_holder.appendChild(map_outer);
            map_holder.appendChild(map_inner);
        }
        var transform_rotate;
        var width;
        var height;
        var scale;
        var original_width;
        var original_height;
        var initial_view;
        var normalizing_factor;
        var ratio;
        var width_to_height;

        function create_dimensions(resizing) {
            mapdiv.style.width = "";
            map_holder.style.width = "";
            if (responsive) {
                width = mapdiv.offsetWidth;
                if (width < 1) {
                    width = mapdiv.parentNode.offsetWidth;
                }
                map_holder.style.width = width + "px";
            } else {
                width = main_settings.width === undefined ? 800 : main_settings.width;
                mapdiv.style.width = width + "px";
            }
            width = width * 1;
            if (mapinfo.calibrate) {
                initial_view = {};
                initial_view.x = -1 * mapinfo.calibrate.x_adjust;
                initial_view.y = -1 * mapinfo.calibrate.y_adjust;
                initial_view.x2 = initial_view.x + mapinfo.calibrate.width;
                initial_view.y2 = (initial_view.x2 - initial_view.x) / mapinfo.calibrate.ratio;
            } else {
                initial_view = mapinfo.initial_view;
            }
            original_width = initial_view.x2 - initial_view.x;
            original_height = initial_view.y2 - initial_view.y;
            width_to_height = original_width / original_height;
            height = width / width_to_height;
            normalizing_factor = original_width / 1000;
            if (!resizing) {
                scale = width / original_width;
                ratio = 1;
                if (rotate) {
                    var bbox_array = [];
                    for (var i in mapinfo.state_bbox_array) {
                        var bb = mapinfo.state_bbox_array[i];
                        bbox_array.push(bb);
                    }
                    var path_bbox = helper.bbox_union(bbox_array);
                    var center_x = 0.5 * (path_bbox.x2 + path_bbox.x) * scale;
                    var center_y = 0.5 * (path_bbox.y2 + path_bbox.y) * scale;
                    transform_rotate = "r" + rotate + "," + center_x + "," + center_y;
                    var riv = helper.rotate_bbox(initial_view, transform_rotate);
                    original_width = riv.width;
                    original_height = riv.height;
                }
                transform_scale = "s" + scale + "," + scale + ",0,0";
                transform = rotate ? transform_scale + transform_rotate : transform_scale;
            }
        }
        var paper;
        var everything;
        var all_lines;
        var all_visible_states;
        var location_labels;
        var all_external_lines;
        var all_visible_labels;
        var transform;
        var transform_scale;
        var background;
        var background_color;
        var background_image;
        var all_pills;
        var all_states;
        var all_regions;
        var all_locations;
        var top_locations;
        var bottom_locations;
        var all_labels;

        function create_canvas() {
            paper = Raphael(map_inner, width, height);
            background = paper.set();
            background_color = paper.rect(initial_view.x - original_width * 2, initial_view.y - original_height * 2, original_width * 5, original_height * 5);
            if (background_image_url) {
                var image_bbox = background_image_bbox ? background_image_bbox : initial_view;
                background_image = paper.image(background_image_url, image_bbox.x, image_bbox.y, image_bbox.x2 - image_bbox.x, image_bbox.y2 - image_bbox.y);
                background.push(background_image);
            }
            background.push(background_color);
            background.transform(transform_scale);
            background.hide();
            all_states = paper.set();
            all_visible_states = paper.set();
            all_regions = paper.set();
            all_locations = paper.set();
            top_locations = paper.set();
            bottom_locations = paper.set();
            all_labels = paper.set();
            location_labels = paper.set();
            all_visible_labels = paper.set();
            all_external_lines = paper.set();
            all_pills = paper.set();
            all_lines = paper.set();
            everything = paper.set();
            everything.push(all_states, all_locations, background, all_labels, all_external_lines);
        }
        var trial_paper;
        var map_trial = true;

        function create_trial_text() {
            if (!demo) {
                return;
            }
            if (location.hostname.match("simplemaps.com")) {
                demo = false;
                return;
            }
            if (map_trial) {
                var parent = map_trial.parentNode;
                parent.removeChild(map_trial);
                map_trial = false;
            }
            map_trial = document.createElement("div");
            map_trial.style.cssText = "display:inline !important";
            map_trial.style.position = "absolute";
            if (branded) {
                var h = 20;
                var w = 140;
            } else {
                var h = 30;
                var w = 200;
            }
            map_trial.style.left = width - w + "px";
            map_trial.style.top = height - h + "px";
            map_trial.style.zIndex = "1";
            map_inner.appendChild(map_trial);
            trial_paper = Raphael(map_trial, w, h);
            if (branded) {
                var text = trial_paper.text(w - 5, h * 0.5, "Simplemaps.com");
                text.attr({
                    'text-anchor': "end",
                    'font-size': 14,
                    'font-weight': "bold",
                    cursor: "pointer",
                    'font-family': "arial,sans-serif",
                    title: "Built with SimpleMaps"
                });
            } else {
                var text = trial_paper.text(w - 5, h * 0.5, "Simplemaps.com Trial");
                text.attr({
                    'text-anchor': "end",
                    'font-size': 18,
                    'font-weight': "bold",
                    cursor: "pointer",
                    'font-family': "arial,sans-serif"
                });
            }
            text.node.setAttribute("href", "http://simplemaps.com");
            text.click(function() {
                window.location.href = "http://simplemaps.com";
            });
        }
        var paper_back;
        var back_arrow;

        function create_back_button() {
            back_arrow = paper.set();
            var w = 35;
            var h = 35;
            if (back_image) {
                var image_location = directory + back_image;
                var img = new Image;
                img.onload = function() {
                    w = img.width;
                    h = img.height;
                    make_arrow();
                };
                img.src = image_location;
            } else {
                make_arrow();
            }

            function make_arrow() {
                paper_back = Raphael(map_outer, w, h);
                if (back_image) {
                    var back_arrow_arrow = paper_back.image(image_location, 0, 0, w, h);
                    back_arrow_arrow.attr({
                        cursor: "pointer"
                    });
                    back_arrow_arrow.reg_num = -1;
                    back_arrow.push(back_arrow_arrow);
                    back_arrow.click(back_click_handler);
                } else {
                    var arrow_path = "m503.7,743.8c190.3-96.6 132.9-417.05-155.6-409.71v-128.7l-228.1,195.0 228.1,205.8v-131.6c240.9-5.5 229.9,202.8 155.6,269.3z";
                    var arrow_color = main_settings.arrow_color ? main_settings.arrow_color : "#cecece";
                    var arrow_color_border = main_settings.arrow_color_border ? main_settings.arrow_color_border : "#808080";
                    var arrow_size = 0.05;
                    var back_arrow_box = paper_back.rect(0, 0, w, h).attr({
                        fill: "black",
                        opacity: 0,
                        cursor: "pointer"
                    });
                    var back_arrow_arrow = paper_back.path(arrow_path).attr({
                        stroke: arrow_color_border,
                        'stroke-width': 2,
                        'stroke-opacity': 1,
                        fill: arrow_color,
                        'fill-opacity': 1,
                        cursor: "pointer"
                    }).scale(arrow_size, arrow_size, -2, -6);
                    back_arrow_arrow.reg_num = -1;
                    back_arrow_box.reg_num = -1;
                    back_arrow.push(back_arrow_arrow);
                    back_arrow.push(back_arrow_box);
                }
                if (!initial_back) {
                    back_arrow.hide();
                }
            }
        }
        var zoom_in;
        var zoom_out;
        var zoom_back;
        var zoom_about;
        var zoom_in_click;
        var zoom_out_click;

        function create_zoom_buttons() {
            var w = 35;
            var h = 35;
            zoom_back = Raphael(map_zoom, w, 80);
            var zoom_in_path = "m 64,13.787 0,100.426 m -50.213,-50.212001 100.426,0";
            var zoom_in_box = zoom_back.rect(0, 0, w, h).attr({
                fill: "#cecece",
                opacity: 0.7,
                cursor: "pointer",
                stroke: "gray",
                'stroke-width': 1
            });
            var zoom_in_vector = zoom_back.path(zoom_in_path).attr({
                stroke: "gray",
                'stroke-width': 3,
                'stroke-opacity': 1,
                fill: "black",
                'fill-opacity': 1,
                cursor: "pointer"
            }).scale(0.3, 0.3, -2, -2);
            zoom_in = paper.set();
            zoom_in.push(zoom_in_box, zoom_in_vector);
            var zoom_out_path = "m 13.787,64.000999 100.426,0";
            var zoom_out_box = zoom_back.rect(0, 40, w, h).attr({
                fill: "#cecece",
                opacity: 0.7,
                cursor: "pointer",
                stroke: "gray",
                'stroke-width': 1
            });
            var zoom_out_vector = zoom_back.path(zoom_out_path).attr({
                stroke: "gray",
                'stroke-width': 3,
                'stroke-opacity': 1,
                fill: "black",
                'fill-opacity': 1,
                cursor: "pointer"
            }).scale(0.3, 0.3, -2, 55);
            zoom_out = paper.set();
            zoom_out.push(zoom_out_box, zoom_out_vector);

            function move_zooming_dimensions(direction) {
                var w = last_destination.sm.zooming_dimensions.w / direction;
                var h = last_destination.sm.zooming_dimensions.h / direction;
                var x = last_destination.sm.zooming_dimensions.x + (last_destination.sm.zooming_dimensions.w - w) / 2;
                var y = last_destination.sm.zooming_dimensions.y + (last_destination.sm.zooming_dimensions.h - h) / 2;
                var r = w / (original_width * scale);
                return {
                    x: x,
                    y: y,
                    w: w,
                    h: h,
                    r: r
                };
            }

            function zooming_allowed(direction) {
                var w = last_destination.sm.zooming_dimensions.w / direction;
                var zooming_out = direction < 1 ? true : false;
                if (initial_zoom != -1 && (last_destination.sm.type == "manual" || initial_zoom_solo)) {
                    var initial_width = region_array[initial_zoom].sm.zooming_dimensions.w;
                    var outside_initial = w > initial_width - 1;
                    if (zooming_out && outside_initial) {
                        var inside_initial = is_inside(last_destination, region_array[initial_zoom]);
                        if (inside_initial || initial_zoom_solo) {
                            zoom_to(region_array[initial_zoom]);
                            return false;
                        }
                    }
                }
                if (zooming_out && w > region_array[-1].sm.zooming_dimensions.w - 1) {
                    if (!initial_zoom_solo) {
                        zoom_to(region_array[-1]);
                    }
                    return false;
                }
                return true;
            }

            function zoom_about(direction) {
                if (!zooming_allowed(direction)) {
                    return;
                }
                var destination = {
                    sm: {
                        type: "manual",
                        zp: 1
                    }
                };
                if (zoom_tween) {
                    last_destination = {
                        sm: {
                            type: "manual",
                            zp: 1
                        }
                    };
                    last_destination.sm.zooming_dimensions = current_viewbox;
                    last_destination.sm.bbox = {
                        x: current_viewbox.x / scale,
                        y: current_viewbox.y / scale,
                        width: current_viewbox.w / scale,
                        height: current_viewbox.h / scale
                    };
                }
                var new_dimensions = move_zooming_dimensions(direction);
                if (!new_dimensions) {
                    return;
                }
                destination.sm.zooming_dimensions = new_dimensions;
                zoom_to(destination);
            }
            zoom_in_click = function() {
                zoom_about(zoom_increment);
            };
            zoom_out_click = function() {
                zoom_about(1 / zoom_increment);
            };
            api_object.zoom_in = zoom_in_click;
            api_object.zoom_out = zoom_out_click;
            zoom_in.click(zoom_in_click);
            zoom_out.click(zoom_out_click);
            zoom_in.touchend(zoom_in_click);
            zoom_out.touchend(zoom_out_click);
        }
        var cattr, lattr, rattr, region_map, label_attributes, locations, set_state, set_label, ela;

        function set_attributes() {
            locations = mapdata.locations;
            cattr = [];
            lattr = [];
            region_map = [];
            label_attributes = [];
            rattr = [];
            ela = [];
            var set_region_attributes = function() {
                var default_region = {};
                default_region.color = false;
                default_region.hover_color = false;
                default_region.opacity = main_settings.region_opacity ? main_settings.region_opacity : 1;
                default_region.hover_opacity = main_settings.region_hover_opacity ? main_settings.region_hover_opacity : 0.6;
                default_region.url = false;
                default_region.description = false;
                default_region.description_mobile = false;
                default_region.inactive = false;
                default_region.zoomable = true;
                default_region.popup = main_settings.region_popups ? main_settings.region_popups : popups;
                default_region.cascade = main_settings.region_cascade_all == "yes" ? true : false;
                default_region.zoom_percentage = zoom_percentage;
                default_region.x = false;
                default_region.y = false;
                default_region.x2 = false;
                default_region.y2 = false;
                if (regions) {
                    for (var region in regions) {
                        for (var i = 0; i < regions[region].states.length; i++) {
                            var state = regions[region].states[i];
                            region_map[state] = region;
                        }
                    }
                }
                for (var id in regions) {
                    rattr[id] = Object.create(default_region);
                    if (regions[id].url) {
                        rattr[id].zoomable = false;
                    }
                    for (var prop in regions[id]) {
                        if (regions[id][prop] != "default") {
                            rattr[id][prop] = regions[id][prop];
                        }
                        if (regions[id][prop] == "yes") {
                            rattr[id][prop] = true;
                        }
                        if (regions[id][prop] == "no") {
                            rattr[id][prop] = false;
                        }
                    }
                }
            };
            var set_state_attributes = function() {
                set_state = function(id) {
                    var default_state = {};
                    default_state.color = main_settings.state_color;
                    default_state.image_url = main_settings.state_image_url ? main_settings.state_image_url : false;
                    default_state.image_size = main_settings.state_image_size ? main_settings.state_image_size : "auto";
                    default_state.image_position = main_settings.state_image_position ? main_settings.state_image_position : "center";
                    default_state.image_x = main_settings.state_image_x ? main_settings.state_image_x : "0";
                    default_state.image_y = main_settings.state_image_y ? main_settings.state_image_y : "0";
                    default_state.image_color = main_settings.state_image_color ? main_settings.state_image_color : false;
                    default_state.image_hover_url = main_settings.state_image_hover_url ? main_settings.state_image_hover_url : false;
                    default_state.image_hover_size = main_settings.state_image_hover_size ? main_settings.state_image_hover_size : "auto";
                    default_state.image_hover_position = main_settings.state_image_hover_position ? main_settings.state_image_hover_position : "center";
                    default_state.image_hover_x = main_settings.state_image_hover_x ? main_settings.state_image_hover_x : "0";
                    default_state.image_hover_y = main_settings.state_image_hover_y ? main_settings.state_image_hover_y : "0";
                    default_state.image_hover_color = main_settings.state_image_hover_color ? main_settings.state_image_hover_color : false;
                    default_state.hover_color = main_settings.state_hover_color;
                    default_state.image_source = false;
                    default_state.description = main_settings.state_description;
                    default_state.url = main_settings.state_url;
                    default_state.inactive = main_settings.all_states_inactive == "yes" ? true : false;
                    default_state.hide = main_settings.all_states_hidden == "yes" ? true : false;
                    default_state.hide_label = false;
                    default_state.border_color = main_settings.border_color ? main_settings.border_color : "#ffffff";
                    default_state.border_hover_color = main_settings.border_hover_color ? main_settings.border_hover_color : false;
                    default_state.border_hover_size = main_settings.border_hover_size ? main_settings.border_hover_size : false;
                    default_state.emphasize = "yes";
                    default_state.zoom_percentage = zoom_percentage;
                    default_state.zoomable = main_settings.all_states_zoomable == "yes" ? true : false;
                    default_state.popup = main_settings.state_popups ? main_settings.state_popups : popups;
                    default_state.opacity = main_settings.state_opacity ? main_settings.state_opacity : 1;
                    default_state.hover_opacity = main_settings.state_hover_opacity ? main_settings.state_hover_opacity : 1;
                    default_state.description_mobile = main_settings.state_description_mobile ? state_description_mobile : false;
                    var region_id = region_map[id] ? region_map[id] : false;
                    if (region_id && rattr[region_id].cascade) {
                        if (rattr[region_id].color) {
                            default_state.color = rattr[region_id].color;
                        }
                        if (rattr[region_id].hover_color) {
                            default_state.hover_color = rattr[region_id].hover_color;
                        }
                        if (rattr[region_id].description) {
                            default_state.description = rattr[region_id].description;
                        }
                        if (rattr[region_id].url) {
                            default_state.url = rattr[region_id].url;
                        }
                        if (rattr[region_id].inactive) {
                            default_state.inactive = rattr[region_id].inactive;
                        }
                        if (rattr[region_id].hide) {
                            default_state.hide = rattr[region_id].hide;
                        }
                    }
                    cattr[id] = Object.create(default_state);
                    if (mapname == "us" && (id == "GU" || id == "PR" || id == "VI" || id == "MP" || id == "AS")) {
                        cattr[id].hide = "yes";
                    }
                    if ((mapname == "us" && hide_eastern_labels) && (id == "VT" || id == "NJ" || id == "DE" || id == "DC" || id == "NH" || id == "MA" || id == "CT" || id == "RI" || id == "MD")) {
                        cattr[id].hide_label = "yes";
                    }
                    for (var prop in state_specific[id]) {
                        if (state_specific[id][prop] != "default") {
                            cattr[id][prop] = state_specific[id][prop];
                        }
                        if (state_specific[id][prop] == "yes") {
                            cattr[id][prop] = true;
                        }
                        if (state_specific[id][prop] == "no") {
                            cattr[id][prop] = false;
                        }
                    }
                    if (main_settings.state_hover_color == "off") {
                        cattr[id].hover_color = cattr[id].color;
                    }
                };
                for (var id in mapinfo.paths) {
                    set_state(id);
                }
            };
            var set_label_attributes = function() {
                var default_label = {};
                default_label.font_family = main_settings.label_font ? main_settings.label_font : "arial,sans-serif";
                default_label.color = main_settings.label_color ? main_settings.label_color : "white";
                default_label.hover_color = main_settings.label_hover_color ? main_settings.label_hover_color : default_label.color;
                default_label.size = label_size;
                default_label.hide = main_settings.hide_labels == "yes" ? true : false;
                default_label.line = false;
                default_label.scale = main_settings.label_scale ? main_settings.label_scale : false;
                default_label.scale_limit = main_settings.scale_limit ? main_settings.scale_limit : 0.125;
                default_label.rotate = main_settings.label_rotate ? main_settings.label_rotate : 0;
                default_label.line_color = main_settings.label_line_color ? main_settings.label_line_color : "#000000";
                default_label.line_size = main_settings.label_line_size ? main_settings.label_line_size : "1";
                default_label.line_x = false;
                default_label.line_y = false;
                default_label.parent_type = "state";
                default_label.parent_id = false;
                default_label.anchor = main_settings.label_anchor ? main_settings.label_anchor : "middle";
                default_label.pill = false;
                default_label.width = main_settings.pill_width ? main_settings.pill_width : false;
                default_label.x = false;
                default_label.y = false;
                default_label.name = "Not Named";
                default_label.display = false;
                default_label.id = false;
                var default_labels = main_settings.import_labels == "no" ? {} : mapinfo.default_labels;
                var apply_default_label = function(id) {
                    label_attributes[id] = Object.create(default_label);
                    for (var prop in default_labels[id]) {
                        if (default_labels[id][prop] != "default") {
                            label_attributes[id][prop] = default_labels[id][prop];
                        }
                        if (default_labels[id][prop] == "yes") {
                            label_attributes[id][prop] = true;
                        }
                        if (default_labels[id][prop] == "no") {
                            label_attributes[id][prop] = false;
                        }
                    }
                };
                var apply_mapdata_label = function(id) {
                    if (!label_attributes[id]) {
                        label_attributes[id] = Object.create(default_label);
                    }
                    for (var prop in labels[id]) {
                        if (labels[id][prop] != "default") {
                            label_attributes[id][prop] = labels[id][prop];
                        }
                        if (labels[id][prop] == "yes") {
                            label_attributes[id][prop] = true;
                        }
                        if (labels[id][prop] == "no") {
                            label_attributes[id][prop] = false;
                        }
                    }
                };
                for (var id in default_labels) {
                    apply_default_label(id);
                }
                for (var id in labels) {
                    apply_mapdata_label(id);
                }
                set_label = function(id) {
                    apply_default_label(id);
                    apply_mapdata_label(id);
                };
            };
            var set_location_attributes = function() {
                var default_location = {};
                default_location.scale_limit = main_settings.scale_limit ? main_settings.scale_limit : 0.0625;
                default_location.color = main_settings.location_color ? main_settings.location_color : "#FF0067";
                default_location.hover_color = main_settings.location_hover_color ? main_settings.location_hover_color : false;
                default_location.border = main_settings.location_border ? main_settings.location_border : 1.5;
                default_location.border_color = main_settings.location_border_color ? main_settings.location_border_color : "#FFFFFF";
                default_location.hover_border = main_settings.location_hover_border ? main_settings.location_hover_border : 2;
                default_location.size = main_settings.location_size;
                default_location.description = main_settings.location_description;
                default_location.description_mobile = main_settings.location_description_mobile ? location_description_mobile : false;
                default_location.url = main_settings.location_url;
                default_location.inactive = main_settings.all_locations_inactive == "yes" ? true : false;
                default_location.type = main_settings.location_type;
                default_location.position = "top";
                default_location.pulse = main_settings.location_pulse == "yes" ? true : false;
                default_location.pulse_size = main_settings.location_pulse_size ? main_settings.location_pulse_size : 4;
                default_location.pulse_speed = main_settings.location_pulse_speed ? main_settings.location_pulse_speed : 0.5;
                var pulse_color = main_settings.location_pulse_color;
                default_location.pulse_color = pulse_color && pulse_color != "auto" ? pulse_color : false;
                default_location.image_source = main_settings.location_image_source ? main_settings.location_image_source : "";
                default_location.hide = main_settings.all_locations_hide ? main_settings.all_locations_hide : "no", default_location.opacity = default_location_opacity;
                default_location.scale = true;
                default_location.hover_opacity = main_settings.location_hover_opacity ? main_settings.location_hover_opacity : false;
                default_location.image_url = main_settings.location_image_url ? main_settings.location_image_url : false;
                default_location.image_position = main_settings.location_image_position ? main_settings.location_image_position : "center";
                default_location.popup = main_settings.location_popups ? main_settings.location_popups : popups;
                default_location.x = false;
                default_location.y = false;
                default_location.display = main_settings.location_display ? main_settings.location_display : "all";
                default_location.hide = main_settings.all_locations_hidden == "yes" ? true : false;
                if (default_location.type == undefined) {
                    default_location.type = "square";
                }
                for (var id in locations) {
                    lattr[id] = Object.create(default_location);
                    for (var prop in locations[id]) {
                        if (prop == "overwrite_image_location") {
                            lattr[id].image_url = locations[id][prop];
                            continue;
                        }
                        if (prop == "region") {
                            lattr[id].display = "region";
                        }
                        if (locations[id][prop] != "default") {
                            lattr[id][prop] = locations[id][prop];
                        }
                        if (locations[id][prop] == "yes") {
                            lattr[id][prop] = true;
                        }
                        if (locations[id][prop] == "no") {
                            lattr[id][prop] = false;
                        }
                    }
                    if (!lattr[id].hover_opacity) {
                        lattr[id].hover_opacity = lattr[id].opacity;
                    }
                    if (!lattr[id].hover_color) {
                        lattr[id].hover_color = lattr[id].color;
                    }
                }
            };
            var set_line_attributes = function() {
                var default_line = {};
                default_line.color = main_settings.line_color ? main_settings.line_color : "#cecece";
                default_line.size = main_settings.line_size ? main_settings.line_size : 1;
                default_line.dash = main_settings.line_dash ? main_settings.line_dash : "";
                var lines = mapdata.lines ? mapdata.lines : mapdata.borders;
                for (var id in lines) {
                    ela[id] = Object.create(default_line);
                    for (var prop in lines[id]) {
                        if (lines[id][prop] != "default") {
                            ela[id][prop] = lines[id][prop];
                        }
                        if (lines[id][prop] == "yes") {
                            ela[id][prop] = true;
                        }
                        if (lines[id][prop] == "no") {
                            ela[id][prop] = false;
                        }
                    }
                }
            };
            set_region_attributes();
            set_state_attributes();
            set_label_attributes();
            set_location_attributes();
            set_line_attributes();
        }
        var currently_zooming = false;
        var max_width;
        var currently_panning = false;
        var currently_pinching = false;

        function create_tooltip() {
            var find_pos = helper.findPos(map_inner);
            var x0_page = find_pos[0];
            var y0_page = find_pos[1];
            var x0 = 0;
            var y0 = 0;
            var h = 0;
            var w = 0;
            var u;
            var l;
            var x_mid;
            var y_mid;
            var left = 5;
            var tt, h;
            return {
                create: function() {
                    tt = document.createElement("div");
                    tt.setAttribute("id", "tt_sm_" + div);
                    tt.style.position = "absolute";
                    tt.style.display = "none";
                    map_inner.appendChild(tt);
                    map_inner.onmousemove = this.pos;
                    tt.onmousemove = this.pos;
                },
                show: function(element) {
                    if (popup_off) {
                        return;
                    }
                    ignore_pos = false;
                    if (tt == null) {
                        tooltip.create();
                    }
                    tt.style.display = "block";
                    tt.style.zIndex = 2;
                    tt.style.maxWidth = max_width + "px";
                    tt.innerHTML = element.sm.content;
                    tooltip.update_pos(element);
                },
                reset_pos: function(x, y, element) {
                    if (tt == undefined) {
                        tooltip.create();
                    }
                    tooltip.set_pos(y0 + y, x0 + x, element);
                },
                update_pos: function(element) {
                    tooltip.set_pos(u, l, element);
                },
                pos: function(e, manual) {
                    if (manual) {
                        u = manual.u;
                        l = manual.l;
                    } else {
                        u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
                        l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
                    }
                    u = u - y0_page;
                    l = l - x0_page;
                    if (popup_off || tooltip_manual || ignore_pos || tooltip_up && on_click) {
                        return;
                    }
                    tooltip.set_pos(u, l);
                },
                set_pos: function(u, l, element) {
                    if (!tt || !u || !l) {
                        return;
                    }
                    x_mid = x0 + 0.5 * width;
                    y_mid = y0 + 0.5 * height;
                    if (l > x_mid && u > y_mid) {
                        quad = 4;
                    } else if (l < x_mid && u > y_mid) {
                        quad = 3;
                    } else if (l > x_mid && u < y_mid) {
                        quad = 2;
                    } else {
                        var quad = 1;
                    }
                    var centered = element && element.sm.on_click && (popup_centered == "yes" || popup_centered == "auto" && width < 401) ? true : false;
                    if (centered) {
                        tt.style.top = "-100px";
                        tt.style.left = "-100px";
                        tt.style.bottom = "auto";
                        tt.style.right = "auto";
                        h = parseInt(tt.offsetHeight, 10);
                        w = parseInt(tt.offsetWidth, 10);
                        var side = width - w > 0 ? 0.5 * (width - w) : 0;
                        var bar = height - h > 0 ? 0.5 * (height - h) : 0;
                        tt.style.top = bar + "px";
                        tt.style.left = side + "px";
                        tt.style.right = "auto";
                        tt.style.bottom = "auto";
                    } else {
                        if (popup_orientation == "below") {
                            if (quad == 3) {
                                quad = 1;
                            }
                            if (quad == 4) {
                                quad = 2;
                            }
                        } else if (popup_orientation == "above") {
                            if (quad == 1) {
                                quad = 3;
                            }
                            if (quad == 2) {
                                quad = 4;
                            }
                        }
                        if (quad == 1) {
                            tt.style.bottom = "auto";
                            tt.style.top = u + 5 + "px";
                            tt.style.left = l + left + 5 + "px";
                            tt.style.right = "auto";
                        } else if (quad == 2) {
                            tt.style.bottom = "auto";
                            tt.style.top = u + 5 + "px";
                            tt.style.right = width - l + 5 + "px";
                            tt.style.left = "auto";
                        } else if (quad == 3) {
                            tt.style.bottom = height - u + 5 + "px";
                            tt.style.top = "auto";
                            tt.style.left = l + left + 3 + "px";
                            tt.style.right = "auto";
                        } else {
                            tt.style.bottom = height - u + 5 + "px";
                            tt.style.top = "auto";
                            tt.style.right = width - l + 5 + "px";
                            tt.style.left = "auto";
                        }
                    }
                },
                hide: function() {
                    if (tt != undefined) {
                        tt.style.display = "none";
                    }
                    find_pos = helper.findPos(map_inner);
                    if (find_pos) {
                        x0_page = find_pos[0];
                        y0_page = find_pos[1];
                    }
                }
            };
        }

        function getxy(lat, lng) {
            if (mapinfo.proj == "lambert") {
                var proj = lambert;
            } else if (mapinfo.proj == "xy") {
                alert("This map only supports x/y locations.  These can be added to the mapdata.js file.");
            } else if (mapinfo.proj == "robinson_pacific") {
                var proj = robinson_pacific;
            } else if (mapinfo.proj == "mercator") {
                var proj = mercator;
            } else {
                var proj = robinson;
            }
            var initial = {
                lat: lat,
                lng: lng
            };

            function intersection(x0, y0, r0, x1, y1, r1) {
                var a, dx, dy, d, h, rx, ry;
                var x2, y2;
                var dx = x1 - x0;
                var dy = y1 - y0;
                var d = Math.sqrt(dy * dy + dx * dx);
                var a = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
                var x2 = x0 + dx * a / d;
                var y2 = y0 + dy * a / d;
                var h = Math.sqrt(r0 * r0 - a * a);
                var rx = -dy * (h / d);
                var ry = dx * (h / d);
                var xi = x2 + rx;
                var xi_prime = x2 - rx;
                var yi = y2 + ry;
                var yi_prime = y2 - ry;
                return {
                    opt1: {
                        x: xi,
                        y: yi
                    },
                    opt2: {
                        x: xi_prime,
                        y: yi_prime
                    }
                };
            }

            function lambert(latlng) {
                var radian = 0.017453293;
                var pi = Math.PI;
                var phi = latlng.lat * radian;
                var lam = latlng.lng * radian;
                var phi0 = 45 * radian;
                var lam0 = 90 * radian;
                var phi1 = 33 * radian;
                var phi2 = 45 * radian;
                var n = Math.log(Math.cos(phi1) * (1 / Math.cos(phi2))) / Math.log(Math.tan(0.25 * pi + 0.5 * phi2) * (1 / Math.tan(0.25 * pi + 0.5 * phi1)));
                var F = Math.cos(phi1) * Math.pow(Math.tan(0.25 * pi + 0.5 * phi1), n) / n;
                var rho = F * Math.pow(1 / Math.tan(0.25 * pi + 0.5 * phi), n);
                var rho0 = F * Math.pow(1 / Math.tan(0.25 * pi + 0.5 * phi0), n);
                return {
                    x: rho * Math.sin(n * (lam - lam0)),
                    y: rho0 - rho * Math.cos(n * (lam - lam0))
                };
            }

            function robinson(latlng) {
                var earthRadius = 1;
                var radian = 0.017453293;
                var roundToNearest = function(roundTo, value) {
                    return Math.floor(value / roundTo) * roundTo;
                };
                var getSign = function(value) {
                    return value < 0 ? -1 : 1;
                };
                var lngSign = getSign(latlng.lng);
                var latSign = getSign(latlng.lat);
                var lng = Math.abs(latlng.lng);
                var lat = Math.abs(latlng.lat);
                var low = roundToNearest(5, lat - 1e-10);
                low = lat == 0 ? 0 : low;
                var high = low + 5;
                var lowIndex = low / 5;
                var highIndex = high / 5;
                var ratio = (lat - low) / 5;
                var AA = [0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851, 0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645, 0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731, 0.48562614, 0.45167814];
                var BB = [0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556, 0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187, 0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523];
                var adjAA = (AA[highIndex] - AA[lowIndex]) * ratio + AA[lowIndex];
                var adjBB = (BB[highIndex] - BB[lowIndex]) * ratio + BB[lowIndex];
                return {
                    x: adjAA * lng * radian * lngSign * earthRadius,
                    y: adjBB * latSign * earthRadius
                };
            }

            function robinson_pacific(latlng) {
                var lng = latlng.lng - 150;
                if (lng < -180) {
                    lng = lng + 360;
                }
                return robinson({
                    lat: latlng.lat,
                    lng: lng
                });
            }

            function mercator(latlng) {
                var y = Math.log(Math.tan((latlng.lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
                return {
                    x: latlng.lng,
                    y: y
                };
            }
            var calibrate = mapinfo.proj_coordinates;

            function find_point(initial, pt1, pt2, pt3) {
                var proj_initial = proj(initial);
                var pt1_proj = proj(pt1);
                var pt2_proj = proj(pt2);
                var pt3_proj = proj(pt3);
                var proj_r_pt1 = helper.distance(proj_initial, pt1_proj);
                var proj_r_pt2 = helper.distance(proj_initial, pt2_proj);
                var dist_proj = helper.distance(pt1_proj, pt2_proj);
                var dist_act = helper.distance(pt1, pt2);
                var scale = dist_proj / dist_act;
                var r_pt1 = proj_r_pt1 / scale;
                var r_pt2 = proj_r_pt2 / scale;
                var opts = intersection(pt1.x, pt1.y, r_pt1, pt2.x, pt2.y, r_pt2);
                var dist_third = helper.distance(proj_initial, pt3_proj) / scale;
                var remnant1 = Math.abs(helper.distance(opts.opt1, pt3) - dist_third);
                var remnant2 = Math.abs(helper.distance(opts.opt2, pt3) - dist_third);
                if (remnant1 < remnant2) {
                    return {
                        x: opts.opt1.x,
                        y: opts.opt1.y
                    };
                } else {
                    return {
                        x: opts.opt2.x,
                        y: opts.opt2.y
                    };
                }
            }
            var rules = mapinfo.proj_rules;
            if (rules) {
                for (var i in rules) {
                    var rule = rules[i];
                    var condition_string = rule.condition;
                    try {
                        var condition = eval(rule.condition);
                    } catch (e) {
                        console.log("The condition " + condition_string + " is not valid JavaScript");
                    }
                    if (condition) {
                        var points = rule.points;
                        return find_point(initial, calibrate[points[0]], calibrate[points[1]], calibrate[points[2]]);
                    }
                }
            }
            return find_point(initial, calibrate[0], calibrate[1], calibrate[2]);
        }
        var tt_css_set = false;

        function set_tt_css() {
            if (tt_css_set) {
                return;
            }

            function newStyle(str) {
                var pa = document.getElementsByTagName("head")[0];
                var el = document.createElement("style");
                el.type = "text/css";
                el.media = "screen";
                if (el.styleSheet) {
                    el.styleSheet.cssText = str;
                } else {
                    el.appendChild(document.createTextNode(str));
                }
                pa.appendChild(el);
                return el;
            }

            function getsupportedprop(proparray) {
                var root = document.documentElement;
                for (var i = 0; i < proparray.length; i++) {
                    if (proparray[i] in root.style) {
                        var answer = proparray[i];
                        answer = answer.replace("borderRadius", "border-radius");
                        answer = answer.replace("MozBorderRadius", "-moz-border-radius");
                        answer = answer.replace("WebkitBorderRadius", "-webkit-border-radius");
                        answer = answer.replace("boxShadow", "box-shadow");
                        answer = answer.replace("MozBoxShadow", "-moz-box-shadow");
                        answer = answer.replace("WebkitBoxShadow", "-webkit-box-shadow");
                        return answer;
                    }
                }
            }
            var roundborderprop = getsupportedprop(["borderRadius", "MozBorderRadius", "WebkitBorderRadius"]);
            var rcss = roundborderprop ? roundborderprop + ": " + popup_corners + "px;" : "";
            var min = width / 2 > 250 ? width / 2 : 250;
            max_width = popup_maxwidth ? popup_maxwidth : min;
            var shadowprop = getsupportedprop(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]);
            var scss = shadowprop ? shadowprop + ": " + 3 * popup_shadow + "px " + 3 * popup_shadow + "px " + 4 * popup_shadow + "px rgba(0,0,0,.5);" : "";
            if (popup_shadow < 0.01) {
                scss = "";
            }
            var mcss = ".tt_mobile_sm{margin-top: 5px;} .tt_sm{" + rcss + scss + "z-index: 1000000; background-color: " + popup_color + "; padding: 7px; opacity:" + popup_opacity + "; font: " + popup_font + "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
            mcss += ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: 5px 5px;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: 4px;}    .btn_simplemaps:hover{  text-decoration: underline;}";
            var xml_float = vml ? "left" : "right";
            mcss += ".xmark_sm{float: " + xml_float + "; margin-left: 5px; cursor: pointer; line-height: 0px;}";
            newStyle(mcss);
            tt_css_set = true;
        }

        function get_zooming_dimensions(element) {
            if (element.sm.zooming_dimensions) {
                return element.sm.zooming_dimensions;
            }
            var bbox = helper.rotate_bbox(element.sm.bbox, transform);
            var gotoX = bbox.x;
            var gotoY = bbox.y;
            var gotoW = bbox.width;
            var gotoH = bbox.height;
            var ratio;
            var zp = element.sm.zp;
            var paperWidth = original_width * scale;
            var paperHeight = original_height * scale;
            gotoX = gotoX - (gotoW / zp - gotoW) * 0.5;
            gotoY = gotoY - (gotoH / zp - gotoH) * 0.5;
            gotoW = gotoW / zp;
            gotoH = gotoH / zp;
            if (gotoW / gotoH > width_to_height) {
                ratio = gotoW / paperWidth;
                gotoY -= (paperHeight * ratio - gotoH) / 2;
                gotoH = gotoW / width_to_height;
            } else {
                ratio = gotoH / paperHeight;
                gotoX -= (paperWidth * ratio - gotoW) / 2;
                gotoW = gotoH * width_to_height;
            }
            return {
                x: gotoX,
                y: gotoY,
                w: gotoW,
                h: gotoH,
                r: ratio
            };
        }

        function reset_state_attributes(region) {
            if (!region) {
                return;
            }
            all_states.stop();
            for (var i = 0; i < region.sm.states.length; ++i) {
                var state = state_array[region.sm.states[i]];
                state.attr(state.sm.attributes);
                highlight_labels(state, "reset", false, "state");
            }
        }

        function reset_last_state() {
            if (last_destination && last_destination.sm.type == "state" && last_destination.sm.attributes) {
                if (!last_destination.sm.ignore_hover) {
                    last_destination.attr(last_destination.sm.attributes);
                }
                highlight_labels(last_destination, "out");
            }
        }

        function reset_region_attributes(region) {
            if (!region) {
                return;
            }
            region.stop();
            region.attr(region.sm.attributes);
            for (var i = 0; i < region.sm.states.length; ++i) {
                var state = state_array[region.sm.states[i]];
                highlight_labels(state, "reset", false, "region");
            }
        }

        function region_or_state_by_ratio() {
            all_regions.forEach(function(region) {
                if (region.sm.id == -1) {
                    return;
                }
                if (region.sm.zooming_dimensions.r > ratio) {
                    reset_state_attributes(region);
                } else {
                    reset_region_attributes(region);
                }
            });
        }

        function reset_all_region_attributes() {
            all_regions.forEach(function(region) {
                if (region.sm.id != -1) {
                    reset_region_attributes(region);
                }
            });
        }

        function show_point(point, display, destination) {
            var type = destination.sm.type;
            if (display == "all") {
                return true;
            } else if (display == "out" && type == "out") {
                return true;
            } else if (display == "region" && type == "region") {
                if (Raphael.isPointInsideBBox(destination.sm.bbox, point.x, point.y)) {
                    return true;
                }
            } else if (display == "state" && type == "state") {
                if (in_state(point, destination)) {
                    return true;
                }
            } else {
                var threshold = helper.to_float(display);
                if (threshold && ratio < threshold) {
                    return true;
                }
            }
            return false;

            function in_state(pt, state) {
                var x = pt.x;
                var y = pt.y;
                var potential = [];
                var region = region_array[state.sm.region];
                if (region) {
                    for (var i = 0; i < region.items.length; i++) {
                        var current_state = region.items[i];
                        if (Raphael.isPointInsideBBox(current_state.sm.bbox, x, y)) {
                            potential.push(current_state.sm.id);
                        }
                    }
                } else {
                    potential.push(state.sm.id);
                }
                var length = potential.length;
                if (length < 1) {
                    return false;
                }
                if (length == 1) {
                    if (potential[0] == state.sm.id) {
                        return true;
                    }
                } else {
                    var path = mapinfo.paths[state.sm.id];
                    if (Raphael.isPointInsidePath(path, x, y)) {
                        return true;
                    }
                }
                return false;
            }
        }

        function animate_transform(e, t, i) {
            var a = {
                transform: t
            };
            if (!vml && !touch && !i) {
                e.animate(a, zoom_time * 1000);
            } else {
                e.attr(a);
            }
        }

        function label_correction(destination, initial) {
            all_labels.hide();
            for (var i in label_array) {
                var lbl = label_array[i];
                if (lbl.sm.hide) {
                    continue;
                }
                if (show_point(lbl.sm.point0, lbl.sm.display, destination)) {
                    var lbl_set = label_set_array[lbl.sm.id];
                    lbl_set.show();
                }
                if (lbl.sm.line) {
                    var line_path = get_line_path(lbl);
                    lbl.sm.line.attr({
                        path: line_path,
                        transform: transform
                    });
                }
                if (lbl.sm.scale) {
                    var factor = ratio > lbl.sm.scale_limit ? ratio : lbl.sm.scale_limit;
                    var t = scale_t(lbl, factor * scale);
                    animate_transform(lbl, t, initial);
                    if (lbl.sm.pill) {
                        var pill = pill_array[lbl.sm.id];
                        animate_transform(pill, t, initial);
                    }
                }
            }
        }

        function location_correction(destination, initial) {
            all_locations.hide();
            all_locations.forEach(function(lct) {
                if (lct.sm.hide) {
                    return;
                }
                if (show_point(lct.sm.point0, lct.sm.display, destination)) {
                    lct.show();
                }
                if (lct.sm.scale) {
                    var factor = ratio > lct.sm.scale_limit ? ratio : lct.sm.scale_limit;
                    var t = scale_t(lct, factor * scale);
                    animate_transform(lct, t, initial);
                }
            });
        }

        function hide_and_show_before(destination, initial) {
            var type = destination.sm.type;
            back_arrow.hide();
            location_correction(destination, initial);
            label_correction(destination, initial);
            (function update_regions() {
                if (helper.x_in_array(type, ["state", "region", "out"])) {
                    reset_all_region_attributes();
                }
                if (type == "region") {
                    reset_state_attributes(destination);
                } else if (type == "state") {
                    reset_state_attributes(region_array[destination.sm.region]);
                } else if (type == "manual") {
                    region_or_state_by_ratio();
                }
            })();
            (function update_opacity() {
                if (type != "out" && type != "manual") {
                    all_states.stop();
                    all_pills.stop();
                    all_states.attr({
                        'fill-opacity': adjacent_opacity
                    });
                    all_pills.attr({
                        'fill-opacity': adjacent_opacity
                    });
                    destination.stop();
                    destination.attr({
                        'fill-opacity': 1
                    });
                    destination.sm.labels.forEach(function(label) {
                        if (label.sm && label.sm.pill) {
                            label.sm.pill.stop();
                            label.sm.pill.attr({
                                'fill-opacity': 1
                            });
                        }
                    });
                    destination.animate({
                        'stroke-width': destination.sm.border_hover_size * (width / original_width) * normalizing_factor * 1.25
                    }, zoom_time * 1000);
                } else {
                    all_states.attr({
                        'fill-opacity': 1
                    });
                    all_pills.attr({
                        'fill-opacity': 1
                    });
                }
            })();
            all_states.animate({
                'stroke-width': border_size * (width / original_width) * normalizing_factor * 1.25
            }, zoom_time * 1000);
        }

        function hide_and_show_after(destination) {
            if (initial_zoom_solo && initial_zoom != "-1" && destination.sm.type == "region") {
                if (initial_back) {
                    back_arrow.show();
                } else {
                    return;
                }
            } else if (destination.sm.type == "state" || destination.sm.type == "region" || initial_back) {
                back_arrow.show();
            } else if (manual_zoom && destination.sm.type != "out") {
                back_arrow.show();
            }
        }

        function zd_to_tween(bb) {
            return {
                x: bb.x,
                y: bb.y,
                w: bb.w,
                h: bb.h
            };
        }
        var end_destination;
        var zoom_tween;
        var current_viewbox;

        function zoom_to(destination, initial, callback) {
            if (last_animated) {
                last_animated.stop();
                last_animated = false;
            }
            if (currently_over && !(destination == currently_over)) {
                out.call(currently_over);
            }
            last_clicked = false;
            end_destination = destination;
            tooltip.hide();
            tooltip_up = false;
            currently_zooming = true;
            destination.sm.zooming_dimensions = get_zooming_dimensions(destination);
            var to = zd_to_tween(destination.sm.zooming_dimensions);
            var from = zd_to_tween(last_destination.sm.zooming_dimensions);
            ratio = destination.sm.zooming_dimensions.r;
            hide_and_show_before(destination, initial);

            function updateZoom(current_state) {
                current_viewbox = current_state;
                paper.setViewBox(current_state.x, current_state.y, current_state.w, current_state.h, false);
            }

            function whenDone() {
                hide_and_show_after(destination, initial);
                last_destination = destination;
                currently_zooming = false;
                on_click = false;
                update_zoom_level();
                trigger_hook("zooming_complete", []);
                if (helper.isFunction(callback)) {
                    callback();
                }
            }
            if (!vml && (!touch || zoom_mobile) && !initial) {
                tweenable = new Tweenable;
                zoom_tween = tweenable.tween({
                    from: from,
                    to: to,
                    duration: zoom_time * 1000,
                    easing: "easeOutQuad",
                    step: function(current_state) {
                        updateZoom(current_state);
                    },
                    finish: function() {
                        whenDone(to);
                    }
                });
            } else {
                current_viewbox = to;
                paper.setViewBox(to.x, to.y, to.w, to.h, false);
                whenDone();
            }
        }

        function create_bbox_state(auto) {
            var print_string = "";
            var state_bbox_array = {};
            for (var state in mapinfo.paths) {
                var path_to_add = mapinfo.paths[state];
                path_to_add = Raphael._pathToAbsolute(path_to_add);
                var bt = Raphael.pathBBox(path_to_add);
                var w = bt.x2 - bt.x;
                var r;
                if (w < 10) {
                    r = 10;
                } else {
                    r = 1;
                }
                var x = Math.round(bt.x * r) / r;
                var y = Math.round(bt.y * r) / r;
                var y2 = Math.round(bt.y2 * r) / r;
                var x2 = Math.round(bt.x2 * r) / r;
                print_string += "'" + state + "'" + ":{x: " + x + ",y:" + y + ",x2:" + x2 + ",y2:" + y2 + "},";
                state_bbox_array[state] = bt;
            }
            print_string = print_string.substring(0, print_string.length - 1);
            print_string += "}";
            if (!auto) {
                console.log("The new state_bbox_array is: \n\n{" + print_string);
            }
            return state_bbox_array;
        }

        function create_content(element) {
            var content = element.sm.description;
            var embedded_img = "data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E";
            var xmark_modern = "<img id=\"xpic_sm" + "_" + div + "\"src=\"" + embedded_img + "\" style=\"width: 18px;\" alt=\"Close\" border=\"0\" />";
            var xmark_vml = "<a style=\"line-height: 1.5\" id=\"xpic_sm" + "_" + div + "\">X</a>";
            var xmark = vml ? xmark_vml : xmark_modern;
            var url = element.sm.url ? element.sm.url : "";
            var url_sub = url;
            var js_url = url_sub.substring(0, 11) == "javascript:" ? true : false;
            var tab_click = "(function(){window.open(\"" + url + "\",\"_newtab\")})()";
            var reg_click = js_url ? "(function(){window.location.href=\"" + url + "\"})()" : "(function(){window.top.location.href=\"" + url + "\"})()";
            var js_url_clean = helper.replaceAll(url_sub, "'", "\"");
            var js_click = "(function(){" + js_url_clean + "})()";
            var upon_click = new_tab ? tab_click : reg_click;
            if (js_url) {
                upon_click = js_click;
            }
            var mobile_part = element.sm.description_mobile ? element.sm.description_mobile : "<div class=\"tt_mobile_sm\"><a class=\"btn_simplemaps\" onClick='" + upon_click + "'>" + link_text + "</a></div>";
            if (!element.sm.on_click) {
                xmark = "";
                mobile_part = "";
            }
            if (element.sm.url == "" && !element.sm.description_mobile) {
                mobile_part = "";
            }
            var content_part = content == "" ? (content_part = "") : "<div class=\"tt_custom_sm\"; />" + content + "</div>";
            return "<div class=\"tt_sm\"><div><div class=\"tt_name_sm\">" + element.sm.name + "</div><div class=\"xmark_sm\">" + xmark + "</div><div style=\"clear: both;\"></div></div>" + content_part + mobile_part + "</div></div>";
        }

        function is_forgery() {
            if (mapname != "continent") {
                return false;
            }
            var i = 0;
            for (var id in mapinfo.paths) {
                i++;
            }
            if (i > 8) {
                return true;
            } else {
                return false;
            }
        }

        function is_inside(small_element, big_element) {
            var small = small_element.sm.zooming_dimensions;
            if (small.w > big_element.sm.zooming_dimensions.w) {
                return false;
            }
            var bb = big_element.sm.bbox;
            var big = {
                x: bb.x * scale,
                y: bb.y * scale,
                x2: bb.x2 * scale,
                y2: bb.y2 * scale
            };
            small_xbar = small.x + small.w / 2;
            small_ybar = small.y + small.h / 2;
            if (small_xbar > big.x && small_ybar > big.y) {
                if (small_xbar < big.x2 && small_ybar < big.y2) {
                    return true;
                }
            }
            return false;
        }

        function create_pattern(e, par) {
            var hovering = par.hover ? "_hover" : "";
            var pattern_id = div + "_pattern_" + e.sm.id + hovering;
            var existing = document.getElementById(pattern_id);
            if (existing) {
                helper.delete_element(existing);
            }
            var svg = map_inner.firstChild;
            var SVG_NS = svg.namespaceURI;
            var defs = svg.querySelector("defs");
            var pattern = document.createElementNS(SVG_NS, "pattern");
            var id = e.sm.id;
            pattern.id = pattern_id;
            pattern.setAttribute("patternUnits", "objectBoundingBox");
            var image = document.createElementNS(SVG_NS, "image");
            var rect = document.createElementNS(SVG_NS, "rect");
            var bg_color = par.image_color ? par.image_color : par.color;
            rect.setAttribute("fill", "#ffffff");
            rect.setAttribute("opacity", "0");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", par.image_url);
            pattern.appendChild(rect);
            pattern.appendChild(image);
            defs.appendChild(pattern);
            svg.appendChild(defs);
            var image_position = par.image_position;
            var auto = par.image_size == "auto" ? true : false;
            var repeat = image_position == "repeat" ? true : false;
            var manual = image_position == "manual" ? true : false;
            var center = image_position == "center" ? true : false;
            var fill = repeat || manual || center ? false : true;
            var bbox = Raphael.pathBBox(mapinfo.paths[id]);
            var bbox_width = bbox.x2 - bbox.x;
            var bbox_height = bbox.y2 - bbox.y;
            var bbox_w2h = bbox_width / bbox_height;
            Raphael._preload(par.image_url, function() {
                var image_width = this.offsetWidth;
                var image_height = this.offsetHeight;
                var w2h = image_width / image_height;

                function get_per() {
                    var per = par.image_size;
                    if (auto) {
                        if (repeat || manual) {
                            if (w2h > 1) {
                                if (image_width > bbox_width) {
                                    per = 1;
                                } else {
                                    per = image_width / bbox_width;
                                }
                            } else {
                                if (image_height > bbox_height) {
                                    per = 1 / bbox_w2h;
                                } else {
                                    per = image_height / bbox_height / bbox_w2h;
                                }
                            }
                        } else if (center) {
                            per = w2h / bbox_w2h;
                            if (w2h > bbox_w2h) {
                                per = per;
                            } else {
                                per = 1 / per;
                            }
                        }
                    } else {
                        if (per > 1) {
                            per = par.image_size * normalizing_factor / bbox_width;
                        }
                    }
                    return per;
                }
                var per = get_per();
                var new_image_width = bbox_width * per;
                var new_image_height = new_image_width / w2h;
                var pattern_x = 0;
                var pattern_y = 0;
                var pattern_width, pattern_height;
                var image_x = 0;
                var image_y = 0;
                if (repeat) {
                    pattern_width = per;
                    pattern_height = per * bbox_w2h / w2h;
                } else if (manual) {
                    pattern_width = 1;
                    pattern_height = 1;
                    image_x = par.image_x * bbox_width;
                    image_y = par.image_y * bbox_height;
                } else if (center) {
                    pattern_width = 1;
                    pattern_height = 1;
                    image_x = 0.5 * (bbox_width - new_image_width);
                    image_y = 0.5 * (bbox_height - new_image_height);
                }
                rect.setAttribute("x", 0);
                rect.setAttribute("y", 0);
                rect.setAttribute("width", bbox_width);
                rect.setAttribute("height", bbox_height);
                rect.setAttribute("fill", bg_color);
                pattern.setAttribute("y", pattern_y);
                pattern.setAttribute("x", pattern_x);
                pattern.setAttribute("y", pattern_y);
                pattern.setAttribute("width", pattern_width);
                pattern.setAttribute("height", pattern_height);
                image.setAttribute("x", image_x);
                image.setAttribute("y", image_y);
                image.setAttribute("width", new_image_width);
                if (rotate) {
                    var cx = image_x + new_image_width * 0.5;
                    var cy = image_y + new_image_height * 0.5;
                    image.setAttribute("transform", "rotate(-" + rotate + "," + cx + "," + cy + ")");
                }
                image.setAttribute("height", new_image_height);
            });
            return "url(\"#" + pattern.id + "\")";
        }
        var state_bbox_array = false;
        var make_state, bbox_storage, state_array;

        function create_states(refresh) {
            if (!refresh) {
                bbox_storage = {};
                state_array = {};
            }
            state_bbox_array = mapinfo.state_bbox_array;
            var scaled_border_size = border_size * scale * normalizing_factor * 1.25;
            make_state = function(id) {
                var brand_new = state_array[id] ? false : true;
                var state = brand_new ? paper.path(mapinfo.paths[id]) : state_array[id];
                if (brand_new) {
                    state.sm = {
                        id: id
                    };
                }
                if (!vml) {
                    state.node.setAttribute("class", "sm_state_" + id);
                }
                var attrs = cattr[id];
                var attributes = {
                    fill: attrs.color,
                    opacity: attrs.opacity,
                    stroke: attrs.border_color,
                    cursor: "pointer",
                    'stroke-opacity': 1,
                    'stroke-width': scaled_border_size,
                    'stroke-linejoin': "round"
                };
                var border_hover_color = attrs.border_hover_color ? attrs.border_hover_color : main_settings.border_color;
                var border_hover_size = attrs.border_hover_size ? attrs.border_hover_size : border_size;
                var scaled_border_hover_size = border_hover_size * scale * normalizing_factor * 1.25;
                var over_attributes = {
                    opacity: attrs.hover_opacity,
                    fill: attrs.hover_color,
                    stroke: border_hover_color,
                    'stroke-width': scaled_border_hover_size
                };
                state.sm.image = false;
                if (attrs.image_url && !vml) {
                    var image_parameters = {
                        hover: false,
                        image_url: attrs.image_url,
                        image_size: attrs.image_size,
                        image_position: attrs.image_position,
                        image_x: attrs.image_x,
                        image_y: attrs.image_y,
                        image_color: attrs.image_color
                    };
                    var pattern_url = create_pattern(state, image_parameters);
                    state.sm.image = true;
                    attributes.fill = pattern_url;
                    if (attrs.image_hover_url) {
                        var image_parameters = {
                            hover: true,
                            image_url: attrs.image_hover_url,
                            image_size: attrs.image_hover_size,
                            image_position: attrs.image_hover_position,
                            image_x: attrs.image_hover_x,
                            image_y: attrs.image_hover_y,
                            image_color: attrs.image_hover_color
                        };
                        var pattern_url = create_pattern(state, image_parameters);
                        over_attributes.fill = pattern_url;
                    } else {
                        over_attributes.fill = pattern_url;
                    }
                }
                if (attrs.inactive) {
                    attributes.cursor = "default";
                }
                if (attrs.image_source) {
                    state.sm.ignore_hover = true;
                    attributes.fill = "url(" + directory + attrs.image_source + ")";
                }
                if ((attrs.border_hover_color || attrs.border_hover_size) && attrs.emphasize) {
                    state.sm.emphasizable = true;
                } else {
                    state.sm.emphasizable = false;
                }
                state.sm.border_hover_size = border_hover_size;
                state.attr(attributes);
                state.transform(transform);
                state.sm.attributes = attributes;
                state.sm.over_attributes = over_attributes;
                state.sm.description = attrs.description;
                state.sm.adjacent_attributes = {
                    'fill-opacity': adjacent_opacity
                };
                state.sm.hide = attrs.hide;
                state.sm.hide_label = attrs.hide_label;
                if (brand_new) {
                    state.sm.region = false;
                }
                state.sm.name = attrs.name ? attrs.name : mapinfo.names[id];
                if (!state.sm.name) {
                    state.sm.name = id;
                }
                state.sm.url = attrs.url;
                state.sm.inactive = attrs.inactive;
                state.sm.on_click = is_onclick(attrs.popup);
                state.sm.popup_off = is_off(attrs.popup);
                state.sm.labels = [];
                state.sm.zp = attrs.zoom_percentage;
                state.sm.zoomable = attrs.zoomable;
                state.sm.description_mobile = attrs.description_mobile;
                state.sm.type = "state";
                state.sm.hide_labels = attrs.hide_label;
                state.sm.content = create_content(state);
                var sba = state_bbox_array[id];
                if (!sba) {
                    sba = Raphael.pathBBox(mapinfo.paths[id]);
                }
                var bbox = {
                    x: sba.x,
                    x2: sba.x2,
                    y: sba.y,
                    y2: sba.y2
                };
                state.sm.bbox = bbox;
                state.sm.bbox.width = bbox.x2 - bbox.x;
                state.sm.bbox.height = bbox.y2 - bbox.y;
                if (state.sm.hide) {
                    state.hide();
                } else {
                    if (brand_new) {
                        all_visible_states.push(state);
                    }
                }
                if (brand_new) {
                    state_array[id] = state;
                    all_states.push(state);
                }
            };
            for (var id in mapinfo.paths) {
                make_state(id);
            }
            all_states.hide();
        }

        function style_background() {
            background_color.attr({
                fill: main_settings.background_color,
                'fill-opacity': opacity,
                stroke: "none"
            });
        }
        var region_array, last_destination, destination;
        var initial_zoom_state = false;
        var initial_zoom_manual;

        function create_regions(refresh) {
            if (!refresh) {
                region_array = {};
            }
            if (regions) {
                for (var id in regions) {
                    var attrs = rattr[id];
                    var region_object = regions[id];
                    var region = refresh ? region_array[id] : paper.set();
                    if (!refresh) {
                        region.sm = {};
                        region.sm.states = [];
                        if (region_array[id]) {
                            console.log("Duplicate Regions");
                            continue;
                        }
                        var all_bb = [];
                        for (var i = 0; i < region_object.states.length; i++) {
                            var state_id = region_object.states[i];
                            var state = state_array[state_id];
                            if (!state) {
                                console.log(state_id + " does not exist");
                                continue;
                            }
                            if (state.sm.region) {
                                console.log(state.sm.name + " already assigned to a region");
                                continue;
                            }
                            state.sm.region = id;
                            region.sm.states.push(state_id);
                            if (!(vml && state.sm.ignore_hover && (attrs.color || attrs.hover_color))) {
                                region.push(state);
                            }
                            all_bb.push(state.sm.bbox);
                        }
                        if (attrs.x && attrs.y && attrs.x2 && attrs.y2) {
                            all_bb = [{
                                x: attrs.x,
                                y: attrs.y,
                                x2: attrs.x2,
                                y2: attrs.y2
                            }];
                        }
                        region.sm.bbox = helper.bbox_union(all_bb);
                    }
                    var attributes = {
                        'fill-opacity': attrs.opacity,
                        cursor: "pointer"
                    };
                    var over_attributes = {
                        'fill-opacity': attrs.hover_opacity
                    };
                    if (attrs.color) {
                        attributes.fill = attrs.color;
                    }
                    if (attrs.hover_color) {
                        over_attributes.fill = attrs.hover_color;
                    }
                    if (attrs.inactive) {
                        attributes.cursor = "default";
                    }
                    region.sm.attributes = attributes;
                    region.sm.name = region_object.name;
                    region.sm.description = attrs.description;
                    region.sm.description_mobile = attrs.description_mobile;
                    region.sm.url = attrs.url;
                    region.sm.labels = paper.set();
                    region.sm.on_click = is_onclick(attrs.popup);
                    region.sm.content = create_content(region);
                    region.sm.over_attributes = over_attributes;
                    region.sm.adjacent_attributes = {
                        'fill-opacity': adjacent_opacity
                    };
                    region.sm.zoomable = attrs.zoomable;
                    region.sm.popup_off = is_off(attrs.popup);
                    region.sm.zp = attrs.zoom_percentage;
                    region.sm.inactive = attrs.inactive;
                    region.sm.type = "region";
                    region.sm.id = id;
                    if (!refresh) {
                        all_regions.push(region);
                        region_array[id] = region;
                    }
                    region.sm.zooming_dimensions = get_zooming_dimensions(region);
                }
            }
            if (!refresh) {
                region_array[-1] = {};
                var out = region_array[-1];
                out.sm = {};
                out.sm.type = "out";
                out.sm.zp = 1;
                var bbox = helper.clone(initial_view);
                bbox.width = bbox.x2 - bbox.x;
                bbox.height = bbox.y2 - bbox.y;
                out.sm.bbox = bbox;
                out.sm.zooming_dimensions = get_zooming_dimensions(out);
                last_destination = out;
                if (typeof initial_zoom === "object") {
                    initial_zoom_manual = {};
                    initial_zoom_manual.sm = {
                        type: "manual",
                        zp: 1,
                        bbox: initial_zoom
                    };
                    initial_zoom_manual.sm.zooming_dimensions = get_zooming_dimensions(initial_zoom_manual);
                    initial_zoom = -1;
                    initial_zoom_solo = false;
                } else if (initial_zoom != -1 && !(initial_zoom in region_array)) {
                    if (initial_zoom in state_array) {
                        initial_zoom_state = state_array[initial_zoom];
                        initial_zoom_solo = false;
                    } else {
                        console.log("The initial_zoom is not the id of a region or state");
                    }
                    initial_zoom = -1;
                }
                if (fly_in) {
                    region_array[-2] = {};
                    var destination = region_array[-2];
                    destination.sm = {
                        type: "manual",
                        zp: 1
                    };
                    var ivd = get_zooming_dimensions(region_array[initial_zoom]);
                    var w = ivd.w;
                    var h = ivd.h;
                    var xinc = ivd.w * (fly_in - 1) * 0.5;
                    var yinc = ivd.h * (fly_in - 1) * 0.5;
                    destination.sm.zooming_dimensions = {
                        x: ivd.x - xinc,
                        y: ivd.y - yinc,
                        w: w * fly_in,
                        h: h * fly_in,
                        r: fly_in
                    };
                }
            }
        }

        function create_lines() {
            var lines = mapdata.lines ? mapdata.lines : mapdata.borders;
            if (!lines) {
                return;
            }
            for (i in lines) {
                var line = lines[i];
                var attrs = ela[i];
                var b = paper.path(line.path);
                b.transform(transform);
                b.attr({
                    stroke: attrs.color,
                    fill: "none",
                    cursor: "pointer",
                    'stroke-dasharray': [attrs.dash],
                    'stroke-width': attrs.size,
                    'stroke-linejoin': "round",
                    'stroke-miterlimit': 4
                });
                b.sm = {};
                b.sm.bbox = b.getBBox(true);
                all_external_lines.push(b);
            }
            all_external_lines.hide();
        }

        function get_label_bbox(e) {
            var bb = e.getBBox(true);
            if (vml) {
                var bb2 = e._getBBox(true);
                bb.height = bb2.height;
            }
            var xa = 0.5 * bb.width;
            var ya = 0.5 * bb.height;
            var pt = e.sm.point0;
            var new_bb = {
                x: pt.x - xa,
                y: pt.y - ya,
                x2: pt.x + xa,
                y2: pt.y + ya,
                width: bb.width,
                height: bb.height
            };
            return new_bb;
        }
        var label_array;
        var label_set_array;
        var make_label;
        var pill_array;

        function create_labels() {
            helper.clear_sets([all_labels, all_lines, all_pills]);
            label_array = {};
            pill_array = {};
            label_set_array = {};
            label_attributes = label_attributes.reverse();
            make_label = function(id) {
                var attrs = label_attributes[id];
                var force_scale = false;
                var already_rotated = false;
                if (!label_attributes.hasOwnProperty(id)) {
                    return;
                }
                var brand_new = label_array[id] ? false : true;
                var label_set = paper.set();
                var point0 = {
                    x: attrs.x * 1,
                    y: attrs.y * 1
                };
                var point = {};
                var parent = false;
                var resize_parent = false;
                if (attrs.parent_type == "state") {
                    parent = state_array[attrs.parent_id];
                } else if (attrs.parent_type == "region") {
                    parent = region_array[attrs.parent_id];
                } else if (attrs.parent_type == "location") {
                    parent = location_array[attrs.parent_id];
                }
                if (!attrs.x && !attrs.y && parent) {
                    if (parent.sm.type == "location") {
                        already_rotated = true;
                        point.x = parent.sm.x;
                        point.y = parent.sm.y;
                        point0 = parent.sm.point0;
                        force_scale = true;
                        if (parent.sm.auto_size) {
                            resize_parent = true;
                        }
                    }
                }
                if (!parent) {
                    console.log("The following object does not exist: " + id);
                    return;
                }
                if (attrs.name == "Not Named" && parent) {
                    attrs.name = parent.sm.id;
                }
                if (brand_new) {
                    if (!already_rotated) {
                        var rotated = helper.rotate([attrs.x, attrs.y], transform);
                        point = {
                            x: rotated[0],
                            y: rotated[1]
                        };
                    }
                    var label = paper.text(point.x, point.y, attrs.name);
                    label_array[id] = label;
                } else {
                    var label = label_array[id];
                }
                label.sm = {};
                label.sm.hide = attrs.hide;
                if (parent && (parent.sm.hide_label || parent.sm.hide)) {
                    label.sm.hide = true;
                }
                label.sm.parent = parent;
                parent.sm.labels.push(label);
                if (parent.sm.region) {
                    region_array[parent.sm.region].sm.labels.push(label);
                }
                var attributes = {
                    'stroke-width': 0,
                    fill: attrs.color,
                    'font-size': attrs.size,
                    'font-weight': "bold",
                    cursor: "pointer",
                    'font-family': attrs.font_family,
                    'text-anchor': attrs.anchor
                };
                var over_attributes = {
                    fill: attrs.hover_color
                };
                var out_attributes = {
                    fill: attrs.color
                };
                if (parent.sm.inactive) {
                    attributes.cursor = "default";
                }
                label.attr(attributes);
                label.sm.attributes = attributes;
                label.sm.over_attributes = over_attributes;
                label.sm.out_attributes = out_attributes;
                label.sm.type = "label";
                label.sm.id = id;
                label.sm.scale = force_scale ? force_scale : attrs.scale;
                label.sm.scale_limit = attrs.scale_limit;
                label.sm.x = point.x;
                label.sm.y = point.y;
                label.sm.point0 = point0;
                label.sm.line_x = attrs.line_x;
                label.sm.line_y = attrs.line_y;
                label.sm.line = false;
                label.sm.rotate = attrs.rotate;
                label.transform(scale_t(label, scale));
                if (!attrs.display) {
                    if (attrs.parent_type == "region") {
                        label.sm.display = "out";
                    } else if (attrs.parent_type == "location") {
                        label.sm.display = parent.sm.display;
                    } else {
                        label.sm.display = main_settings.labels_display ? main_settings.labels_display : "all";
                    }
                } else {
                    label.sm.display = attrs.display;
                }
                if (attrs.line || attrs.pill || resize_parent) {
                    label.sm.bbox = get_label_bbox(label);
                }
                if (attrs.line) {
                    var line_path = get_line_path(label);
                    var line = paper.path(line_path);
                    var line_size = attrs.line_size * normalizing_factor * scale * 1.25;
                    var line_attrs = {
                        stroke: attrs.line_color,
                        cursor: "pointer",
                        'stroke-width': line_size
                    };
                    line.attr(line_attrs);
                    line.sm = {};
                    line.sm.type = "label";
                    label.sm.pill = false;
                    line.sm.size = attrs.line_size;
                    line.sm.id = id;
                    label.sm.line = line;
                    all_lines.push(line);
                    label_set.push(line);
                }
                if (parent.sm.type == "state" && attrs.pill) {
                    var label_bbox = label.sm.bbox;
                    var p = 0.15;
                    var calculated_width = label_bbox.width * (1 + p * 3);
                    var pill_width = attrs.width ? attrs.width : calculated_width;
                    var pill_height = label_bbox.height * (1 + p);
                    var x = label.sm.x - 0.5 * pill_width;
                    var y = label.sm.y - 0.5 * pill_height;
                    var r = pill_height / 5;
                    if (pill_array[id]) {
                        var pill = pill_array[id];
                    } else {
                        var pill = paper.rect(x, y, pill_width, pill_height, r);
                        pill_array[id] = pill;
                    }
                    pill.transform(scale_t(label, scale));
                    pill.sm = {};
                    pill.sm.parent = parent;
                    pill.sm.attributes = helper.clone(parent.sm.attributes);
                    if (parent.sm.image) {
                        pill.sm.attributes.fill = cattr[parent.sm.id].color;
                    }
                    pill.sm.over_attributes = helper.clone(parent.sm.over_attributes);
                    if (parent.sm.image) {
                        pill.sm.over_attributes.fill = cattr[parent.sm.id].hover_color;
                    }
                    pill.sm.adjacent_attributes = helper.clone(parent.sm.adjacent_attributes);
                    pill.attr(pill.sm.attributes);
                    if (helper.x_in_array(label.sm.display, ["state", "all"])) {
                        parent.sm.bbox = helper.bbox_union([parent.sm.bbox, label.sm.bbox]);
                    }
                    if (helper.x_in_array(label.sm.display, ["region", "all"]) && parent.sm.region) {
                        var region = region_array[parent.sm.region];
                        region.sm.bbox = helper.bbox_union([region.sm.bbox, label.sm.bbox]);
                        region.sm.zooming_dimensions = false;
                        region.sm.zooming_dimensions = get_zooming_dimensions(region);
                    }
                    label.sm.pill = pill;
                    all_pills.push(pill);
                    label_set.push(pill);
                    label_set.push(label);
                } else {
                    label_set.push(label);
                }
                if (label.sm.display != "out" && label.sm.display != "all" || label.sm.hide) {
                    label_set.hide();
                } else {
                    all_visible_labels.push(label_set);
                }
                if (label.sm.parent.sm.type == "location" && !label.sm.line) {
                    location_labels.push(label_set);
                }
                all_labels.push(label_set);
                label_set_array[id] = label_set;
                if (!vml) {
                    label.node.setAttribute("class", "sm_label_" + id);
                }
                if (resize_parent) {
                    var padding = main_settings.location_auto_padding ? 1 + main_settings.location_auto_padding * 2 : 1.3;
                    var size = padding * label.sm.bbox.width / normalizing_factor;
                    var lct = label.sm.parent;
                    var old_labels = lct.sm.labels;
                    var shape = lct.sm.shape_type;
                    if (shape == "triangle") {
                        size = size * 1.3;
                    } else if (shape == "star") {
                        size = size * 2;
                    }
                    var lct_id = lct.sm.id;
                    lattr[lct_id].size = size;
                    make_location(lct_id);
                    var lct = location_array[lct_id];
                    label.sm.parent = lct;
                    lct.sm.labels = old_labels;
                    lct.sm.labels.push(label);
                    lct.sm.auto_size = true;
                }
            };
            for (var id in label_attributes) {
                make_label(id);
            }
            all_labels.hide();
        }

        function get_line_path(label) {
            var bb = label.sm.bbox;
            var w = bb.x2 - bb.x;
            var h = bb.y2 - bb.y;
            var r = label.sm.scale ? ratio : 1;
            var x_adj = 0.5 * (1 - r) * w;
            var y_adj = 0.5 * (1 - r) * h;
            var x = label.sm.line_x;
            var y = label.sm.line_y;
            var missing = !x || !y;
            var parent_type = label.sm.parent.sm.type;
            if (parent_type == "location" && missing) {
                x = label.sm.parent.sm.point0.x;
                y = label.sm.parent.sm.point0.y;
            } else if (parent_type == "state" && missing) {
                var pbb = label.sm.parent.sm.bbox;
                x = 0.5 * (pbb.x2 + pbb.x);
                y = 0.5 * (pbb.y2 + pbb.y);
            }
            var current_location = {
                x: x,
                y: y
            };
            var pts = [];
            pts.push({
                x: bb.x2 - x_adj,
                y: 0.5 * (bb.y + bb.y2)
            });
            pts.push({
                x: bb.x + x_adj,
                y: 0.5 * (bb.y + bb.y2)
            });
            pts.push({
                x: 0.5 * (bb.x + bb.x2),
                y: bb.y + y_adj
            });
            pts.push({
                x: 0.5 * (bb.x + bb.x2),
                y: bb.y2 - y_adj
            });
            var winner = {};
            for (var k in pts) {
                var current_label = pts[k];
                var distance_between = helper.distance(current_label, current_location);
                if (k == 0 || distance_between < winner.distance) {
                    winner.label = current_label;
                    winner.location = current_location;
                    winner.distance = distance_between;
                }
            }
            return helper.linePath(winner.label.x, winner.label.y, winner.location.x, winner.location.y);
        }

        function scale_t(e, s, t, x, y, r) {
            var cx = x === undefined ? e.sm.x : x;
            var cy = y === undefined ? e.sm.y : y;
            if (t === undefined) {
                t = "0,0";
            }
            if (r === undefined) {
                r = e.sm.rotate;
            }
            return "t " + t + " s" + s + "," + s + "," + cx + "," + cy + "r" + r;
        }
        var location_array;
        var make_location;

        function create_locations(refresh) {
            var shape_paths = {
                triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
                diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
                marker: "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
                heart: "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
                star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377"
            };
            for (var id in custom_shapes) {
                shape_paths[id] = custom_shapes[id];
            }
            var supported_shapes = [];
            for (var id in shape_paths) {
                supported_shapes.push(id);
            }
            helper.clear_sets([all_locations]);
            location_array = {};
            make_location = function(id) {
                var position = "center";
                var attrs = lattr[id];
                if (attrs.type != "image") {
                    var attributes = {
                        'stroke-width': attrs.border * scale * normalizing_factor,
                        stroke: attrs.border_color,
                        fill: attrs.color,
                        opacity: attrs.opacity,
                        cursor: "pointer"
                    };
                    var over_attributes = {
                        'stroke-width': attrs.hover_border * scale * normalizing_factor,
                        stroke: attrs.border_color,
                        fill: attrs.hover_color,
                        opacity: attrs.hover_opacity,
                        cursor: "pointer"
                    };
                } else {
                    position = attrs.image_position;
                    var attributes = {
                        cursor: "pointer"
                    };
                    var over_attributes = {
                        cursor: "pointer"
                    };
                }
                if (attrs.inactive) {
                    attributes.cursor = "default";
                }
                var shape_type = lattr[id].type;
                var size = attrs.size * normalizing_factor;
                if (attrs.x && attrs.y) {
                    var point0 = {};
                    point0.x = attrs.x, point0.y = attrs.y;
                } else {
                    var point0 = getxy(attrs.lat, attrs.lng);
                }
                var rotated = helper.rotate([point0.x, point0.y], transform);
                var point = {
                    x: rotated[0],
                    y: rotated[1]
                };
                if (attrs.size == "auto") {
                    var l = {
                        sm: {}
                    };
                    l.sm.display = attrs.display;
                    l.sm.auto_size = true;
                    l.sm.type = "location";
                    l.sm.hide_label = false;
                    l.sm.labels = [];
                    l.sm.point0 = point0;
                    l.sm.x = point.x;
                    l.sm.y = point.y;
                    l.sm.shape_type = shape_type;
                    l.sm.id = id;
                    location_array[id] = l;
                    return;
                }
                if (shape_type == "circle") {
                    var location = paper.circle(point.x, point.y, size * 0.5);
                    var bbox = {
                        x: point.x - size * 0.5 * ratio,
                        y: point.y - size * 0.5 * ratio,
                        x2: point.x + size * 0.5 * ratio,
                        y2: point.y + size * 0.5 * ratio
                    };
                } else if (helper.x_in_array(shape_type, supported_shapes)) {
                    var cs = size;
                    var transformation = "S" + cs + "," + cs + ",0,0 T" + point.x + "," + point.y;
                    var path = Raphael.transformPath(shape_paths[shape_type], transformation).toString() + "Z";
                    if (shape_type == "marker") {
                        position = "bottom-center";
                    }
                    var bbox = Raphael.pathBBox(path);
                    var location = paper.path(path);
                } else if (shape_type == "image") {
                    var image_location = attrs.image_url ? attrs.image_url : directory + attrs.image_source;
                    var location = paper.image(image_location, 0, 0);
                    location.sm = {};
                    var bbox = false;
                    Raphael._preload(image_location, function() {
                        var iwh = this.width / this.height;
                        var new_height = size;
                        var new_width = new_height * iwh;
                        var new_x = point.x - new_width / 2;
                        var new_y = position == "bottom-center" ? point.y - new_height : point.y - new_height / 2;
                        location.attr({
                            height: new_height,
                            width: new_width,
                            x: new_x,
                            y: new_y
                        });
                        location.sm.bbox = {
                            x: new_x,
                            y: new_y,
                            x2: new_x + new_width,
                            y2: new_y + new_height
                        };
                    });
                } else {
                    var new_height = size;
                    var new_width = new_height;
                    var new_x = point.x - new_width / 2;
                    var new_y = point.y - new_height / 2;
                    var location = paper.rect(new_x, new_y, new_width, new_height);
                    var bbox = {
                        x: new_x,
                        y: new_y,
                        x2: new_x + new_width,
                        y2: new_y + height
                    };
                }
                location.sm = {};
                location.sm.attributes = attributes;
                location.attr(attributes);
                location.sm.original_transform = transform;
                location.sm.over_attributes = over_attributes;
                location.sm.id = id;
                location.sm.name = attrs.name;
                location.sm.scale = attrs.scale;
                location.sm.scale_limit = attrs.scale_limit;
                location.sm.position = position;
                location.sm.url = attrs.url;
                location.sm.type = "location";
                location.sm.shape_type = shape_type;
                location.sm.description = attrs.description;
                location.sm.description_mobile = attrs.description_mobile;
                location.sm.inactive = attrs.inactive;
                location.sm.on_click = is_onclick(attrs.popup);
                location.sm.popup_off = is_off(attrs.popup);
                location.sm.pulse = attrs.pulse;
                var underlay = attrs.position == "bottom" ? true : false;
                location.sm.underlay = underlay;
                location.sm.pulse_speed = attrs.pulse_speed;
                location.sm.pulse_size = attrs.pulse_size;
                location.sm.pulse_color = attrs.pulse_color ? attrs.pulse_color : attrs.color;
                location.sm.x = point.x;
                location.sm.y = point.y;
                location.sm.point0 = point0;
                location.sm.bbox = bbox;
                location.sm.labels = [];
                location.sm.size = size;
                location.sm.hide = attrs.hide;
                location.sm.display = attrs.display;
                location.transform(scale_t(location, ratio * scale));
                if (location.sm.display == "region" || location.sm.display == "state" || attrs.hide) {
                    location.hide();
                }
                location.sm.content = create_content(location);
                if (underlay) {
                    bottom_locations.push(location);
                } else {
                    top_locations.push(location);
                }
                all_locations.push(location);
                location_array[id] = location;
                if (!vml) {
                    location.node.setAttribute("class", "sm_location_" + id);
                }
            };
            for (var id in locations) {
                make_location(id);
            }
        }

        function state_or_region(state) {
            var level = api_object.zoom_level;
            var level_id = api_object.zoom_level_id;
            var region = state.sm.region ? region_array[state.sm.region] : false;
            if (region) {
                if (level == "out") {
                    return region;
                } else if (level == "region") {
                    if (level_id == region.sm.id) {
                        return state;
                    } else {
                        return region;
                    }
                } else if (level == "state") {
                    var current_state = state_array[level_id];
                    if (current_state.sm.region === region.sm.id) {
                        return state;
                    } else {
                        return region;
                    }
                } else if (level == "manual") {
                    if (ratio > region.sm.zooming_dimensions.r) {
                        return region;
                    } else {
                        return state;
                    }
                }
            } else {
                return state;
            }
        }

        function is_adjacent(element) {
            var level = api_object.zoom_level;
            var level_id = api_object.zoom_level_id;
            if (level == "state") {
                if (level_id != element.sm.id) {
                    return true;
                } else {
                    return false;
                }
            } else if (level == "region") {
                var region = element.sm.region ? region_array[element.sm.region] : false;
                if (region) {
                    if (level_id == region.sm.id) {
                        return false;
                    }
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }
        var update_attr = function(e, pos, anim, attrs) {
            if (anim == undefined) {
                anim = false;
            }
            if (attrs == undefined) {
                attrs = false;
            }
            if (!attrs) {
                if (pos == "over") {
                    attrs = e.sm.over_attributes;
                } else if (pos == "adjacent") {
                    attrs = e.sm.adjacent_attributes;
                } else {
                    attrs = e.sm.attributes;
                }
            }
            if (!anim || e.sm.image) {
                e.attr(attrs);
            } else {
                e.animate(attrs, fade_time);
            }
        };
        var update_pill_attr = function(pill, pos, override) {
            if (override == undefined) {
                override = false;
            }
            if (override == "state") {
                var parent = pill.sm.parent;
            } else if (override == "region") {
                var parent = region_array[pill.sm.parent.sm.region];
            } else {
                var parent = state_or_region(pill.sm.parent);
            }
            var attrs;
            if (pos == "over") {
                attrs = helper.clone(parent.sm.over_attributes);
            } else if (pos == "adjacent") {
                attrs = helper.clone(parent.sm.adjacent_attributes);
            } else {
                attrs = helper.clone(parent.sm.attributes);
            }
            if (parent.sm.image && parent.sm.type == "state") {
                var state_attrs = cattr[parent.sm.id];
                if (pos == "over") {
                    attrs.fill = state_attrs.hover_color;
                } else {
                    attrs.fill = state_attrs.color;
                }
            }
            update_attr(pill, pos, false, attrs);
        };

        function highlight_labels(element, type, adjacent, override) {
            if (!element.sm.labels) {
                return;
            } else {
                var labels = element.sm.labels;
            }
            labels.forEach(function(label) {
                if (!label.sm) {
                    return;
                }
                var pill = label.sm.pill;
                if (type == "over") {
                    label.stop();
                    update_attr(label, "over");
                    if (pill) {
                        update_pill_attr(pill, "over");
                    }
                } else if (type == "reset" || type == "out") {
                    update_attr(label, "out");
                    if (pill) {
                        update_pill_attr(pill, "out", override);
                        if (adjacent) {
                            update_pill_attr(pill, "adjacent", override);
                        }
                    }
                }
            });
        }

        function labels_inactive(element) {
            if (!element.sm.labels) {
                return;
            } else {
                var labels = element.sm.labels;
            }
            labels.forEach(function(label) {
                if (element.sm.inactive) {
                    label.attr({
                        cursor: "default"
                    });
                } else {
                    label.attr({
                        cursor: "pointer"
                    });
                }
            });
        }
        var inserting = false;

        function emphasize(element) {
            if (element.sm.type != "state") {
                return;
            }
            if (!element.sm.emphasizable) {
                return;
            }
            inserting = true;
            element.insertBefore(all_visible_states);
            setTimeout(function() {
                inserting = false;
            }, 1);
        }
        var currently_over = false;
        var pulse;
        var last_animated = false;
        var region_click;
        var label_click;
        var click;
        var over;
        var out;
        var background_click;
        var label_over;
        var label_out;
        var back_click;
        var back_click_handler;

        function create_event_handlers() {
            label_over = function() {
                if (this.sm.parent) {
                    over.call(this.sm.parent);
                }
            };
            label_out = function() {
                if (this.sm.parent) {
                    out.call(this.sm.parent);
                }
            };
            label_click = function(e) {
                if (this.sm.parent) {
                    click.call(this.sm.parent, e);
                }
            };
            pulse = function(e, manual) {
                if (!e.sm.pulse && !manual) {
                    return;
                }
                var type = e.sm.shape_type;
                if (e.sm.type != "location" || type == "image" || ratio < 0.05) {
                    return;
                }
                var pulse = e.clone();
                top_locations.toFront();
                location_labels.toFront();
                var mag = 1 * e.sm.pulse_size;
                var stroke_width = e.attrs['stroke-width'];
                var anim_to = {
                    'stroke-width': stroke_width * 4,
                    'stroke-opacity': 0
                };
                pulse.attr({
                    'fill-opacity': 0,
                    stroke: e.sm.pulse_color
                });
                var callback = function() {
                    pulse.remove();
                };
                var r = e.sm.scale ? ratio : 1;
                var ty = (mag - 1) * 0.5 * e.sm.size * r * scale;
                var pulse_t = e.sm.position == "bottom-center" ? scale_t(e, r * scale * mag, "0," + ty) : scale_t(e, r * scale * mag);
                anim_to.transform = pulse_t;
                pulse.animate(anim_to, e.sm.pulse_speed * 1000, "ease-out", callback);
            };
            over = function() {
                xy_hook_check();
                if (!this.id && !this.type == "set") {
                    return;
                }
                if (inserting || no_tooltips) {
                    return;
                }
                var element = state_or_region(this);
                if (element.sm.on_click) {
                    on_click = true;
                }
                popup_off = element.sm.popup_off;
                if (currently_panning || currently_pinching || currently_zooming || tooltip_up && on_click) {
                    return;
                }
                if (currently_over && !tooltip_manual) {
                    return false;
                }
                currently_over = this;
                if (!element) {
                    return;
                }
                labels_inactive(element);
                if (element.sm.inactive) {
                    return;
                }
                emphasize(element);
                over_hook(element);
                if (!on_click) {
                    tooltip.show(element);
                    element.stop();
                    if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                        return;
                    }
                    if (!element.sm.ignore_hover) {
                        update_attr(element, "over");
                        highlight_labels(element, "over");
                        pulse(element);
                    }
                } else {
                    if (!tooltip_up) {
                        element.stop();
                        if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                            return;
                        }
                        if (!element.sm.ignore_hover) {
                            update_attr(element, "over");
                            pulse(element);
                        }
                        highlight_labels(element, "over");
                    }
                }
            };
            var reset_appearance = function(element, callback) {
                tooltip.hide();
                if (is_adjacent(element)) {
                    if (!element.sm.ignore_hover) {
                        element.animate(element.sm.attributes, fade_time, whenDone);
                    }
                    element.animate(element.sm.adjacent_attributes, fade_time, whenDone);
                    highlight_labels(element, "out", true);
                } else {
                    if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                        return;
                    }
                    if (!element || !element.sm) {
                        return;
                    }
                    if (!element.sm.ignore_hover) {
                        element.animate(element.sm.attributes, fade_time, whenDone);
                    }
                    highlight_labels(element, "out");
                }

                function whenDone() {
                    if (helper.isFunction(callback)) {
                        callback();
                    }
                }
            };
            out = function(force, callback) {
                if (currently_zooming || no_tooltips) {
                    return;
                }
                if (!tooltip_up) {
                    on_click = false;
                }
                currently_over = false;
                if (!this.id && !this.type == "set") {
                    return;
                }
                var element = state_or_region(this);
                if (!element || element.sm.inactive) {
                    return;
                }
                out_hook(element);
                if (!on_click) {
                    tooltip.hide();
                    if (is_adjacent(element)) {
                        if (currently_zooming) {
                            return false;
                        }
                        if (!element.sm.ignore_hover) {
                            update_attr(element, "out", true);
                        }
                        update_attr(element, "adjacent", true);
                        highlight_labels(element, "out", true);
                    } else {
                        if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {
                            return;
                        }
                        if (!element.sm.ignore_hover) {
                            update_attr(element, "out", true);
                        }
                        highlight_labels(element, "out");
                    }
                } else {
                    if (!tooltip_up || force === true) {
                        reset_appearance(element, callback);
                        last_animated = element;
                    }
                }
            };
            click = function(e) {
                if (currently_zooming || currently_panning || currently_pinching) {
                    return;
                }
                var element = state_or_region(this);
                if (element.sm.inactive) {
                    return;
                }
                preclick_hook(element, e);
                if (api_object.ignore_clicks) {
                    return;
                }
                on_click = element.sm.on_click;
                if (e) {
                    if (tooltip_up && e.type == "touchend") {
                        return;
                    }
                    if (!tooltip_up && e.type == "touchstart") {
                        return;
                    }
                }
                if (on_click) {
                    tooltip.update_pos();
                }
                popup_off = element.sm.popup_off;
                if (element.sm.zoomable && (element.sm.type == "region" || last_destination != element || element.sm.type == "out")) {
                    zoomable_click_hook(element, e);
                    tooltip.hide();
                    tooltip_up = false;
                    if (last_clicked) {
                        out.call(last_clicked);
                        setTimeout(function() {
                            zoom_to(element);
                        }, fade_time);
                    } else {
                        zoom_to(element);
                    }
                } else if (!on_click) {
                    click_hook(element, e);
                    var link = element.sm.url;
                    if (link != "" && !no_urls) {
                        var js_url = link.substring(0, 10) == "javascript" ? true : false;
                        if (!new_tab || js_url) {
                            if (js_url) {
                                window.location.href = link;
                            } else {
                                window.top.location.href = link;
                            }
                            return;
                        } else {
                            window.open(link, "_newtab");
                            tooltip.hide();
                            return;
                        }
                    }
                } else {
                    if (last_clicked != element && last_clicked) {
                        reset_appearance(last_clicked);
                    }
                    click_hook(element, e);
                    if (e) {
                        var coords = get_coordinates(e);
                        tooltip.pos(e, {
                            l: coords.x,
                            u: coords.y
                        });
                    }
                    tooltip.show(element);
                    tooltip_up = true;
                    highlight_labels(element, "over");
                    pulse(element);
                    if (vml && element.sm.type == "location" && element.sm.shape_type == "image") {} else {
                        if (!element.sm.ignore_hover) {
                            element.attr(element.sm.over_attributes);
                        }
                    }
                    last_clicked = element;
                    var close_image = document.getElementById("xpic_sm" + "_" + div);
                    if (close_image) {
                        close_image.onclick = function() {
                            tooltip.hide();
                            tooltip_up = false;
                            if (last_clicked.sm) {
                                out.call(last_clicked);
                            }
                            on_click = false;
                            trigger_hook("close_popup", []);
                        };
                    }
                }
            };
            back_click = function(callback) {
                if (typeof callback === "undefined") {
                    callback = false;
                }
                trigger_hook("back", []);
                if ((last_destination.sm.type == "out" || last_destination.sm.type == "region" && initial_zoom_solo) && initial_back) {
                    window.location.href = "javascript:" + initial_back;
                } else if (incremental && last_destination.sm.type == "state" && last_destination.sm.region) {
                    if (last_clicked && tooltip_up) {
                        out.call(last_clicked, true, function() {
                            zoom_to(region_array[last_destination.sm.region]);
                        });
                    } else {
                        zoom_to(region_array[last_destination.sm.region], false, callback);
                    }
                } else {
                    var inside = is_inside(last_destination, region_array[initial_zoom]);
                    var region = last_destination.sm.type == "manual" && inside ? region_array[initial_zoom] : region_array[-1];
                    if (last_clicked && tooltip_up) {
                        out.call(last_clicked, true, function() {
                            zoom_to(region);
                        });
                    } else {
                        zoom_to(region, false, callback);
                    }
                }
            };
            back_click_handler = function() {
                back_click();
            };
        }

        function get_coordinates(e) {
            if (e.touches) {
                var touch_obj = e.changedTouches ? e.changedTouches[0] : e.touches[0];
                return {
                    x: touch_obj.clientX,
                    y: touch_obj.clientY
                };
            } else {
                var y = ie ? e.clientY + document.documentElement.scrollTop : e.pageY;
                var x = ie ? e.clientX + document.documentElement.scrollLeft : e.pageX;
                return {
                    x: x,
                    y: y
                };
            }
        }

        function setup_panning() {
            background_click = function() {
                if (on_click) {
                    tooltip.hide();
                    if (last_clicked) {
                        reset_appearance(last_clicked);
                    }
                    tooltip_up = false;
                    on_click = false;
                }
            };

            function get_new_viewbox(e) {
                var coords = get_coordinates(e);
                var newX = coords.x;
                var newY = coords.y;
                dX = (startX - newX) * start.r;
                dY = (startY - newY) * start.r;
                var pan_threshold = 5 * start.r;
                if (Math.abs(dX) > pan_threshold || Math.abs(dY) > pan_threshold) {
                    currently_panning = true;
                }
                return {
                    x: start.x + dX,
                    y: start.y + dY,
                    w: start.w,
                    h: start.h,
                    r: start.r
                };
            }
            var mousedown = false;
            var start;
            var startX;
            var startY;

            function start_pan(e) {
                if (tooltip_up) {
                    return false;
                }
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                start = {
                    x: current_viewbox.x,
                    y: current_viewbox.y,
                    w: current_viewbox.w,
                    h: current_viewbox.h,
                    r: current_viewbox.w / original_width / scale
                };
                mousedown = true;
                var coords = get_coordinates(e);
                startX = coords.x;
                startY = coords.y;
                tooltip.hide();
                tooltip.pos(e, {
                    l: startX,
                    u: startY
                });
            }

            function during_pan(e) {
                if (!mousedown) {
                    return;
                }
                if (e.touches && e.touches.length > 1) {
                    return;
                }
                var v = get_new_viewbox(e);
                paper.setViewBox(v.x, v.y, v.w, v.h);
            }

            function finish_pan(e) {
                if (!mousedown || !currently_panning) {
                    currently_panning = false;
                    mousedown = false;
                    return;
                }
                var v = get_new_viewbox(e);
                paper.setViewBox(v.x, v.y, v.w, v.h);
                current_viewbox = v;
                last_destination = {
                    sm: {}
                };
                last_destination.sm.zooming_dimensions = current_viewbox;
                last_destination.sm.type = "manual";
                mousedown = false;
                setTimeout(function() {
                    currently_panning = false;
                }, 1);
                back_arrow.show();
            }
            helper.addEvent(mapdiv, "mousedown", start_pan);
            helper.addEvent(mapdiv, "mousemove", during_pan);
            helper.addEvent(mapdiv, "mouseup", finish_pan);
            helper.addEvent(mapdiv, "mouseleave", finish_pan);
            helper.addEvent(mapdiv, "touchstart", start_pan);
            helper.addEvent(mapdiv, "touchmove", during_pan);
            helper.addEvent(mapdiv, "touchend", finish_pan);
        }

        function setup_pinching() {
            var last_distance = false;

            function get_pinch_distance(e) {
                var xy0 = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
                var xy1 = {
                    x: e.touches[1].pageX,
                    y: e.touches[1].pageY
                };
                return helper.distance(xy0, xy1);
            }

            function move_pinch(e) {
                if (currently_zooming) {
                    return;
                }
                if (e.touches && e.touches.length > 1) {
                    currently_pinching = true;
                    var distance = get_pinch_distance(e);
                    if (last_distance) {
                        var diff = distance - last_distance;
                        var magnitude = Math.abs(diff);
                        if (magnitude > 10) {
                            if (diff > 0) {
                                zoom_in_click();
                            } else {
                                zoom_out_click();
                            }
                            last_distance = distance;
                        }
                    } else {
                        last_distance = distance;
                    }
                }
            }

            function finish_pinch(e) {
                last_distance = false;
                setTimeout(function() {
                    currently_pinching = false;
                }, 100);
            }
            helper.addEvent(mapdiv, "touchstart", move_pinch);
            helper.addEvent(mapdiv, "touchmove", move_pinch);
            helper.addEvent(mapdiv, "touchend", finish_pinch);
        }

        function order() {
            all_states.toBack();
            bottom_locations.toBack();
            background.toBack();
            if (all_external_lines) {
                all_external_lines.toFront();
            }
            all_labels.toFront();
            top_locations.toFront();
            location_labels.toFront();
        }

        function set_events(refresh) {
            if (!refresh) {
                all_states.hover(over, out);
                all_states.click(click);
                background.click(background_click);
                background.hover(reset_tooltip, reset_tooltip);
                back_arrow.click(back_click_handler);
                if (responsive) {
                    set_responsive_handler();
                }
                if (manual_zoom) {
                    all_states.touchstart(click);
                    all_states.touchend(click);
                    back_arrow.touchend(back_click);
                    setup_panning();
                    setup_pinching();
                }
            }
            all_locations.hover(over, out);
            all_locations.click(click);
            all_labels.hover(label_over, label_out);
            all_labels.click(label_click);
            if (manual_zoom) {
                all_locations.touchend(click);
                all_locations.touchstart(click);
                all_labels.touchend(label_click);
            }
        }
        var detect_resize;

        function set_responsive_handler() {
            function resize() {
                resize_paper();
            }
            var resizeTimer;
            detect_resize = function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(resize, 300);
            };
            if (window.addEventListener) {
                window.addEventListener("resize", detect_resize, false);
                window.addEventListener("orientationchange", detect_resize, false);
            } else {
                window.attachEvent("resize", detect_resize, false);
                window.attachEvent("orientationchange", detect_resize, false);
            }
            if (vml) {
                document.body.onresize = function() {
                    resize();
                };
            }
        }

        function resize_paper() {
            if (mapdiv.offsetWidth < 1) {
                return;
            }
            create_dimensions(true);
            paper.setSize(width, height);
            var scaled_border_size = border_size * (width / original_width) * normalizing_factor * 1.25;
            if (all_states && all_locations) {
                all_states.forEach(function(state) {
                    state.attr({
                        'stroke-width': scaled_border_size
                    });
                    state.sm.attributes['stroke-width'] = scaled_border_size;
                    state.sm.over_attributes['stroke-width'] = state.sm.border_hover_size * (width / original_width) * normalizing_factor * 1.25;
                });
                all_locations.forEach(function(location) {
                    if (lattr[location.sm.id].type != "image") {
                        location.sm.attributes['stroke-width'] = lattr[location.sm.id].border * (width / original_width) * normalizing_factor * 1.25;
                        location.sm.over_attributes['stroke-width'] = lattr[location.sm.id].hover_border * (width / original_width) * normalizing_factor * 1.25;
                        location.attr({
                            'stroke-width': location.sm.attributes['stroke-width']
                        });
                    }
                });
                all_lines.forEach(function(line) {
                    var adj_line_size = line.sm.size * (width / original_width) * normalizing_factor * 1.25;
                    line.attr({
                        'stroke-width': adj_line_size
                    });
                });
            }
            create_trial_text();
            var min = width / 2 > 250 ? width / 2 : 250;
            max_width = popup_maxwidth ? popup_maxwidth : min;
        }

        function reveal_map(refresh) {
            var region_out = fly_in ? region_array[-2] : region_array[initial_zoom];
            var region = region_array[initial_zoom];
            if (!initial_back) {
                back_arrow.hide();
            }
            if (!refresh) {
                if (initial_zoom_state) {
                    var destination = initial_zoom_state;
                } else if (initial_zoom_manual) {
                    var destination = initial_zoom_manual;
                } else {
                    var destination = region_out;
                }
                var zoom_slowly = (initial_zoom_state || initial_zoom_manual) && fly_in ? false : true;
                zoom_to(destination, zoom_slowly);
            }
            if (initial_zoom_solo && initial_zoom != -1) {
                background.show();
                if (!initial_back) {
                    back_arrow.hide();
                }
                for (var i = 0; i < region.sm.states.length; i++) {
                    var id = region.sm.states[i];
                    var state = state_array[id];
                    if (!state.sm.hide) {
                        state.show();
                    }
                }
                for (var i in label_array) {
                    var label = label_array[i];
                    var label_set = label_set_array[i];
                    if (label.sm.parent) {
                        if (label.sm.parent.sm.type == "state") {
                            if (label.sm.parent.sm.region != region.sm.id || !label.sm.parent.sm.region) {
                                label.sm.hide = true;
                                label_set.hide();
                            }
                        }
                    }
                }
                all_external_lines.forEach(function(border) {
                    if (Raphael.isPointInsideBBox(region.sm.bbox, border.sm.bbox.x, border.sm.bbox.y)) {
                        border.show();
                    }
                });
                if (!refresh && fly_in) {
                    zoom_to(region_array[initial_zoom]);
                }
                return;
            }
            background.show();
            all_visible_states.show();
            all_visible_labels.show();
            all_external_lines.show();
            if (!refresh && fly_in && !(initial_zoom_state || initial_zoom_manual)) {
                zoom_to(region_array[initial_zoom]);
            }
        }

        function refresh_map() {
            get_refreshable_info();
            set_attributes();
            create_states(true);
            create_regions(true);
            create_locations(true);
            create_labels();
            style_background();
            hide_and_show_before(last_destination, true);
            order();
            set_events(true);
            resize_paper();
            reveal_map(true);
            hide_and_show_after(last_destination);
            update_api();
            trigger_hook("refresh_complete", []);
        }
        var tooltip;

        function load_map() {
            mapdata = api_object.mapdata;
            mapinfo = api_object.mapinfo;
            if (map_inner) {
                delete window.paper;
            }
            expand_api();
            preload();
            get_client_info();
            get_map_info();
            if (is_forgery()) {
                alert("The continent map can't be used with other data.");
                return;
            }
            get_refreshable_info();
            create_dom_structure();
            create_dimensions();
            create_canvas();
            create_trial_text();
            if (!popup_nocss) {
                set_tt_css();
            }
            tooltip = create_tooltip();
            create_back_button();
            if (manual_zoom) {
                create_zoom_buttons();
            }
            set_attributes();
            style_background();
            create_states();
            create_regions();
            create_lines();
            setTimeout(function() {
                create_locations();
                create_labels();
                reset_all_region_attributes();
                order();
                create_event_handlers();
                set_events();
                reveal_map();
                tooltip.create();
                update_api();
                trigger_hook("complete", []);
                xy_hook_check();
            }, 1);
        }
        var getting_xy = false;
        var get_xy_from_map = function(log) {
            if (!getting_xy || log) {
                getting_xy = true;
            } else {
                return;
            }
            everything.mousedown(function(e, a, b) {
                var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
                var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
                var find_pos = helper.findPos(map_inner);
                var x0 = find_pos[0];
                var y0 = find_pos[1];
                var go = last_destination.sm.zooming_dimensions;
                var this_width = go.r * width / scale;
                var this_height = go.r * height / scale;
                var x = go.x / scale + this_width * (l - x0) / width;
                var y = go.y / scale + this_height * (u - y0) / height;
                x = Math.round(x * 100000) / 100000;
                y = Math.round(y * 100000) / 100000;
                var print_string = "You clicked on\nx: " + x + "," + "\ny: " + y + ",";
                if (log) {
                    console.log(print_string);
                }
                trigger_hook("click_xy", [{
                    x: x,
                    y: y
                }]);
            });
        };
        var log_xy = function() {
            get_xy_from_map(true);
        };

        function trigger_hook(name, args) {
            var fn = hooks_object[name];
            if (fn) {
                fn.apply(null, args);
            }
            var plugin_array = plugin_hooks[name];
            for (var i = 0; i < plugin_array.length; i++) {
                var fn = plugin_array[i];
                if (fn) {
                    fn.apply(null, args);
                }
            }
        }
        var xy_hook_check = function() {
            if (hooks_object.click_xy || plugin_hooks.click_xy.length > 0) {
                get_xy_from_map(false);
            }
        };
        var over_hook = function(element) {
            var type = element.sm.type;
            if (type == "state") {
                trigger_hook("over_state", [element.sm.id]);
            }
            if (type == "location") {
                trigger_hook("over_location", [element.sm.id]);
            }
            if (type == "region") {
                trigger_hook("over_region", [element.sm.id]);
            }
        };
        var out_hook = function(element) {
            var type = element.sm.type;
            if (type == "state") {
                trigger_hook("out_state", [element.sm.id]);
            }
            if (type == "location") {
                trigger_hook("out_location", [element.sm.id]);
            }
            if (type == "region") {
                trigger_hook("out_region", [element.sm.id]);
            }
        };
        var click_hook = function(element, e) {
            var type = element.sm.type;
            if (type == "state") {
                trigger_hook("click_state", [element.sm.id, e]);
            }
            if (type == "region") {
                trigger_hook("click_region", [element.sm.id, e]);
            }
            if (type == "location") {
                trigger_hook("click_location", [element.sm.id, e]);
            }
        };
        var preclick_hook = function(element, e) {
            var type = element.sm.type;
            if (type == "state") {
                trigger_hook("preclick_state", [element.sm.id, e]);
            }
            if (type == "region") {
                trigger_hook("preclick_region", [element.sm.id, e]);
            }
            if (type == "location") {
                trigger_hook("preclick_location", [element.sm.id, e]);
            }
        };
        var zoomable_click_hook = function(element, e) {
            var type = element.sm.type;
            if (type == "state") {
                trigger_hook("zoomable_click_state", [element.sm.id, e]);
            }
            if (type == "region") {
                trigger_hook("zoomable_click_region", [element.sm.id, e]);
            }
        };

        function region_zoom(id, callback) {
            var region = region_array[id];
            zoom_to(region, false, callback);
        }

        function state_zoom(id, callback) {
            var state = state_array[id];
            zoom_to(state, false, callback);
        }

        function location_zoom(id, zp, callback) {
            if (!manual_zoom) {
                console.log("Location zoom only works when the map is in manual_zoom mode.");
                return;
            }
            if (typeof zp === "undefined") {
                zp = 4;
            }
            if (typeof callback === "undefined") {
                callback = false;
            }
            var destination = {
                sm: {
                    type: "manual",
                    zp: zp
                }
            };
            var location = location_array[id];
            var w = location.sm.size * scale * zp;
            var h = w * original_height / original_width;
            var x = location.sm.x - w * 0.5;
            var y = location.sm.y - h * 0.5;
            var r = w / (original_width * scale);
            destination.sm.zooming_dimensions = {
                x: x,
                y: y,
                w: w,
                h: h,
                r: r
            };
            zoom_to(destination, false, callback);
        }

        function reset_tooltip() {
            if (currently_over) {
                out.call(currently_over);
            }
            if (!tooltip_manual) {
                return;
            } else {
                tooltip_manual = false;
            }
            if (on_click) {
                return;
            }
            tooltip.hide();
            setTimeout(function() {}, 100);
        }

        function popup(type, id) {
            if (type == "state") {
                var element = state_array[id];
            } else if (type == "region") {
                var element = region_array[id];
            } else {
                var element = location_array[id];
            }
            if (!element) {
                console.log(type + " " + id + " does not exist");
                return false;
            }
            var on_click = element.sm.on_click;
            var box = last_destination.sm.zooming_dimensions;
            if (type != "location") {
                var bb = element.sm.bbox;
                var x = (bb.x + bb.x2) * 0.5;
                var y = (bb.y + bb.y2) * 0.5;
                x = x * scale;
                y = y * scale;
            } else {
                var x = element.sm.x;
                var y = element.sm.y;
            }
            var current_x = (x - box.x) / ratio;
            var current_y = (y - box.y) / ratio;
            if (current_x > width * 1.1 || current_y > height * 1.1) {
                console.log("Not in this region");
                return false;
            }
            tooltip_manual = true;
            if (on_click) {
                click.call(element);
            } else {
                over.call(element);
            }
            tooltip.reset_pos(current_x, current_y, element);
            ignore_pos = true;
            tooltip_manual = false;
            return true;
        }

        function manual_pulse(id) {
            var el = location_array[id];
            if (!el) {
                return;
            }
            pulse(el, true);
        }

        function popup_hide() {
            tooltip.hide();
            tooltip_up = false;
            if (on_click) {
                out.call(last_clicked);
            } else {
                out.call(currently_over);
            }
        }

        function refresh_state(id) {
            set_state(id);
            var state = state_array[id];
            var labels = state.sm.labels;
            make_state(id);
            for (var i = 0; i < labels.length; i++) {
                var label_id = labels[i].sm.id;
                set_label(label_id);
                make_label(label_id);
            }
        }
        var no_tooltips = false;

        function disable_popups() {
            no_tooltips = true;
            tooltip.hide();
        }
        var no_tooltips = false;

        function enable_popups() {
            no_tooltips = false;
        }
        var no_urls = false;

        function disable_urls() {
            no_urls = true;
        }
        var no_urls = false;

        function enable_urls() {
            no_urls = false;
        }

        function go_back(callback) {
            back_click(callback);
        }

        function expand_api() {
            api_object.calibrate = create_bbox_state;
            api_object.get_xy = log_xy;
            api_object.proj = getxy;
            api_object.load = load_map;
            api_object.region_zoom = region_zoom;
            api_object.state_zoom = state_zoom;
            api_object.zoom_in = false;
            api_object.zoom_out = false;
            api_object.location_zoom = location_zoom;
            api_object.back = go_back;
            api_object.popup = popup;
            api_object.pulse = manual_pulse;
            api_object.popup_hide = popup_hide;
            api_object.zoom_level = "out";
            api_object.ignore_clicks = false;
            api_object.zoom_level_id = false;
            api_object.disable_urls = disable_urls;
            api_object.enable_urls = enable_urls;
            api_object.disable_popups = disable_popups;
            api_object.enable_popups = enable_popups;
            api_object.refresh = refresh_map;
            api_object.refresh_state = refresh_state;
        }

        function update_zoom_level() {
            api_object.zoom_level = last_destination.sm.type;
            api_object.zoom_level_id = last_destination.sm.id ? last_destination.sm.id : false;
        }

        function update_api() {
            api_object.states = state_array;
            api_object.regions = region_array;
            api_object.locations = location_array;
            api_object.labels = label_array;
            api_object.tooltip = tooltip;
        }
        expand_api();
        load_map();
    }
    window[plugin_name] = (function() {
        return api_object;
    })();
    docReady(function() {
        for (var i = 0; i < autoload_array.length; i++) {
            var plugin = autoload_array[i];
            var ready_to_load = plugin && plugin.mapdata && plugin.mapdata.main_settings.auto_load != "no" ? true : false;
            if (ready_to_load) {
                (function(plugin) {
                    setTimeout(function() {
                        plugin.load();
                    }, 1);
                })(plugin);
            }
        }
    });
    autoload_array.push(api_object);
})("simplemaps_worldmap");