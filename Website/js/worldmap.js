/*Copyright 2010-2018 Simplemaps.com
html5worldmapv3.8
Use pursuant to license agreement at https://simplemaps.com/license */

/* shifty (tweaked to avoid AMD conflict) - v1.5.2, Copyright (c) 2013 Jeremy Kahn, MIT license   http://jeremyckahn.github.io/shifty */
eval((function(x) {
  var d = "";
  var p = 0;
  while (p < x.length) {
      if (x.charAt(p) != "`") d += x.charAt(p++);
      else {
          var l = x.charCodeAt(p + 3) - 28;
          if (l > 4) d += d.substr(d.length - x.charCodeAt(p + 1) * 96 - x.charCodeAt(p + 2) + 3104 - l, l);
          else d += "`";
          p += 4
      }
  }
  return d
})("(function () {var root = this || F` 9#(\"return` 4!\")();var Tweenable = ` Y.formula` E!DEFAULT_SCHEDULE_FUNCTION` 1)EASING = \"linear\"` 1)DURATION = 500` 6!UPDATE_TIME = 16.66666666` \"\"8` @!_now = Date.now ? ` \"%: `!i)`\"=#+ new` @!;}` ]!` [\"typeof SHIFTY_DEBUG_NOW !== \"undefined\" ?` 1.:`!@!;if (` _#window` L,) {`\"q5 =` N#.requestAnimationFrame ||` 8$webkitR` ';oR` \";ms` C<mozCancel` 32&&` >'` S5setTimeout;} else`\"F:` C(`$T%noop() {` (&each(obj, fn`&i#key;for (key in obj) {if (Object.hasOwnProperty.call` ]\"key)) {fn(key);}}` ~&shallowCopy(targetObj, srcO` z!`!C!` (\",`&B'prop) {` I%[prop] =` R#` )\";});`)/$` A$`\"J'defaults`!1#`!0!`!''` |/`&U'` N\"`!/$`&U-` 1* src`!K$})`!8'twee`#,!s(forPosition, currentState, original` (#` v\"` &#dur`%J!, timestamp, easing`$P#normalized` x$ = `!#' <` Q& ? 0 : `!A( -` 5&) /`!(%`*4!prop` $!`!,\"`%B\"P` '*Fn`%p\"prop in`\"/)`#M#` '(`%w+`#u\"`$2!` t* =` y#`#R#`!%$`+_&` @.== \"`#t$\" ?` 0.:`.M$[` +,];`!Y(`$p%`$X%(`$8)` :\"`$>)` +$`!`$,`$&/);}}`'*#`!\"(`%]0(start, end` k%unc, p` d$`.f%` E! + (end -` )\") *` K'(` L%`! 'applyFilter(`!2!able, f` -!Name`1_$` ,!s =`2%&.prototype.` 8\"`%J!args`#+$` A!_` 7\"Args;`)1!` d#`).(n`!#\"`)/'` >#[name][`!E&]`/z/` 35.`\"9!`\",(args)`)Y\"var`'o!outHandler_endTime`\"#!` ,+`$C#` '4isEnded` '0offset;`$s&` 2)`!Q(`*1'delay`*L(`*bF`%+\", step, schedule, opt`!z(Override) {`\"P2 =`+''+`!L\" +`*p&`\"g6 = Math.min(` 3 || now()`\"P\"`!,.)` p,`#[#`!O#`!\"3>` --`$k$`$ 1 =`\"&% - (`\"Q3`-U\"` |2);`'/!`'d%isPlaying()`'H$`!r1) {step`1N#`$_$`(J&attachment`\"p-`!u\");` D&stop(true);} else {` `'`%:$Id =`%F%`!h'_` r*, UPDATE_TIME);`*i3\"before`*g!\"`\"^#`#}6`10(`&##)`!]#`2q\"1`'5H1, 1`2U%`\"D*` h\"`!06`35[`!u$`!3'`\"h4after`\"w$`%&!`!,*`$^J}}`/(&composeE`1p'(from`!(!Params`!W%`/6\"` K#d` M\" = {}`,C\"`.F!` -%`3D)`$m\"` 4)== \"string\" ||` O+`3h)`4d!ch`!E.`/h&prop) {`!M*`3h%`!=#}`$u&` ICif (!` a0` l<` (#|| DEFAULT_EASING`0F\"`4G$` U)`3;'`2k%`-+!initi`&,%`-=!onfig) {this.`&j$` <! =` =!` H( || {};` E#` V!ur`-6!false` 2#`*#$F`!=$=`!r%SCHEDULE_FUNCTION`$c'`!E'`38/` v!setC` <!`/8\"`!v\";}}`\"=%.prototype.`'C! =`#'`\"C)`!3!`!j!is` Z!`&p\"`#I#this;}if` I(`!P!`!K% || !`\"Y,`!I;` I\"`)k&=`1$\"`#/$tart`!N\"get`1<!` 3!`)<&);`!T'.resume();};`\"L0`!;%`\"W)`\"W%`\"-#= ` \"#`$a5tru`$q$`!@&` O%.` *&` >#pausedA`3h$null`%I+`/k!` -'`4[\"` i%` )\"|| 0`\"m(` 6&` )\"`4B!op` :%ep` 6(ep` 2+finish` 9&` )#` 7*`3j%`!B&` *$`)4'DURA`'6!`(>1shallowCopy({},`!'%rom`,7!`$v%`%/$`/]) =` 7'` :#`/q'` f6to` n,var self` l#` e$`/:)`%N)) {` 0*(self,` `!`'+'` )$`1)#` &#`1J%` *\"`0e*` .\"`2$+` p#`2-(` -\"`-1\"` &$ste`!*%`+I,);`0I\"`#t+`$&.`0o\"`#;)`#K-;defaults(`!G)` [(`$*$`!\\\"`%a!`2@.`\"M*`$8#` K#`/4-` j$f`4C!Args = [`4\"+`%U.,`\"!(` :$` ~\"];applyF` l!`+I!, \"`-G!Created\"`+9)`+&3get`%L,` N#`&P,`#[.`+v7` g)s` H!`1#3` 8!` R3`+]!`'*-`+h1`.4'isP` 8!`,k$`\"C>`.;\"` y,`0M(` l\"`!5%`/P&+`!5# -`\"z#`!M(`0!$`!G'`33(`1F&`.P*`)N+`$C@seek`!s)millisecond) {` #' = Math.max` 9(, 0`+D\"`$8#`#K)`\"`&`\"N' ` h)== 0`3F,`2T.` q(-` U(` ~!`3`\"isPlaying()`#g%`\"r4`#G.`#-*`(0\"`!9+` )$`,q#`0$*`'T0`)B4`+I,`)R*` &$`,r\"`2k*`,p$`+m%Tim`+m$`%|!();}`$s?top`%))gotoE`%-!`#%/`&M*`&]1`0D-`3/!(root.cancelAnim`#$!Frame || ` 8!webkitC` '8oC` \"8ms` @9moz` :\"Request` 03clearT`!\")`',#`#l$Id`'C\"`\"z&`-m/before`#0!\");`.)!Props(1`${Z1, 0`%Q*)`/+0after`!6$` #9End\"`0j&nish.call`'e)`!W0attachment`%}A`)D%`0.3`&6-&& `*!\"`&:%`0+6S`'+`0G*` .+`'K%` ), = ` #,` |3dispo`0_.var prop;for (prop i`\"4\"`/y(hasOw`%H!erty` B!)) {delete` I![prop];}}`!(2f`$e! = {` )3ormula = {linear:`!\\&pos`#j&pos;}};` F&` S7;`4Z(` ?%, {now:now, each:each, `'e&:`'p&` ,'` ,&, `&r':`&~', `!&':`!2', defaults:d` \"#, composeE`(,!Object:c` \".}`1;#ypeof SHIFTY_DEBUG_NOW`17!\"`#$$\") {`*f!`,Z-` #*;}` A!`\"j%`#;(`3h$` '&})();(`%i)`#k&`#N1`#y., {easeInQuad`$d4`46!pow(pos, 2);}, easeOut` ;8- (` N( - 1, 2) - 1` Z%In` M4if (` R!/= 0.5) < 1` r&0.5 *`!F/`!3$` :\"` [\"-= 2) * `!>\"`!u&InCubic`\"0B3`\"J(` /E`\"N\"3) + 1`\"F)` L2`\"\"N3`\"J&`\"L#`!0+2`!8#`\"K(Quart`\"1B4`$~+` >6`$y14`$x2` S/`\")N4`$p;`\"y,`%-+Quin`\">C5`\"W*` 1C`\"\\\"5`%*.` L2`\"/N5`$y?`!:!`\"K(Sine`$I6` \\!cos` \\!` i$PI / 2)`!|)Out` N8` S!sin` S1`\"`)`!39`\"+(cos` ^%`*'!`&+,Expo`1C7`.m!0 ? 0 :`#?&2, 10 *` J!` k!`$(` N@1 ? 1 :`#4$` m#-` p!` L!`%.,` `1if`!<\"`!_!`%+';}` .(`%E'1` 4\"`%HE`\"40`%n*`!m0--`!|#`-h)ir`-#5`*]$sqrt(1 -`#\"!`$;/Out` K8` V*`0Q0`%w*` W1`\"b:`&/)`!U6`(m/` D%`0m,`%'!`\"7(Bounc`'L.`$k$< 0.3636363636` \"\"5`!X&7.5625`1q#` |!;} else ` U(727272727` \"\"3` M/`!`$0.5454545454` \"\"`2n$+ 0.75` k0909090909` \"\"`#6'` l/818181818` \"\"`3l%+ 0.93` w&` H79`!S*6` V)84` `!`%1%Back`#M-var s = 1.70158;`)e'`#C$((s`$F!` *#- s`$I)` KG`)U\"` _#` h%` q-+ `*V/` cA`*!@`.>#`!2$(s *= 1.52`16\"`\";(`'A-`'4,` E9`\" #`*f#lasti`*P61`+s(4, -8`(>$` 1#sin`!9\"* 6`#6$(2` 6$PI)`0I!`#/$swingFromT`-l.`$!8`#-' ?`\"^O :`\"I^`!s%`&Bg` o!`\"=K-`0^!`&a?b`+W~`+W~`+W~`,&O`#T\"Past`\"\\~`#H22 - (`#2M)`#6J` m4`#I<` ~%` I<`#M>)`0@%`*3`-w@`,X%pos, 4`-u&-`*a0` @*3) -`-d$`!?#`-U4` u.` N\"`!c/` =10.2`\"K!);})();(` K&) {` $%cubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration`+H#ax = 0, bx` \"\"c` )#ay` 1#y` 1#` #!;`!'%sampleCurveX(t`!r&((ax * t + bx)` ##c` $\";}` K0Y` P+y` W$y` V%` $\"` I2Derivati`!8,3 * `!B%2 *`!B)` _(olveEpsilon(`\"r'` a#1 / (200 *`#0&` N,(x, e` \\\"` O&`\"5)` B!`#&#` B'` ^(fabs(n`'4#n >= 0` c&n`(K,0 - n;}`!:+` p.`$\"t0, t1, t2, x2, d2, i;for (t2 = x, i`$z! i < 8; i++) {x2 =`$z+2) - x;if (`!l!x2) <`\"K.t2;}d` O+`$<)2)` Z&d` _!0.000001) {break;}`!V!t2 - x2 / d2;}t0`!b!t1 = 1;`!v\"` d!t2 < t`#''t0;}` 2#> t`*Q't1;}while (t0 <` 6\"`\"51`\":( - x`\"15if (x > x2) {`!^!t2`$H%`!g!t2`\"(#(t1 -`!d!*`,!!+`!d!` a'`);!3 * p1x;`)P!3`-W!2x - p1x) - cx;`)r!1` '! - bx;`)[!` R\"y;`)p!` Q#y` S!y` S!y;`*2!` S!y - by;`'&$`'C!t,`'x3`&}(getC`+c&Transition(x1, y1`&<\"y2`\"y&`,o3`,@.`-*!` X*, 1);};}Tweenable.set` O\"F` o$=` w'name` T,`'~#`!%'`!k& =`!gE;` L1.displayName = name` 23x1 = x1` '3y1 = y` &4`&{!x2` D42 = y2`$d$`#\"&prototype.formula[name] =`\"W2;};` R&un`#H>) {delete` r>;}`1b9getInterpolatedValues(from, current, targetState, po`!o\"`3H!ing, delay`&6&`!I&tweenProps(` L&` m%` \"` o)1` f#` t$);}var mock` m% = new` |&;` 1)._filterArgs = []`#O'i`\"?&`#E)`!6/`\"3.opt_`\"A$`'P\"`\"\"! =`\"E'shallowCopy({}`\"<\");var`\"0\" =` \\& || 0` 6!` {\"Objec` `*composeE` 5'`!d#` M\" || \"linear\")`\"W+set({}`!6\"`\"d)`\"t5;` =&.length`/m!` ,&[0`':\"`\"R!` ,(1] =`\"F!` )(2] =`#G(` 0(3] =`\"J)`$9'applyF` G!(`!_), \"`&*!Created\")` .Cbefore` -!\"`\"j\"`%<'`'i#`,'\"`'I[`\"%\"`(&$`!7Cafter`!U$`(Y#`!N.`)q/` \\%`&h#formatManifest`\"C!R_NUMBER_COMPONENT = /(\\d|\\-|\\.)/` ?#FORMAT_CHUNKS` >![^\\-0-9\\.]+)/g` @#UN` C\"TED_VALUE` G![0-9.\\-]+` ?%RGB`)\\#RegExp(\"rgb\\\\(\" +` Q1.source + /,\\s*/` &&`! 0.source + /,` \"H\"\\\\)\", \"g`%>#`!c!_PREFIX = /^.*\\(`\"j$HE` /!#([0-9]|[a-f]){3,6}/gi` ?!` z!_PLACEHOLDER = \"VAL\";`..(F`$0!ChunksFrom(raw`$l\", prefix`$W#accumulator`,O\"var ` D%L`)G$` )%`)[#`'I\";for (i`)j! i <` I,; i++) {` z'.push(\"_\" +`!B# + ` )\"i);}`&b#` F';}`\"&.String`\"3!`&X\"ted` .\"`-[$`\"T! =`&v#` 6%.match(`&K+);if (!` O\") {` U%[\"\", \"\"];} else if (` 7\"`,@%== 1 ||` x-charAt(0)`!*%`(#,)`!!%.unshift(\"\"`\"Y&` 4#join(`%#-)`\"k'sanitize`*`\"ForHex`2T\"stat` 0#) {`*m&each` 1(,`1G'prop`0z*Prop = ` E'[prop]`#0!typeof` =*== \"s`\"a!\" &&` 0(`\"c%HEX)) {` c- =`\"&%Hex`'9\"ToRGB(` [');}}`\"M0` C+str) {`#G#`/~\"`$6\"` ?\"`!@\", str, convertHex` W!` r(` ,+(hex`&>)rgbArr = h` ;#Array` <'`.5$\"rgb`,&!` L\"[0] + \",` ''1]` \",2` -!)\";}var` t*_` q\"` '!`)t\"`!j%`!9-) {hex`!^\".replace(/#/, \"\"`'w\"hex`'G(3` E)spli`&w\"` +%`!x\"hex`\"!\"hex`!x\"hex`\"!\"hex`!x\"` #\";}`!d5[0]`#6$Dec`!E!substr(0, 2)`!0!` C31` B42` :<2` B44` T\"`$M#` H5`%V'` Z(`&G&parseInt(hex, 16`&'(`&Z/pattern, un` 8\"`+A$,` G#`&G#` C!nMatches =` >-`({#` h#`1+\"` 4*` A0`%K$`!=%`+^/if ` :\"`!6$`!>0`0G%` ))`0H(`*!#`\"R!`0Y\"`0e!`0Y&` ]/`0_$` P(` s-`-|\");`\"=-`\"53`\"2-`#b$`+c$`!\"!));}`.j$` [*`+n/RGB`$h#`1D.`+l8RGB,`0Q,,` e-`,0` 4$(rgb` ?\"`$/\"numbers = ` 1$`.R%UN`2V\"TED_`\"_!S`%`\"` L#`$Y%` )#`$P(`!.$`#R&` m-RGB_PREFIX)[0]`$l1` |)`$s$` k,+=`(X&` J#[i], 10)`-^\";}`!<.` #+.slice(0, -1` Q!)\"`*0$` ;+`#O'getF`$%!Manifest`37,var m` 5#Accumulator = {};`2b~`3R.`1@$awValu`*q!get` &\"From`3-*`!h/`3r%{`&^\"`\"n\":`\"a%` *\"` Z-, chunkNames` C&`'O\"` H!`!I%, `\"M!}`4S!`#{#`!5/`#{'expand` l\"tedPropertie`$ )`(L$`$A%) {`#r+` 2+`#NS`#4G` >)`(c%` )%`(f$`($0` H+`(1%`!D'`\" +`!Y\".`#}&[i]] = +` b&[i];}delete`\"&/}`+H(collapse`\"t~`#LF` d\"`&.\" = extrac` N!erty`-z#`!A8`\"r-`$=\"v`#c\"ist`$c(List`!v#` u\"` K@`!y*`'%ted` o\"`\"^,` \\#`((,`!E');`\"Y-`,o'`0x&`&I)`$[)`\"b?`!u'`$&\"` M#`!l$`,g\"`4?,Name` P(`'V%` )&`'D8` I,`'Y$` s,` d)[i];`!N+[` A,`\"|!`#*'` /-;`'n/` 3.}`,3#`! +;}var`%V*_a`/k)[];`0S(`&!'`#[6` W5`#;#`#2!`#|!`\"l`! 6pus`1f)[`+K*)`\"y%` J5`340`'y,`'k$`,:%`&\\#` 8\"` F$` @\" =` 0#`4@#`-Ln` y9` )*.replace(VALUE_PLACEHOLDER,`.C+.toFixed(4)`#+&` _0`#\"*`0i'` D%` B\") {` V,`!M#match(R_UNFORMATTED_`![!S`*e*pandEasing`$v\"(e` \"', tokenData`/;.` 2%`/\"A` E%`/:'`%}& =` C(`-|'` >&`'K7`,D!`!r! =` \"#`0@-i;if (typeof` D%== \"s`#+!\"`-($` 5!`0n&` *!.split(\" \"`0?\"last`#.\"` D!` ?%` Q\"[` X(`)n$- 1]`&Y\"`):,`&I*`!q)`4O-` z)i] ||`!<,;}} else`'<!` I`;}}`-^#`#F/`0r)collapse`%,~`%,~fir`#O$`&#,`\"}'0]`!4\"`&0\"` I\"s =` )#` Y(`&R'` >%`&K.compose`)I#`+k%\"\"`/.6`3#+` M0+= \" \" +`!n5i]`2`%` '8}`%/. =`!_1.substr(1);`&f$` G1`\"u(}});}`%J&prototype.filter.`%-! = {tweenCreated:`%a&`%*#State, from` $#to` \"#`!7() {sanitiz`2,#ForHexProps` ^));` .6` |%` )8`!8#);this._`'0% =`2`&Manifest`!+,}, before`\"s!`!qX`/F>`!P*);` L\"`4A%Propertie`!V*` ,I`!\\(` ,F`\"*%` C-}, after`\"=]`,R$`!{O` ?8`\"48` <8`\"86`-@`\"u-};})(`(q%);}).call(null);"))

/* Raphaël 2.1.2 (tweaked, always global)- JavaScript Vector Library, Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com), Copyright © 2008-2016 Sencha Labs (http://sencha.com), Licensed under the MIT (http://raphaeljs.com/license.html) license. */
eval((function(x) {
  var d = "";
  var p = 0;
  while (p < x.length) {
      if (x.charAt(p) != "`") d += x.charAt(p++);
      else {
          var l = x.charCodeAt(p + 3) - 28;
          if (l > 4) d += d.substr(d.length - x.charCodeAt(p + 1) * 96 - x.charCodeAt(p + 2) + 3104 - l, l);
          else d += "`";
          p += 4
      }
  }
  return d
})("(function (glob, factory) {glob.eve =` -$();})(this, ` N&) {var version = \"0.4.2\", has = \"hasOwnProperty\", separator = /[\\.\\/]/, wildcard = \"*\"` }! =` z*}, numsort` -)a, b) {return a - b;}, current_event, stop, ` (!s = {n:{}}` ,!` `)name, scope) {name = String` 7!);var e =` d#, oldstop =` |#args = Array.prototype.slice.call(argum` W\"2), listeners` o\".` '%`!+\", z = 0, f`$&!lse, l, indexed = [], queue =`\"!out` /#ce =`\"X,erro`!&![];` .) = name;`\"&#0;for (var i`!:\"ii =`!c&.length; i < ii; i++) {if (\"zIndex\" in` F&[i]) {`!o#.push(` 0(.` N\");if ` %0 < 0) {`\"C![` -/]`!P([i];}}}`!%$sort(`%s#);while (` 6#[z]` t#l =`#A\"[` 2%++]];out`!h#.apply(`%X!`%\"\")`!j\"stop) {`#3#`%J#;`&j#out;}}`#H!`#D!`#\",l`!j,`#2-`#P#l`\"c$==`%6$[z]) {`!8Fbreak;}do {z++;`\"@/]];l && ` CM} `#R#l);} else`$E%`$7(;}` 5$` PN}`#R+`'/,ce`#i'`&y# ?`(+!: null;};eve.` K\"`)(#nts` 0!`):(`*a*`,{#names`(>#.split(`,a%),`*f)item, items, k, i, ii, j, jj, nes, ` f![e]`)e&`)*\"`) (`!-!`(q3n` [\"` O#j` P\"jj = ` H'j < jj; j` N!`!]!s[j].n;`!W!`!=![`!!![i]], e[`.^$]];k = 2`(F$k--) {item =`\"3\"[k`'$\"item`!J\"`$h\"` +!;`\"/\"out.concat` 2!.f || []);}}}`#F\"es;}`(<(`$&!`0b!`.c,f`.X3if (typeof f != \"` Q$\"`0*&`0X*;}`$BI`-22`$ 8` W!.n;` \"\"`2R*`!q!`-G\"&& `#s' || (` $(`1\\$);}e.f` f!`#9#`%X.e.f`.U7e.f[i] ==`#@!`\"j&;}}e.f`$Q\"f)`(T$`##&`.l#` _\"+ `+t&` $$) {f`,,%` -%;}}`$b#`1m!` f%`#J!`(f#att`1>#`2b31`!=/) {eve`+'#null, [`2/#null]`&D$` x!)` &$` j50)));`!c$`+T#`! )` -#1` <#`+_!` 7&sub`*w#`,F!` %%`!p#(new RegExp(\"(?:\\\\.|\\\\/|^)\" + ` H# + ` 0($)\")).test(`,o))`(<%` *)`!O%`,F*`!:&` A)`'T-`)&$f`&8!ve.unbind`)%3if (!`\"<#`-q0`''%`$Q#`(`B, key, splice`-Y,cur`,>!` {!`-1K`-M&`-A\"cur`-L'+=`!,#`0>$- 2) {` .\" = [j, 1]`)|!cur`-l#f`\"i\"s[i] != `-c$`(}$`)q&` a%`(u\"` .(`2U&`!\\!key in `%}$e[has](key)` S-key`-s\"cur`#E!c`(\"$cur`#:$);}}`\"v-`\"O(`,7.cur[i]`/`$e.n`!E#`%,$e.f`#B)`0~$`+g'`0y*`+j$j`+i%e.f`!k#(j`*5!break;}}!` \\& && delete e.f;`\" \"`\"w$`!L%e.n`\"y&`-|!.n`\"u!`!`!var`'6!`&p!` 0%`2p.` ?!`!c7` ;!`!u'` J\"`!l2` `(`!w)`!6%}`%*%`\"5'`!kP` f1`1$$}}`34$`'<!`)n0`\"z!2`*{,`*O&` C$2`.Q&`&;#this, `-r%);`*=$`+2!on` O'`!@\"versi`4b!` ##` 1!to`4T\"`,73\"You are running Eve \" +` [%`!*(;});`$D!` `\"glob, factory) {` ##` 1#glob.eve);})`\"&#` Q&window, eve`%%#` 3!R(first`$3#R.is` +\", \"` <$\")`!s&loaded ? ` @!() :`\"t$\"raphael.DOMload\",` >\");`%Q#` p,arra`*\\!` t#R._engine.create[`$0!](R` b#`&r$0, 3 + ` a&[0], nu))).add`\")#`!.$`4!\"rgs = Array.prototype`2w5`-?!` {!args[arg`'r%- 1]`\"k,`&L! =`!!!.pop(`&0%`#$&`! \"`\"(7args)`#0;`&!(` JD;}`\"a&`#G>`'p(}}R`'V'\"2.1.0\";R.ev`)H!ve;var`\"<#, `2F% = /[, ]+/, ele` i! = {circle:1, rect:1, path:1, ellips` 6!tex` 6!image:1}, formatrg = /\\{(\\d+)\\}/g, `$b! = \"`$g%\", has = \"hasOwnProperty\", g = {doc:doc`\"<!, win:`(.\"}, oldR`#j\" = {was:Object`%c&`,L!`#n\"g.win, \"` K#\"), is:` 1!.` -#}, Paper`*S,this.ca = ` $\"ustomAttribute`##!};}, paper`!7!, appendChild = \"` $'\"` 8!ly` 0#ly\", concat = \"` $\"\", supportsTouch = \"ontouchstart\" in `!w! ||` #\".D`\"~#` K\"&& g.doc instanceof ` 5), E = \"\", S = \" \", Str = `-A\"`4O\"`!N!` $!\"`+!`%P\"\"click dbl` #\"mousedown` $\"move` $\"out` \"#ver` $\"up `!}&` %\"` K!` %!end` #\"cancel\"[`!6!](S),` 2\"Map = {`!(%:\"`\"i',`!5&` 1#move` /$up` .#end\"}, lowerCase`\"M\"`+V'toL` 4$, math = Math, mmax =` /!.max, mmin` (%in, abs` ($abs, pow` ($pow, PI` '$PI, nu = \"number\", s`19$\"` $\"\"`.H#`%e!rray\", `1\\'\"` $$`/0!ll` /&fill\", o`()!T` H&`(/,`2L%`'5#`'E!, pus`&M!push\", ISURL = R._` #$/^url\\(['\"]?([^\\)]+?)` )!\\)$/i, colourRegExp` K!\\s*((#[a-f\\d]{6})|` $&3})|rgba?\\(\\s*([\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?\\s` \"*(?:` #,)?)\\s*\\)|hs` `,(?:deg|\\xb0|%)` ^;(?:` #,)?)` .!` x!l` $u)\\s*`#>!isnan = {NaN:1, Infinity:1, '-` &$'`.K!bezier`.J\"^(?:cubic-)?` 2\"\\(([^,]+),([^,]+),` %'\\)]+)\\)/, round`&w$` (!, set`- %`&t!` %'`&i!Flo`,T!parse` (!, toIn` +%Int, upp`(t5U` 4$, availableAttrs`&M\"` #-{'arrow-end':\"none\", ` -#`*d!` ,&blur:0, 'clip-rect':\"0 0 1e9 1e9\", cursor:\"default\", cx:0, cy:0`(q\":\"#fff\", 'fill-opac`#r\", font:\"10px \\\"Arial\\\"` D!ont-family':\"` ).size':\"10` (&tyle`!t!rmal` .%weight':400, gradient:0, h` 4!` %!ref:\"http://r`2#\"js.com/\", 'letter-spacing':0, `!{#`4d%\"M0,0\", `#&!r`\"Y!r`\"Y!src:\"`,2\"oke:\"#00`!m!` *\"-dash`,2!'` A!` /$linecap':\"butt` *+join` (.miterlimit`!\\!` /$`#_(` ,$width` -!target:\"_blank\", 'text-anchor':\"middl`' !itle:\"R`\"v\"\", transform`!s!` m!:0, `\"U!y:0}`&](nim`&X1` -'{`&B!nu`&9+csv`&(\"nu`&*!nu`&($`-W\"`& .` ^!`%V'nu`% %nu`$N&nu`$Q$path`$T!nu`$U!` \"!` ;\"`$L$`!\"&`#E,`!)!`#H*nu`\"p)` \"%`\"}%nu, `!!\"y:nu}, whitespace = /[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001` '!2` '!3` '!4` '!5` '!6` '!7` '!8` '!9` '!a\\u202f\\u205f\\u3` g#2` ?!29]/g, commaSpaces` [~`!1H*,` J~`!#E/, hs`0U!{hs:1, rg`0n!p2`#1!,?([achlmqrstvxz]),?/gi`&\\\"Comma`0O!/` ?#rqstvz])`!?~`!zC,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?` f~`%+F` K~`!#F)+)`%!!t`$v)rstm`#z~`#z~` f~`#z~`$:^pathValu`-Y\"`#.7`$0~`\"H~`-&rgi, radial_gradient = R._` #./^r(?:\\(([^,]+`\"R~`0M~` Wq([^\\)]+?)\\))?/, eldata = {}, sortByKey = function (a, b) {return a.key - b.key;` L%Number` =7toFloat(a) -` $%b);}, fun` L))`!H!pipe` *)x` c&x;}, rectPath`%K#` $&` H', y, w, h, r) {if (r` ]&[[\"M\", x + r, y], [\"l\", w - r * 2, 0` 0!a\", r, r, 0, 0, 1` )\"` H%0, h` L$` 94-` E*` G! - w` i7` N!-` z*` P$h`!>7` K$z\"]];}`\">+`\"<)`!5$`!}$` $%`!N'` `\", ellipse`#N3rx, ry`#\\$y == null) {ry = rx`!05m`!6\"- r` *\"`\"/!` i!`\"+$1` $!2 *` #<-` 9'`!o$ge`%['` #&{path:`!|&e`!f!`!\\\"el.attr(\"path\"`&!circle` @,var a =` I$s;` X%`#\"%(a.cx, a.cy, a.r` i!` 9#` ,_` '!ry` q!rect` KD`(G$(a.` ^!` i!width, a.height`!f&imag`!EE` W@` q!tex`![1bbox` r\"_getBBox()` l-bbox.x,` H!.y,` \"\"` #` '!` ~'se` &~;}}, map`&C%` \"&`!1&path, matrix`(D#!` %%`!3#path;}var`(=!, i, j, ii, jj,` 9!i;p` s\"path2curve` u!);for (i = 0, ii` ;#.length; i < ii; i++)`'z\"` ;$[i]` V\"j = 1, jj` 2#i` T%j < jj; j += 2) {x =`\"##.x`!:!i[j]`!Z#[j + 1]);y` ;&y` ,5` 0$ = x` %$` 6! = y;}`+0$`\"s\";R._g = g;R.ty`0>!g.win.SVGAngle || g.doc.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/f` >\"#BasicStructure\", \"1.1\") ? \"SVG\" : \"VML\";if (`!C$=` .\"`&9#d`!W!doc.createE`!H\"(\"div\"), b;d.innerHTML = \"<v:shape adj=\\\"1\\\"/>\";b = d.firstChild;b.style.behavior = \"url(#default#VML)`!S\"!(b && typeof b.adj`!a!object\")`&M&`#E%E;}d `/7\";}R.svg = !(R.vml`'T!`\"=*;R._Paper = ` #!;R.fn`%z!perproto` 2$.` )!`! #R` $&;R._id = 0;R._o` \"%is`(P)o,`\"#!) {` \\#lowerCase.call(` 8!`\"Q!`!Y%finite\"`\"<&!isnan[has](+ o);}` C)array` D'o instanceof Array`1}%` K%null\" && o =`2N# ||` 7%`#t#o` <\"!` //`$%$` Z&O` ,!(o)` :)`!W\" &&`!D\".is` #! &` \"+` Q#` p\"ToString`\"}\"o).slice(8, -1).toL`#<$()`!f$;};`#l%clone(obj`,G#`\"&$b`&!\"` @$\" ||`!m%bj)`\"C!` P\"`#B$bj`,o\"res = new obj.cons`(~!or`+{\"var key i` N!`!/#obj`$M\"key`'-\"s[key] =`!W&` ,!)`+$&res;}R.a`*n!`%{(x1, y1, x2, y2, x3, y3`!##x3 `$;#`)}#x = x1 -` I\" = y1 - y2`(x\"x && !y`\"=&0`%W%(180 + math.atan2(- y, - x) * 180 / PI + 360) % 360;} else`)H'`!y!`!h&`!c#-` 0&`!v*;}};R.rad`\"D)deg`!W&deg`!'\" * PI / 180`.0!deg` I)rad` L&rad`!i(`!g#;R.snapTo` L)values, ` #!, toleranc`)s!` $$`*[!is(` (%,`)a'?` J& : 10`.;#is` r%`(%!)`$;#i =`!&\"s`1d$while (i--`$o#ab` T$[i] -` I\") <=`!Q)`\"E#` @%;}}`$)$` .\" = +` 8#;`'E\"m`!4$ %` 1$if (rem <` c5 - rem`+t\"rem >` T# -` 4;`!4&`']%` +!;}`!J!`0\"UUID`#Z!` \")(`$6&uuidRegEx, ` %\"placer`!(&` A&` *&\"xxxxxxxx-xxxx-4xxx-y` '$` 4$\".r` g\"` k5.toUpp`+i$;};})(/[xy]/g,`!-'c`$t#r =`([\"random(`(U!6 | 0, v = c`, !x\" ? r : r & 3 | 8;`\"v$.t`-8#(16);});R.setWindow`'()newwin) {eve(\"raphael` B&\", R, g.win, ` E#;` *!`,f\"win;g.doc =` @\".document`'6#_engine.initW`!$!` #-(` T!`)!var toHex`!W)color`'K#`4)!`\"#trim = /^\\s+|\\s+$/g` ]!bod;try` ?\"`!K!`.R#ActiveX`/)#\"htmlfile\");` A!.write(\"<body>` -%clo`$P!bod =` j\".body;} catch (e) {` 8\"`&V\"Popup()`\"c%` H#`$u!ange = bod`'\"#TextRange();`\"T$cacher`'1'`\"[$`\"2!bod.style.` 2! = Str` <#`&a%trim, E)`\"m!`(f\"=`!8\".queryCommandValue(\"ForeColor\");` E$`+4\" & 255) <<`&\\\"` -$65280 |` <&16711680) >>> 16`&d$\"#\" + (\"000000\"`*$$`&u)`46$-6)`#H*` \\$none\";}})`0B%`-:$`&Y!`#D#Element(\"i\");i.tit`2^!\"Rapha\\xEBl Colour Picker\";i`#B#display =`!#$` q\"body.appendChild(i`$!?` l$`$5$` #!`\"f$` r\"defaultView.getComputedStyle(i, E).getProperty`$=#` c!\"`*)!`->$`!G!`!2#;}, hsb`#O$`(U)`#?'hsb(\" + [this.h, ` #!s,` \"\"b] + \")\"` g\"l` K>l` R7l` b'rg`!:<` ]\"ex;}, prepareRGB`4-*, g, b`*d#g == null &&`3P\"r, \"o`*8!\") && \"r\" in r` '!g\"` \"&b` &\") {b = r.b;g` #!g;r` #!r`1_\"` m1s`\" !`3}$clr`10!getRGB(r)` ]!clr.r` o!clr.g;b` ##b`2V# > 1 || g ` \"#b > 1) {r /= 255;g ` \"#b` *$`%,$[`\"_#]`#$!ackag`\"q4, o` o!*` l$` \"#b` *$`,-!gb = {r:r, g:g, b:b, hex:R.rgb`#l%, `$Y$:`$b'};`\"s!o, \"finite`#t\"(rgb.opacity = o)`'x$rgb;};R`(4%`(T'lr`2V$gb`0W#is(cl`$e-h`$Y!cl`$f\"s`$g!` &$`$t\"` f\"`\"4\"R.hsb2rgb` }!;`$6! = rgb.r` )!`%6!gb.g` )!`%L!gb.b` )!h`*F!rgb`&t\"`+v\"`!$Tl`!G1l` oi`2~#`!T%`'(\"\")) {`&|+`!-!`&j!`!t4`(X\"`!v$`(Z\"`#L8rgb2hsl`\"\"&h`!X$` )!s` '#s` )!l` '#l;` Q*`\"`'v`\"F%`\"5$`!}\"{hex:`/\"\"}`#+%`#&$`# $`!8$`!2$` i$`!4$-1;}}clr`1?%`!'\"` &$`'($clr`'+!`%}#`'%)h, s, v`) \"if (`,^!is(h`%@2h`%I'` &\"`#@\"h) {v = h.b;s` #!s;h` #!h;o` #!o;}h *= 360`)o!R, G, B, X, C` F\" % 360 / 60;C = v * s;X = C * (1 - abs(h % 2 - 1));R = G = B` J!-` c#~~h;R += [C` {!0, 0`!#\"][h];G` 6!X, C, ` 7&` 6!B` 6!` F&` ;\"` 6!`#G#`,E&(`!z%o)`#Z#`($!`#N/l`#&W`)-\"h) {l`#D!l`#P-`'}!h`.`$s`.i$l`.j#h /`#q\"s /= 100;l ` \"#`#bM2 * s * (l < 0.5 ? l : 1 - l)`$!Fl - C / 2`#M~`$56`)f#`4(3b =`4Y'` 0%`2w!b[0]`2v!b[1]`2u!b[2]`#?!H, S, V, C;V = mmax` R&C = V - mmin` ,&H`#1!== 0 ?`4E\": V == r ? (g - b) / C` /$g ? (b - r` 1\"+ 2 : (r - g` *$4` q!(H + 360) % 6 * `$e!360;S`!'(0 :`$(!V`#,${h:H, s:S, b:V`3*'hs`3*'`#9&l`\"OpL, M, m, C;M`#8-m` -!`#9(C = M - m`#:1M`#92` 2!`\"l_L = (M + m)`'P!`#N-L`(E%C / (2 * L)`#p#(2 -`(s!L)`#n/l:L`#t)l`#s*_path2`2|\"`#y)) {` f#`+l!join(\",\").replace(p2s, \"$1\");};` O%repush(array, item) {for (var i = 0, ii = ` >!.length; i < ii; i++`-!#` ;![i] ===` a$`!K#` U\"` &.splice(i, 1)[0]);}}}`!J%cacher(f, scope, postprocessor) {` A%newf() {var arg = A`!$\"rototype.slice.call(arguments, 0), args`\"1!g`#%#\\u2400\"),`!;\" =` z!.`!I! =`!'!` &#|| {}, count` 1%ount` >%` (!|| [];if (` R![has](args)`\"u!`\"j!` E!`!G\"`%D%`\"B) ?` \"*` e#args]) :`!f\"` )\";}` i!`$<# >`/m!0 && delete` E#` ?\"shift()];` )\"`$5#gs);` g' = f[apply](`$%#arg`!&_` Z#newf;}var preload = R._` #&`'U&src, f`%%#img = g.doc.createElement(\"img\");img.style.cssText = \"position:absolute;left:-9999em;top` $$\"` \\!on`!5-) {f`&(\"this);`)&!` ?%null;`!P\"body.removeChild` I#}` r#error` j,` ;;` 4'append` 9\"img`\"I#rc = src`*3(clrT`+9#`*r,hex;}R.getRGB =`).%`!J%colour`*7#!` (\" || !!(` 5# = Str` A$).indexOf(\"-\") + 1`'c\"`,|\"r:-1, g:-1, b` '!hex:\"none\", `\"l!:1`-/'`!o'};}`(a!`!-#= ` P\"` TE` ]3!(hsrg`)Q\"` v\".toLowerCase().sub`.C\"(0, 2)) || ` B#charAt()`!I!#\") &&`!W& toHex`\"n%`2?!res, red, green, blue, opacity, t, valu` A!gb =`!!$match` d#RegExp)`+N!rgb`$3#rgb[2]) {blue`!8!Int` /#`!x'5), 16);`!:!` -63, ` B$red` .61, 3` A#`$8!rgb[3`!5-(t = ` 5\"`#+$3)) + t`!90` ;/2` B(`!E(` 9/1` @(`!L%4]`+0!lues` K#4][split](commaSpace`.Y!` x\"Float(` L\"`1W!` \"%`0h\"(-1`%1\"%\"`%1!red *= 2.55`\"%(` Z)1` ]&1` P3` T\"` `%`#>%` [)2` ^&2` Q3` T!` ^%rgb[1]`'H,` S!0, 4` T\"rgba` W\"`&h#`!'.3]`'C!` %# &&`''#[3`!03` b$/`1A!`$%'5`#-5`#.~`#.~`#iC`!~&` F$3` H\"deg\" ||`#O$`\",-\\xB0`+`#red /= 360`$YChs`#~~`.c#R.hsb2rgb(`,s5`%A'6`%;-6`$J~`$J~`$J~`$pXl`$J~`%B&l`%+=`2H\"{r:` ?\":` ?$:` C\"`4F2rgb.hex `3x! + (16777216 |` |! |`!)\" << 8 | red << 16).` i$(16`\"v$1);R.is`\" $, \"finite`#\\$gb.`##&`!q%`\"?#rgb;}` %#{r:-1, g:-1, b` '!hex:\"none\", error:1`!}4}, R);`(]! = cacher(function (h, s, b) {`({-` 3$.hex;}` ^\"l` J6l` V*`$>\"` 3$` Z&`$4\"` S-r, g`!;)`#p/ | g`#s%`#\\:`!&!getColor = ` &`&Q!`*|!r start = this` E%.start = ` \"0|| {h:0, s:`$(!` i! || 0.75}, `\"8\"` U!`#?$` T!.h,`!(\".s,` \"#b);` 4# += 0.075;if ` H$ > 1) {` &$= 0` H#s -= 0.2` &%<= 0`&.!`!q2`!c)`!4#})`&5%`'n#;}`#&'.reset`#*)) {delete`\"7\"` c!;};` 8%catmullRom2bezier(crp, z`#c#d = [];for (var i = 0, iL`-w!crp.length;` -\"- 2 * !z > i; i += 2` c#p = [{x:+ crp[i - 2], y` %'1]}, ` 8&` 1)+` ., +` Q++ 3` 1-4` 3+5]}]`$G!z) {if (!i) {p[0] =` O'`\"##` Q(` -\"1]};} else if (` /#4 == ` c\"3` \\)0` W'` E22` Q&2` >9` k,`!Q(3]};}` u#`\"1!`!A3p[2]`!8(`\"G2`#e.;}}d.push([\"C\", (- p[0].x + 6 * p[1` '\"p[2].x) / 6` <&y` :(y` >$y` >$` T%` >\"2].x - p[3` _'` R%` ;%y` <$` `$` T\",` 7#]`(=&d;}R.parsePath`+m\"`(4)p` .%`%L$` %)` `#null;}`'C!th = paths` P(`&2!pth.arr` M&pathClone` 2%` ^#aramCounts = {a:7, c:6, h:1, l:2, m:2, r:4, q:4, s:4, t:2, v:1, z:0}, data`)[\"if (`1q!`!I&, array`1q!` ,+`&:!` 8\") {` _#`!a'`\",'}`\"n!data`*C#) {Str` 8(.replac` R\"Command,`#W'a, b, c`*`$arams`!q!, name = b.toLowerCase();c` f)Values` b,) {b &&` i#`&z\"+ b`0^!if (` u\"= \"m\"` <'`!~\" >`,2!`\"1!`'S\"b][concat](` C#sp`1O!0, 2)));`!c#\"l\";b = b` s$? \"l\" : \"L\"`#&\"`!/%r\"` d;))`)F${while `!3$`!]$=`%\\([name]`!LF` I.)`\"s\"!` a0break;}}}});}` }!`48$ = R._path2s` ,!;`'D#`%f)data);`),$ata`1S!`)3!Transform` g%cacher(`$f&T`)3*` %&`),.`(K*r:3`(/(m:6`( 2` k#`(\"-` 1#`'q;`!H$`'t5` 9$`'.%t`'RQl`'{$.call(b`'G^`&?<`$k>`$f));`!u\"ths`-v*s`\".$`-S$.ps`-^$.ps || {}`-]\"[ps]`13!ps].sleep = 100`(#%` 5! = {` 8!:100};}setTimeout`%l') {for (var key in p`%}#p[has](ke`%'\"key != `!c!p[key`!4#--;!` $( && delete ` 1\";`(-!`/F$[ps]`'T!findDotsAtSegment`\"a*1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, t`#/#t1 = 1 - t, t13 = pow(t1, 3), t12` ''2), t2 = t *` K!3 = t2` '\"x =` \\!* p1x +` V!* 3 *` I!c` -#` ('` 2!2` 2!` Q!2x, y` Z'y` R/` .\"` T-` 2!` _\"y, mx =`!>#`!W! * (c1x - p1x) +`!m\"(c2x -` =!`!W\"p1x), my` X!y` O*y` X!y` Q(y` T%y` X!y), nx =` g#` S&`!\"!c`!.(p`!0&`\"[!c`!5!ny` X!`!,*`!\"!c`!.(p`!0&`\"S!c`!5!a`#y\"`#t&`\"1\", a`#M\"`#H&`!m\", c` I%`#~#`#|$c` I%`#R#`#P$alpha = 90 - math.atan2(mx - nx`#7!- ny) * 180 / PI;(mx > nx || my <` ;!&& (` h\"+= 180`']%{x:x, y:y, m:{x:m` )!my}, n:{x:n` +!ny}, start:{x:a` /!ay}, end:{x:c` -!cy}`!m#:`!'!}`(Y!bezierBBox`($O`0=$`/;!` N!\"`/5!\")) {p1x = [` DB]`0m\"bb`!C!curveDim.apply(null,`&k!`\"m'bbox.min.`\"8!` %%y, x2` (#ax` 8!` $'y, width` 6' -`!1!` c$height` G'` 4(y`#.\"isPointInside`#*-bbox, x, y`3+&x >=` a\"x && x <` '$2 && y` 6%y` )\"` 7$y2`!*#BBoxIntersec`,s*bbox1,` J!2`,]#i`0V!`!U-`#5$i` O!2` N\"1.x` W\"1.y) ||` --` ?%` )2` 5%2` ?;` 4(`!h$` W$2` p)` 4&` W#` '4` 5%` f2` T&` :\"` 9\".x <` 9% &&`!b$ >` .$ ||` \"%` E\"1` @'2` B%1.x`)u\"`\";#` o%y` m'y` o%y` n&` C$1` @'2` B%1.y);};`$z%base3(t, p1, p2, p3, p4`1e(-`0=\" + 9`,9! -` #\"3 +`06!p4`1^(1 + 6` K\"- `0m!p2` +$3`%^$` E!2 -` Z\"1` a$2;}`!O&ezlen(x1, y1, x2, y2, x3, y3, x4, y4, z`+ #z == null) {z = 1;}z = z > 1 ? 1 : z < 0 ? 0 : z;var z2` >!/ 2, n = 12, Tvalues = [-0.1252, 0.` \"\"-0.3678, 0.` \"\"-0.5873, 0.` \"\"-0.7699, 0.` \"\"-0.9041, 0.` \"\"-0.9816` ,!816], C`!(&0.249` H!249` \"\"335` +!33` \"\"03`!L!20` \"\"160` C!160` \"\"06`!9!10` \"\"047` C!0472], sum = 0;for (`*'$0; i < n; i++`%3#`*d!z2 *`\"i$[i] + z2, xbase =`%t#ct, x`$:#x`$4!), y` 2-y1`$Z\"y3, y4), comb =` f#*` n#+` S#*` \"\";sum +=`\"z$[i] *`2g\"sqrt(comb);}`&-#`!h!sum`%y'getTatL`%d?`%s!if (ll`%a!||`&;B) <` V\"`!?\"`1#\"t = 1, step`(1!`&;!`(;#-` 2!, l, e = 0.01;l =`'GDt2);while (abs(l -`!:!> e) {`!,!/= 2;t2 += (l`!Y!`'x#-1) *`!9!` aL`#Z$t`)T(i`0I$`\"a=`#S!mmax` E!x2) < mmin(`%h# ||` )#` 8#> ` H\"` 3(ax(`%}\"` U%`&##` U%` 7$` W#` 8#`$,+nx = (x1 * y2 - y1 *`!/!* (x3 -`!,!-` =!-` -'* y4 - y3 *`'[\"ny` N6y3 -`!U!- (y1 -`!Q!` Q3denominator` j#`!.%` L7`!b!;if (!` V'`\"<+px = nx /` y(, py = ny` &-x2 = + px.toFixed(2), py` 0#y` ,'`!5!px2 < +`$M)` 9' ||` o!>` >!`%2&` 0/` \\&`%+\"` I9` -2y` ['`%A#` 0/` ]%` )6` \\&`%y\"` I9` 2-`#w'`(L#{x:px, y:py}`(M,(bez1, bez2` P%` 4\"Help` 2*` L,Count` 6G, 1` S-` 2/just` v!`/#bbox1 = R.bezierBBox` L!),` 7!2` )/`%Y#!R.isBBoxI`+ %` i!` R#`#\"&`!+&`45#[]`';\"l1`,>%.apply(0`!c!1), l2` &22), n1 =`$<\"~~(l1 / 5), 1), n2` .(2` /'dots1 = []` &\"2` %#xy = {}, r`4<!`!X/`3511 + 1`3C(p`#$!findDotsAtSegment`!u#R`\"2\".concat(i / n1));`!Q!.push({x:p.`&$\".y, t:` ?\"});}`!=!`!2(2`!2(` v@2`!-)2`!3#2` ~82`!%1`!-%`\"m%j` 8\"j`!S!; j`\"i%di =`#q\"[i], di1` && + 1], dj` ,#2[j` *!` ;$2[j` <#ci = abs(di1.x - di.x) < 0.001 ? \"y\" : \"x\", cj` D$j` E#j` 35is =`28'di.x, di.y`!e!` '\"1` )!j` (!j` &\"` 4\"j1.y`'\"is`2X#xy[is.`.2&4)] == is.`./&`1h!continue;}` >1` B,;var t`\"s!i.t +`\";!(is[ci]`\"i![ci]) / (di1` '*`0h!di1.t`#1\"t), t2 = dj` \\*j` P!j[cj` c#j1` '*` d\"j` c#j.t`\"W\"t1 >= 0 && t1 <= 1`#c!&& t2` 0&2` 1%`#$#`+x(res++;} else` )!`&j%is`&n\"is`&p!1:`/1!t1`*)\"t2` )#`-4!});}}}}`.l$res;}R.path`,3%ion = `-W%(path1, path`.,,Path`-t#` 9);};` c.Number` <[`/7\";`/0*` 35`#4(` 5!`*\\!_` 9!curve` J\");` -!` (12`&2\"x1, y`4R!, y2, x1m, y1m, x2m, y2m`,R\"`0V$`-=C, ii =`!j!1.length`+9\"ii`-f)` <%[i]`&,!pi[0`(R!\"M\") {`1U!x1m = pi[1];y1 = y` )$2]`%p%` O*C\") {bez`/k!`\">\"]`-9$pi.slice(1));` |!bez1[6` v#` (!7` o&` X*,`#(&`# &` ##]` h\"x1m`!^%`-y#`-]%, jj`\"L#2`\"o%j < jj`-m(p` <%[j`\"q#j`\"j*2 = x2`\"b!j`\"s!2 = y` )$`\"h,` T%`\"p$`2W!`%.\"`\"n&j`\"l(`3v#2`\"s!` $%`\"j*` ['`%w'`%o%` \"$]` h\"x2m`!^%;}`%f!ntr`.\\$`'a#`&@(`'\\&`\"^!`+&+ +` U!r`!H%`#a%k`#d\"kk` v\"r`#`%k < kk; k`#d!intr[k].s`3(\"1 = i;` &+2 = j` ,%`%D#bez1` ((`\"v$;}`(8\"res`3d%ntr`,%1isPointInsidePath`+/-, x, y`%J#bbox`*\"!pathBBox` >!);` n#` a+` <!bbox` \\$&&`+<1, [[\"M\"` @\"], [\"H\",`!'!.x2 + 10]], 1) % 2 == 1`-;!_removedFactory`!l)methodname`--&` 4&) {eve(\"raphael.log\", null, \"Rapha\\xEBl: you are calling to ` t\" \\u201C\" +` *#name + \"` 3!D of `!W# object\",` >');};}`-2!pathDimensions`#M)`#x-`)L$`$?!paths`#v#`(v!th.bbox`\"E&clone` .&;}if (!` b#` =#{x:0, y:0, width:0, height:0, x2` 9!2:0};}p`%V\"`//+`/6#`'c\"y`'j\"X = [], Y ` \"\"p`.Z6`.\\3p` 8#`.d%`+f* = p`+g!` $!2];X`4E\"x);Y` $\"y)`)E%var dim = `!q!Dim(x, y,` ^!,` [!, p[3` '!4` '!5` '!6]);X = X[`(^\"](dim.min.x, ` &!ax.x);Y = Y` 3-y` :&y);`!m\"5`!k$6];}`+t!xmin = mmin[apply](0, X), y` %1Y), xmax` 5!ax` C-` &0Y)`$v# =` V\"-`!2!`%!$ =` R\"-`!.!, bb = {x:` >\"y:` 0\"x2:xmax`%I!y` $!`%j\"` t!`%k%` l\", c` Y\" +`!2#/ 2, c` f\" +`!1$/ 2};`&x$ =`'*#bb`+E%bb;},`%D!Clone`( -Arra`,1$`-,\"`'m#` 3%;res.toString`(y!_`'<!s` ,!`! $`-F!`!#\"ToRelative` D&` ')`!(6`)H,`!;#`)U$rel`).&`\"+%` 2%`)X#R.i` S', a` {\"|| ` ,+ &&` a!` (![0]` C$) {` :&`+I\"rs`/T!`\"_\"`!O(`&^!`#3\"[],`)w+m` (#m` )#start = 0`\",\"`!0'`)K.` 1(`)`$` ((2];` z!x;` y!y;` x!++`$J!`)|!`0$');}`+3)` G!`+9'` q!`+23`\"<!`2d\"[i]`,($a`!C)`+\\$a[0] != lowerCase.call` 2\")) {r`\"C!` )2;switch (r[0]) {case \"a\":r[1]`!)![1];r[2` &#2];r[3` &#3];r[4` &#4];r[5` &#5];r[6] = +`!\\!6] - x).toFixed(3);r[7` 6&7] - y` 3)break;`!J\"v`!G%` I\"1` 1:m\":`$A!`!w\"`$E!`!u\"default:`$.%j = 1, jj` >!`$#%j < jj; j`$'!r[j`!1&j] - (j % 2 ? x : y)`!<)}}`/9$`$Q+`$B'== \"m\") {`!]& +`&-$`!f! + y`%t'k`'E\"kk`!Z*k < kk; k`!b\"`!'![k`#}#k`/$$len`!A%` S$`%.%` N\"`%1'z\":`.g!x`'y!my`#M)h\":x += +` h#[len - 1]`$?,y` *8`#$` W02];` E3}}`-6:`,*#`(<#`,?\"res`.l%`-`)Absolut`-`)` )'`-4Uabs`-U4abs`,k~`-Y0`!.!` E&|| ` $&`%I#`!j&[`,[\"0, 0]]`-Pu+`.61` '+`.18`,m\"`.B'`!e\"crz`.*/ == 3`#;,`!J&` ,*1][0].toUpp`-i\"()` C!R` 9+2` 13Z\";`)n%r, pa,`/LM`0d%r`#s!);`/Z;u`!;$`/c2` *1`/c2A`/&o+ x`/\\.+ y`/&*V`/X'`-I$`+n*H` //x` 5)R\":var dot`',!`%S![concat](pa.slice(1))`$8&j = 2`/z#dots`/l3dots`/~$` $$+ x;` '!++` )-y;`,H!pop();`(Z\"res`!C%catmullRom2bezier(dots, crz)`\"i*M`2$#`\"G(`()!` ,!`0A#`2*)`1eJ`2,\"+`2\",`1|&`1g*R\"`\"f#`#A;`\"#V`'n!\"R\"` f/-2));`3U$`2LK`2h*`'g1Z`2=8H` 7\"r[`2<+V\":y` $0`$P$r[r`+}$`27!`$W!` ()1]`2e'` ?.` <0`2F@abs`2J<l2c`2>)x1, y1, x2, y2`0('` +*` 9$];}, q` M3ax, ay` a'var _13 = 0.333333333` \"#, _2` 4\"666666666` \"#`!j$[_13 * x1 +` G!*` |!` /\"y` *'y` -$x2` 60` *'`!S%`\"\"!a`!p3rx, ry, angle, large_arc_flag, sweep` %#`\"u$recursive`\"L%20 = PI * 120 / 180, rad` 0\"` +! * (+`! \" || 0),`3j(y, rotate = cacher(`!`', y` j!`!)#X = x * math.cos(` 6!- y` ,$sin` /!, Y` ?(` /$ +` A&` W$`#${x:X, y:Y};})`1?!!`\"C(x`'(!`!e!`#9%-`!V!;x1 = xy.x;y` ##y;` B)`#7#` G$2` F%` ##y;var cos =`!R&`#4'`#7!), sin` :$sin` .0x = (x1 - x2) / 2, y = (y1 -`''!/ 2`!(!h`\"x#x / (rx * rx`\"w$y` /!y * ry`\"d\"h > 1) {h`!6%qrt(h);rx = h` Y!;ry` $$y;}var r`\"E!` v#, r`\"J!` q#,`,w!(`&G* ==`&L' ? -1 : 1)`$^%qrt(abs((rx2` b!2 -`!\"!*`!r#-` /!*`\"5\")`\"6\"` 4&+` 1))), cx = k`!\\!`\"R#ry +`#>!+`#9&cy` ?#-`!y\"x / rx +`#S!+`#P$, f1`\"x$asin((`#q\"cy)` s!).toFixed(9)), f2` =,2` 54;` t!x1 < cx ? PI - f1 : f1;` c!x2` .*2 : f2;f1 < 0 && (` ^!`)d!2 + f1);f2` 3&2` 0)2`%0\"`$ '&& f1 > f2) {` f!f1 -` L#;}`(I!` @+2 > f1) {` x!f2` D'`2?%1`3:!`(~#[0]`\"'\"` (&1];`$=!` (&2];`$)!` (&3]`&H\"df` $f1`!z!abs(df) >`,B!`+;#f2old` D!, x` %#`)Z\"` &\"y2`!>\"f`.T!12`,Y!`\"%1 ? 1 : -1`*+#cx +`&!\"`)z%f2)`*>\"c`&V\"`,#(f2);`-A\"a2c`*z%`.e+0`.W,old`!e#, [f2,`\"*\", cx, cy]);}`\"Z)`+R!`&l%`!N!1), s` *%`!E!1), c`&e%`!r#, s` *%`!i#, t` *$tan(df / 4), hx = 1`2I-`(n$t, hy` )5y` <\"m1 =`4%$], m2` )\" + hx * s` 4! - hy * c` >!3` >!2` :%`#>!` :%2], m4` =\"`2e\"m2[0] = 2 * m1[0] - ` /!;m2[1` /'1` 3#1]`&#!`/z(`4K$m2, m3, m4][concat](res);`'S$`2;#` 04.join()[split](\",\")`$H!new`2t$;for (var i = 0, ii`'s!s.length; i < ii; i++) {` U\"[i] = i % 2 ?`19$` 3! - 1]`3v![i]`3O\".y :` 7)` 8$ +` F\"ad).x;}`\"O#` |\";}}, findDotAtSegment = `4L&p1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, t`)M#t1 = 1 - t`4!'pow(t1, 3) * p1x + ` +$2) * 3 * t`%G!x + t1` ('` 2!2` I%` \\$2x, y` h,y` ^6y` b2` I%` o%y};}, curveDim = cacher(`\"BL`\"h#a =`!z!-`&k!`\":\"p1x - (p` -&`\";!c1x), b`'4#(c` A!p1x)` ?#(` b\"` A\"c =` a#`!@!`#q!(- b +`3S'b * b - 4 * a * c)`27! / a, t2` K$-` +Dy = [`\"U!p2y], x` *\"`\"L!x], dot;abs(t1) > \"1e12\"`1N!`!Z!0.5)` 9\"2` /,2` 7$if` H!>`2%\"t1 < 1) {do`&p!`&y+`&RF1);x.push(dot.x);y` $&y)`2M\"t2`!.%2` Pc2` x;`%W\"y`%T%`&i!1y`%W\"` .%`' !c1y);`%Q'y`%W!y`%Q'y`%G!y);`%U\"` (#;`%)M;`%(M`$2~`$2~`$2~`!0#`-M$min:{x:mmin[apply](0, x), y` %,y)}, max` J\"ax` =/` ()y)}};}), path2`,f! = R._` #)`,f.ath` M#`,V#pth = !` .! &&` 7!s` C!`$P\"` /'th.` t!`3M&pathClone(` 3&;}` r! =` 9!ToAbsolute` n\", p2` 4#`!&%` 5+2), attrs = {x:0, y:0, b` &!b` '!X:0, Y:0, qx:null, qy` $!}` U#2` &SprocessPa`\"r!`#),d, pcom`#4#nx, ny`\"|&`\"n&[\"C\", d.x, d.y, d.x, d.y` *&];}!` p![0] in {T:1, Q:1})`(V!d.qx = d.qy = null);switch`!F\"[0]) {case \"M\":d.X`#O#[1];d.Y` &$2];break;` E\"A\":p`\"5\"[\"C\"][concat](a2c`&2'[`!]%` 8%p`+ !lice(1))))` i)S\":if (pcom == \"C\" ||`#%!` *!S\") {n`\")\"x * 2 - d.bx;ny` /!y` *&y;} else` F&` <%;}`!o',`#v#`!I4`!R)T`!P+Q`!Q*T\") {`#g%`!W&qx;`#x#`!W(q`!Y&` J&` >'`!Z)`!U&q2c(`%:(q` &!qy`)G\"[1]` \"#2]`!n+Q\":`!!#`$t&`!'!`$w$` l?` s,` \"#3` *$4`!%,L`%P3l` Z9` V+H` 7Jd.y` R+V` <A` %!` _#` R+Z` :CX, d.Y` T%default:`/@%path;}, fixArc`*j*p, i) {`&<!p[i].length > 7) {` -\"shift();`-T!i = ` 2!;while (pi` M#` K!.sp`'@!i++, 0,`!k+pi` 8$0, 6)));}` H', 1);ii = mmax(p` q#`.O!&& p2`!U$|| 0);}`\"-\"M`,x-1`0<#, a1, a2`\"8'ath1`/0$`/8%1[i][0]`(i!M\"` 6%` /#!` 1!) {` 0!`!b'`\"9!M\", a2.x, a2.y]);a1.bx = 0` %!y` \"$`'z$`!'!1];a1.`'~$` .!2]`\"-I;for (var i = 0, ` 3F i < ii; i++) {p[i] =`0M((p[i]`1A#);`%o\"(`%c!;` l\"(p2` B/2` L&2)` C$` V$`#!;fixM(p, p2` B#` H$` 3'2, p` -&` ?#i`&W\"seg = `!Y\"seg`4%!`\"=#` ,$len = seg`\"]%seg2` 0\"` F\"seg`\"j$;` z!`$7!seg[` X#- 2]` 3#y` *,1` 2$`$!toFloat(` 6)4]) ||`!t\".x` G$y` 743` C(y` I\"2` y\"`#g#` L'2[`\"&$` z*2.x)` R%`&3!` >9`!((2.y` R%`!+&` B+`\"i$2`'/\"` /01];}if (!p2) {pth.curve`']#Clone(p)`,*&2 ? [`%G!] : p;}, null`)u\"` J!), parseDots = R._` #(cacher(`*P&gradient) {var d` A\"[]`(52` F$`%B$`('+` [# = {}`!B!` H'[i].match(/^([^:]*):?([\\d\\.]*)/);dot.color`!q!getRGB(par[1]);if (` 8%.error) {`\"o#null;}` T(` A&hex;par[2]`$v!dot.offset`#^!` 3!+ \"%\"`!;!s.push(dot);}`\"\\!i = 1`\"V#` <!`*n#- 1`\"M,`$b!dots[i]` }#`\"l#start`'?'` ?\"`%9!`!E$`+`!, end`-6!`#t%j = i + 1; j`!'#j`!%%` c!j`!\"'` Y\"` )*`28#}`&A\"end` ?%100;` {!i;}` ,\"`!Y$end`+5\"d = (end -`!\") / (j -`!N\")`!b\"`\"c\"j`\"`$`\"H\"+= d`#N!`\"d& =`\"c#`#l!;}}`'N$dots;}), te`%n!R._` ##`&~&e`'_!per) {el ==` (\".top`.7\"` %%= el.prev);` =(bottom` A'` *#` J!next);` \"#` ?!` %#` d!` e*` -\"` =#prev` O\"` ]'}, tofront`\"&#` $%`!z2`3^\"`!w%== el`'U%;}tear` E'`!^%=`'s\"`!J$`\"g';` e%`!R&` *&` )\"`!`!back`!\\$` %#`!C<`#/$`!<F` L(`!c'`!x!` 0(`#b&` *)`!f%insertafte`%^#` #*`!k*el2`!t&`!J.2`%b<` @!`%C(` '\"`!Z&`\"6(` 6$`\"3'el2` X&`!t*before`!w(` )%`!LT`'A8`\"$\"`'*'` '\"`!P&`'K&`\"$\"prev` J&`!w!`\">)`%u\"Matrix`\"!!` \"'`!w&path, transform`-D#bb`24#Dimensions` E!), el = {_:{` K%:E}, getBBox:` p&`/o&bb;}};extractT` O$`#!!`!/&;` F#el.m`!b!`!{!` 7$Path`!\"` #+`!n8` k#mapPath` 9$`\"_#` ?-`*l!`!U,`%9\"` #/`%5*tst`)7$tstr =`(R\"`!:&el._`!r&;}` @\" Str` L!).replace(/\\.{3}|\\u2026/g,` K+ || E`/o\"tdata`![!parse`!T%String` q\", deg = 0, dx ` \"\"y` \"\"sx`3.\"sy` \"\"_`-U\"_, m = new `#\"\";`!2(=`!/#|| [];`\"J!data) {`2b%i` y\"`4&!` 8!`4%#`3x,`!~!` <$[i], tlen = t` J#, comma`2M!`##![0]).toLowerCase(), absolute = t[0] !=` N$, inv`+m!` ;%? m.` 0!t() : 0, x1, y1, x2, y2, bb`\"0!`!0%= \"t\" &&`!U#= 3`$#` l$) {x1 =`!&\".x(0, 0);y` )&y` ,#x2` ;'t[1], t[2]);y` /&y` ,)m`#r\"late(x2 -`!g\"2 - y1);} else {` :(` R(}` :#`!,r\"`' $`\"+#2) {`*J!bb || el.`*$#(1);m.rot` q&bb.x + bb.width / `#/!.y` /\"height / 2);deg += t[1]`!d$`!*(4`#5/`\"t*2`\"&!3`\"p.` /&`!O+`$_\"`\"o(` 2)` N(}`!R)`\"t3s`\"z- ||`%=)`\"}7scal`!0&` P!- `\"uKsx *`!]#sy` %\"` `%`#A05`#4=3`!I!4`#C.` /&`!k,2`#E1` 2.` X(}`!g/2`#O6m`(v)7) {m.add` h3, t[5` '!6]);}_.dirtyT = 1;`0T% = m;}}` \"*_.`-0!sx;_.`-2!sy;_.`-\\\"deg;_.`-`!`-e!m.e;_.`-h!`-m!m.f`*v!sx == 1 &&`-u!` $#!deg && _.bbox) {` #\".x += + dx;` *#y` *#y`#C%`!s)}`3D\"Empty`0x)ite`44$l = item[0];switch (l`-J*) {case \"t\":`1:#[l, 0, 0];` 4\"m` -)1` 7\", ` \"#` >$r\":if`!8\"`.o#`)u$` i*`!K!2]` \"#3]`&v%` ;)];}` q\"s` b15` i*1`!I!` j#` \"#4` p&` N/3` O.`!411];}default:`#n!equali`39'`3R!_` #0`$)&t1, t2) {t2`1Z$2`4M7t1);t1`4571)`3P#` k!` .42` >$var max`\"V$ mmax(t1`34%t2` $#), from = [], to` \"#`4A#j, jj, t`\")!t2;`4c!`4F\"` u%`4K$t`!{!t1[i] ||`' %(t2[i]);t`!t!` (!` 1*t1)`(W!tt1`4=#tt2[0` A!` .\"`'1*`1b# &&` N\"2` K%2` K%3` +%3]`\"n!` P5s` _&` I(` L$4` +%4])`%x%;}from[i]`#)!;to` \"%`\"|!j`#6#j`#p%`#n(`#q&; j < jj; j`#=!j in tt`+/!(` {#[j] =`!F!j]);` ;#2`!n\"o` 5'2` ;!}}`'B#{from:from, to:to};};R._getContainer`'#)x, y, w, h`+B#c` ?$;c` F'`(e!null`,s!R.is(x, \"object\") ? g.doc.getElementById(x) : x`%\"!` c'` d\"`#K'` 3).tagName`1p#`.*!` C) {` C%:` M%, `34!` '&.style.pixelW`3O!||`\"3&.offset` 4!, `3Y\"` F2H`3u\"` J/` 4\"}`+<,`!B8y`!#%w}`$J'` H&1, x:x, y:y` L$w` K%h`$g\"pathToRelative = ` #*;R._engine = {` I$2cur` D%` '\";R`2]&`%G&a, b, c, d, e, f`#m&new M` L!` 3.;};` Z%` ,4`$j\"a !`$g%this.a = + a;` (!b` (!b` '\"c` (!c` '\"d` (!d` '\"e` (!e` '\"f` (!f`#%` m%1` j&0` h&` $#d` 7&e` ,&f` &!}}(`\"g&`\"~\"proto) {` #'.add`\"{<var out = [[],`.>![]], `.T![`!d\", `!V\",` \"\"e], ` 4\"b` +#d` 3#f], [`4+#` `!`$V$[[a`!3!` V!b`!;!` <,`*B\"z, res`)K!a && a instanceof`$Q#`\";%` r\".a, a.c, a`!S\"a.b, a.d, a`!A+;}`-@!x`#=! x < 3; x`,|!` 4!y` 3\"y` 3\"y` 4!res` 1!` <!z` ;\"z` ;\"z` 8%+= m[x][z] *`\"M#[z][y];}out[x][y] =`\"4!}}`%4%out[0][0]`%;&out[1` )&c` <&1` ,#d` <&` +$e` <&2` ,#f` <&2];};`%H(invert`%J)`%@#me =`$c!, x = me.a * me.d - me.b` (\"c;`(}.` @!/ x,` B$` \"&c` &\"` i!` %!(` 0!` f!f` =\"d` (\"e)` 7&`!%#e` ;\"`!A#f` <!)`\"\"+clo`+E!`\"#)`!Q.`'>)`'1$`'K$`'9$e`'A$` u,translat` {*x, y`*}%dd(1`&F!0, 1`'J\"` V,scal` P., cx, cy) {`0c%`3C!y = x);(cx`/Y!y) &&`!Z\"` },` Z#`%8\"add(x` 5$y` #\"` AA-` c!-` e!`!k*rot`\"L,a`\"<# {a = R.rad(a);x = `!$!0;y = y` %\"`4R\"s`-C!math.cos(a).toFixed(9), sin` 6&sin` 2*`\"1&cos` H!, - ` \"!` ,!`#i\"`\" 3`\"1!`\"$-`0i*`\"&#`%r#x *`\"}# + y` %$c +`%a#` \\+y` G@b` _(d` c$f` \\+ge`)O*i` `&` L\"[Str.fromCharCode(97 + i)]`#&%4`'.-oString`(03R.svg ? \"` N\"(\" +`/[#get(0)`(/#get(1)` \"'2` .(3` .(4` .(5)].join() + \")\" :` f4` d)` ~)3)`$l\"` b$`\"0-Filter`\"*3\"progid:DXImageTransform.Microsoft.`+ #M11=\"`$4$`!Z\" + \", M12` +*2` 1$2` C+1` 0%` C+3` 2#Dx` **4` 0$y` **5` 1#sizingmethod='auto expand')\"`\"Y+offs`%r+`\"\\&`#o\"e`%\\'`-'$` ('];};` T%norm(a` X&a[0] * ` \"!+ a[1` (\"1];}` G)alize` T!`0t!ag =`*1#qrt(` o#);` c!&& (` $!/= mag);` r!` 0\"1` ,&}`-|)pli`1o1out = {};out.dx`2*#.e` *\"y` ($f`,-!row = [`\"q\"`03$c],`#\"#`0=$d]]` Z!`/9!`2u!`!|*row[0]));`\"P&` ,#` Q\"hear = ` .\"`#;\"row[1` '!+` 0$`#F!` 1#1];` $\" = [` B&-` W)` s%,` M&` 9&` j!` :%`!v'y`!k21`!o.1`!t)/=` i\"` _!`#:!`/+\"`!''`.f!`\"C#`\" \"if (cos < 0) {out`0`&R.deg(`!E!acos(cos))` L!sin` =0360 -`!?!` -\";}} else` ]7sin(sin));}out.isSimp`3}!!+`\"s&`0{'`&R!`%\"&` .(=`\"T(` -(|| !`!8&`#-\"isSuper` k@` _K&&`!\"(`!(!noRota`(\"!` m9` L(`*)#out`-x-`-T%`0@/shorter`)&#s = ` +# ||`1W\"`)U!](`$c#`#j%) {s`(W&+ ` %$`1g(` -#y` 5(`\"R&` <!`$}%+ ` %$` 5(`\"/#(s.dx || s.dy ? \"t`2,!s.dx,` /!] : E) + (`!L%!= 1` M\"`!>#` ,!? \"s` U#` B\",` 8%`1H#` _'`!V#? \"r` M#` ,\"` >(;`',$`1Q$m`2zn;}};})(`2+\".`$r!type)`)p!vers`%d\"navigator.userAgent.match(/V` ?\"\\/(.*?)\\s/`'a!` 67Chrome\\/(\\d+)/`%7\"` E&vendor == \"Apple Computer, Inc.\"`)1!`!Q$&&`!\\$[1] < 4`!-*plat`4U!slice(0, 2`(I!\"iP\"`!W+`!,'Google`!$&` u48) {paper`1 #afari`0t0rect`0e$rect(-99, -99`$$#width + ` (%height` -!).attr({stroke:\"none\"});setTimeout(`4O+ct.remove();});}`%}%`!U3;}var preventDefaul`2}-`!t#turnValue = false;},` R$Touch` H,`'2#` Z!originalEvent.`!\"*();}, stopPropag`,9$`!3.cancelBubb`-g!tru`!@!stop` sK` +`!=\"get` 9!Posi`!3-e`,c$crollY = g.doc.documentElem` u!` ;!Top ||` <#body` .&,` \\#X` D;Left` O1Left`,Y${x:e.clientX +` r$, y` .%Y` .%Y};}, add`\"@! = `%o*if (`!&\"` ;$Listen`/@!`!(#` G&obj, type, fn, e`!u\"`\"}#f`#%1pos =`#T-(e`.e%fn.call(` f#, e, pos.x,` \"!y);};obj`!O-(`!A#,`&r\"`0k#upports`%S\"&& touchMap[type]`!M#_`!<K, olde = e;for (var i = 0, ii = e.targe`(+\"es &&` #,.length; i < ii; i++`#w#` ;+[i]` *# == obj) {`!6!` 6-;e`'Q* =`!b!;e`({+ =`)d);e`'x, =`(c&;break;}}`#]]`#l), _`$?&` s%`&](obj`,^#`$B`` U5`!G+`!C.`+Y\"`-z&`(6'ttach` k!`'Y_`$o!`*D\"win.`$;!`3}!`*i~`+G@, x`&P!`+R0` .'`+]'`&D0` \"-||`1(+`&Y1` \".||`0;,`+#8x, `&o&`$L&(\"on\" +`$=$)`#j!detacher`0V,obj.` 6\"` F2`%a*` '#` e$;};}})(), drag = []` %\"Mov`3E!`+k-`#a)`#U+`$i$`$R~`%4<dragi, j =` &!`,n$while (j--) {` ?!` :#[j]`)[2e.`)E!es`\"X#`-#`-`),`*1\"` v$i` y!` .!` A([i` }\"` *!.identifier =`!=\"i.el._`!i!id) {x =` r\"`#e$;y` #+Y;(`.*,? ` \",: e)`'N+()`-t%`+5#{`'p,();}var no`0j!`!W%node, o, next =` ;!.nextSibling, par`/]\"` 6!` (\"N` Q!display` 3$style.` .#;`+W\"opera &&` _#`-S#Child(node);` I. = \"none\";o`!^(paper.ge`%p$ByPoint(`)-\"` R1`!53(`\"G!?`!L$insertBefore`!P!`\"g\") :` :$append`!k');o`&'!ve(\"raphael.`%$!over.\" +`!m&id`'6#.el, o);x +=`(,$;y` #&Y;` ].move` W4move_scop`/G!` y&x -`&O,x, y` $.y`,I\", e);}}` q\"Up`*s-R.unmous`$U!(`+C$)` .$up` /!Up`,o\"`)8$`(a%`!0!`(\\*`)[)i];`!J* = {}`\"Y/end`#A5nd`\"Z,start` %,`\"{4e);}`-f%;}, elproto = R.el`!L\"for (`+)%vent`+'$; i--;) {(`#/'ventNam`#=![` %%] =` u$` '*` P&fn, `!_!) {if (R.is` 0!\"` <$\")) {this`4V\"s = ` \"(|| [];` ''.push({name:`!,%, f:fn, unbind:add`1(\"` S!sha`\"~\"` )!`+/!`.s$,`\"V\"` \\#`!d$` D$)});}`1Y$his;};R[\"u`1|!`\"P1` (0`\"`(`.#`\"/6, l`#-`&G#l`&I!if`$'#s[l].name =` J#Name`*l!`#Z&undefined\") ||` q#[l].f == fn)) {` +&`#7\"();`!9#splice(l, 1);!`!H) && delete`!x(;}`\"+})`!e$i]);}`# #.data`\"m)key, valu`4_$` ;#eldata[` ~!id`#d\"` $*|| {}`1t!arg`4$!`!Z%== 0) {`!K#data;}` 141`&s(`!I!\"object`&y!`(B'in key` G#key[has](i`';%data(i, key`\"N\"`\"d*`*[*ata.get`*d!`\"+#,` $!,`!j![key]` f!);`!{'` 2!;}` \"% =`#5\"`+W+ata.s` g2` J!` k*`$J#`$:$`24\"D`$5/`\"Q& == null) {`$6.{};`4T%` .+`%q&` ++`\"2#`!<2get`!>-`$t&clone(`%H1)` Z'hover`)F*_in, f_out`*V#` ,!` $\"out` y&` q!`0@!over` R#` J$)` 3#ut(` _)out ||` =&`!A'un`!19`!*+`1Y#`!2%`1i%`!*%);}`1o!draggable`/z\"`)+%`0,\"`!\"&onmove, on`0y!, onend, `0m&, `1-', `1O%) {` ^%` =!`3U!(e.original`.W!`+l!).pr`*]!Default(`3R\"x = e.clientX, y` $'Y, scrollY =`.~\".doc`)l!Element.` :\"Top`/>%.body` .&` [$X` D;Lef`!b!` S-Left`1.\"`4`!.id`!]!identifier`+m!supportsTouc`-M!e.touches`,_#`3W!` ,$`+g#, ` +!`/N$i`/Q!` .!` A([i`2M#`!5'` 6!`!4,` %, =`0o#` Q$) {x` T%`#k#;y` #+Y;break;}}}` R'x = x +`#E$`!E(y = y` 2%Y;!` 1!`02&R`(*\"move(dragMove`(=#up` -!Up);` P!`4i\"el:`,6\"`&U&:`&S3:`&`2:`&w%});`'N#`$0!ve.on`-N'rag.` 9!`-M*` L#);`(3\"` B5move` J,move);`(\\!` ?5end` G,end`3h!`!;>`\"H' ||`\"z' ||`/N#`(g%`$H&` +&Y`$B&, e);`$|'`/'\"`+-%`$ ,`!5!`#m\"})`%=\"`$b!down(`#+#`.|2onDragO`,s-) {f ?`\"o2over`\"L*f) :` G!unbind` 1;`.3*`-#-`)M'`\"G&`'0\"`)C*if `'!!` =![i].el`(r$) {`.f(`\"c!` >)`\"n#` w&splice(i, 1`%*!`!u2*`!y+}`(o!`!W(`(s\"`!1#`(l+` /#`(n+`/}\"};paper`\"p\"circ`07!`\"l&x, y, r`\"v#out = R._engine` J#(`%H\"x || 0, y ` \"\"r` #!`%Q#__set__ &&`+|#` *\"`&,\"`1]!`%b#out`!G*rect`!@/w, h`!?6rect`!@3w` )#h` yjellips`#(1x, ry`!R3` P#`#+4` )$r` ,\"`!%]path`!V)pathString) {` #& && !R.is` 6', s` B#` */[0], array` :!` /' += E);`\"I0path(R.format[apply](R, arg`4-!s),`(q\"`!w\\imag`$-*src, `& &`$'3` S!`$5#src || \"about:blank\"`%~<`!8]tex`'i0text`!\\3tex`'b4Str(` U!` v]se`!H*itemsA`%8\"{`%U\"` )&, \"`%T!\"`%T\"` /& = ` #!.` p!typ`-G$.call(`%=%, 0`%I'`-*#)`&'(new Set`!<(`!{Dout.`\"5! `/=\"` ,!type = \"set\"`\"I8Star`\"\\*set`/}$`!4$= set`4$$.set()` X-Finis`)L*` d\"`\":&` h(;delete` &*`!L8iz`'q*width, height) {` U#`%}&` N#`$$\"`&)\"` F*` s-ViewBox`.r5fi` q4` S#`! (` I,`('+op = ` &'bottom = null`0P)`3@\" = R`%j!getOff`'/,elem`#e#b`!}!elem.getBoundingClientRect(), doc` <$ownerDoc`&v!, body = doc.body` F!Elem` -#d` B#Ele` J\"c` s!T`\"*!` D#.` *&||` l!` $*0` N$Left` F-` 0!` J*` +$0, `#2\"box`#=!+ (g.win.pageY`\"p#||` i%scroll`!=(` )%) -`!r&, l`!E\"box.` &!` m)X` b4`!_)` )&` r&Left`'N${y:top, x:left}`%B*ge`#K$ByPoin`-a.`$w#`*=(, svg`%$.canvas, targ`%Y!g.doc.e` q\"From` t!` g\";if`\":$opera`+Z!` T!.tagName == \"svg\"`!2#so =`&S&(svg), sr = svg.createSVG`&<\";sr.x = x - so.x;sr.y = y` *\"y;sr.`)H! = sr.`)K\" = 1`'^!hits` q#getInterse`\"f!List(sr,`(A!`!\"hi`.'& {`\"T%hits[` 1' - 1];}}if (!` @\"`*\"&`)/!}while (`\"`#parentNode`\"r& !`!P\"` .*` h#`)b$`!:(` [-;}` 4$`$I*` d+`!>#`\"_\");` a+`$B'`*v$?` g#getById`!}$` 8#id) :`\"@\"`\"K#` :\"`&L4sByB`-9,bbox`%C$`!F\"`0\"&` &!forEach(`,)() {if (R.isBBox`$b%(el`!f!Box(), ` w!) {set`22\"el);}}`4U%s`!X/ById`4T*d`-8%`!V%`.0\";`$s#bot`!J#bot.id == ` Q!`! #bot;}` X\"bot.next;}`%V)`!8(`\"I#`!7)callback,`!:!Arg`!)F` S$`0Z&Arg, ` <!=== false`!b&this`!T5` 7\"`$c5`+D9`$LMel.is` n!Inside` g\"`$M=` a%x_y(`\"**.x + S +` '\"y;}` @(_w_h` 2:` Q(`+_\"+ \" \\xD7 \"` 0$`+l\";}el`\"z\"`!u)`\"c4rp`\"r$realPa`,Z!getPath[` 3!type]`$X!`,7\"` 0!attr(\"transform\")`){!` %1`,_&`!'!R.` 3%Path(rp`&3\"` G.)`%3%R`!~*` O%`/q\"};`\"J$`)8#`(U*sWithoutT` r$`$}#`\"N#move`(E'{};}var _`\"o$_`\"P!` M5_.dirty || !_.bboxwt) {`#)E` L$`2N!thDimensions`!X$` ]\"` ?&.toString =`%s$;`!=$= 0`#+%` H$;`0:!`!\\'` $#T`!h'`!y/`!0* {`!]'0`(Y\"`!z@}` Q\"`\"+.map`$a!` ])`%B#matrix)`\"K$`\"3:`\"%%`\"J.`%N'clon`'u*`%(9`-S\"var ou`+1%`+u!`\"7()`'-\"`'3&)`+R#__set__`(*%` )#`+3\"out`+-%out`'2(low`!W)glow`!\\(type == \"text\"`!_,` X#` \"!|| {};`-6! = {`+-!:` k!`+7#|| 10) + (`+6#`)8\"stroke-` ?!\")` A!), fill:` X!fill ||`/3\", opacity` 6\"` &# || 0.5, offsetx` 6#` '\"` 8!` 3$` P$` '\"` 4#color` 3\"` &! || \"#000\"}, c = `-8$/ 2, r`$0),`$H#r`/`\",`&P!`,n-||`&v6` E(`&a\" ? `'$$p`&r- :` ~!;for (var i = 1; i < c +` &!++) {ou`0P#r.p` c$`%x#{`#n\":s`\"J\"`#g#s`#e\"? ` 0# : \"none\", '`$>#linejoin':\"round` ,+cap` '/`#7!':+ (`#>&c * i).toFixed(3)`$o&` C!`$q$/ c` :(}`.v'out.insertBefore`#I\"`/d\"late(s`%:$, ` #$`/5!var curves`0@\"`'*!},`$=!ointAtSegmentL` :!`(2)p1x, p1y, c1x, c` %!2x, c2y, p2x, p2y, `17%if (` '\" ==`(Q!`(Z&bezlen` MC);} else` U%R.findDots`!h%`!6EgetTatL` tE`\"(%);}`#$\"`\"v\"Factory`2N+total, sub`&O!`!i%`#<'`'R!` n\", onlystart) {`('#path2`$@!`'2\"`$P!x, y, p, l, sp = \"\"` }%`$]$point` v!`.y!`(9)0, ii` v#.`!7\"`(R\"ii`(M$p` 8#[i]`3!p[0]`-:!M\") {x = + p[1];y` $#2]`$/%l`1O#`%q/(`!t#[1],` P!, p[3` '!4` '!5` '!6])`!1!len + l >`%z*`\"D# && !`\"O$.`#0%oint` __`$/$ - len);sp += [\"C\" +`#X\"`!-\".x`#f#` (#y` '$m` 0&m` ,&` +%y`#S\"`%((`%X#sp;}`\")* = sp;`%&![\"M`!7&` c& + `!N(n` 1&n`!2&end` .&end` 5!`\"H%].join();`#q!= l;`$$5`$}&6];continue;}if (!`'`#`$!(`#+w`\"|#{x:`\"Y%y` $#y, alpha` (#` '!};}}`!p;}`$s\"p.shift() + `#t(end`#x\"`\"*$`\"H$?`(w!:`)0$ ?`)8&:`+1`\"K$0`\"6!`\"=81)`!(\"`!~\" && (`!6$`\"0E`#\"%` 0!;}`/i#getTotal`/J%`,S,(1)`/v(` .6` A\"S`\"M#` .80`\"-!R.`!(0` &'` <\"`!%/` &)` @\"`!0#`1E*`.'!from, to`+$#this`!*+`.#\" - to < 0.000001`)5&`\"#/` q').end;}var a`!Y\"` 63to`\"R!`/k$rom ?` :1a` n' : a;};elproto`# .`\"D&) {var`.! = `\"?$Path(`-v\"!`1')`)g\"` B!node` k+`\"S&` *4();}`\"v&`#=-`!f*`$T,`!l&`/>%`!NJ`!0&` n)`32)`!4,`%O,`!*'`'[\"` ;\"R._` &#[`!D!type`.t\"` &%`2S!text\" ||`!i\"` .%set\"`#V+` h#`4Z&`\"4$this`#=&path`!e*`'A0`'D'`\"^Q`(B(`(2,`*l#ef`\"b!easing_formulas = {linear:`!D&n`%_&n;}, '<'` (2pow(n, 1.7)` C!>` *:0.48` C\"<` 9-var q =` ?! - n / 1.04, Q = math.sqrt(0.1734 + q * q), x = Q - q, X =`!%!abs(x), 0.333333333` \"#) * (x < 0 ? -1 : 1), y = -` ]$Y` Z'y` K6y` U,t = X + Y + 0.5`*i$(1 - t) * 3 * t * t + ` \"\"* t;}, backIn`\"\\/s = 1.70158` g$n * n * ((s + 1)` *!- s`#Q!backOut` [+n =` ?!1`%A!` LD+ s) + 1;}, elastic` i+if (n == !!`%b*`%)'2, -10 * n) *`$_#in((n - 0.075`#G!2 * PI) / 0.3`!-%bounce`\"`37.5625, p = 2.75, l`(:!n < 1 / p) {l = s`\"5#n;} else`!o$< 2` ?#n -= 1.5 / p;` F)`$d!75` H.` G\"` T$2.2` E493` T'` F#6` 4684` K!}`#:$l;}};ef.easeIn = ef['ease-in']` )#<']` <$Out` 9(out` =%>` <&In` 9+in` >)<` F\"['back`! &.`'!\"` 0&` J&` 6!Out`&<!animationElements = [], requestAnimFrame = window.` /'` T!` 9\"||` 8$webkitR` ';moz` #<o` C=s` )5`&]&callback) {setTimeout` -%, 16`)H!`\"_%`1J0Now = + new Date, l = 0;for (; l <`#6..`2Z\"; l++` `#e =` 6.[l`22\"e.el.removed || e.paused) {continue;}var ti`$)!Now - e.start, ms = e.ms, `0M\"` *!` %\"`0w\"` ,!`1 \"diff` *!diff, to` (!to`-Q\"e.t, tha` &\"el, set = {}, now, ini` ($key`!w#initstatus) {`!]#` *) * e.anim.top`!v!prev) / (e.percent` ,'* ms;`\":!tu`\"6\"` a&;delete` &*e.stop &&`#y/splice(l--, 1)`*;%` t'(`!2\" +`!64(`\"/!/ ms)) /`\" ';}if` 7#< 0`$B)` .'ms`%>#po`\")!`$4!` i'`&&\"`)M!ttr in`$O!`/1#from[has](attr)) {switch (availableAnimAttrs[attr]) {case nu:n`'6#` `!` 8! +`!A!* ms *`%H!` 2\";break;` T!\"colour\"` X#\"rgb(\" + [upto255(round`!T\"` X!.r` _4.r)), ` ?5g` ?5g` ;9b` ?5b))].join(\",\") + \")\"`\"/)path`\"2$[]`#q&i = 0, ii =`#$'`*!%i < ii; i`*-!now[i] = [` A&[i][0]` g'j = 1, jj` e)[i` k&j < jj; j` j'[j]`$D+` .#`\";3` 8\";}`!J%` #\"`\"^\"S)` 4!` 0\"` *%`\"c(transform\":if (`$N(eal`!P\"`\"'`\"8j`\"FX`\"PL}`*Q$var g`,p!`/b&i) {`4c#`#k+` \\7;};`\"v#[\"m\", get(0)` \"\"1)` \"\"2` )#3` )#4` )#5)]];}`)')sv`#}\"`*_!== \"clip-rect\"`#{(i = 4;while (i--`#\\(`!PH`!6#default:var` X!2`!!![concat]`))')`\"E$`!=\"that.paper.custo`+|!ibute`+#`$[$`!N82`!E<`!^\"}set`,W#`'D!;}}`!:!attr(set);(`$`'d`1{\",`0&!) {setTimeout` ;') {eve(\"raphael`/K\"frame.\" + ` V+;});})(`!0!` 1&`0!\"`0h&` t'f, el, a` hSel`!\"!` ]\";` 7/inish` 8/R.is(f, \"`!#$\") && f.call(el`\"\"$e` ,!back`!},`#O&to);`3-=if (e.repeat > 1 && !e.next) {`*@!key in to`2*#to`2)\"key)) {init[key] = e.totalOrigin` 0!;}}e.el`!L\"init);runA`!O$(`!q\", e.el`!}$`4[$s[0], nul` 5!` o', `!j%- 1)`4F\"`!o\"`!y#stop) {` n9next` `;);}}}R.svg &&`#d! &` \"\"`(U\"` .$`(b#safari(`#c0`(g\" && requestAnimFrame(` D%);}`3*%`,q)color`,x&` *! > 255 ? 255 :` -#< 0 ? 0` ($;};elproto`\"V!ateWith` n)`&S!`\"r!params, ms, easing, `&=$)`.P\"e`\"(\"`+9!is`%v\"` -\".removed) {` L$ &&` W%`'7$` G!);`\"!#` )#;}var a =`!<# instanceof `$U% ?` 6$: R`\"'#ion(`!Y9, x, y`&C*a,`!0$, a`&51`\"+#`'-!))`2C\"var `3/(`$i4`32,`0+!` <,[i]`!}! =` c\" &&` _.[i].el == el) {` -/i - 1].start`!?0[i` 6#;`._#}`#h,;`%?%CubicBezierA`-*!(t, p1x, p1y, p2x, p2y, dur`'&\"`%L\"cx = 3 *` F\"b` &$(p2x - p1x) - cx, ax = 1` (! - bx, cy` R%y, b` &$(p2y` V!y` V!y, ay` S$y - by`!l&sampleCurveX(t`(7&((ax * t + bx)` ##c` $\";}` U&olve(x, epsil`\"+%t =` 5\"` r#` 6'`'2$((ay` y$y` x%` $\"` q,` T.`! #0, t1, t2, x2, d2, i`&H\"t2 = x,`&L\"`&-\"8`&*$x2 =`\"J+2) - x`)J!abs(x2) <`!\"'`!m#t2;}d2 = (3 * `\"{\"2 + 2 *`\"~$2`#\"!` `%d` d!0.000001) {`&!#`!Z!t2 - x2 / d2;}t0`!f!t1 = 1;`!z\"` c!t2 < t0`!<'0`/)\"t2 > t1` .'1;}while (t0 <` 6\"`\"91`\"?' - x`\"55if (x > x2) {`!]!t2;} else {`!f!t2`\"'#(t1 -`!c!/ 2 +`!a!` _'` $#`%k\"t, 1 / (200 *`('&);}`.E$o`+f&`.@)f) {f ? eve.on(\"raphael`2O\"frame.\" +`.8!.id, f) :` H!unbind` 1<`&v%`.y!`*3'`-3'`/f!ms`&]#`-7$ = [], newA`,3! {};` p!ms = ms` '\"times`$|!`,o$) {`-V%attr in`,#!`-/'[has](attr)) {` {#[toFloat` 2\"]`,W#[attr];`!M$.push(` =));}}` 6%sort(sortByNumber);}`!c!`.6\"`\"&$`!u#op =`\"G%[` \\%`41#- 1]` C\"`\"h'` #$;}`#8%.`$|!type.del`,5!`$u&` -!`#S#a`!;\"`#p'`!R%,`$J\"ms);a`#K%`#W&;a.del = + ` }\"|| 0`$r$a;};`!90repeat`!A)` h!` K`!3\"` ,!del`!T'math.floor(mmax` w\", 0)) || 1`!S(`!9%`3i*`!&!`3q%`#T#, status, totalOrigin, `!s$` ?# = `%>$` +#);`'9!arams, isI`!%!, ` \"$Se` z&`'S&xt, prev` z#tamp, `']!`(k!ms, fro`'y\", to` \"#diff`(-\"if (`!k\"`'q$`.}!, ii`3m0`&6#`/;\"ii`/:$var e`4:3` ~!e.el.id ==`#)$.id && e`'T#` V\"`(~#e`'+$ !`'*%) {`!<.splice(i, 1);`\"'`*-!`-O$` 0$ = e;}`!7$attr(e.`$:');`0&#}` R$`\"s\"`'3!to;}`*o%`\"s,`(y%`\"h3`+1$` ?%[i] =`\"2% ||` Y*[i] >`&!# *` 6\"top`%r)` A,;prev` &.`*b!`)*\"`-2# /` h% * `&W$ -`&#!);nex` l/ + 1];`&x\"` 6$`,{!` <#]`#4$`#4\"`&))`#e)` P&`!q,]);}`2;!!`!!\"`2P%`2P\"!`$_$`.m0` I%if (` '\"`.w*`#}!vailableAnimAttr` 8( ||`&q%paper.custo` C!ibute` b+fro`/V# `'I&`\"<\"ttr);` 4(= null && (` J)`!G&`!H!` 2!);to` 8%`\"##`0^\"switch`!r1` T\" {case nu:diff` \\%(` h%-`*g!` F$/ ms`$O#` S!\"colour\":`!W)R.getRGB`!o'`,D\"toC` K!` 8(`!\"$);`!5){r:(` G$.r`!:).r`!C\", g` 9'g` 6*g` <$b` 9'b` 6*b` >\"}`\"%)path\":`.2\"th`/q!path2curve`\"'', `!q%, toPath` D#es[1]`$`)` /$0]`\"7*[];`-n-`!U'`*c2` X&`*m! [0` _#var j = 1, jj` ])[i` c&j < jj; j` [.[j`%5#Path` )#`#%(` -\"`%?#}}`#*(transform`#5\"_`'V'_, eq = equaliseT` C$(_`#9-`/r\"q`(;-q.from`'[(eq.to`#=-` &&.rea`4`!rue`#!``\"X*0]`#m#`#*b` %)`#W7`0|$var `1V!`#\\#matrix || new M` )!, to2 = {_:{`$5%:_.` #%}, getBBox:function (`-x%` s%` =#(1);}}`'H*[m.a, m.b, m.c, m.d, m.e, m.f];extract`%&&to2`% (`$c'to2.`!P'`$i+(to2`\"=#.a - m.a`*6$` /(b` 6!`*.#` -*c` 6!c` '0d` 6!d` '0e` 6!e` '0f` 6!f` 5\"];`')csv`( \"valu`+<!Str`0z$`\"V\"[split](separator),`%1!2` F#`-n'` 9.`(@!`2!!== \"clip-rect\"`(F,` l!`(2-`'w$2`&z$while (i--`'e/(`!~\"[i`&g-`&l%`$\\'` G\"`.(#default:`\"]%[][concat]`\"_*`&0!2` 3*`0N(`!n0`3X;`*.)`\"#:`\"7'|| 0) -`3l\"2` )%`\"B$`\"1\"}}}}var easing`3h%.` *\", easyeasy`2?!` /\"_formulas[` *\"]`$]!!` B$) {` J'Str(` A\").match(bezierrg`-W#` C$&&`!#%`\"C# == 5)`*y\"`1j! =` :%;` x'`*E&t`*F&CubicB`!&!AtTime(t, +` b\"[1]` \"&2]` \"&3` -'4], ms);};`,?$`!('pipe;}}timestamp`#.&start || anim` $&+`,f!Date;e = {anim:anim, percent:p` \"\", ` m%:` w%, ` e!` '& + (` }!del`$q\"` >!tus:0, init` '#` /\"` >!, stop:false, ms:ms`${!ing:`\"4$`)r\":from, diff:diff, to:to, el:`'$#, callback:`\"S#` ($, prev:prev, next:next, repea`!|#`\"x%` )!, origin` t$.attr(), totalO` 6\"t` \"&};animationE` L\"s.push(e`&.\"`\"M#&& !isInAnim &` \"'Set) {e.stop`3L$e`$E#=`$@% - ms *`#P#`,@\"`!&-`' &1`&R&` >%();}}if (`!(.` {-e.`!\"(}` n9 && requestAnimFrame`!S&)`')%`!/$.`%G& =`\"(%` 5$`!:/` 3%`!G)eve(\"raphael.`'V&.\" +`,Y%id,` $$,`\"d!);}R` H!`!W!`)b)`%s\",`1I!`+h$`%~$) {if` ;$ instanceof A`\">%`#g%` ?\";`#e!R.is`+j#, \"`!$$\") || !`,\"# {` ~$ =`!(% ||`-=$|| null;`-K%` )!}`!E#= Object`!U#);` /!+ m`) \";var p = {}, json, attr;for`2@#i`!j$`\"7)[has]` <!) && toFloat` *#!=` `!` '.+ \"%\"` 7$) {js`#_!`'N!p`0}%`1T(`&k#!js`#7(new`#P&`$.'`&\"&`\"f#&& (p`0\"#`.j\"ing);`#=%` :\"`#M/);` v1{100:p}`!%#};elproto`%k#e`%DH`2\"!`&U\" = thi`)o\"`&r$removed`%2(&&` W%`!n!` D$`!c%` )#;`2~!anim`#D%`&^1 ?` 6$: `'j'`![:;ru`)'!` E\"`0.\"`(U).`03#s[0],`&g!` 8%`-c#`!^.`#?%se`2Y!`#;)` ~\"value`&\\#`\"6!&&` .\" !`'l\") {thi`2.!tus` O#mmin(` B!`!V#ms) /` \"%;}`!C#`#z!`!<'`+u$`!.4var out = [], i = 0, len, e`$a!`!J,`#\"/this, -1`!W*1`\"t&`!N\"`'I#len =`/!&`.8+`)i\"; i < len; i++) {e` ?0[i]`&C\".el.id =`&W\".id`()!!`#X!|| e`%M! =` ]\")`#p'`)>&`06!`.H!out`2/\"{anim:` W\",`.e#:` @$}`0z$` Y*0`#%out`(k(paus`%;.) {`\"K!var`#u\"`\"S\"`\"d5`\"g#`2^1[i]`\"I;` >1`\"g0`0~.`!z!`1+!` s#`%.$` [5) !== false) `#F!` 6-` p!d`-n$}}`',3resu`(V/`\":~`\"kM`-D!`&m9`#H-`\"7\"`#F0`&S\"`#9*delete e`#4#;`*{(`'!$`&z$)`#86stop`\"N~`%ttstop`%h.splice(i--, 1`#$/`\"%stop`4A(per`\"Co` s! == ` y$`!N@eve.on`# &`3o\"\",`!f*);` 8,clear` 4/`%c#toString`%a)`-%&\"Rapha\\xEBl\\u2019s object\";};var Set` N)items`28$` (!`14!`'C\"`\"}\"`#@!` +!type = \"set\"`(Z!` V$`#d*, ii = ` 8!`#]& < ii`#c(` ;![i]`&c!` %$.constructo`#n!`\"P$` +(||` v\"` </Set)`\"'#[`\")&`!>#] `'t$` Y!` +1` q$`\"U(++;}}}}, set`!I! `!$!.` '!type;` 1$`1c!`$+,`\"s!tem`4a!`3I\"`\"{,argu`&g+`#!*tem` ;(`,W$` 3!`#7$`\"pG`# 3len`\"v)`!F$`#J!len`#2+` +#item`\"~-`)c*`\"v&`,y+`&R$`&C#&& `.+#`$X&` 5\"--];` i'`!Y#pop()` t(forEac`#u*callback`,1\"Arg`&y4`\"G.`'#/` f$.call(` k#` u\"`\"p#i], i) =`,x'`\"a)`,],`!C$method in`$R$`.I$` (\"[has](` ?\")) {`\"L$[` -\"] = (`\"K&` /\"nam`!4'`&e-arg`&*(`#T)`#C#` h'el) {el`!)#name][apply](el, arg);});};})`!_$;}}`$2%attr`$+)name, value`\"C#name && R.is` 8#array)` ()[0], \"`,p#)`$a(j`$g\"jj = name`$^%j < jj; j`$b!`$A'j]`!S!` r\"j]);}} else`%*T`%:)` q&`\"?$`'6`/r!`(+,while `&@!`!)#` {$`'r#` V'`1<\"`/N*ndex, count, inser`0h! {` 5! = ` \"\"< 0 ? mmax` ( +` 9\", 0) :` &\";` g! =` G\"0, mmin` H)-` M$` E!))`10!tail`0r!, tode` $$arg`1(\", i`(!\"i = 2`4J#`-A.`#]!args`.B!(`-B();}` X%0` [\"`!<!`$/%odel` Q\"`+U!`\"S\"+ ` P&` O\"`!x/` Z%ai` I5`(f#`-z\"`!]!`!n#`!E,` >#+`\"n!`\"++`%p(` t%`&N#` $*` _'?`!*![i] :` o![i -` 5#];}`&1` ,$`\"?$=`#%\"` O%;`&L'[i]) {`.h(i++];`'>$new Set(`#Z!`.\\)exclud`&b*`+<!`(^6`.:6`!C#`2/\"`#\"$`'k\"(i, 1)`,Q%rue;}`(+(animat`!:*params, ms, easing, `/O$) {(`+e!` 1$\"` P$\") || !` 2\"`,-!`0#% =` a# || null`'q\"`383,`\"V!len,`36!, set` A#, collector;if (!len`0O,`!,%`!=!` G$`++,!--len &&`\"1%`1k\"set`/!!`!i#=`.1\"`\"E$str`\"8!?`\"($:`!F'`'`!nim` P!`#R\"ion`#82` M$);item`\"Y)[--i]`$0$(anim)`&J$i--`-t, && !`.(*removed &&`3h*` l$With(`#T\"anim,`!p!);` OD|| len--`'\\%`.{,`.#\"Afte`#h*`&v!`'R$`08.`\"*6` f((`(c!`!#3getBBox`$|,var x`.\"#y`.*#x2` )$` #\"`,$\"`!D6 i--;`)(#`\"c2`!\"#b`!;!` 4*`!Q#();x`-\\\"box.x);y` $&y);x2` 2' + box.width);y` 0'y` 4#height);}}x`1,!in[apply](0, x);y` $.`! !`1W#` A(2);`\"b!` )+y2`+0%{x:x, y:y, x2:x2, y2:y2, `!\\!:x2 - x, `!N\":y2 - y}`4R*on`+X*s) {s`##$paper.set()`#|*`-5)`$#+`-;)`2N#`#k*`!1!()`%h&`%b)toS`*+!`%`,` E#\"Rapha\\xEBl\\u2018s set\"`&D)low` Q)glowConfig`%H#r`,S%`\"7)` ,!forEach(`\"i'hape,`3R\"` Z#g = ` 2!`!(!` u(`-=!g !=`.-\" {g` Z42` l#2`\"7\"`#$\"` 4\"`-(!}}`% %ret`))sPointInsi`1^+x, y`*($` 5,alse`\"+4`*a!if (el` p*` l\") {console.log(\"runned\");` u,`2&!`!n#`!+\"`!{'` @);};R.registerFont`!{)font`*0$font.face`%;&font;}`\"%#nt`'(%` '\"|| {}`/t!fontcopy = {w:` d!w, face:{}, glyphs:{}}, family =` O!`!*!['font-` 3\"'`,!'prop i`!@\"`!Q$if`!o\"` T\"has](prop)) {`!=$` 5\"prop]` z)` -!;}}if `(C\"`\"!![`!2\"]`.O$` ()`%f\"` q$);} else` 60 = [` @$];` !`#K\"svg`!K-'units-per-em'] = toInt`\".'` 3+, 10`*p'`#K!`\"q%`#X\"`\"p(` ,\"`\"x\"` '!)`'%#path`\"l$` >#` \"!];`!X%` *)`$j\"path.w, k`$h!d` *\"`3]!\"M\" +` q!.d.replace(/[mlcxtrv]/g,`&A'command`&4&{l:\"L\", c:\"C\", x:\"z\", t:\"m\", r:\"l\", v:\"c\"}[` U#] || \"M\";}) + \"z\"}`*b!`!<!k`#b!`\"{#k in`!R\"k`\"r#path`\"l\"k`%`)`\"C).k[k] =` S#[k];}}}}}`-x$`()\";`,f!`3k%`(b.`%M!, w`0*!, style, stretch) {` ## =` ,$`\"1!normal\";` J!` 7!yle` -)` k\" = +` u#`)=!` 8\":400, bold:700, lighter:3` /$er:800}[` T\"`#D!400`#:!!R`'F\"`$1%;}`*-$ = ` 6#`'a$` L\"`+1#var name = new RegExp(\"(^|\\\\s)\" +`*H#`%Q'^\\w\\d\\s+!~.:_-`%^!E`$h!(\\\\s|$)\", \"i\"`'b'fontName in`!D$`$l#`!R$`$q!` ?$)` 6#name.tes`(p\"` 2$`\"$,` 4#];break`%)!var the`%'!`(j$`&/(`4,(`(d!`3|2` \\#` >#[i`#3\"` /#`-,(`$+\"'] ==`$o$&&` 51`%M!` C\"`%T%!` .6) &&`\"\"$` 1*`&P!` a$`&n$`\"Y%`'f#`\"\\$`'c)pri`'_+x, y`'X!ing,`\"G!, size, origin, letter_spac` ?!line` &$) {` A\" =` I#`'m!middle\";` M* = mmax(mmin(` ,+|| 0, 1), -1);` w(` H*` -(|| 1, 3), 1)`2\"!` n\"s = Str(`\".\")[split](E), shift`%:\"notfirs` '#`.2#E, scale;R.is`%u!, \"` b\"\"`$*!` /!`3>$`+6#`&<\")`&A(` `! = (siz`%\"!16) /`3'(`02*`!y!bb`2C(.bbox`!t$separator), top`+>!bb[0]`$(\"H`+Q$bb[3] - bb[1]`\"H#y`\"<\"h`+s&` 9! + (`$S$= \"baseline\" ?` g(+ +`!H'descent :` 7(/ 2`*C'`(r(`$(#`(j3if `%>#s[i`'G!\"\\n\") {`$<%;curr` $!`$A(;`\"/#+=`!:(*`&j);} else`3.#rev =`%'&&&`34)`!;% - 1]`.4!{}, `!5#` 51]]`!?\" +` l'? (prev.w ||` Q\"w) +` .#k &&`!D!.k` [(`'r!)`#\\$w *`(~+ :`\"O*1;}if (`!W!&&`!_!.d) {`':!+= R.transformPath` D!.d, [\"t\"`'v$*`']\"`%U%` '%\"s\"`'x#`'#`&G!`%r$, ` _!(x - top) /` =$(y -` >#` -%])`+})is.path`4`!).attr({fill:\"#000\"`+{!oke:\"none\"})`,G*add`,F)json`0Z%is` +!, \"array\")`20#res`)`$set(),`&n)json`&q#, j`'9\"`&q,j` A#[i`%N#;eleme`1i%j.type`*r!res.push(this[` 3\"](`\"C#j));`\"c%res;};R.forma`.\\*token, params`!#args`2K!is(` 3\", `\"C!) ? [0][concat]` 6#) : argu`!a!;` l! &&` Y\"` x#`-O# &&` x!`\"^# - 1`1q\"` O!= ` #!.replace(`!h\"rg,`!d'str, i) {`\"3#args[++`*%\"null ? E`!J\"s[i];}));`%I$`! !|| E`\"f\"ullfill = (` v&`\"[#` G!Regex = /\\{([^\\}]+)\\}/g, objNotatio` :&(?:(?:^|\\.)(.+?)(?=\\[|\\.|$|\\()|\\[('|\"` 5\"\\2\\])(\\(\\))?/g, `\"I#`*T!`!@%all, key`!)!`&1)obj;key`\"~%`!>,`##(` a!name, quote, ` \"!dN` .!isFunc) {name =` D! ||` 9'`0z!res`'r#` <!i`&+!`#~!s = res[name];}typeof`!a\"= \"`!?$\" &&`!%#`%)!` O%(`&!);` +\"` 2\"`$_#||` _$obj ? all :`!2\"+ \"\"`$l$`'S\"` &#`%W+`#2\"` 5#S`&\\!(str)`#0%`${&`#\"-key` R&`$8$`$%+;`+-!})();R.ninja`$T)) {oldRaphael.was ? (g.win.` .# = ` 7'i`(c!delete window` A$`\"9$R`'4!`.o!set`,B!;`'1'doc, loaded, f`$L#doc.readyState`#W%&& doc.addEventListener) {` #0(` m%`\"3,` y\"move` :3, false);`!9, \"complete\";}` +7loading\";}`!0%isL` z!() {/in/.test`\";+) ? setTimeout(` K$, 9) : R.eve(\"r`#u#DOMload\");}` r&;})(doc`,r!, \"DOMContent` ;\"\");eve.on` U.`&#() {`\"f\" = true;})`$H(`$?#!R.svg`&J%;}var has = \"hasOwnProperty\", Str =`'K#, toFlo`/P!parse` (!, toIn` +%Int, math = Math, mmax =` /!.max, abs` ($abs, pow` ($pow, separator = /[, ]+/, eve`0B!eve, E = \"\", S = \" \";var xlink`!!ttp://www.w3.org/1999/` ;!\", markers = {block:\"M5,0 0,2.5 5,5z\", classic` +, 3.5,3 3.5,2z\", diamond:\"M2.5,0 5` D!2.5,5` O\"z\", open:\"M6,1 1,3.5 6,6\", oval` Q$A2.` V!,0,0,1` %!` a\"` &*0z\"}`!x$Count`/B!{};R.to`$=\"`(C,`*&#\"Your browser supports SVG.\\nYou are running `*d!\\xEBl \" + this.version;}`#f!$` z)el, attr`&8#at` \"%`.}#el`.~!`42\"\") {`,*!$(el);}for (var key in` Z,[has](key)` .#key.sub` g\"(0, 6)` y!`$z!:` x\".setAttributeNS(` 7!`.)!` P'6)`'Y!`! \"key]));} else` R-(`.c!` <-}}` F&`&w!_g.doc.createElementNS(`&_/2000/svg\", el);el.style`1n!` %$.webkitTapHighlightCol`(1!\"rgba(0`%W!0)\");}`%\"#el;}, addGradientFill`$?+`!R!, g` ;#) {var typ`-=\"inear\", id = ` G#.id +` I%, fx = 0.5, fy` \"$o` D'node, SVG` )'paper, s = o`\";\",`%U!`#.&get`#.#ById(id);`,K!el) {`!5$`,(\"(`!u%`3Y%R._radial_`!]'`3\\*_fx, _fy) {`\"G$` M\"\"`!$!_fx &&` :#`\">!`-)#(_fx);`\"F!` (&y)`('!dir = (fy > 0.5) * 2 - 1;pow(fx -`\"x\"2) + ` .!y` ('> 0.25`%1!` y!`-?!sqrt(` 3!-` L\"` Z') *`!-!+`!&\"&& fy !`#}!` \\&fy.toFixed(5)` W!00001` U\"`%b&E;});`#L'` #$.split(/\\s*\\-\\s*/`$!\"`#,\"`%X&`%q#angle` Q)hift();` 1$-`#+%` -!` g\"isNaN` *#`,=&null`1I\"vec`/z\"[0, 0`0k\".cos(R.rad` Q$` 1#sin` **], `1.\"1 / (mmax(abs(` o\"[2])`1?!` ($3])) || 1);` 9% *= max` )$3` (%if ` ^& < 0) {` )#0]`\"I!` 5%` c'= 0;}` P'3` L+1` N)3` R%3` T#`\"o!dots`(I\"`3d!Dots`'}&`(D\"dots`#?,`*#!id`(?%/[\\(\\)\\s,\\xb0#]/g, \"_\"` [\"`)d$`%M%&& id !`)|&`$~%id) {SVG.defs.removeChild` T-);delete` S-`\"m\"!` ?-`08%`&N!+ \"`,e$\", {id:id});`!Z-= el;$`1I!`'\"%`*7# ? {fx:fx, fy:fy} : {x1:`$P%, y` %%1], x2` &$2], y` %%3]`-n&Transform:`!C$matrix.invert()});`\"w%append`\"x$);`2M%i = 0, ii =`$|!.length; i < ii; i++`2.\"` W($(\"stop\", {offset:dots[i].` )\" ?` h!` &': i ? \"100%\" : \"0%\", 'stop-color'` Y%` *! || \"#fff\"}`2D\"$(o, {fill:\"url(#\" + `01!\")\", opacity:1, 'fill-` *#':1});s.f`1A\"E;s.` 3# = 1` 2#O` ''`'4#1;}, updatePosi`/?!`1z(o`+w#bbox`0l!getBBox(1);$(o.pattern, {` ##`$D&o`$8, + \" translate(\" +` r!.x + \",` &%y`\"F\"})`3[#Arrow`!G*, value, isEnd) {if (o.`&f%path`-p$` E!s`2'#` (!).toLowerCase()`.`#\"-\"), p`\"@!`3;$e =` }\" ? \"end`$m!start\", node` I!`3\"attr`3n\"` %!, stroke =` 4\"['` *\"-width'],`&m!`!W\"`&e#`(h$ \"classic\", from, to, dx, refX`!$\", w = 3, h ` \"!t = 5;while (i--) {switch `\"N\"s[i]) {case \"block\":` '\"`!$$` (#oval` $$diamond` 2%pen` $$none\":`!i#` y%;break;` =\"wide\":h`!T!` ,(narrow` 4\"2` -)long\":w` A-short` 3\"` I$default:;}`,w!`%1%`!_!) {w += 2;h ` \"!t` (\"d`1f!;refX`$n'4 : 1;attr =`)2$`\":!`$[$:`$\\!.` '\"};} else {` `#` p!w / 2` V*` I(` a%` s\"}`.k\"o._.`\"g!s`';#`'F$` /&.endPath && markerCounter[` 2.]--;` (*M` M!` <<` @\"]--`\"1%` 5'`'h!`!!=` =%`!5+` 3!`!#?` ='`!C!`!7. = {`#0#`%'!!=`&]#`*?#pathId `1F!phael-`!'\"-\" +`(r!,`!7#` ,5se` C# + w + h`4D!!R._g.doc.getE`1:\"ById(`!+\")) {p`1(.$($(`+~#, {`*R$linecap':\"round\", d:`!;\"s[type], id:` s\"}));`#!*` 2\"]`'=!`\"x$` -1++;}var`\"I# = `!k4`\"i$), use`\"I\"` .\")` s$ = `\"'!` (\"`\")!i`!m$Id`#L$Height:h` ($Width:w, orient:\"auto\"`,Y\":`,^\"refY:h / 2});u`.D!`!$!use`#.\"xlink:href':\"`2`!`\"9\",`0\\\"`0}!`(K\" ? \"rotate(180 \"`$[!/ 2`1*!\" + `!\"!`0p! \" : E`1D!scal`1>\"w / t`1:%h` &$)`4R\"`/)':(1 / ((` I$` F!) / 2)).toFixed(4)}`$R$`%F)use);`%X/`#j#`$~+`#Z$`$s8` ;%++`#;#`!0#`$}&sByTagName`#S#[0];}$(us`1j#);var delta`,e\"*`(u'`/w$ &&`(3\"!=`09#)`%h!`,G$from`2T!`*\"*` i!`2^#|| 0;to`&h!getTotalL`2P!(`-b\"path) -`!D#` P$`\"Q%` |#` /+` M@`.;'.end`!E,);}`/.$}`/;![`'e#`*m#] = \"url(`&^!`+:%`%[!`\"`!to ||`4B!) {attr.d`!M$Subpa`!D)`4f&);}$(nod`#%`!]&[`,%!\"Path\"] =`'q#` /.`-j\"` >!`!P$` 3.dx` <!`#4!` ,.Type` ;!type` -.String` <!valu`$%&`$Ftfrom`%$,` 4B`$e>`#I4&& `$\"${d:`$7>});delete`\"H'` e)` &5`$I$` (5dx` \"7`$F\"` &5`$D$;}for `!v! in`3e*)`$T\"`+9*has]` J!) && `/z#` 5$attr]`3\\#item`0S7`'A\"` @!&&` H!.parentNode.remove`--\"item);}}}}, dasharray = {'':[0], none` $\"'-':[3, 1], '.':[1` %#-.` 2#, ` )&` &*` 0&. ` T\"3` B! ':[4` %$-':[8` 1%.` 4#` V!` :#.` ;#` ')` '*` 4#}, addDashes = function (o,`(Z\", params`#L!lue =`\"V&[Str(` 1!).toLowerCase()]`+b!` 4\"`$#\"`1I!`).!`&|![`1X*] || \"1\", butt = {round:` 9!, square` &$butt:0}[` [,linecap` g\"`!o\"` *.` 8!0`$^\"`\"M![], i`+%$.l`)c!;while (i--) {` E\"[i`+J%[i] *`\"+#+ (i % 2 ? 1 : -1) *`!]!;}$(o.`)]#`!?$`#1%':` p\".join(\",\")});}}, setFillAndS`*d\"`$%+`$\"'r node`#O!`.k&s`#Z&, vis =` A!.style.visibility;n` \"0 = \"hidden\";`)N!var att in`!0&if (`#X#`)@$)` 0#!R._availableA`$9!` 7(continue;}var`#F\"`0G!` g!att]`2)!` %\"`/7%switch`*y!) {case \"blur\":o.blu`&Y$;break;` :\"href\":` &\"title\":var hl = $(` ,#);`!?#`*u(createTex`*^!` t$hl.append`*g\"val)`#;\"` *(hl`!7*target`!4\"pn`$!$`+V&`(?!pn.tagName`(T* != \"a\"`%\"#`!q$a\");pn.insertBefore(hl,` u!`!U-` /\"`!5!hl;}if`#?! ==`!R%) {pn.setAttributeNS(xlink, \"show\"`*^#` P!blank\" ? \"new\" :` 5\")`2S%` R5att` a#);}`\"v(cursor\":`&a'` -\"`%4%`#C)ransform\":o.` $%`%+0`1 !-start\":addArrow`,i%` 80end` 7/, 1` ?*clip-rec`$o#rect = `-;'split(separator)`$!rect`+S# == 4) {o.clip && ` $\"`1+(`1+3` 8-`':\"e`%T#clip`4g!), rc` .\"`!e!);el.id`'`!`'X\"UUID();$(rc, {x:rect`1u!y` %\"1],`,x\"` )\"2], height` *\"3]}` o!`&@(rc);o.paper.defs` 0)el);$`&j!, {'`#?!path':\"url(#\" + `!]\"+ \")\"});`\"w#= rc`'2\"!`0_(pa`0e!`%p!g`&F'`\"^\"` v!\"`#s\"path` N#` j#`*?%getElementById` E!.replace(/(^url\\(#|\\)$)/g, E));`$I$`$?,`$8(clip`\"53E});delete`%,#;}`')`!r!:if (o.typ`)-\"`\"&\" {` i%d:`)J\"?`*'!rs.`\"f#R._pathToAbsolut`,R$) : \"M0,0`#Q\"_.dir`/b!1`\"|!o._.`'|!s) {\"`(L!String\" in ` 4& && `(2(` 0&.` J');\"e`1s!` 4I` J%`))!`\"g*`&a!`*x$`$(`+G(`\"%.`\"u\"fx) {`--! \"x\";`1'$` 7\"x`,N%`!*\"}`!+\"x`#}\"` V'` O$-` Q$ -` 8$`!Y! || 0)` X$r` W&`$\\!rx\"`*?\"`$j%`)N\"`!(+cx`\"#>pattern && updatePosition(o`\"T,`2^)`)u!`\"kUy`#:&y`#4,y`#.2y`#7)y`#1/y`#:&`!Y\"`#6+` X&`#-\"y`\"By`\"Lur`)I-`!:$`)Q%rx`)U\", ry` $\"}`2q&`!9:}` 6src`!*-image\")` c/`4S'href`4V$`3g+stroke-`(u#`*_$sx != 1 ||`)X!sy` *!`$T%/= mmax(abs` H#), ` $%y)) || 1`/(\"`0!$_vbSiz`/1\"lue *= ` ,+;}`\"\\:`%%['`!o#dasharray']) {addDashes(o,`&6\"` 50, params)`!W$`,3~`,fK`$,/`!w%\":`\"9)`&>#`\"*$` N(fill\":var isURL = Str`0\"#.match(R._ISURL`#U\"` B!`'9(fill`'4%`(v#`38\"r`1 !getRGB` l#` ^!!clr.error) {`29#`!V\".gradient`2O$`*K\"` -%!R.is`*_#opacity, \"undefined\") && ` ?!` i#` ,5`!v%` ;#:` h)})` (['fill-` 5#']` v9` +>`!2%` <*`!<\"` O,`*g&if (`*'(circle\"`)7\"` -%ellips` 1\"`$_'charAt() != \"r`!B\"addG`#R#Fill`%`%)) {if (\"`!>#`&}!`!X! ||`%l\"`!X$` 1&`)l!r `$B$`%5!_g.doc.getElementById`\"X!.g`)r(`&_\").replace(/^url\\(#|\\)$/g, E)`%r\"` u$`!%#stops =`!+%` ~'sByTagName(\"stop\");$(` K![` Q!.length - 1], {'stop`#&`\"F0?`&d#` 3# : 1) * `!v\"`\"].` H$`$_,` S!});}}`'L* =`#v\";`2[#ill = \"none\"`(m$clr[has]`!U&`%r9clr`!e%> 1 ? ` &(/ 100 :` ((})`+A)\":`)l2`.G3clr.hex);`3z$` _# && `!Y=`,Y#`!?Y`/q#`!,,`.8~`.]Y`%9$\":`):~`$Z!`!1(`$&$:`3+%`&g&&& !`'=\"`$T\"`$5*\")`/w(`$O-`4V\"`$T\"` &\"`$L$`0A$}`15&` k%`!4/) {`*Q~`!\"\"`*Vu`\"J%`*!#default:`'%$font-siz`'*\"`$p\" = toInt` (\", 10) + \"px\");`3X!ssrule = att`\"<&(\\-.)/g, function (w) {return w.subs`&d!(1).toUpperCase();}`*2$tyle[` y#]`,/%o._.dirty = 1`*L4`&6)}}}tuneText(o, `2x\"` y(.visibili` p!vis;}, leading = 1.2, ` Z$ =`\"('el` f%`1d\"el`(?\"!= \"text`(=!!`4)$`':\"` 3!) ||` T#` 0#font\")` \"1`$.\"` *.x` =/y\"))`#`%;}var a = el.`'K!, node` +\"`(N\"fontSize =` 6!.firstChild ?`%4#`'e%`%j#View.getComputedStyle`'v\"` T&, E).getPropertyValue`\"#)`&'\": 10`'}!`\"r/) {a.t`#p\"` 9\"` )!;while `!\",) {` -!remove` .!` 2-`\"l\"texts =`,W!` m').split(\"\\n\"), tspans = []` &#;for (var i = 0, ii =` h\"`)3#; i < ii; i++) {` R! = $(\"` &!\");i`1,\"` *!, {dy:`#z%*`&N$, x:a.x});` B!.append`\"-\"`$%%creat`&p!Node(`!B![i])`'T#` H(` a!` f#s[i] =`\"*#}} else`!b#s`%=$`+\\2`!z$`\"a!`\"U)` X!`\"L3if (i`/ !`!6%`\"5>`!O$` L%0` N#0});}}}`/i%` L!, y:a.y});el`*r)var bb`'i\"_getBBox(), dif = a.y - (bb.y + bb.height / 2);dif && R.is(dif, \"finite`21\"`!G-dif});}, `#1#`*{)`!f\"svg) {var X`#6\"Y = 0;this[0`$.!his`)Q!`$ #`$b\"raphael = true` J!.id`1?\"oid++` :)` 5!` =#` F\"matrix` K!` %\"()` 3\"realPath = null` /\"paper = svg` +\"`+2!` l$` '\"|| {}` 8\"_ = {transform:[], sx:1, sy:1, deg:0, dx:0, dy` '!irty:1};!svg.bottom`1*!` $'`!(\"`!`#prev`!K\".top;s` \"\"` J%top.n`*}\"` O\"` 9$` *\"` ^\"` :#`\"B!}, elproto`\"o!el;`$L#.` 0!`/;!=` ;$;` D#.constructor =`$}$;R._engine.p`#C\"`%*&pathS`2>!, SVG`%3#`$c!$(\"path\");SVG.canvas && ` $&`)p)el`3e\"p = new`!5$`19!SVG);p`1/\"= ` q\";setFillAndStroke(p, {fill:\"none\", s` 3!:\"#000\", path:`!g&});`4B#p;}`\"Y%rotate`\"7)deg, cx, cy`*B#`&2#moved`1>%`$#\"}deg`.M#deg`.D$separator)`0 !deg`+@# - 1) {cx = toFloat(deg[1]);cy` &+2])` x$` +(0` E#`%4\"`%n!` k!cy`!(\"cx` 3%|| ` @&`$F#bbo`!9!his.`+5$1);` ^!bbox.x`+2!ox.width / 2`!U\"` /!`+N\"ox`+K';}` g!`(G%`#)\"_` '&.concat([[\"r\"`(Z!`#X$]])`$-%`#I\"`$0%scal`$**sx, sy`#pGsx`$3#sx`$\"3sx`$**s`#w(sx`$1\"`$@(sx`$1!`$>)sx[3])`!(#` *'0]);s`$:*` {!sx`#lp}` ^\"` R&?`$V4 : cx`!}\"`!<'` H#`$m/ : cy`+l\"`$_As\", `$>*`$l7` \\!l`)2-x, d`(yA`${$d`$k4d`$t+d`(y)`$}\"` a\"` *'0]) || 0;` I!+ dy` )\"`\";Ft\", `\" \"`\"=<form`\"P)tstr`%%#_`%!$_`\"'!tstr`%C'` n#`!6';}R._extractT`!Z), ` r!`!|\"cli`1&!$`!|\"clip,`2E(`3W'.invert()}`1q$attern && updatePosition` g!` >#node` v'node` i4}`$A\"_.sx != 1 || _.sy` (!`\"`#sw`4>)[has](\"`/i\"-`'S!\") ?` 6('` 1('] : 1`!T\"attr({` 1*:sw});}`$.2hid`&n*) {!`&g( &&`!4\"paper.safari`\"N&.style.display = `1h\"`,~5how` Aj` r5` k\"` },`)\", || `!;\"` z!parentNode`&X%;}`4c!aper`$?$` (!;`!\\\"__set__ &&` >\"` )$.exclude`%q#eve.unbind(\"raphael.*.*.\" +` n\"id`%d\"`-3\"radient) {` o\"def`!k$Child` 8+`(4!tear`(&#` P!` e'`\"-+.tagName.toLowerCase() == \"a\") {` ?1` T'`!8-`#,,;} else` S3` J1);}for (var i i`$i\"`!E#[i] = typeof` 3!` ,!= \"`$s$\" ? R._`$m#Factory(i) :`+H!`4\\#`%+$= true`%`'_`1\"#`%T5`&G0`'b%`\"?#show();var `(n#`! \"`2*'{};try {`28(` v!`2A$);} catch (e) {} finall` I&` \"!|| {};}`!!!`(G$hide(`(\"%bbox`\"5'attr`\"/)name, value`1#?if` L\"`4;+res`\".\"`$O%a`$P$`,A\"` o(`,o'a)` |!s[a`$q!` 4&a];}}re`'N& && res.fill`#g& && (` -&` =!`(G&&& delete` +);re`2/'`1.%`0p'`\"K#re`\"J#`\"x!`\"J$ && R.is`#2#\"string\")`\";#`\"u$\"fill`![!`\",&`!j/` 2'`*>'`#h'` .+`#t*\"`!k%\"` G+`2})var nam`$?!name.split(separator), out`$R+i = 0, ii` N#s.length; i < ii; i++) {`!F\"` =\"[i]`+d!` /!`%0,out[name`${+` .!`*}$if (`#X!`/m'customAttribute` K#,`*G')` j0` A8.def`,/%` N(R._availableA`!S(`3+$ii - 1 ?`#,!: ` T$s[0]]`%J?array`!h$`#f'`#],`#U3`!'$[i]`#9)` z![i]);`!`$ou`%d#`!I\"!`)a)param`)j#` &\"`\"X%` J!`$\"(`$f!` X#`!~,object`\"*!` j%name`/4'key in`!+#) {eve`2K&attr`2Q!key + \"`2V(,` $!,` S#[key]`0/$` m#`$k7`+b(`%13`+z!key`+!!` ~#` ')`&F=key`&U-`#W#`&E;key].apply`4=#[].concat(`\"C();`(<'key] =`\"c(`)a&sub`#^&`\"U#par`\"*\"` 7\"`$:&[` +\"` f#` &$;}}}}setFillAndStroke`!W#`$V#`-O$`0#\"`0h%toFront`2w5`0N7`2K&parentNode.tagName.toLowerCase()`-(!a`3W%` D,` T'appendChild` k1)`*O%` U1` J1)`-}\"svg`$l);svg.top !` 0\"`%p\"_tofront`#6#svg`# 6Back`\"iL`&<#e`#n!`!p0`.]!` )\"`#-<` ?#`\"U'insertBefor`%9\"` n,`)R\"`#f8first`#=!`#c%`!G'` 4&`#/$`#]\"`!D%`!,2`! 3` )`#w!back`#t#`$@&);`$K1`$!2`!;\"After`$/)elem`49\"`#@node = ` N#`!t! ||` ($[` 0$`/b\" - 1]` ?!`39\"ode.nextSibling) {`\"I,`\"n4` J-`'f%`'BDR._` w\"after`#D#`!h#`#F*`##8`!T\"`\"Fv0`#(#`\"LH);`\"3%b` 7&`!pIblu`%G*size`/q#`)H$`$^!+ size !== 0` 9#fltr = $(\"filter\"), ` i#$(\"feGaussianBlur\");t`/s\"`!+$size;fltr.id = R.createUUID();$(blur, {stdDeviation:`!>#|| 1.5})` Y\"`%,(blur);t`1a#defs` 2)flt` :!_`\"O$ltr;$(`$(\", {`\"\"\":\"url(#\" +` <!.id + \")\"}`&R&`%,!` a\") {` ##`$K(`%C\"`&f#` B#;delete ` )#` %&`\"n&;}`!F\"` Y#`3Z%`#Y&;}`$a$;};R._engine.circl`&q*svg, x, y, r`$K#el`$6\"` H\"\")`/l!canva`/g!` $&`#))el`+i\"res = new E`&;\"(el`0'%s`\" \" = {cx:x, cy:y, r:r, fill:\"none\", s`4%!:\"#000\"}` U!type = `!O$;$` t!` k%`'3%res`\"H)rec`49*`\"H'w, h`\"G.rect`!_t`\"Q!`\"P!width:w, height:h`\"c! || 0, rx:` \"%y` \"%`\"[D`!|!`\"XEellips`%=6x, ry`\"t+` M#`$[~`\"e\"`!>!:ry`\"9F`!Y$`\"=Eimag`\"Q/src`%a(`\"X+` P!\")` ~#`$_:preserveAspectRatio`\"\"#});el.set`*!%NS(xlink, \"href\"`!C!`%p~`!c.src:src`#N*`\"P\"`#14tex`(w5text`#4+tex`(+~ 'text-anchor':\"middle\"`!K\":text, font:R._availabl`.3!s.font`&@&`&R#`&`\"`&D/`\")!;setFillAndS` S!(res`&@@setSiz`&X*`$0!`$+$) {`4I!` 0! =`$L\" ||`4^\"` )!;` &!` I\" =` Q#` :%` )\"` >\"`#Z#`&L((\"` _!\",` f')` 37` i\"` G$`!]#;`2S!his._viewBox`!o$setV` ,\".apply` A!` V#` C%`1r&hi`\"q*creat`\"p*`&&#con = R._getContainer` }#0, arguments), c` 7$ =` R!&& con.` .%, x` 4\".x, y` $#`(5$` (#`$')` -#`#S#if (!` d%`\"T!row`'&\"rror(\"SVG`!:'not found.\");}`\"'!nvs`(5\"svg\"), css = \"overflow:hidden;\", isFloating;x = x`0B!;y = y` %\"`%W-512;`%I/342;$(cnvs, {`*V$` \"!, version:1.1`*z%`\"Z\"xmlns:\"http://www.w3.org/2000/svg\"}`%G\"`#i'= 1) {cnvs.style.cssT`+,\"css + \"position:absolute;left:\" + x` ;!x;top` +!y` *\"\";R._g.doc.body`+&)cnvs);`\"& = 1;} else`! Crelative\"`!}*.first`! !) {` -&insertBefore`#K#` ?1`!;&`'$(`!i+}}`'#(new R._Paper;` M&`$x)` -'`$y+` /'`.B#=`&G!` ,(lear()` ''_lef`'[#` *$top = 0`#H(&&`\"m(renderfix`)Z,}` n(` =%(`-F%` 4%`-E,`+.#` c)`4*&, fit) {eve(\"rapha`3H\"` O#`,7#`+X+, [` S+]`0v\"s`.[\"mmax(w /`->', h` ($`-##, `\"g\"` /!top, aspectRatio = fit ? \"meet\" : \"xMinYMin\", vb, sw`&.!x == null) {`-p'bSize) {`!J#1;}delete`\" $` ;!;vb = \"0 0 \" +`!b' + S` )$`%9#`&I$` T( =`\"L!` a\"x` N#y` V#w` )#h;}$`!P\"`%s\", {`#?#:vb, preserveA`\"R&:`\"]'});while (`\"%!&& top) {sw = \"`3S\"-`11\" in top`4Z#?` \"&['` <('] : 1;` 6$({` 0*:sw})` 9!_.dirty`#9!` %'T` )$ =` ~!prev;}`%R) =`%R*!!fit]`'!$`1Q%prototype`'[6`/H'`#6)`)7$`+z\", pos;try {po` 2%getScreenCTM() ||` 1\"`2b\"SVGMatr`(\\!} catch (e)` T)` 7/var `*.#- pos.e % 1`'B$` -\"f % 1`&w!` E!||`$L#` *$`4h$`*v$`',#` )!+` y!)` ]!s.` :#` 3)`/-!}`'e!` q!` 7\"`!:\"` c#top +`!/\"` b\"`(}'` 6#` `\"}`#x*`,\\!`#r,R.`*m)` ?!`*n#`*M\"c`$.*`''$c`/T+.remove`.y#`/>*` Z!bottom`*e' `*2\";`\"0\"desc = $(\"desc\"))`/d)`1z%`$N\"TextNode(\"C` +!d with Rapha\\xEBl`*K!R.`47#));c` b)`!)%` \"3fs`!C$fs\"))`'=-move`#9,`#:)` =\"`#?%`#5'.paren`!y!`*I!` %1`#@)` 8');for (var i`*j!his`%]#[i] = typeof` 3!` ,!= \"`!]$\" ? R._` t\"dFactory(i) :`$!\"}}`/\\\"et`\"E! = R.st`!'&method in el` =!`'l#` '#[has](` ?\") && !` b$` -)) {` /%` -\"] = (`#@&` /\"name) {`+K#`+\"-arg = arguments`+n(.forEach` h'el) {el`!)#name].apply(el, arg);});};})`!^$;}}})();` Z'`\"G#!R.vml`!R%`+,\"has = \"hasOwnProperty\", Str = String, toFloat = parse` (!, math = Math, round =` 0!.` (!,`3g!` +$max, mmin` (%in, abs` ($abs, fill`!/\" = \"fill\", separator = /[, ]+/, e`'B!`*^!, m`\" ! progid:DXImageTransform.Microsoft\", S` E!\", E = \"\", map = {M:\"m\", L:\"l\", C:\"c\", Z:\"x\", m:\"t\", l:\"r\", c:\"v\", z:\"x\"}, bites = /([clmz]),?([^` &!*)/gi, blurregexp = /`!^$\\S+Blur\\([^\\)]+\\)/g, val = /-?[^,\\s-]+/g, cssDot = \"position:absolute;left:0;top:0;`3\"!:1px;height:1px\", zo`,X!21600, pathTyp`!o!{path:1, rect:1, image:1}, oval` >%circle:1, ellips` =\"path2vml`+B)path`'d#tot`\")\"[ahqstv]`\"i!comma`%f!R._`!H!oA`\"&$Str` [\".match(` ]!`)N!(` F-2curve);` |&`#o!/g`2;!` F%` t/`*>!` u2`!s#r`\"R!` 9&replace(`%'!,`\"C'all`\")%`)K!s` [#vals = [], isM`.N\"` A#.toLowerCase()`-$!m\",`!-#map[` A#];args`!3%val`!.(value`*3#` {#&&`!2!.length == 2`*I!s +=`!K\"+` t(`!3# ? \"l\" : \"L\"];`!o%;}` g!push(`**!`!,\" *`&*!)`+s!`,U#` }!` |!` '*`+\\\"pa`\"Q&`#I\", p, r;`\"K\"[]`0-(= 0, ii`+d!`\"!#; i < ii; i++) {p` 8![i];r` \"$[0]`#G*;r`\"8!z\"`%v!r = \"x\"`17'j = 1, jj = p` %j < jj; j`!#!r +=`,p\"(p[j]`\"Q$ + (j != jj - 1 ? \",\" : E);}re`#)$` (!`\"`$.join(S);}`%g!pensa`$`!`(L(deg, dx, dy`%|#m`'g!matrix();m.rotate(- ` G!0.5, 0.5`#i%{dx:m.x(` ^#, dy:m.y` ($};}, setCoords`)f*, sx, sy`!:$, deg`!@#_`\"!_,`!K!p`!I#`/$\"pos = _.` %#, o` >!node, s = o.style, y`#k\"flip`.P#dxdy, kx =`,:\"/`!>!ky` %'y;s.visibility`1b!idden\"`*=!!sx || !sy`2('o.c`\":!ize = abs(kx) + S +` (\"y);s`#C\"`#{\"deg * (sx * sy < 0 ? -1 : 1)`!\"!`\"_&c`'B\"`$V%`$F);dx = c.dx;dy` $\"y;}sx` m!&& (`\"V!+`&b#`!##` +) y\"`-$\"y = -1);s.`#(#flip;`\"3#orig`3?!dx * - kx`\"7#dy` *\"y`!q!`$6$||`$8#size`\"!#fill`$7!getElementsByTagName` U!`3|\");` C#` \"!&&` #![0];o.removeChild` L!`#%\"`!.#) {`\"u2m.x` <$[0]`%z%[1]), m.y` %4`!C\".`2U$`#a# * y`\"U#c.`\"Y!y;}if (`\"D)` U!`%H#` /&[0] *`%L!s`%V%` 3'1` 5%y);}o.append`\"C(}`&j,` )!le\";};R.to`#<\"`(x)`&}% \"Your browser doesn\\u2019t support SVG. Falling down to VML.\\nYou are running Rapha\\xEBl \" + this.version;};var addArrow`!B)o, `/L!, isEnd`1m&u`2S%`0}\"`.,*.split(\"-\"), se =` Y\" ? \"end`0b!start\",`/I!` j\"`.;#, type = \"classic\", w = \"medium\", h` #';while (i--) {switch`2P#s[i]) {case \"block\":` '\"` q$` (#oval` $$diamond` 2%pen` $$none\":`!V#` y%;break;` =\"wide` F%arrow\":h` 55long` F$short\":w` :/default:;}`3%!stroke`)V!node`)J2\"` @\"\")[0];` &\"[se + \"`!P\"] =`#b!` )/`$ \"` =!w` ,/wid` 7#h`0D#FillAndS`!P$`%q)params) {o.attr`/i\"` $\"|| {`&U\"nod`\"'&, a` ;&`0;\"`\"C!`0=#xy, newpath = pathTypes[o.type]`-W!`!/\".x != a.`/|!` ,#y` -\"y` ('`\",!` 1\"` %\"` 1&height` 6\"` %#` 3&c` x#c` t(c` z#c` v(r` C#r` >(r` C#r` =)` -#), isOva`.]!val`\"1.`!3!!=`!B'||`!2\"` *'` v!a` p\"` y%` -\"` Q(`!R\"`!F!` *'y), r`*A!o;for (var par in`$l&if`#f$[has](par)) {a[par]`$;!` 7!par];}`.S!`$U#) {a.`$^#R._getPath`\";$(o);o._.dir`-t!1;}`$+$ref`\"\\!`%O!` )!`!j%href);` &#title` @&` )\"` B%` *!` B&arget` B'` *\"` D&` +!` F%cursor` J!` $%`#k&` +!);\"blur\"`##& && o.blur`&w$blur`2m\"` *#`\"j!` B!`+_\"= \"path\" ||`'k$) {`!]!`'t'2vml(~Str(`#K\"`.[,indexOf(\"r\") ? R._`(P!oAbsolute` O$ : ` ##`!O!`!:'image\"`)!`2Y\"pos = [a.x, a.y]`$G!`2p$` 4\"`(f!,`(O%];setCoords(o, 1, 1, 0, 0, 0);}}\"transform`#\"-` 1%`\"$` (%`!c\"`(C\"`1S#cx = +`)Q!, cy` %$y, r` 2$`'h\"` %! || 0, r` @$`)F\"` 1&;`#`(R.format(\"ar{0},{1},{2},{3},{4` )#` \"\"x\", round((cx - rx) * zoom)` /&y - ry` &/x +` :4+` >0cx` *$`(D-if (\"clip-rect`#P'`#(#rect`4`#`)c#'` E%']`4_$separato`''#rect`4E# == 4) {rect[2]`#B!` $$+` $$0];` #!3` 5'3` 5'1]`0 !div`/c$clipRec`.I!R._g.doc.create`2D#(\"div\"), d`02! = div`0=\";` -\"` `!`$J)rect({1}px {2}px {3` '!0}px)\",`!H!`\"<\"!`!9)) {` l#posi`25!= \"a`(X#\"`!($top = 0` '$left` $(`0v\"= o.paper` )#+ \"px` Z%`0}#` ;&` *#` ?#`&g#rentNode.insertBefore(div,`#9!);div.appendChild`,o!)` X\"`#Q%`#,!`.l#!`%(0`+b#` H%`-T%` *$`#h\"`#_$\"auto\")` k#o.text`,J#var ` '$S`$G#` 7&`$N#`*5#fon`!%\"` D)` 1\"`.:%fon`.d%['font-family'`2v\"` J.F` :! = \"\\\"\" +`1O$` N*`'g#\",\")[0].replace(/^['\"]+|['\"]+$/g, E) +` e!`!6+size`!*5S`-U\"` >/` W+w`%/!` O5W`%\\$` @1`!B,tyl`!87`$&#` ?0)`+6#arrow-star`+0+addArrow(res,` Z%` D'` T,end` 8Fend'], 1` \\#`%2#opacity != null ||` N%stroke-`(q!']` 0.`1Z!` $/src` \"0` i!` TP` 9%`!e#` .2fill` $:` _#dasharra` (:miterlimit` *9linejoin` $=cap` :&`){#`#;!`.y#get`.a#sByTagName(fillString), new` J#false;` %$ill &&` #![0];!` )$(` F'` E\"`/i\"Nod` m)`.z\"o.type == \"image\" &&`$f') {fill`$w!`+,%src;}`%@(&& ` u!.`/K!true` w\"` +%`%m2== \"none\"` '.`#'%` m&`\"X\"`'?!` -$`!a&fi`#U%isURL`3})` 8\".match(R._ISURL`!\\\"` H!` $`0&&`!m!ode &&`$A\"remove`/~\"` i!`$\"!.rotate`\"M#` -\"`#$\"` s![1]` .\"`#]\" \"tile\"`4=!bbox`/7!getBBox(1` k#`2m'bbox.x + S +` '\"y;o._`\")!pos = [` =\",` 7#];R._preload`\"4\"[1], func` n!() {` Y$s`-~\"[this.offsetWidth, ` ''H`-F!];});} else`#\"#color = R.getRGB`#Z*hex`\"_(E`\"V*solid\"`#x!` I2error`&.!res` Q\"in {circle:1, ellipse:1} ||`$u.charAt() != \"r\") && addGradientFill`-[(` Q!,`(F!)) {a`&[#`&s#;a.g` R#`3*'ill`%1+`&v#`4M\"\"`,((`.~' || \"` %.`'1#`.j$= ((+ a`,i-+ 1 || 2) - 1) *` A\"`/@%` *1`#L2o` >+;`!1&mmin(mmax(` -#, 0)`0X!`).\"` @%` ##`*=&`+\"'`%W$`#<#}}`(^!append`(W(var `08#`-28\"` >\"`$d\"` $?[0]`-q!` r%`$7\"!` )#`-\\#` 5%` >%`-\\'` c%`+ \"`1}*`-V'`23%`,X,`2--`1gK`1a/`1M;`1G9`1A7) {` -\"`/3&;}`\"C+`.u0` 2%`!s&` ]'`/`-` `&0`\"k7== 0`%\"!(`!H(`$[!`%c(C`+i3` 8\");` S&`$;-` q'`&$` i'.hex`(#(`)C#`$A-`(xP` {(`)1-var `\"`! = (toFloat`\"/#`\"u,) ||` p\"0.75`)WA`#T6`$A!&& (`!5$`\"D&`!'$` F4`#?'w`0C! =`!}\");` g\"&&`\",#< 1` I!`!c$*` A$` O11`$V&`+]-`'H6` _'joinstyle`/)%`'|3\"`(\\!\"`!'%`(f&` H.`(|,8`!80`(l!`!?(endcap`!22` G\"== \"butt\" ? \"flat\" :` 0:square` K!` #$: \"round\"`,C(`+10`1$#` )% = {'-':\"shortdash\", '.` (%ot\", '-` '&ash` ,%` &,` 2#. ':\"` =$` '!` p#--':\"long` (% .` 8#` G$`!%!` ;$` +&` '+dot\"}`$M$dash`%&$`\"/%[has]`\"K9?` B'` .6] : E;}`0E&`1:$`2!(`+n$}if (res.typ`-n\"text\") {res.paper.canvas.`!l!.displ`$ !E`,w\"pan = ` D&span, m = 100, fontSize = a.font &&` ##.match(/\\d+(?:\\.\\d*)?(?=px)/);s =` x!`!2\";` S&(s` %\"` i$);a['font-family`'F$` 8!F` .!`*~\"` 7)` L&`)\"` I)W`*0$` 4,` L&`!Q!` H)S`$j#` 3+);`\"X'`-^$` ;%ize`)V\"` <%&&` #%[0`-r#0;` |#` `\"` \"%* m + \"px\";`$_!extpath.string`!V\"pan.innerHTML = Str`%+\"` ?*).replace(/</g, \"&#60;\"` ,'&` 0#38` *)\\n` 3!<br>\")`0/\"brect`$W$getBoundingClientRect()`!l!W`$`!w = (` O!.r`#s!-` \\\".left) / m` H!H` H!`1(!` 9\"bottom` E%top` C&X` H!x` '!Y` '!y +`'!!H / 2;(\"x\" in`,O#`.4!y` &'`/`\"`'O\"th.v`4S!format(\"m{0},{1}l{2` #!\", `,e!(a.x * zoom)` )&y ` \"-` =% + 1`#-#dirtyattrs = [\"x\", \"y\",`)I#, \"font\",` \"\"`'?#` &%`&y\"` &%`&U!` $&ize\"];for (`!%! = 0, dd =`!+'.length; d < dd; d++) {if (` ;&[d]`\"x(`*!_.` ;! = 1;break;}}switch (a['text-anchor`/F!case \"start\":`&Y+yle['v-` M\"lign'] = \"left`'[\"bbx`+e#W`$a!`!*\"` m\"end` ID`&A!` f(-` c-default` JCcenter` f(0`\"d$` F7ker` Z\"true;}}, addGradientFill = function (o, g` 5#, fill) {o.`%j$` \"$|| {}`&,!` ++, pow = Math.pow, opacity, oindex, `/}\" \"linear\", fxfy = \".5 .5\";` c#.`!?$ =`!I%;` )'Str(` '$`*~&R._radial_`!{'`\"4%all, fx, fy) {`!A$` K\"\";if (fx`-U!y) {fx`-'fx);`!a!` (%y);pow(fx - 0.5, 2) + ` .!y` ('> 0.25`*C!` [!m`$<!qrt(` 3!-` L\"` Z') * ((fy` U!5) * 2 - 1) +` +!;`#'#fx + S + fy;}return E;})`\"w(` #$.split(/\\s*\\-\\s*/)`\"G!`4#%`$##) {`$m!ng`0|!` T&hift();` 1$-`0v&ngle` g\"isNaN` *#`)n!`!M!null;}}`*k!ots`,{!_parseDots`$V&` ^!!dot`*I\"` Q'o`&7!shape || o.node` J!dot`+G$`&!removeChild(`'4!;fill.on`'s$` *!method = \"none\"` /\"color =`!_![0]` *\"` 0'2` 4$`!)' - 1` B$var cl`..\"`-8'i`-=\"ii` X#`-4%i < ii; i`-8!` u!i].offset &&` g!.push`\"@!` 1'`%-\"` -$`!8!);}`!_&s =` W\"`!]#?` (\"join() : \"0% \" +`*4!`!u#`%=)`($#) {` =!`(:$`$@$Titl`#,$focus = \"100%` ((siz` P!0 0` +(posi`)A!=`*L!` 4\"`&+$0;} else`!!3` a#` F$(270 -`'#\") % 360;}o.append`%5(`(1$1;}, Elem`(2\"`*g&node, vml) {this[0`-d!his`&C! = `&J!node.raphael`&&$` @!id`'M\"oid++` :)` 5!` =#` F\"X`\"C!` &!Y`\"N!` &!`-x${}` *\"paper = vml` +\"matrix`!\"!` %\"()` 3\"_ = {transform:[], sx:1, sy:1, dx:0, dy:0, deg` \"!irt` 6\"irtyT:1};!vml.bottom`,?!` $'`!y\"`!&#prev`!P\".top;v` \"\"` J%top.next` L%` 9$` *\"` ^\"` :#`*2\"`(O!elproto`\"8!el;`$;#.` 0!`%=#` <#;` D#.construct`)l!` K#` 5%`\"f%`$y)tstr) {`'e!str =`!?\"`+a&`#J\"` T&;`,M!vbs`$\\$`$1!._viewBoxShift, vbt =` A!? \"s\" + [vbs.scale, ` \"%] + \"-1-1t` :%dx` :\"dy] : E, oldt`)E!vbs) {old`#F!`!h!`2E!`!~!`2=%/\\.{3}|\\u2026/g,`!p- || E);}R._extractT` 3$(this`!w\"+` }!)`$&!`&>%`&J'.clone(), skew` 4$skew, o`(<(, `0}!, isGrad = ~`!p!`'X%.`)K!.indexOf(\"-\"), isPatt = !` /:url(\");`!M#`\"?!late(1, 1`15$` e!||`!9$||`!W\"`,p%image\") {skew`(j&\"1 0 0 1\";` 3!`.?#`,U$`\"0!`4N\"rix`3?#`!*$`!#!&&`\"T\".noRota`&J!|| !` /\"isSimple`1Z!style.filt`*;!`\"&$oF` -!(`$ \"bb`#O$getBBox(), b`&C!` ))1), dx = bb.x - bbt.x, dy` -\"y` ,#y;o.coordorigin = dx * - zoom`0e$y` )%;setCoords`%^#1, `+E!, dy, 0)`.}%`!~-E` K-`\"]\"`'}!x`%Y#` (\"y` &$d` /%d` +%rotate);}` n8`$V)Str(` '\")`$V+`#\\#` *\"();}`(r!&& `&F\"`(C(=`)=!);`*e';}`+M%`!O\"`+F)deg, cx, cy`+R$his.removed`+L*;}if` M!`+h-;}` 1!`!!deg)`&<#separator`&F\"deg`4h$- 1) {c`)c!oFloat(deg[1]);cy` &+2])` x$` +(0` E#`!E\"`\"j!` k!cy`!(\"cx` 3%|| ` @&) {`&|\"o`*}%`&d&;` ^!bbox.x +` #\"width / 2`!U\"` /!y` 5$height` 9!}`$'#`1O\" = 1`0I\"`$5%`$>-.concat([[\"r\"`29!`$$$]])`$M4`+/%`$Z*`'W!`$@?`))!`$C!x`$/4x`$8*`)H!`#q%x`$@!` a\"` *'0]) || 0;` I!`)I!` *!`!F%_.bbox) {` #'.x += dx`#\"\"` -#y` /!y`#H#`\"xAt\"`*5$`\"}7`)o!`#')sx, sy`'TGs`#4$s`#$4s`#-+s`#0(s`#6\"`'i)sx`'[!`'h)sx[3]);isNaN(cx)`'R&`';!` 1$y` 2#y` 0%`![\"` \\'0]);s`(6*`!M!sx`'hp}` ^\"` R&?`(R4 : cx`\"O\"`!<'` H#`(i/ : cy`(CGs\", `$p*`%T!`)O.`%U2hid`%\\*) {!`%M(`.S&node`/S#display = \"none\"`&P5how` BXE` a4_`$%#` m,`'=6{};}` #$x:` ?!X +` G#bbx`)!) -`%%\"W / 2, y` C\"Y` /$H, `$t!` 1\"W, `$R\"` )\"H}`14(`!;!`!?< || `\"j\"`\"Z!parentNode`1$'` :!paper.__set__ &&`!I\"` )).exclude` |!);R.eve.unbind(\"raphael.*.*.\" +` Y\"id);R._tear` P!,` k'`%{#`!H+`!q#Child`$M&` E#shape`!S%` )!` >9` =!);for (var i i`%\"\"`-s#[i] = typeof` 3!` ,!= \"`#K$\" ? R._`#E#Factory(i) :`) !`#4#`#c$= true`$8'attr`$4)name, value`-??if` L\"`+\"+res = {}`\".&a`\"0$`!-!s` o(` ,![has](a)` |!s[a`\"Q!` 4&a];}}res.gradient && res.fill`\"k!`)>!`(e!` -&` =!` J$`-y!delete` +);re`+['`!/$`+]'`)6$re`\"J#`\"x!`.!(R.is`#2#\"string\")`\";#`\"u$fillS` 6!`%T%`\"5!`!n/` 2'`!r&`#k(` .+;}var nam`#p!name`1[-, out`$#+i = 0, ii` N#s`2##; i < ii; i++) {`!|\"` =\"[i]`0K!` /!`$a,out[name`$L+` .!;} else if (`#)!`)p'customAttribute` K#,`'X')` j0` A8.def`!+$` M)R._availableA`!S(`-O$ii - 1 ?`#,!: ` T$s[0]]`%8\"`\"1& &&`(C\"`%44array`!v$`#t'`#k,`#c3`!5$[i]`#G)` z![i])`/D%ou`%?#params`$?!`!T\"!`)O%` 5\"`!@\"` &\"`\"m%` F!;}`!o9object\"`(a!(` c%nam`,R(key in`!?#) {eve`.M&attr`.S!key + \"`.X(`.P\",` S#[key])`#i\"` c%`! !` z#`%&7`+N(`%L3`+f!key`\"'!`!+#` ')`&a=key`&p-`#x#`&`;key].apply`1'#[].concat`\"C#`\"V\"`0g#`(\\\"key] =`\"p(`#h&sub`#k&`\"U#par`\"*\"` 7\")`%4%[` +\"` f#` &$;}}}`#`'.tex`.:!`!=!typ`%N!\"text\"`1N#` >!path.`-(\"`!T%` 4!;}setFillAndStrok`4(\"`$u$`',&`0]\"`1B%toFront`1A)) {!`1t)`!P$`4$,append`3~2`$&!` Q%`$3\"top !`$E\"`%,\"_tofront`!e#` A&)`/x$`!^-Back`!^,`2m@`!l1first`!{!`!P$`!}\"`#k#` ?,insertBefor`#Y\"` =!`!q#` b6);`\"E!back`\"6/`$\"3`!&\"After`\"B)elem`1W\"`\"2@` G#.constructor == R.s` ')) {` C# = ` ##[` T$`-b\" - 1`.f#` 1$`\"M!nextSibling` \\&`\"qE` R5`0`%` Z4`&E3}R._`!'\"after`#i#` ^#`%~@`!^(`\"w~`#d10];}`\"mX`&K!` C\"b` ?&`\"9Iblu`&I*size`.I#s`.F$`!W!runtimeStyle, f = s.filter;f = f.replace(blurregexp, E)`3)!+ size !== 0`),$`.Y!`!8$size;` h$ = f + S + ms`2'!Blur(pixelradius=\" +` m%|| 1.5) + \")\";s.margin = R.format(\"-{0}px 0 0 ` %\"\", round` U+`&d&`!@(` h(0;delete`\"s\"`!z&`*.,R._engine.path`#U)pathS`/U!, vml`#f#el = createNode(\"shape\");el.style.cssText = cssDot;el.coord`!}!= zoom`#0#zoom` 6%ori`!v\"vm` %);`3O! = new E`%m\"(el`!O\", attr = {fill:\"none\", s`1-!:\"#000\"};`\"!& && (attr`\"H$` 1&);p`2B# \"path\";p` =$[];p.P` &\"E;`2(-p`!@\");`!u!anvas`*b)el)`\" !skew`#.,kew\");skew.on = true;el` S)skew);p.` Y#skew;p.transform(E`(M%p`$f)rec`3;*vml, x, y, w, h, r`$o#`\"A#R._rectPath(` 9*, res`$5#path`%Y!), a = re`&;#;res.X = a.x = x` +!Y` +!y = y` +!W` +!wid`!-!w` /!H` /!height = h;a.r = r;a`$;(` F!`$:$rect\"`\"O$re`'>*ellips`-a*`\"Q'rx, ry`\"T#`\")+`!{5x - r`\")&y - r`\"(&rx * 2`\"$%ry` &%`!i$`!M#\"`%m.res, {cx:x, cy:`!\\!:`!^\":ry}`$t%`\"6,circl`\"+6`!lP`\"1*`\"4&`\"/$`\"%-`!>\"`!oB:r`!r6imag`!x/src`'%(`&j@`&t3`\"I!({`*q$`+#!}`\"],, node` +#`2\"\"fill =` 3!.get`+y#sByTagName(fill`+:#[0];a.src = src`'Ch`'o4`#3!\";fill`4+' =`!l\" &&`!t\"remove`+H\"fill)` L\"rotate`+n$` .!`!t&` *!`! $tile\"`!5!_.fillpos = [x, y]` ,'`/\\#[w, h];`!6!`,](`!5\"setC`0+!`%_\"1, 1, 0, 0, 0`%H5t`0m\"`'V1text`1@;,`%m$` 0(`/a!), o` )+text` 6\";`$T! || 0;`$O!` %\"`!F#` \"!|| \"\"`0}!.v`4`)m{0},{1}l{2` #!`4c%x *`2U!)` )$y ` \"+` 9% + 1)` w\"`!M$ok`$H$o.s`2.\"= Str(`\"a!;o`0Y*`3Lc\"0 0\"`3\\I`3u!`3&`41#font:R._availableAttrs.font`$a\":text};p.`$S! = el`3}&`'y!p`\"a% = o`4I'text\";p`*$\"`%h$`\"o&` 1$`)E\"` &$`)C\"` &$w = 1` %%h` )!`,i-p`\"E\")`46,o)` \",`+t!;vml.canvas` 0)el)`#L!skew`'$,kew\");skew`$`*` T(skew);p.` Y#skew;p.transform(E`(b%p`(\\)setS`%0\"`(b&`+z!, `+l\"`(c#cs = this`!u$`&&!;` -!`,F%idth` -\"`,D&` $!;` <#= +` @\" &&`!!# += \"px\");` L$= +` P#` A!` $#` >%c`!!,c` }.cs.clip = \"rect(0 \"`!1%+ \"` )!` p$ \" 0)\";if (`!v!_viewBox) {`\"z)V` 1\".apply` F!,`\"k\"` H%;}`#\\#thi`,A*` U&`#\\)`1]&, fit`!-!eve(\"raphael` M'\"`!'\"`!$+,`.N\"` Y']`&!\"`\"z$`$6&`$h$` -$` (\", `*M#1 / mmax(w /` X\", h /`%=$, H, W`# !`!c\"H`#d% / h;W`$&$ / w` B!w * H <` 0\") {x -=`%+$- ` 9!) / 2 / H;}if (h * W <`&N&y` N!` #- ` ;!` L$W;}}`\"^)`18$`\"d$!!fit]`&h\"` <$Shift = {dx:- x, dy:- y, scale:size}` L\"forEach(`$B&el) {el`(h'\"...\");}`(q%`%0#`(J!`)w%`%;'initW`-|!`) (n`({#doc`#@!n.document;doc.` d\"StyleSheet().addRule(\".rvml\", \"behavior:url(#default#VML)\");try {!doc.namespaces` U! && ` (+add(\"` n$urn:schemas-microsoft-com:vml\");`\";&`\"&)tagName) {`\"q#`!}&`0?$\"<rvml:\" + ` G#`)C!class=\\`!<!\\\">\");};} catch (e) {` VX` },xmlns=\\`\"02.`\"?#\\`!>3`*1(`$p#(R._g.win)` 1'`!?\"`!`)`.)$`/F!R._getContainer`+V#0, arg`%?!s), c` 7$ = con.` '%`*)'con`*)&,`*W%con`*W$x` (#x, y` $#y`)e!!` g%) {throw new Error(\"VML`!6'not found`'u!var res =` L!R._Paper, c = re`0C$`\"@#.`$\"/div\"),`0w\"c`0l#`4-! || 0;`4*!` %\"`/f) || 512`0I%`\"_$|| 342;re`03,re`0Vy`\"G!oord`.&#zoom * 1000 + S +` &(` D&orig`*j!\"0 0\"` 3!spa`%O$`\"|0span`!)#span`#,\".cssText = \"position:absolute;left:-9999em;top` #%padding:0;margin:0;line-`\"7\":1;\";c.appendChild(`!.$`3~!`!*&R.format(\"top:0`!+\"`$J#:{0}`#>#:{1};display:in`!&!block;`!k%relative;clip:`4R#{0} {1} 0);overflow:hidden\"`'`#`'~$)`'I!`(B'= 1`4_\"`#F\"body`\"$)c`\"%!le`0/!x +`$i!;cs.top`&U!` (&`!\\$ = \"`#S$\";} else {`!+).first` }!) {` -&insertBefore(c`*+'` E(` j%` 4&`!c+}}res.renderfix`+K,}`1E$res;};R.prototype.clear` @,R.eve(\"raphael` >\"\",`2&!)`2e\"`)\".innerHTML = E` 4\"`&gB` B%`&0z`&-*;\"`!p)`#8(`!G%`!T#bottom =`\"O!`%4#null`#/+remov`/9-`#0+` ?\"`#+1parentNod` c$`!C'` =\");for (var i in` ^\" {this[i] = typeof` 3!` ,!= \"`!E$\" ? R._` t\"dFactory(i) :`\"%#`%O#true;};var set`\"9!`$]!st`!3&method in el` =!)`'\\\"` '#[has](` ?\") && !` b$` -)) {` /%` -\"] = (`#4&` /\"n`4K)`2u-arg =`2c&`'U$`#1!forEach` h'el) {el`!)#name]`3K#el`3N!);}`4Z!)`!^$;}}})();oldR`$]#was ? (`4f!.` .# = R) : (window` *)`!L$R;});"))

/* Map path and default settings - you can edit this */
var simplemaps_worldmap_mapinfo = {
  map_name: "world",
  state_bbox_array: {
      BD: {
          y: 332,
          x: 1472,
          x2: 1501,
          y2: 369
      },
      BE: {
          y: 173,
          x: 999,
          x2: 1017,
          y2: 185
      },
      BF: {
          y: 405,
          x: 956,
          x2: 999,
          y2: 440
      },
      BG: {
          y: 218,
          x: 1101,
          x2: 1133,
          y2: 237
      },
      BA: {
          y: 212,
          x: 1067,
          x2: 1087,
          y2: 228
      },
      BB: {
          y: 416.1,
          x: 650.8,
          x2: 652,
          y2: 418
      },
      BL: {
          y: 386.7,
          x: 635.1,
          x2: 635.4,
          y2: 387
      },
      BM: {
          y: 293.9,
          x: 636.5,
          x2: 637.3,
          y2: 294.5
      },
      BN: {
          y: 466.8,
          x: 1633.1,
          x2: 1639.9,
          y2: 476.1
      },
      BO: {
          y: 564,
          x: 594,
          x2: 665,
          y2: 649
      },
      JP: {
          y: 210,
          x: 1683,
          x2: 1736,
          y2: 303
      },
      BI: {
          y: 517,
          x: 1150.8,
          x2: 1160.6,
          y2: 531
      },
      BJ: {
          y: 423,
          x: 991,
          x2: 1008,
          y2: 462
      },
      BT: {
          y: 320,
          x: 1474,
          x2: 1492,
          y2: 330
      },
      JM: {
          y: 382.9,
          x: 549,
          x2: 561,
          y2: 388.2
      },
      BW: {
          y: 615,
          x: 1096,
          x2: 1150,
          y2: 674
      },
      WS: {
          y: 588.3,
          x: 14.7,
          x2: 22.8,
          y2: 592
      },
      BR: {
          y: 468,
          x: 568,
          x2: 790,
          y2: 719
      },
      BS: {
          y: 329,
          x: 553,
          x2: 583,
          y2: 368
      },
      BY: {
          y: 144,
          x: 1098,
          x2: 1143,
          y2: 174
      },
      BZ: {
          y: 383,
          x: 486.1,
          x2: 494.3,
          y2: 400
      },
      RU: {
          y: 10,
          x: 1080,
          x2: 1780,
          y2: 238
      },
      RW: {
          y: 509,
          x: 1151,
          x2: 1161,
          y2: 521
      },
      RS: {
          y: 206,
          x: 1081,
          x2: 1104,
          y2: 231
      },
      LT: {
          y: 143,
          x: 1085,
          x2: 1112,
          y2: 158
      },
      RE: {
          y: 635.8,
          x: 1293.4,
          x2: 1296.8,
          y2: 639
      },
      LU: {
          y: 181.3,
          x: 1014.4,
          x2: 1017.1,
          y2: 185.5
      },
      LR: {
          y: 447,
          x: 922,
          x2: 944,
          y2: 474
      },
      RO: {
          y: 193,
          x: 1088,
          x2: 1137,
          y2: 222
      },
      GW: {
          y: 421,
          x: 892,
          x2: 909,
          y2: 431
      },
      GU: {
          y: 414.2,
          x: 1800,
          x2: 1801.5,
          y2: 416.8
      },
      GT: {
          y: 387,
          x: 468,
          x2: 492,
          y2: 414
      },
      GR: {
          y: 234,
          x: 1092,
          x2: 1127,
          y2: 278
      },
      GQ: {
          y: 487.2,
          x: 1039,
          x2: 1050,
          y2: 495.3
      },
      GP: {
          y: 395.8,
          x: 640.1,
          x2: 643.5,
          y2: 399.9
      },
      BH: {
          y: 333.3,
          x: 1264,
          x2: 1265,
          y2: 336.2
      },
      GY: {
          y: 448,
          x: 639,
          x2: 666,
          y2: 494
      },
      GF: {
          y: 465,
          x: 677,
          x2: 694,
          y2: 489
      },
      GE: {
          y: 223,
          x: 1191,
          x2: 1229,
          y2: 238
      },
      GD: {
          y: 423.3,
          x: 638.5,
          x2: 639.4,
          y2: 424.8
      },
      GB: {
          y: 130,
          x: 950,
          x2: 995,
          y2: 182
      },
      GA: {
          y: 487,
          x: 1036,
          x2: 1068,
          y2: 527
      },
      SV: {
          y: 409.2,
          x: 480,
          x2: 493,
          y2: 417.4
      },
      GN: {
          y: 421,
          x: 901,
          x2: 942,
          y2: 455
      },
      GM: {
          y: 412.7,
          x: 892,
          x2: 909,
          y2: 417.5
      },
      GL: {
          y: 1,
          x: 720,
          x2: 944,
          y2: 121
      },
      KW: {
          y: 308.8,
          x: 1241,
          x2: 1251,
          y2: 318.7
      },
      GH: {
          y: 431,
          x: 968,
          x2: 992,
          y2: 472
      },
      OM: {
          y: 332,
          x: 1276,
          x2: 1318,
          y2: 395
      },
      JO: {
          y: 288,
          x: 1177,
          x2: 1198,
          y2: 314
      },
      HR: {
          y: 204,
          x: 1056,
          x2: 1085,
          y2: 229
      },
      HT: {
          y: 374,
          x: 570,
          x2: 587,
          y2: 386
      },
      HU: {
          y: 191,
          x: 1068,
          x2: 1100,
          y2: 209
      },
      HN: {
          y: 399,
          x: 484,
          x2: 520,
          y2: 418
      },
      PR: {
          y: 382.9,
          x: 607,
          x2: 622,
          y2: 386.7
      },
      PS: {
          y: 293,
          x: 1175.5,
          x2: 1178.7,
          y2: 300.5
      },
      PW: {
          y: 452.8,
          x: 1746.8,
          x2: 1747.7,
          y2: 454.6
      },
      PT: {
          y: 231,
          x: 936,
          x2: 953,
          y2: 265
      },
      PY: {
          y: 626,
          x: 639,
          x2: 687,
          y2: 679
      },
      IQ: {
          y: 262,
          x: 1195,
          x2: 1251,
          y2: 315
      },
      PA: {
          y: 440,
          x: 518,
          x2: 550,
          y2: 455
      },
      PF: {
          y: 558,
          x: 138,
          x2: 206,
          y2: 679
      },
      PG: {
          y: 518,
          x: 1783,
          x2: 1869,
          y2: 570
      },
      PE: {
          y: 502,
          x: 525,
          x2: 600,
          y2: 620
      },
      PK: {
          y: 263,
          x: 1318,
          x2: 1402,
          y2: 350
      },
      PH: {
          y: 383,
          x: 1649,
          x2: 1702,
          y2: 466
      },
      PL: {
          y: 152,
          x: 1054,
          x2: 1104,
          y2: 188
      },
      ZM: {
          y: 555,
          x: 1109,
          x2: 1175,
          y2: 617
      },
      BQSE: {
          y: 389.4,
          x: 634.1,
          x2: 634.3,
          y2: 389.7
      },
      EH: {
          y: 324,
          x: 891,
          x2: 939,
          y2: 367
      },
      BQSA: {
          y: 388.5,
          x: 632.7,
          x2: 632.9,
          y2: 388.7
      },
      EE: {
          y: 124,
          x: 1093,
          x2: 1115,
          y2: 137
      },
      EG: {
          y: 299,
          x: 1121,
          x2: 1191,
          y2: 361
      },
      ZA: {
          y: 644,
          x: 1076,
          x2: 1167,
          y2: 725
      },
      EC: {
          y: 493,
          x: 527,
          x2: 560,
          y2: 534
      },
      AL: {
          y: 228,
          x: 1086.1,
          x2: 1095.8,
          y2: 247
      },
      AO: {
          y: 530,
          x: 1051,
          x2: 1122,
          y2: 617
      },
      KZ: {
          y: 149,
          x: 1217,
          x2: 1419,
          y2: 241
      },
      ET: {
          y: 406,
          x: 1173,
          x2: 1257,
          y2: 480
      },
      ZW: {
          y: 601,
          x: 1128,
          x2: 1170,
          y2: 645
      },
      SA: {
          y: 295,
          x: 1176,
          x2: 1295,
          y2: 397
      },
      ES: {
          y: 221,
          x: 938,
          x2: 1002,
          y2: 271
      },
      ER: {
          y: 386,
          x: 1190,
          x2: 1229,
          y2: 422
      },
      ME: {
          y: 223,
          x: 1081.5,
          x2: 1091,
          y2: 233
      },
      MD: {
          y: 192,
          x: 1119,
          x2: 1138,
          y2: 210
      },
      MG: {
          y: 579,
          x: 1226,
          x2: 1270,
          y2: 666
      },
      MF: {
          y: 385.5,
          x: 633.8,
          x2: 634.3,
          y2: 386
      },
      MA: {
          y: 272,
          x: 892,
          x2: 980,
          y2: 364
      },
      UZ: {
          y: 210,
          x: 1271,
          x2: 1366,
          y2: 263
      },
      MM: {
          y: 320,
          x: 1499,
          x2: 1548,
          y2: 438
      },
      ML: {
          y: 342,
          x: 918,
          x2: 1010,
          y2: 437
      },
      MN: {
          y: 169,
          x: 1420,
          x2: 1588,
          y2: 235
      },
      MH: {
          y: 456,
          x: 1953.8,
          x2: 1954.8,
          y2: 456.4
      },
      MK: {
          y: 230.3,
          x: 1092,
          x2: 1106,
          y2: 239.7
      },
      MU: {
          y: 628.1,
          x: 1305,
          x2: 1340,
          y2: 633.5
      },
      MT: {
          y: 270.2,
          x: 1061.8,
          x2: 1063.9,
          y2: 272
      },
      MW: {
          y: 561,
          x: 1170,
          x2: 1187,
          y2: 610
      },
      MV: {
          y: 474.7,
          x: 1402.7,
          x2: 1402.9,
          y2: 475
      },
      MQ: {
          y: 406.3,
          x: 642.6,
          x2: 644.8,
          y2: 409.3
      },
      MP: {
          y: 381,
          x: 1799.1,
          x2: 1804.5,
          y2: 411
      },
      MS: {
          y: 393.9,
          x: 637.9,
          x2: 638.4,
          y2: 394.8
      },
      MR: {
          y: 326,
          x: 892,
          x2: 959,
          y2: 408
      },
      UG: {
          y: 474,
          x: 1154,
          x2: 1185,
          y2: 511
      },
      MY: {
          y: 457,
          x: 1553,
          x2: 1661,
          y2: 497
      },
      MX: {
          y: 292,
          x: 354,
          x2: 504,
          y2: 409
      },
      VU: {
          y: 586,
          x: 1921,
          x2: 1932,
          y2: 632
      },
      FR: {
          y: 175,
          x: 963,
          x2: 1036,
          y2: 236
      },
      AF: {
          y: 255,
          x: 1312,
          x2: 1385,
          y2: 314
      },
      FI: {
          y: 64,
          x: 1071,
          x2: 1125,
          y2: 122
      },
      FJ: {
          y: 606,
          x: 1977,
          x2: 1995,
          y2: 625
      },
      FK: {
          y: 828,
          x: 688,
          x2: 705,
          y2: 836.5
      },
      FM: {
          y: 440,
          x: 1766,
          x2: 1909,
          y2: 468
      },
      FO: {
          y: 107.6,
          x: 953.4,
          x2: 958.4,
          y2: 113.3
      },
      NI: {
          y: 405,
          x: 493,
          x2: 520,
          y2: 433
      },
      NL: {
          y: 160,
          x: 1003,
          x2: 1020,
          y2: 177
      },
      NO: {
          y: 13,
          x: 1008,
          x2: 1114,
          y2: 133
      },
      NA: {
          y: 611,
          x: 1052,
          x2: 1127,
          y2: 688
      },
      NC: {
          y: 628,
          x: 1898,
          x2: 1920,
          y2: 647
      },
      NE: {
          y: 351,
          x: 988,
          x2: 1075,
          y2: 427
      },
      NG: {
          y: 413,
          x: 1002,
          x2: 1069,
          y2: 475
      },
      NZ: {
          y: 723,
          x: 1827,
          x2: 1930,
          y2: 801
      },
      BQBO: {
          y: 422.8,
          x: 601,
          x2: 602.3,
          y2: 424.6
      },
      NP: {
          y: 307,
          x: 1424,
          x2: 1471,
          y2: 332
      },
      NR: {
          y: 505,
          x: 1932.7,
          x2: 1933,
          y2: 505.3
      },
      XK: {
          y: 224.3,
          x: 1089.8,
          x2: 1098.5,
          y2: 233.4
      },
      CI: {
          y: 434,
          x: 938,
          x2: 972,
          y2: 474
      },
      CH: {
          y: 196,
          x: 1017,
          x2: 1039,
          y2: 208
      },
      CO: {
          y: 422,
          x: 539,
          x2: 607,
          y2: 529
      },
      CN: {
          y: 161,
          x: 1372,
          x2: 1662,
          y2: 385
      },
      CM: {
          y: 419,
          x: 1034,
          x2: 1077,
          y2: 491
      },
      CL: {
          y: 615,
          x: 593,
          x2: 669,
          y2: 856
      },
      CA: {
          y: 2,
          x: 348,
          x2: 778,
          y2: 232
      },
      CG: {
          y: 478,
          x: 1049,
          x2: 1091,
          y2: 534
      },
      CF: {
          y: 430,
          x: 1068,
          x2: 1141,
          y2: 487
      },
      CD: {
          y: 468,
          x: 1055,
          x2: 1163,
          y2: 587
      },
      CZ: {
          y: 175,
          x: 1047,
          x2: 1080,
          y2: 191
      },
      CY: {
          y: 275.9,
          x: 1158.8,
          x2: 1168.6,
          y2: 279.5
      },
      CR: {
          y: 430,
          x: 502,
          x2: 520,
          y2: 449
      },
      CW: {
          y: 422.3,
          x: 596.8,
          x2: 599.1,
          y2: 424.5
      },
      CV: {
          y: 391,
          x: 844,
          x2: 859,
          y2: 407
      },
      CU: {
          y: 353,
          x: 515,
          x2: 573,
          y2: 374
      },
      SZ: {
          y: 667,
          x: 1154.9,
          x2: 1162.6,
          y2: 677
      },
      SY: {
          y: 263,
          x: 1178,
          x2: 1211,
          y2: 294
      },
      SX: {
          y: 385.9,
          x: 633.8,
          x2: 634.2,
          y2: 386.1
      },
      KG: {
          y: 224,
          x: 1350,
          x2: 1401,
          y2: 250
      },
      KE: {
          y: 467,
          x: 1179,
          x2: 1224,
          y2: 532
      },
      SS: {
          y: 423,
          x: 1121,
          x2: 1186,
          y2: 479
      },
      SR: {
          y: 463,
          x: 658,
          x2: 681,
          y2: 490
      },
      KH: {
          y: 408,
          x: 1562,
          x2: 1592,
          y2: 435
      },
      KN: {
          y: 390,
          x: 634.7,
          x2: 636.4,
          y2: 392
      },
      KM: {
          y: 574.8,
          x: 1229.9,
          x2: 1237.1,
          y2: 581.3
      },
      ST: {
          y: 491,
          x: 1023,
          x2: 1028.6,
          y2: 502
      },
      SK: {
          y: 185,
          x: 1070,
          x2: 1098,
          y2: 196
      },
      KR: {
          y: 254,
          x: 1653,
          x2: 1677,
          y2: 281
      },
      SI: {
          y: 201.7,
          x: 1055,
          x2: 1070,
          y2: 210.5
      },
      KP: {
          y: 226,
          x: 1636,
          x2: 1662,
          y2: 260
      },
      SO: {
          y: 425,
          x: 1219,
          x2: 1275,
          y2: 513
      },
      SN: {
          y: 395,
          x: 887,
          x2: 922,
          y2: 423
      },
      SL: {
          y: 437,
          x: 912,
          x2: 929,
          y2: 458
      },
      SC: {
          y: 531,
          x: 1247,
          x2: 1301,
          y2: 563
      },
      SB: {
          y: 544,
          x: 1866,
          x2: 1927,
          y2: 578
      },
      KY: {
          y: 375,
          x: 532.5,
          x2: 542.1,
          y2: 378.1
      },
      SG: {
          y: 494.1,
          x: 1574.4,
          x2: 1576.5,
          y2: 495.3
      },
      SE: {
          y: 70,
          x: 1037,
          x2: 1088,
          y2: 149
      },
      SD: {
          y: 361,
          x: 1110,
          x2: 1201,
          y2: 447
      },
      DO: {
          y: 374,
          x: 585,
          x2: 605,
          y2: 389
      },
      DM: {
          y: 401.5,
          x: 641.5,
          x2: 642.7,
          y2: 404.2
      },
      DJ: {
          y: 420,
          x: 1221.1,
          x2: 1230.3,
          y2: 432
      },
      DK: {
          y: 135,
          x: 1024,
          x2: 1046,
          y2: 153
      },
      DE: {
          y: 152,
          x: 1015,
          x2: 1060,
          y2: 199
      },
      YE: {
          y: 380,
          x: 1225,
          x2: 1284,
          y2: 421
      },
      AT: {
          y: 188,
          x: 1034,
          x2: 1071,
          y2: 204
      },
      DZ: {
          y: 263,
          x: 939,
          x2: 1053,
          y2: 380
      },
      US: {
          y: 58,
          x: 100,
          x2: 646,
          y2: 380
      },
      LV: {
          y: 134,
          x: 1085,
          x2: 1118,
          y2: 148
      },
      UY: {
          y: 695,
          x: 672,
          x2: 700,
          y2: 726
      },
      YT: {
          y: 583.1,
          x: 1239.9,
          x2: 1240.9,
          y2: 585.2
      },
      LB: {
          y: 279,
          x: 1175.5,
          x2: 1182.7,
          y2: 289
      },
      LC: {
          y: 411.3,
          x: 643,
          x2: 644.1,
          y2: 413.8
      },
      LA: {
          y: 358,
          x: 1544,
          x2: 1590,
          y2: 413
      },
      TV: {
          y: 556.4,
          x: 1998.9,
          x2: 1999,
          y2: 556.6
      },
      TW: {
          y: 339,
          x: 1651,
          x2: 1659.2,
          y2: 361
      },
      TT: {
          y: 429,
          x: 636.9,
          x2: 645.2,
          y2: 437.3
      },
      TR: {
          y: 232,
          x: 1122,
          x2: 1224,
          y2: 272
      },
      LK: {
          y: 439,
          x: 1437,
          x2: 1449,
          y2: 464
      },
      TN: {
          y: 262,
          x: 1027,
          x2: 1048,
          y2: 307
      },
      TO: {
          y: 602,
          x: 1,
          x2: 16,
          y2: 640
      },
      TL: {
          y: 554.9,
          x: 1692,
          x2: 1706,
          y2: 562.1
      },
      TM: {
          y: 228,
          x: 1258,
          x2: 1338,
          y2: 275
      },
      TJ: {
          y: 239,
          x: 1340,
          x2: 1383,
          y2: 266
      },
      LS: {
          y: 686,
          x: 1133,
          x2: 1146,
          y2: 699
      },
      TH: {
          y: 371,
          x: 1530,
          x2: 1579,
          y2: 465
      },
      TG: {
          y: 431,
          x: 986,
          x2: 997,
          y2: 464
      },
      TD: {
          y: 352,
          x: 1062,
          x2: 1120,
          y2: 454
      },
      TC: {
          y: 360.8,
          x: 584.7,
          x2: 588.7,
          y2: 362
      },
      LY: {
          y: 289,
          x: 1038,
          x2: 1126,
          y2: 376
      },
      VC: {
          y: 416,
          x: 641.6,
          x2: 642.5,
          y2: 417.5
      },
      AE: {
          y: 335,
          x: 1271,
          x2: 1298,
          y2: 357
      },
      VE: {
          y: 424,
          x: 572,
          x2: 649,
          y2: 497
      },
      AG: {
          y: 388.2,
          x: 640,
          x2: 641.3,
          y2: 392.6
      },
      VG: {
          y: 383.3,
          x: 625.2,
          x2: 626.1,
          y2: 383.8
      },
      AI: {
          y: 384.5,
          x: 634,
          x2: 634.6,
          y2: 384.9
      },
      VI: {
          y: 383.8,
          x: 623.2,
          x2: 625.2,
          y2: 388.3
      },
      IS: {
          y: 84,
          x: 882,
          x2: 928,
          y2: 101
      },
      IR: {
          y: 247,
          x: 1218,
          x2: 1334,
          y2: 341
      },
      AM: {
          y: 237,
          x: 1213,
          x2: 1231,
          y2: 253
      },
      IT: {
          y: 200,
          x: 1021,
          x2: 1083,
          y2: 267
      },
      VN: {
          y: 352,
          x: 1553,
          x2: 1602,
          y2: 447
      },
      AS: {
          y: 593.1,
          x: 26.6,
          x2: 34.3,
          y2: 594.1
      },
      AR: {
          y: 642,
          x: 604,
          x2: 692,
          y2: 854
      },
      AU: {
          y: 570,
          x: 1603,
          x2: 1829,
          y2: 782
      },
      IL: {
          y: 288,
          x: 1172.1,
          x2: 1179.5,
          y2: 312
      },
      AW: {
          y: 420.7,
          x: 591.9,
          x2: 592.9,
          y2: 422
      },
      IN: {
          y: 274,
          x: 1364,
          x2: 1520,
          y2: 451
      },
      TZ: {
          y: 508,
          x: 1154,
          x2: 1214,
          y2: 577
      },
      IC: {
          y: 314,
          x: 887,
          x2: 913,
          y2: 324
      },
      AZ: {
          y: 233,
          x: 1220,
          x2: 1249,
          y2: 256
      },
      IE: {
          y: 151,
          x: 938,
          x2: 957,
          y2: 172
      },
      ID: {
          y: 467,
          x: 1526,
          x2: 1786,
          y2: 568
      },
      UA: {
          y: 168,
          x: 1096,
          x2: 1185,
          y2: 217
      },
      QA: {
          y: 334,
          x: 1266,
          x2: 1270.9,
          y2: 344
      },
      MZ: {
          y: 568,
          x: 1156,
          x2: 1215,
          y2: 674
      }
  },
  paths: {
      BD: "M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z",
      BE: "M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z",
      BF: "M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z",
      BG: "M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z",
      BA: "M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z",
      BB: "M651.5 418l-0.6-0.2-0.1-0.5 0-0.8 0.2-0.4 0.2 0.2 0.2 0.6 0.5 0.3 0.1 0.4-0.5 0.4z",
      BL: "M635.2 387l-0.1-0.3 0.3 0.1-0.2 0.2z",
      BM: "M637.3 294l-0.3 0-0.1 0.1 0.1 0.2-0.4 0.2-0.1-0.1 0.2-0.1 0.1 0 0.1-0.3 0.3-0.1 0.1 0.1z",
      BN: "M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z",
      BO: "M662.5 631.4l-0.3-2-5.4-3.3-5.2-0.1-9.6 1.9-2.1 5.6 0.2 3.5-1.5 7.7-1-1.4-6.4-0.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9 0.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-0.3-5.4 0-4.6 1.1-2.1-5.5-10.4 4.2 0.6 2.9-0.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-0.4 4.8 0.9 2.5-0.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8 3.5 0 3.4 1.9 0.5 3.7 1.2 1.9 0.3 2.7-1.7 0.1 2.8 7.5 10.7 0.3-0.5 3.7 0.8 2.5 3.2 1.8 1.7 4-0.6 5.1-1.3 2.8 0.8 3.6-1.6 1.4z",
      JP: "M1708.5 282.6l1.6 2.2-1.3 3.9-3.1-2.1-2.1 1.5 0.1 3.7-4.3-1.8-1.2-3 1.3-3.9 3.4 0.8 1-2.7 4.6 1.4z m24.6-19.2l0.6 5.1 2.5 3.2-0.6 4.5-5.4 3-9.2 0.4-4.4 7.4-4.7-2.5-2.4-4.8-8.6 1.4-5.1 3-6.2 0.2 7.4 4.7 0.8 10.9-2.5 2.7-3.6-2.5-0.9-5.8-4.1-1.8-4-4.4 4.3-2 1.1-4.1 3.9-3.3 2-4.4 9.7-1.9 6.3 1.3 0-11.4 5.1 3.1 4.5-6.4 1.7-2.5-1-7.8-5.1-7.2-0.2-4 4.8-1.2 8.2 8.9 2.8 5.1-1.3 6.5 3.6 6.6z m-11.9-44.8l4.5 1.3 1.8-2.6 6 7.1-6.4 1.7-0.4 6.3-10.9-4.3 1.6 6.9-5.7 0.1-4.7-6.3-0.6-4.9 5.2-0.3-4.4-8.8-1.8-4.9 10.5 6.6 5.3 2.1z",
      BI: "M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1 0-0.1-0.1-1-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z",
      BJ: "M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z",
      BT: "M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z",
      JM: "M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3 0.8-1.5 2.4-0.4 1.3 0.2 3.7 0.6 2.7 1.5 0.8 1.8-4 0.1z",
      BW: "M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z",
      WS: "M21.9 591.3l0.3 0.1 0.3 0.1 0.3 0.2-0.1 0.3-1 0-0.3-0.1-0.3 0.1-0.2-0.1-0.4-0.2-0.3 0.1-0.3-0.2-0.2-0.2-0.6-0.3 0.1-0.4 0.4-0.2 0.4 0 0.5 0 0.9 0.4 0.5 0.1 0 0.3z m-4.5-2.8l0.6 0.6 0.2 0.7-0.1 0.3 0.1 0.3-0.3 0-0.3-0.2-0.3 0.2-0.9 0.1-0.3-0.3-0.2-0.4-0.2-0.1-0.3-0.3-0.5-0.4-0.2-0.2 0-0.2 0.4 0.1 0.3-0.1 0.6-0.2 0.4 0 0.5-0.1 0.3 0 0.2 0.2z",
      BR: "M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z",
      BS: "M580.4 366l-0.4 0.5-0.2 0.5-0.6 0.3-0.5 0-0.1-0.1-0.4 0.2-0.5 0.1-0.6-0.2-0.4 0.1-0.1-0.5 0.3-0.2 0.2-0.3 0.4-0.2 0.3-0.4 0.4 0 0.3-0.2 0.2 0.3 0.5 0.2 0.5-0.2 0.7-1 0.3 0 0 0.2-0.3 0.9z m0.2-1.7l-0.2-0.6 0.6-0.3 0.3 0.3 0 0.2-0.3 0.1-0.4 0.3z m0.4-6.5l0.2-0.1 0.5 0.3 0.4 0 0.4 0.1 0.3 0.2 0 0.3-0.2 0.1-0.5-0.4-0.4 0-0.1-0.1-0.5 0.2-0.5-0.2 0-0.1 0.2-0.5 0.2 0.2z m-3.9-1.8l-0.2 0.4 0 0.7-0.1 0.4-0.4 0.3-0.2 0.4-0.4 0.3-0.7 0.3-0.1 0.2-0.2-0.2 0.1-0.2 0.4-0.1 0.2-0.2 0-0.2 0.4-0.1 0.2-0.4 0.4-0.1 0.3-0.4-0.2-0.3-0.4 0-0.2-0.2 0.4-0.5 0.1-0.1 0.6 0z m-1.9-0.3l0.1 0.1 0.4 0 0.4 0.2-0.4 0.4-0.1-0.2-0.2 0-0.4-0.1-0.4-0.2-0.3-0.6 0.3-0.1 0.4 0.1 0.2 0.4z m-9.2-5.9l0.6 0.7 0.3 0.2 0.3 0.5-0.3-0.1-0.1-0.2-0.3-0.1-0.4-0.4-0.2-0.1-0.2-0.4 0.3-0.1z m3.7 0l0.3 0.6 0.2 0.5 0 0.4 0.2 0.2 0.2 0.7 0 0.9 0.2 0.3 0.5 0.2 0.4 0.6 0 0.8-0.4-0.7 0-0.2-0.3-0.4-0.6-0.2 0.2-0.2-0.3-0.3 0-0.3 0.2-0.3-0.1-0.5-0.3-0.4 0.1-0.1-0.3-0.4-0.1-0.6-0.2 0.1 0.1-0.7z m2.9 0l-0.3 0.2-0.3-0.1-0.1-0.2 0.6-0.2 0.1 0.3z m-8.2-1.9l-0.1-0.1-0.3-0.7 0.2 0 0.2 0.8z m10.5-0.5l-0.4 0.6-0.4 0 0.2-0.3 0.1-0.6 0.4-0.3 0.1 0.4 0 0.2z m-18.5-1.2l-0.3 0.1-0.2 0.3-0.3-0.1 0.6-0.4 0.2 0.1z m0.2 0.7l0.4 0.2 0.2-0.2 0.1-0.5 0.2-0.1 0.2 0.6 0 0.5-0.1 0.3 0.1 0.6 0 0.3-0.4 0.8-0.2 0.1-0.4-0.2 0.2-0.3 0.4-0.2-0.1-0.1-0.6 0.4-0.2-0.2 0.4-0.3-0.4 0-0.2 0.1-0.2-0.2 0-0.7 0.1-0.2-0.4-0.5 0-0.2 0.4-0.2 0.1-0.3 0.3-0.1 0.1-0.2 0.6-0.3 0.1 0.4-0.5 0.4-0.2 0.3z m13.5-0.6l0.1 0.5-0.2-0.1-0.5 0.1-0.4 0.1-0.1-0.2 0.3-0.2 0.4-0.3 0-0.2-0.4-0.2-0.2-0.6-0.1-0.6-0.4-0.4 0-0.2-0.5-0.5 0.3-0.3 0.4 0.4 0 0.5 0.2 0.3 0.1 0.5 0.3 0.5 0.4 0.3 0.1 0.3 0.2 0.3z m-10.3-5.5l0.3 0.2-0.6 0.3-0.3-0.1-0.2 0.2-0.5-0.1 0.2-0.3 0.4-0.2 0.7 0z m-4.2-0.5l0.4-0.2 0.3 0.3-0.1 0.2 0.1 0.2-0.2 0.4 0.3 0.3 0.2 0.9 0.2 0.3 0.4 0.5-0.2 0.7 0.1 0.6-0.2 0.3-0.3 0.1-0.4 0.4-0.3 0.2-0.3 0-0.3 0.2-0.3 0 0-0.4-0.3-0.2 0.1-0.6-0.3 0.3-0.2-0.1-0.6-0.4-0.3-0.3-0.2-0.3 0.7-0.3 0.5 0.7 0.1-0.6-0.3-0.1-0.1-0.3 0.1-0.3 0.6-0.6 0.2-0.4-0.1-0.1 0.3-0.4 0-0.5-0.2-0.7 0.1-0.1 0.3 0 0.2 0.3z m8.1-2.6l0.1 0.2 0.3 0.4 0.8 0.7 0.5 0.1 0.1 0.1 0.2 0.4 0.3 0.4 0.5 0.4 0 0.2-0.2 0.8-0.1 0.2 0 0.3-0.1 0.5-0.2 0.3-0.1 0.7-0.1 0.1-0.2-0.6-0.4-0.3 0.1-0.2 0.5 0.1 0.2-0.2-0.1-0.2 0.1-0.4 0.3-0.4 0.1-0.5 0-0.3-0.5-0.4-0.4-0.7-0.3-0.2-0.6-0.3-0.3-0.3-0.6-0.2-0.4 0.2 0.4-0.9 0.1 0z m-8.8-7.5l0.5 0.2 0.1 0 0.7 0.1 0.2-0.2 0.2 0.1 0.5 0 0.4-0.2 0.4 0 0.3-0.2 0.1 0.5-0.1 0.2-0.3 0-0.4 0-1.1 0.2-0.3 0-1.5 0.4-0.7 0.4-0.4 0-0.2-0.1-0.3-0.3-0.5-0.6 0.6 0.3 0.1 0.2 0.5 0 0.5-0.2 0.4-0.6-0.3-0.1 0.2-0.3 0.1-0.3 0.3 0.5z m4.3-1.3l0.8 0.2 0.2-0.1 0.4 0.3 0.9 1 0.2 0.6 0.4 0.1 0.7 0.5 0 0.2-0.2 0.5 0.2 0.7-0.4 0-0.5 0.4-0.1 0.2-0.3 1-0.1 0.9-0.2 0.2-0.3-0.2-0.1-0.4-0.4-0.1 0.3-0.5 0.2 0 0.5-0.4-0.1-0.4 0.2-0.4 0-0.3 0.2-0.3 0-0.6 0.2-0.1 0.2-0.3 0.1-0.3-0.3-0.1-0.5-0.1-0.1-0.3 0-0.2-0.4-0.2 0-0.3-0.3-0.7-0.2-0.1-0.3 0.1-0.5-0.1-0.3 0-0.6-0.4 0.5 0z",
      BY: "M1141.6 162.7l-3.9-0.2-0.8 0.6 1.5 2 2 4-4.1 0.3-1.3 1.4 0.3 3.1-2.1-0.6-4.3 0.3-1.5-1.5-1.7 1.1-1.9-0.9-3.9-0.1-5.7-1.5-4.9-0.5-3.8 0.2-2.4 1.6-2.3 0.3-0.5-2.8-1.9-2.8 2.8-1.3-0.4-2.4-1.7-2.3-0.6-2.7 4.7 0 4.8-2.3 0.5-3.4 3.6-2-1-2.7 2.7-1 4.6-2.3 5.3 1.5 0.9 1.5 2.4-0.7 4.8 1.4 1.1 2.9-0.7 1.6 3.8 4 2.1 1.1 0 1.1 3.4 1.1 1.7 1.6-1.6 1.3z",
      BZ: "M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z",
      TN: "M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z",
      RW: "M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z",
      RS: "M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z",
      TL: "M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z",
      RE: "M1295 635.8l0.4 0 0.4 0.2 0.3 0.3 0 0.3 0.1 0.5 0.3 0.2 0.2 0.2 0.1 0.2-0.2 0.6-0.1 0.4-0.2 0.2-0.4 0.1-0.9 0-0.2-0.2-0.8-0.4-0.3-0.5 0-0.3-0.3-0.6 0.1-0.4 0.2-0.2 0.2-0.4 0.1 0 0.5-0.2 0.5 0z",
      TM: "M1338.3 262l-1.6-0.2-2.9-1.7-0.3 2.2-4.2 1.3 0.2 5.1-2.6 2-4 0.9-0.4 2.9-3.9 0.9-5.9-2.5-1.7-5.3-4-0.3-7.3-5.6-4.3-0.7-6.6-3.3-3.9-0.6-2 1.2-3.6-0.2-3 3.7-4.4 1.2-1.9-4.5-0.6-6.7-4.6-2.2 0.4-4.3-3.5-0.4-0.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6 0.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-0.3 5.9-0.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-0.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8 0.8 3.9z",
      TJ: "M1357 243.6l-1.4 1.9-6-1 0.6 3.6 5.5-0.5 7.1 2.1 9.6-1 3.1 6 1.5-0.7 3.7 1.5 0.5 2.5 1.8 3.6-5.4 0-3.8-0.5-2.5 2.9-2.2 0.6-1.5 1.4-2.7-2.1-0.9-5.4-1.7-0.3 0.1-2-3.3-1.4-1.7 2.2 0.2 2.6-0.6 0.9-3.2-0.1-0.9 2.9-2.1-1.2-3.4 2-1.8-0.7 1.3-6.5-2.4-4.8-4.2-1.5 0.6-2.8 4.4 0.3 1.5-3.5 0.5-4.1 6.5-1.5-0.2 3 1.3 1.7 2.1-0.1z",
      RO: "M1118.9 193.1l1.6 0.7 1.8 1.8 2 2.6 3.4 3.8 0.6 2.7-0.2 2.7 1.3 2.9 2.4 1.2 2.3-1.1 2.4 1.1 0.4 1.7-2.3 1.3-1.6-0.6-0.4 7.7-3.1-0.7-4-2.3-5.9 1.5-2.3 1.6-7.6-0.4-4-0.9-1.9 0.4-1.8-2.6-1-1.1 1-1.1-1.3-0.7-1.5 1.4-3.1-1.9-0.7-2.6-3.2-1.4-0.8-2.1-3-2.4 3.9-1.2 2.6-4.3 1.9-4.2 2.9-1.3 2-1.4 3.2 0.7 3.2 0 2.5 1.6 1.6-1 3.6-0.6 1-1.5 2.1 0z",
      GW: "M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z",
      GU: "M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z",
      GT: "M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z",
      GR: "M1112.7 272.6l3.1 2.2 4.1-0.4 4 0.4 0 1.2 2.8-0.8-0.5 1.9-7.6 0.5-0.1-1-6.6-1.3 0.8-2.7z m9.2-32.7l-3.2-0.2-2.7-0.6-6.2 1.6 4 3.6-2.5 1.1-2.9 0-3.1-3.3-0.9 1.4 1.6 3.8 2.9 3-1.9 1.4 3.2 2.9 2.8 1.9 0.4 3.6-5-1.7 1.8 3.3-3.3 0.6 2.5 5.7-3.5 0.1-4.6-2.8-2.4-5.1-1.3-4.3-2.3-2.9-3-3.7-0.5-1.8 2.2-3.1 0.1-2.1 1.7-0.9-0.1-1.7 3.4-0.5 1.8-1.4 2.8 0.1 0.8-1.1 1-0.2 3.8 0.2 4-1.8 3.9 2.3 4.6-0.6-0.3-3.2 2.7 1.7-1.1 4-1.2 0.7z",
      GQ: "M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z",
      GP: "M643 399.9l-0.3 0-0.2-0.4 0.1-0.2 0.3-0.3 0.3 0.2 0.1 0.3 0 0.2-0.3 0.2z m-1.8-2.6l0.3 0 0 0.2 0 0.1-0.2 0.1 0 0.8 0 0.4-0.2 0.2-0.6 0.3 0-0.2-0.2-0.2-0.1-0.5 0-0.5-0.1-0.5 0-0.3 0.2-0.3 0.3-0.1 0.5 0.3 0.1 0.2z m1.4-0.4l0.4 0.1 0.5 0.4-1.3 0.3-0.3 0.1-0.4-0.3 0.1-0.6 0.2-0.1-0.1-0.6 0.1-0.2 0.3-0.2 0.3 0.4 0 0.4 0.2 0.3z",
      BH: "M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z",
      GY: "M662.9 463.5l-1 5.8-3.5 1.6 0.3 1.5-1.1 3.4 2.4 4.6 1.8 0 0.7 3.6 3.3 5.6-1.3 0.3-3.2-0.6-1.8 1.7-2.6 1.1-1.8 0.3-0.6 1.3-2.8-0.3-3.5-3-0.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-0.9 0.8-2.9-1.2-1.4-3 0.2-3.7-4.8 1.6-1.8 0-3 3.5-1 1.4-1.2-1.8-2.4 0.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1 0.1 3.4 2.1 0.1 3 3.1 2.1 2.3z",
      GF: "M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z",
      GE: "M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z",
      GD: "M639.2 424.5l-0.4 0.3-0.2-0.1-0.1-0.5 0.2-0.5 0.3-0.4 0.3 0 0.1 0.3-0.1 0.7-0.1 0.2z",
      GB: "M956.7 158.2l-3.5-1.2-3 0.1 1.2-3.3-0.9-3.2 4-0.3 4.9 3.8-2.7 4.1z m15.9-28.7l-5.1 6.5 4.7-0.8 5.1 0-1.3 4.9-4.3 5.4 4.9 0.3 0.3 0.7 4.2 7.1 3.2 1 2.9 7 1.4 2.4 5.9 1.1-0.6 4-2.4 1.8 1.9 3.2-4.4 3.2-6.5-0.1-8.4 1.8-2.2-1.3-3.3 2.9-4.5-0.7-3.6 2.4-2.5-1.2 7.3-6.5 4.4-1.4-7.6-1-1.3-2.5 5.1-1.9-2.5-3.3 1-4 7.1 0.6 0.8-3.6-3.1-3.7-0.1-0.1-5.7-1.1-1.1-1.6 1.8-2.7-1.5-1.7-2.6 2.9-0.1-5.9-2.2-3 1.9-6.2 3.8-4.8 3.6 0.4 5.6-0.5z",
      GA: "M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z",
      GN: "M921.5 421.9l0.3 2.4 0.9 0 1.5-0.9 0.9 0.2 1.6 1.7 2.4 0.5 1.5-1.4 1.9-0.9 1.3-0.9 1.1 0.2 1.3 1.4 0.6 1.8 2.3 2.7-1.1 1.6-0.3 2.1 1.2-0.6 0.7 0.7-0.3 1.9 1.7 1.9-1.1 0.5-0.5 2.2 1.3 2.6 1.4 5.2-2.1 0.7-0.5 0.9 0.4 1.3-0.4 2.8-0.9 0-1.6-0.2-1.1 2.6-1.6 0-1.1-1.4 0.4-2.6-2.4-3.9-1.4 0.7-1.3 0.2-1.5 0.3 0.1-2.3-0.9-1.7 0.2-1.9-1.2-2.7-1.6-2.3-4.5 0-1.3 1.2-1.6 0.2-1 1.4-0.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-0.9-1.4-1.3-0.6-2.8-0.8-1.4-1.7-1.1 2.6-3.1 1.7 0.1 1.5-1 1.2-0.1 0.9-0.8-0.4-2.1 0.6-0.7 0.1-2.2 2.7 0.1 4.1 1.5 1.2-0.1 0.4-0.7 3.1 0.5 0.8-0.4z",
      GM: "M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z",
      GL: "M896.3 1.4l19.9 3-6.7 1.4-13 0.2-18.5 0.4 1.4 0.7 12.3-0.5 9.7 1.4 7-1.2 2.4 1.4-4.5 2.4 9.2-1.6 17.1-1.5 10 0.8 1.7 1.7-14.8 2.9-2.2 1-11.4 0.8 8.1 0.2-4.9 3.2-3.6 2.9-1.2 5.2 3.7 3.2-5.9 0.1-6.5 1.6 6.3 2.6-0.1 4.2-4.2 0.5 4.1 4.3-8.7 0.4 4 2-1.6 1.8-5.7 0.8-5.5 0.1 4.2 3.4-0.5 2.4-7.3-2.2-2.4 1.4 5 1.3 4.6 3.2 0.6 4.3-7.4 1-2.7-2.1-4.2-3 0.5 3.6-5.4 2.8 10.7 0.2 5.5 0.3-11.9 4.7-12.2 4.3-12.7 1.8-4.6 0.1-4.9 2.1-7.5 5.8-10.2 3.9-3 0.3-6.1 1.3-6.6 1.4-4.8 3.4-1.4 4-3.4 3.8-8.6 4.6 0.3 4.5-3.6 4.8-4.1 5.7-6.5 0.4-5-4.8-9-0.1-3.2-3.2-0.8-5.6-4.8-7.2-0.7-3.7 1.5-5.1-3.7-5.1 3.3-4.1-1.9-2 7-6.4 7.2-2.1 2.6-2.2 2.8-4.2-5.5 1.9-2.6 0.8-4.1 0.7-4.2-1.7 1.5-3.7 3-2.8 3.8-0.1 7.6 1.5-5.3-3.4-2.7-1.8-4.4 0.7-2.6-1.3 7-4.8-1.3-2-1.1-3.5-1.4-5.4-3.6-1.9 1.4-2.1-8.1-2.9-7.7-0.4-10.1 0.2-9.5 0.4-3.1-1.6-3.8-3.1 11-1.5 7.6-0.2-14.6-1.3-6.5-1.9 2.2-1.8 15.7-2.2 15-2.2 2.8-1.6-8.1-1.6 4.6-1.7 14.7-2.9 5.4-0.4 0.2-1.8 9-1.1 11-0.6 10.4 0 2.8 1.2 10.6-2.2 7.1 1.5 4.6 0.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.2 11.6 0.2 5.1-1.4 11.9-0.3 26.3 0.4z",
      GH: "M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z",
      OM: "M1283.8 394.9l-2.2-4.5-5.2-10.6 16.3-6.4 2.6-12.8-3-4.6 0-2.6 1.3-2.6-0.2-2.6 2.4-1.3-1.1-0.9 0-4.2 2.8 0 3 4.4 3.3 2.3 4.1 0.9 3.4 1.1 2.9 3.7 1.7 2.1 2 0.9 0.2 1.4-1.7 3.8-0.7 1.8-2.2 2.1-1.7 4.4-2.5-0.4-1 1.6-0.7 3.2 1.1 4.3-0.5 0.8-2.5 0-3.3 2.4-0.3 3.1-1.2 1.4-3.5-0.1-2 1.6 0.2 2.6-2.6 1.8-3.1-0.6-3.6 2.2-2.5 0.3z m12.4-58.2l-1.3-2.2 1.4-2.1 0.7 0.5-0.2 2.7-0.6 1.1z",
      JO: "M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z",
      HR: "M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5 0.1-4.5-1.1-2.3 0.1-1 1.4-2-1.5-0.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-0.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-0.5-2.5-2.7-0.3-2.1-3.3-1-1.4 2.7-1.6-2.1 0-2.2 0.1-0.1 3.6 0.2 0.8-1 1.8 1 2 0.1-0.1-1.7 1.7-0.7 0.3-2.5 3.9-1.7 1.6 0.8 4 2.7 4.3 1.2 1.8-1z",
      HT: "M586.8 375.3l0.1 3.4-0.7 2.5-1.5 1.1 1.3 1.9-0.3 1.8-3.6-1.1-2.7 0.4-3.4-0.4-2.7 1.2-2.8-2 0.7-2.1 5.1 0.9 4.1 0.5 2.2-1.4-2.3-2.8 0.4-2.5-3.5-1 1.5-1.7 3.4 0.2 4.7 1.1z",
      HU: "M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z",
      HN: "M519.6 405.5l-1.9-0.1-0.9 0.9-2 0.8-1.4 0-1.3 0.8-1.1-0.2-0.9-1-0.6 0.2-0.9 1.5-0.5-0.1-0.2 1.4-2.1 1.7-1.2 0.8-0.6 0.8-1.5-1.3-1.4 1.7-1.2 0-1.3 0.1-0.2 3.2-0.8 0-0.8 1.5-1.8 0.3-0.8-2-1.7-0.6 0.7-2.6-0.7-0.7-1.2-0.4-2.5 0.7-0.1-0.8-1.6-1.1-1.1-1.2-1.6-0.6 1.3-1.6-0.3-1.3 0.5-1.2 2.9-1.8 2.8-2.5 0.6 0.3 1.3-1.1 1.6-0.1 0.5 0.5 0.9-0.3 2.6 0.6 2.6-0.2 1.8-0.7 0.8-0.7 1.7 0.3 1.3 0.4 1.5-0.1 1.2-0.6 2.5 0.9 0.8 0.2 1.6 1.2 1.5 1.4 1.9 1 1.3 1.7z",
      PR: "M607.1 385.9l-0.3-0.2 0.1-0.2 0.3 0 0.1 0.1-0.2 0.3z m14.6-0.5l-0.2 0-0.9 0.3-0.6 0 0.2-0.2 0.4-0.2 0.4-0.1 0.6 0.1 0.1 0.1z m-9.5-2.4l0.6 0.1 0.6 0 0.3 0.1 0.6-0.1 0.3 0.1 0.4-0.1 0.2 0.1 0.5-0.1 0.4 0.1 0.3 0 0.8 0.2 0-0.2 0.6 0.2 0.1-0.1 0.8 0.1 0.2 0.2 0.2 0 0.6 0.3 0.2-0.1-0.1 0.7 0.2 0.3-0.9 0.3-0.3 0.4-0.3 0.6-0.3 0.2-0.3 0.1-0.4 0-0.6 0.1-0.3 0.2-0.7-0.1-0.2-0.2-0.5 0.2-0.3-0.3-0.7 0.2-0.9-0.1-0.3 0.1-0.6 0.1-0.2 0.1-0.2-0.2-0.4-0.1-0.3 0.2-0.6-0.1 0.3-0.7 0-0.4 0.2-0.4-0.2-0.6-0.2-0.1-0.1-0.4 0.4-0.2 0.2-0.1 0-0.5 0.4-0.2 0.5 0.1z",
      PS: "M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z",
      PW: "M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z",
      PT: "M946.9 263.7l-2.2 1.6-2.8-0.9-2.7 0.7 0.9-5-0.3-3.9-2.4-0.6-1.1-2.4 0.5-4.2 2.2-2.3 0.5-2.6 1.2-3.8 0-2.7-0.9-2.3-0.2-2.2 1.9-1.6 2.2-0.9 1.2 3.1 3 0 0.9-0.8 3.1 0.2 1.3 3.2-2.4 1.7-0.3 5-0.8 0.9-0.3 3.1-2.3 0.5 2 3.8-1.6 4.2 1.8 1.9-0.8 1.7-2 2.4 0.4 2.2z",
      KN: "M636.3 392l-0.3 0-0.1-0.2 0.2-0.4 0.2 0 0.1 0.2-0.1 0.4z m-0.7-1.5l-0.1 0.3-0.2 0-0.4-0.2-0.2-0.2 0.3-0.4 0.5 0.4 0.1 0.1z",
      PY: "M662.5 631.4l2 3.5 0.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9 0.8 2.4 2.1 0.3 2-1 2.1 1.1 0.3 3.6-0.3 3.8-0.7 3.7-0.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-0.2-3.5 2.1-5.6 9.6-1.9 5.2 0.1 5.4 3.3 0.3 2z",
      AI: "M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z",
      PA: "M549.3 446.2l-0.7 0.9 1.1 3.8-1.1 1.9-1.8-0.5-0.9 3.1-1.8-1.8-1-3.5 1.4-1.7-1.4-0.4-0.9-2.1-2.8-1.8-2.4 0.4-1.3 2.2-2.4 1.6-1.2 0.2-0.6 1.4 2.5 3.5-1.6 0.8-0.8 0.9-2.7 0.4-0.8-3.9-0.8 1.1-1.8-0.4-1-2.5-2.3-0.5-1.5-0.7-2.4 0-0.2 1.4-0.6-1 0.3-1.3 0.6-1.3-0.2-1.1 0.9-0.8-1.1-0.9 0.1-2.6 2.2-0.6 1.9 2.3-0.2 1.4 2.2 0.3 0.6-0.6 1.5 1.6 2.8-0.5 2.5-1.6 3.5-1.3 2-1.9 3.1 0.4-0.2 0.6 3.1 0.2 2.4 1.2 1.8 1.9 2 1.8z",
      PF: "M195.3 679.3l-0.1-0.1-0.2-0.3 0.1-0.2 0.3 0.2-0.1 0.4z m10.3-38.1l-0.1 0.1-0.3-0.2 0.2-0.2 0.2 0.3z m-6.2-24.7l-0.2-0.1 0.2-0.6 0.5-0.4 0.3 0 0 0.2-0.2 0.4-0.6 0.5z m-47.7-1l0.7 0.2 0.3 0.4 0 0.3-0.2 0.1-0.5-0.1-0.4-0.6-0.1-0.2-0.6 0.2-0.2 0-0.6-0.1-0.2-0.4-0.3-0.5 0-0.3 0.1-0.2 0.5-0.1 0.5 0 0.5 0.2 0.2 0.4 0.1 0.6 0.2 0.1z m-3-1.5l-0.2 0.6-0.5-0.2 0.1-0.3 0.5-0.2 0.1 0.1z m-7.6-4.3l-0.2 0.1-0.2-0.3 0.3-0.1 0.1 0.3z m-2.1 0.4l-0.3 0.2-0.3 0-0.2-0.8 0.2-0.2 0.7 0.8-0.1 0z m-1-1.8l0.2 0.1 0 0.5-0.4-0.2-0.1-0.3 0.3-0.1z m28.3-2.9l-0.3 0.1 0.1-0.3 0.2 0.2z m38-35.9l-0.3 0 0-0.4-0.2-0.3 0.4 0.1 0.1 0.4 0 0.2z m-3.1-3.5l-0.2 0 0-0.4 0.2-0.3 0.3 0.2-0.2 0.2-0.1 0.3z m1.2-1.6l0 0.3-0.4 0.1-0.6 0 0 0.3-0.4-0.1-0.2-0.2-0.1-0.3 0.7-0.4 0.3 0 0.2 0.2 0.5 0.1z m-6.9-2.6l0 0.4 0 0.2-0.3 0-0.3-0.4 0.3-0.3 0.3 0.1z m2.4-3l0.3 0.1 0.1 0.1-0.6 0.2-0.1-0.3 0.3-0.1z m-3.7-0.6l0.9 0.1 0.3 0.3 0 0.2-0.4 0.3-0.8 0-0.1-0.5-0.1-0.4 0.2 0z",
      PG: "M1868.1 545.6l-1.6 0.7-2.3-2.5-2.2-4.1-0.8-4.9 0.8-0.6 0.5 1.9 1.6 1.5 2.4 4 2.5 2.2-0.9 1.8z m-21.4-8.6l-3 0.5-1 1.8-3.2 1.6-3 1.5-3.1 0-4.5-1.9-3.1-1.8 0.6-2 5 1 3.2-0.5 1-3.1 0.9-0.2 0.3 3.4 3.2-0.4 1.8-2.2 3.3-2.3-0.4-3.8 3.4-0.1 1.1 1-0.4 3.6-2.1 3.9z m-63.8 23.4l1.6-21 1-20.9 9.6 4.4 10.3 3.7 3.7 3.3 3 3.2 0.6 3.8 9.2 4 1.1 3.4-5.2 0.7 0.9 4.3 4.7 4.2 3 6.8 3.3-0.2-0.6 2.8 4.3 1.1-1.8 1.2 5.7 2.7-0.9 1.9-3.8 0.4-1.2-1.6-4.7-0.8-5.6-0.9-4-4.1-2.8-3.6-2.5-5.6-7.1-2.8-4.9 1.8-3.7 2.2 0.3 4.7-4.6 2.2-3.1-1.1-5.8-0.2z m70.7-29.7l-1.8 1.7-0.9-3.8-1.1-2.4-2.5-2.1-3.1-2.8-4-1.9 1.6-1.5 3 1.8 1.9 1.4 2.3 1.5 2.1 2.7 2.1 2.1 0.4 3.3z",
      PE: "M590.5 529.4l-5.1-0.3-0.8 1-4.6 1.2-6.3 4.4-0.3 3-1.4 2.2 0.7 3.5-3.4 1.8 0.2 2.8-1.5 1.1 2.6 5.8 3.3 3.9-1 2.8 3.8 0.3 2.3 3.5 5 0.1 4.4-3.7 0.1 9.7 2.6 0.7 3.2-1.1 5.5 10.4-1.1 2.1 0 4.6 0.3 5.4-1.9 3.2 1.2 2.4-1.1 2.2 2.9 5.4-2.9 6.9-1.1 3.3-2.8 1.6-5.9-3.7-0.8-2.6-11.7-6.4-10.7-7.1-4.7-3.9-2.8-5.3 0.8-1.9-5.4-8.4-6.4-11.8-6-12.8-2.4-3-2-4.7-4.6-4.2-4.1-2.6 1.7-2.8-3-6.2 1.7-4.5 4.4-4 0.7 2.7-1.6 1.5 0.3 2.3 2.3-0.5 2.3 0.7 2.5 3.3 3.1-2.7 0.9-4.3 3.4-5.6 6.7-2.5 6.1-6.8 1.7-4.1-0.8-4.9 1.5-0.6 3.8 3 1.8 3.1 2.6 1.6 3.5 6.7 4.2 0.9 3.1-1.7 2.1 1.1 3.4-0.6 4.4 3-3.5 6.6 1.7 0.1 2.9 3.4z",
      PK: "M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z",
      PH: "M1700.5 447.8l0.9 4.3 0.6 3.6-1.6 5.8-2.5-6.5-2.4 3.3 2.1 4.7-1.4 3-6.9-3.7-1.9-4.7 1.5-3-3.8-3.1-1.6 2.7-2.6-0.3-4 3.6-1-1.9 1.8-5.4 3.4-1.8 2.9-2.4 2.2 2.9 4.2-1.7 0.7-2.9 4-0.2-0.8-4.9 4.9 3 0.7 3.2 0.6 2.4z m-14.6-12l-1.8 2.1-1.4 4.1-1.6 1.9-3.9-4.4 1-1.8 1.3-1.8 0.2-3.9 3.1-0.4-0.5 4.3 3.6-6.2 0 6.1z m-30.3 6.2l-7.1 6.1 2.4-4.5 3.8-4 3-4.4 2.3-6.4 1.6 5.3-3.5 3.5-2.5 4.4z m17.5-16.5l3.6 2 3.5 0 0.2 2.6-2.3 2.8-3.4 1.9-0.5-3 0.1-3.3-1.2-3z m20.1-1.8l2.4 7.2-4.5-1.7 0.3 2.2 1.8 3.9-2.6 1.5-0.6-4.6-1.8-0.3-1.2-3.9 3.3 0.5-0.3-2.4-4-4.9 5.4 0.1 1.8 2.4z m-23-5.8l-0.9 5.6-2.7-3.2-3.5-4.9 4.8 0.2 2.3 2.3z m-6.5-34.9l3.8 1.9 1.4-1.7 0.8 1.6-0.4 2.7 2.6 4.6-0.6 5.3-2.9 2.1-0.1 5.2 2 5.1 3 0.7 2.4-0.7 7.5 3.5-0.1 3.5 2.1 1.6-0.3 2.9-4.7-3.1-2.5-3.4-1.2 2.4-4-3.9-5 1-3-1.4-0.1-2.7 1.6-1.6-1.9-1.5-0.4 2.3-3.3-3.7-1.3-2.8-1.1-6.1 2.6 2.1-1.1-10.1 0.8-5.8 3.4 0z",
      PL: "M1079.9 154.8l5.9 0.7 8.8-0.1 2.5 0.7 1.4 1.9 0.6 2.7 1.7 2.3 0.4 2.4-2.8 1.3 1.9 2.8 0.5 2.8 3.2 5.4-0.3 1.7-2.3 0.7-3.8 5.2 1.6 2.8-1.1-0.4-5-2.4-3.5 0.9-2.4-0.6-2.8 1.3-2.7-2.2-1.9 0.9-0.3-0.4-2.6-3.1-3.7-0.3-0.7-2-3.4-0.7-0.6 1.6-2.8-1.3 0.2-1.7-3.7-0.5-2.5-2-2.4-3.9 0.2-2.2-1.5-3.3-1.9-2.1 1.2-1.7-1.4-3.1 3.1-1.8 7.1-2.8 5.8-2 4.8 1 0.6 1.5 4.6 0z",
      ZM: "M1162.1 556.8l0.3 0.2 2.2 1.1 3.6 1.1 3.2 1.9 2.6 2.9 1.3 5.4-1 1.7-1.3 5.2 0.9 5.4-1.8 2.2-2 6 2.9 1.6-17.2 5.3 0.4 4.6-4.3 0.9-3.3 2.5-0.8 2.2-2 0.6-5.1 5.2-3.2 4.2-1.9 0.1-1.8-0.7-6.2-0.7-1-0.5 0-0.5-2.2-1.5-3.6-0.3-4.6 1.4-3.6-4-3.6-5.2 0.8-20.5 11.7 0.1-0.4-2.2 0.9-2.4-0.9-3 0.7-3.1-0.6-2 1.9 0.1 0.3 2 2.7-0.1 3.5 0.6 1.9 2.9 4.4 0.9 3.5-2 1.2 3.3 4.3 0.9 2 2.8 2.2 3.5 4.3 0-0.2-6.9-1.6 1.2-3.9-2.5-1.5-1.2 0.9-6.4 1.1-7.6-1.2-2.8 1.7-4.1 1.5-0.8 7.7-1.1 0.9 0.3-0.3 1.4 1.9 0.5 1.2 1.3 1-0.3-0.5-1.1z",
      BQSE: "M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z",
      EH: "M938.9 324.3l-0.1 0.4-0.1 1.2-0.2 9.8-18-0.4-0.2 16.5-5.2 0.5-1.5 3.3 0.9 9.3-21.7 0-1.3 2.1 0.3-2.7 0.1 0 12.5-0.5 0.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-0.5 1.9-5 4.6-0.7 2 0.9 2.5 0 1.8-1.5 3.4-0.2-0.1-3.4 0.9 0z",
      RU: "M1689.5 177.4l13.7 11-8.9-2 3.7 9 9.6 6.4 3 4.4-6.5-3.8 0.1 4.9-4.7-5.3-3.8-6.1-5.6-6.7-2.4-4.8-6.4-8.2-8-6.1-6.8-8.4 1.9-2.8-4.4-2.8 1.3-0.9 4.9 4 6.9 5.9 5.2 6.1 7.2 6.2z m-594.9-22l-8.8 0.1-5.9-0.7 0.7-2.6 6.3-2 5.1 1.1 2.2 0.9-0.2 1.7 0.6 1.5z m453.8-107.2l-5.9 0.1-8.9-0.6-1-0.3 0.7-2 4.2-0.5 8.4 2 2.5 1.3z m12.6-9.5l-1.1 2-6.9-0.4-10.3-2-1.8-1.6 8.3 0.7 11.8 1.3z m-25.5-2.4l3.1 3.8-14.3-0.2-4.6 1.2-12.5-3.3-3.4-3.4 3.5-0.9 10.2 0.2 18 2.6z m-316.7 25l-2.2 0.4-13.5-0.7-2.3-2.3-7.9-1.4-2-2.9 3.5-1.1-1.6-2.8 5.4-4.4-4-0.6 6.7-4.5-2.5-2.3 6.8-2.6 10.3-3.2 11.7-0.9 5-1.8 6.7-0.6 4.2 1.9-1.3 1.5-11.4 2.5-9.9 2.3-8.7 4.8-2.8 5-3.3 5 3.1 4.3 10 4.4z m442.9 169.7l-1.4-1.1-1.9-3.3 2.5-0.1-3.9-7.5-4.7-5.4 2.9-2.2 6.9 1.1-0.6-6.2-2.8-6.8 0.3-2.3-1.3-5.7-6.9 1.9-2.6 2.4-7.6 0-6-5.8-9-4.5-10-2-6.2-6-4.5-3.8-3.8-2.7-7.7-6.2-6-2.2-8.6-1.9-6.2 0.2-5.1 1.1-1.7 3.1 3.7 1.4 2.5 3.4-1.3 2 0.2 6.5 1.9 2.8-4.4 3.9-7.4-2.4-5.6 0.6-3.9-2.1-3.4-0.7-4.4 4.4-5.9 1-3.6 1.6-6.8-1-4.6 0-4.9-3.2-6.6-2.9-5.4-0.9-5.7 0.8-4 1.2-8.5-2.6-3.6-4.6-6.7-1.6-4.8-0.8-7-2.5-1.3 6.4 4 3.6-2.4 4.4-8-1.6-5-0.2-4.8-2.9-5.2-0.1-5.3-1.9-5.9 2.9-6.7 5.3-4.7 1.1-1.7 0.5-4.4-3.8-6 0.9-3.3-2.7-4-1.2-4.1-3.6-3.3-1.1-6.2 1.6-8.4-3.5-1.1 3.2-18.3-15.6-8.4-4.7 0.8-2-9.2 5.8-4.4 0.3-1.1-3.3-7.1-2.1-4.3 1.5-4.4-6.3-9.1-1.3-3.1 2.5-10.9 2.3-1.7 1.5-17 2.1-1.4 2.1 5.1 4.2-4 1.6 1.5 1.6-3.5 3 9.4 4.3-0.2 2.9-7-0.3-0.8 1.9-7.3-3.2-7.7 0.1-4.4 2.6-6.6-2.5-12-4.3-7.6 0.2-8.1 6.7 0.6 4.5-6-3.6-2.2 6.9 1.8 1.2-1.7 4.8 5.3 4.2 3.6-0.2 4.3 4.2 0.2 3.2 2.8 1.1-1.4 3.7-4.6 1-3.6 6.5 6 6.1 0.4 4.2 7.3 7.5-2.5 2.6-0.6 1.6-2.4-0.5-4.3-3.8-1.5-0.2-3.6-1.5-2.1-2.6-5.1-1.3-2.9 1-1.2-1.2-7.6-3.1-7.7-1-4.6-1.1-0.4 0.8-7.6-5.4-6.2-2.4-5.1-3.7 3.6-1 3.2-5.2-3.3-2.5 6.9-2.6-0.4-1.4-4.3 1-0.4-2.7 2.2-1.8 4.8-0.4 0.3-2.1-1.8-3.5 1.3-3.2-0.4-1.9-7.7-2-2.9 0.1-3.6-2.9-3.6 1-6.7-2.2-0.1-1.2-2.3-2.7-3.9-0.3-0.8-1.9 0.9-1.3-3.8-3.5-4.9 0.6-1.5-0.3-1 1.4-1.8-0.2-2-4-1.5-2 0.8-0.6 3.9 0.2 1.6-1.3-1.7-1.6-3.4-1.1 0-1.1-2.1-1.1-3.8-4 0.7-1.6-1.1-2.9-4.8-1.4-2.4 0.7-0.9-1.5-5.3-1.5-2.1-3.6-1-2.9-2.5-1.3 1.6-1.9-2.4-5.6 2.6-3.4-0.9-1 4.5-3.3-5.4-2.8 8-7.4 3.4-3.4 0.9-2.9-7.4-3.9 0.9-3.8-4.9-4.2 1.7-4.8-6.5-6.3 2.9-4.2-7.3-3.7-0.4-3.8 3.2-0.5 6.4-2.1 3.7-1.9 7.7 3.2 11.7 1.3 17.7 6.2 4.1 2.6 1.5 3.7-3.7 2.9-6.5 1.5-20.2-4.2-2.9 0.7 8.1 4.1 1 2.6 1.9 5.8 6.1 1.7 3.8 1.5-0.2-2.8-3.4-2.4 2.1-2.2 11.6 3.6 3.2-1.4-4.3-4.2 8.1-5.4 4.1 0.3 4.6 1.9 1.1-3.8-4.7-3.3 0.8-3.3-4.3-3.4 12.3 1.8 3.6 3-5.1 0.7 1.2 3.1 4.1 1.9 6-1.2-0.4-3.5 7.7-2.7 12.4-4.6 3.2 0.2-2.5 3.3 5.4 0.6 2.1-1.9 7.7-0.1 5-2.3 6.4 3.3 2.8-3.6-6-3.1 1.2-1.8 13 1.6 6.6 1.7 18.6 6.2 1.1-2.8-5.9-2.9-0.8-1.1-5.3-0.6-0.2-2.5-4.7-4.2-1.1-1.7 4.3-4.7-0.6-4.8 2.2-1 11.4 1.4 2.9 2.9-0.9 4.2 3.7 1.7 3.8 3.7 3.8 7.4 6.7 3.3 0.5 3.7-3.5 7.8 5.3 0.8 0.5-2 3.8-1.4-0.5-2.7 1.9-2.7-4.4-3.1-0.4-3.6-4.8-0.4-2.9-3-0.4-5.4-8.2-4.3 4.7-3.5-3.7-3.7 1.9-0.1 4.2 2.8 2.1 5.1 5 1-4.6-3.8 5.1-2.1 8.1-0.3 9.6 3-6.9-4.3-4.9-5.5 5.9-1 9.5 0.2 7.8-0.7-5.6-2.6 1.3-3.3 4.2-0.2 4.9-2.4 9.3-0.7-0.2-1.4 9.3-0.4 4.3 1.1 5.4-2.6 7 0.1-1.5-2.2 0.9-2 6.2-2 8.3 1.6-3.5 1.2 9.4 0.7 4.1 2.4 1.9-1.2 10.9 0.1 11.6 2.4 5.5 1.8 2.5 2.6-2.4 1.5-6.6 2.8-1.1 1.5 5.6 0.7 7.2 1.3 2.4-1 5.8 3.3 0.2-1.3 5.2-0.8 13.6 0.8 3.8 2.4 17.4 0.8-4.8-3.9 9.5 0.9 6.1-0.1 9.9 2.7 6 3.3 0.4 2.2 10.1 4.2 9 2.1-3-5.5 9.4 2.3 5-1.4 9.8 1.6 1-1.4 7.6 0.7-9.4-4.9 2.1-2.2 40.4 3.4 7.9 3.1 16.3 4 14.8-1 9.3 0.9 6.6 2.2 5.1 3.9 7.3 1.5 3.9-1.1 7-0.1 9.3 1 6.9-0.6 14.3 4.8 2.5-1.7-8.5-3.4-1.8-2.4 15.3 1.5 8-0.3 15.8 2.5 9.5 2.4 33.2 22.1-2 2.5-6.2-0.4 8.2 3 9.1 4.7 4.2 1.5 3.8 2.4 1 1.5-10-1.2-6.6 4.3-3 0.7-1.6 4.1-2 3.6 1.7 2.7-11.5-4.1-6.1 4.6-4.7-2.2-1.4 2.6-7-0.9 3.1 3.9 1.1 5.8 2.9 2.4 6.8 1.3 9.1 8.7-4.1 0.3 3.4 5 4.7 2.6-5 3.1 5.4 7-5.7 1.5 4.5 6.2-1.7 5.8-5.7-4.3-10.5-8.9-16.2-13.6-6.5-8.3 0.1-3.6-2.8-2.8 5.7-1.3-0.2-7.5 0.7-6 2.5-4.7-6.6-8.2-4.7 0.5 3.2 4.8-3.6 6.4-12.3-7.2-9.1 2 0 9.8 7.7 3.6-8.5 1.6-6.4 0.6-4.3-4.3-8-0.9-2.5 2.9-15.1-1-13.2 1.7-3.5 11.7-5 14.2 8.2 0.8 5.7 3.8 5.8 1.3 0.4-3 5.6 0.4 12.8 6.7 4.7 5.2 1.4 6.2 5.5 7.4 5.3 9.9-1 9.1 1.3 4.3-2 7.4-2.1 7.3-0.9 3.7-4.6 3.7-3.1 0.1-5.2-3.1-4.1 4.7 0.5 2.1z m-294.6-207.9l-18.1 1.8-1.3-6.1 2.2-0.5 3.1 0.3 12.6 2.6 1.5 1.9z m-202.3-10l-4.3 0.5-2.9 0.4 0 0.7-3.6 0.7-4.5-1 1.1-1.4-7.8-0.1 6.3-0.8 5.2 0 1.5 1.1 1.3-1 2.8-0.7 5.8 0.9-0.9 0.7z m180.3 7.3l-7.1 0.6-11.7-1.3-8.1-1.7-6.6-3.2-5.9-0.8 5.4-2.9 6.2-0.9 9.6 2 13.7 4.2 4.5 4z",
      EE: "M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z",
      EG: "M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z",
      ZA: "M1159.4 644.7l2.2 9 1.1 4.6-1.4 7.1 0.4 2.3-2.7-1.1-1.7 0.4-0.6 1.9-1.7 2.4-0.1 2.2 3.1 3.5 3.2-0.7 1.4-2.8 4.1 0-1.7 4.7-1 5.3-1.7 2.9-4 3.3-1.1 0.9-2.6 3.3-1.8 3.3-3.5 4.6-6.7 6.6-4.1 3.8-4.3 3-5.9 2.4-2.7 0.4-0.9 1.8-3.2-1-2.7 1.2-5.7-1.2-3.3 0.8-2.2-0.4-5.8 2.6-4.6 1-3.5 2.4-2.4 0.2-2.1-2.3-1.8-0.1-2.2-2.9-0.3 0.9-0.6-1.7 0.3-3.8-1.5-4.3 1.8-1.2 0.1-4.9-3.3-6-2.4-5.4 0-0.1-3.6-8.3 2.8-3.2 2 1.8 0.8 2.7 2.5 0.5 3.4 1.2 2.9-0.5 5-3.3 1.1-23.7 1.4 1 3 6.1-0.6 3.9 1.1 2.3 4-0.7 2.8-2.9 2.7-1.9 1.5-3.1 2.8-1.4 2.3 0.7 2.5 1.8 4.5 0.3 3.6-1.4 0.6-2 1.2-3.1 3-0.5 1.8-2.4 2-4.3 5.2-4.8 8.1-4.7 2.2 0 2.7 1.1 1.9-0.8 2.9 0.7z m-20.3 53.2l1.1-2 3.1-1 1.1-2.1 1.9-3.1-1.7-2-2.2-2-2.7 1.4-3.1 2.5-3.2 4 3.7 5 2-0.7z",
      EC: "M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z",
      IT: "M1068.2 256.4l-1.7 5.1 0.9 1.9-0.9 3.3-4.2-2.4-2.7-0.7-7.5-3.2 0.5-3.3 6.2 0.6 5.4-0.7 4-0.6z m-34-19l3.3 4.5-0.4 8.5-2.4-0.4-2.1 2.1-2-1.7-0.5-7.7-1.3-3.6 2.9 0.3 2.5-2z m21.7-33.5l-0.4 3.1 1.4 2.7-4.1-1-3.9 2.3 0.4 3.1-0.5 1.8 1.9 3.2 5 3.2 2.9 5.3 6.1 5.1 4-0.1 1.4 1.4-1.4 1.3 4.8 2.3 4 1.9 4.7 3.4 0.6 1.1-0.8 2.3-3.1-3-4.6-1-1.9 4.1 3.9 2.4-0.4 3.3-2.1 0.4-2.5 5.5-2.2 0.5-0.1-2 0.9-3.4 1.1-1.4-2.3-3.7-1.8-3.2-2.2-0.8-1.8-2.7-3.4-1.2-2.4-2.6-3.8-0.4-4.3-2.8-4.9-4.2-3.7-3.6-1.9-6.3-2.6-0.7-4.2-2.1-2.3 0.8-2.9 3-2.1 0.4 0.5-2.7-2.8-0.8-1.5-4.9 1.7-1.9-1.5-2.4 0.1-1.8 2.2 1.4 2.5-0.3 2.7-2.2 0.9 1 2.4-0.2 1-2.5 3.8 0.8 2.1-1.1 0.3-2.5 3.1 0.9 0.5-1.2 4.9-1.1 1.3 2.1 7.3 1.7z",
      VN: "M1586.5 363.5l-6.5 5.4-3.7 6.1-0.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9 0.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 0.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6-6.8 0-3.5-5.8-4-5.1 2.7-1.6 4.4 0.1 5.3-0.8 4.1-3.4 3.1 2.4 5.3 1.2-0.3 3.7 3.1 2.6 5.9 1.7z",
      SB: "M1926.8 576.2l0.3 0.2-0.1 0.4 0.3 0 0 0.2-0.8 0-0.3-0.5 0.2-0.3 0.4 0z m-38.3-0.6l0.2 0 1 0.8 0.5 0.3 0.9 0.7-0.1 0.3-0.2 0-0.2 0.2-0.2-0.3-0.1 0-0.2-0.2-0.1-0.4-0.4-0.1 0-0.3-0.3-0.1-0.1 0.1-0.2 0-0.9-0.4-0.2-0.4 0.3-0.4 0.3 0.2z m36.9-1.5l-0.2 0.3-0.3-0.2 0-0.2 0.3-0.2 0.2 0.3z m-2.3-3.9l0.1 0.1 0.3 0-0.1 0.4-0.5 0.2-0.3 0-0.4 0.1-0.4 0.6-0.1-0.3-0.3 0.1-0.2-0.2 0-0.3 0.5-0.1 0-0.2 0.3-0.4 0.7 0.1 0.4-0.1z m-26.3-2.8l0.3-0.1 0.6 0.3 0.5 0.5 0.3 0.3 0.2 0 0.2 0.2 0.2 0 0.3 0.3 0.3-0.1 0.4 0.1 0.2 0.2 0.4 0 0.3-0.1 0.2 0.3 0.2 0.8 0.3 0.3 0 0.5-0.2 0.2 0.1 0.3-0.4-0.2-0.3 0.2-0.3-0.1-0.5-0.3-0.2 0-0.6-0.2-0.4-0.1-0.2-0.3-0.3-0.2-0.3-0.1-0.2-0.3-0.4-0.2 0.2-0.4-0.1-0.4 0-0.4-0.2-0.1-0.6-0.2-0.3 0.1-0.1-0.2 0.1-0.3 0.1-0.3 0.2 0z m4-3.4l-0.1 0.2 0 0.7-0.2-0.2 0-0.5 0.3-0.2z m-2.9-1.8l0.3 0.9 0.2 0.4 0 0.4 0.1 0.5-0.2 0.3-0.4-0.7-0.1 0.3-0.3-0.5 0.1-1 0.1-0.2 0-0.3 0.2-0.1z m-8.4 0.2l0.3 0 0.3-0.1 0.4 0.1 0.1-0.1 0.5 0 0.8 0 0.2 0.3 0.3 0.1 0.2 0.3 0.2 0 0.2 0.1 0.4 0.4 0 0.6 0.2 0 0.4 0.2 0.1 0.3 0 0.6-0.1 0.1-0.7 0.2-0.2 0.1-0.4-0.1-0.4-0.2-0.4 0-0.1-0.2-0.5-0.3-0.6 0-0.5 0.1-0.5 0-0.5-0.1-0.3-0.2-0.3 0.1-0.3-0.4-0.3-0.2-0.3-0.8-0.2-0.4 0.2-0.2-0.1-0.2 0-0.7 0.1-0.3 0.6-0.3 0.4 0.2 0.4 0.5 0.1 0.3 0.3 0.2z m2.3-2.4l0.5 0.5-0.3 0.3-0.3-0.2 0-0.1 0.1-0.5z m0 0l-0.2 0.4-0.1 0-0.4-0.3-0.3 0.1-0.2-0.1-0.1-0.2 0.3-0.1 0.2-0.2 0.5 0.1 0.3 0.3z m-6.6-0.5l0.1 0.2 0.2 0.1-0.2 0.4-0.4 0.2-0.3-0.4 0.6-0.5z m-8.5-1.8l0.2 0.3-0.1 0.3-0.8-0.4 0.5-0.3 0.2 0.1z m3.4 0.8l-0.3-0.2 0.1-0.3 0.3-0.3 0 0.5 0.1 0.2-0.2 0.1z m-0.9-1.8l0.2-0.1 0.4 0 0 0.2-0.4 0.3 0.2 0.2 0 0.3-0.4 0.4-0.2 0.1-0.3-0.1-0.4-0.4 0.1-0.6 0.3-0.1 0.2-0.4 0.3-0.1 0 0.3z m-3.6 0.1l-0.2 0.1-0.2 0.5 0.4 0.5-0.5-0.2 0-0.2-0.1-0.3-0.4-0.4 0-0.2 0.4-0.2 0.1-0.3 0.4-0.3 0.3 0.2 0 0.4-0.2 0.4z m12.9-0.5l0.2 0.2-0.1 0.2-0.2-0.1-0.6-0.5 0.2-0.4 0.3-0.1 0.2 0.2-0.1 0.3 0.1 0.2z m6.5-0.8l0.4 0.8 0.6 0.8 0 0.3-0.4 0.2 0 0.5 0 0.3 0.1 0.2 0.2 0 0.2 0.3 0.5 0.4 0.1 0.5 0.1 0.3 0.2 0.2-0.2 0.2 0.3 0.3-0.1 0.1 0.1 0.5-0.2 0.2 0.3 0.3 0.1 0.5 0.2 0.5 0 0.6-0.1 0.1-0.3-0.3-0.3-0.5 0-0.3-0.3-0.4-0.4-0.3-0.3-0.3-0.5-0.6-0.4-0.3-0.3-0.9-0.2-1-0.2-0.7 0-0.5-0.1-0.4 0.4-0.4-0.1-0.3-0.5-0.7-0.1-0.3 0.1-0.1 0.4 0.1 0.2 0.1 0.3-0.3 0.2 0.3z m-20.7-0.3l-0.2-0.4-0.3-0.3 0.4 0 0.1 0.7z m-0.1-1l0.4 0.1 0.1 0.1 0.1 0.5-0.2 0-0.2-0.4-0.2-0.3z m3.1 0.2l-0.1 0.3 0.2 0 0.5 0 0.4 0.7 0 0.2 0.2 0.3 0.1 0.5-0.2 0.2 0 0.3-0.6-0.2-0.2-0.2-0.3 0-0.4-0.3-0.1-0.2-0.1-0.3 0.4 0.1-0.3-0.8-0.1-0.2-0.5 0.1-0.2 0.1-0.4 0-0.3 0.4-0.4-0.2 0-0.6 0.2-0.2 0.4 0 0-0.4 0.4-0.6 0.4-0.3 0.3-0.2 0.4 0.3 0.2 0.4-0.1 0.7 0.2 0.1z m-5.9 0l-0.1 0-0.2-0.8 0.1-0.3 0-0.4 0.2 0.1 0.1 0.4 0 0.7-0.1 0.3z m3.4-0.5l-0.3 0.2-0.1-0.1-0.4 0-0.3-0.3-0.1-0.3-0.1-0.3 0.1-0.3 0.3-0.4 0.5-0.2 0.2 0.2 0.3 0.5 0 0.6-0.1 0.4z m-3-3.5l0.4 0.5 0 0.1 0.7 0.4-0.1 0.3-0.6 0.7 0 0.3-0.3 0.1 0-0.4-0.2 0 0-0.4-0.2-0.4-0.3-0.2-0.1-0.3 0.1-0.3 0.2-0.2 0.2-0.2 0.2 0z m10.3 0.1l0.3 0.2-0.2 0.1-0.5 0.1-0.1-0.3 0.2-0.2 0.3 0.1z m0.9 0l0.2-0.1 0.5 0.3 0.3 0.1 0.2 0.2 0.3 0.5 0.3 0.1 0.3 0.3 0 0.3 0.5 0.1 0 0.3 0.3 0.1 0.3-0.1 0.1 0.1 0.4 0.2 0.1 0.2 0.3-0.1 0.3 0.1 0.1 0.3 0.4 0.3 0.3 0.3 0.4 0.3 1 1-0.3 0.4 0.3 0.5 0.1 0.6-0.3-0.1-0.3-0.4-0.7-0.8-0.4-0.1-0.5-0.4-0.6-0.1-0.1-0.3-0.6-0.2-0.5-0.5-0.2 0-0.8-0.6-0.5-0.3 0-0.2-0.4-0.2-0.2-0.2-0.2-0.4-0.4-0.3-0.1-0.2 0-0.4-0.4-0.5-0.2-0.1 0-0.3 0.7 0.3z m-1.5-0.6l0.2 0.2 0.2-0.1 0.3 0.2-0.1 0.2-0.3-0.1-0.3-0.4z m-4.5-0.6l0.5 0-0.2 0.2-0.3-0.1 0-0.1z m4.3 0l-0.2 0.5-0.1-0.2 0.3-0.3z m-2.7 0.4l-0.5 0.1-0.2-0.2 0.3-0.4 0.3 0.1 0.1 0.4z m-12.5-0.9l0.2 0.3-0.2 0.2-0.3-0.1-0.1-0.1 0.4-0.3z m1.5-1.9l0.3 0.2-0.1 0.3-0.7 0.2-0.3-0.3 0.3-0.6 0.2-0.1 0.3 0.3z m1.7-0.9l0 0.5-0.2-0.2 0-0.2 0.2-0.1z m2.9-1.5l0.3 0.1 0.4 0.5 0.3 0.2 0.3 0.1 0.3 0.3 0.8 0.4 0.4 0.5 0 0.4 0.1 0.6 0.2 0.2 0.3 0.3 0.2 0 0.1 0.4 0.7 0.3 0.4-0.1 0.1 0.1 0 0.3-0.3 0.1-0.2 0.3-0.5-0.2-0.8-0.4-0.5 0-0.3-0.4-0.7-0.4-0.6-1-0.6-1-0.5-0.3-0.7-0.7 0-0.5 0-0.2 0.3-0.2 0.3 0.1 0.2 0.2z",
      ET: "M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z",
      SO: "M1222.1 512.6l-3.3-5.3-0.2-23.4 4.9-7.2 1.5-2.1 3.6-0.1 5-4.5 7.3-0.3 15.6-19.3-4.8 0.1-18.7-7.6-2.2-2.3-2.2-3.1-2.2-3.6 1.2-2.2 1.9-3.5 1.9 1.2 1.2 2.7 2.7 2.7 2.8 0 5.2-1.7 6.1-0.7 4.9-2 2.8-0.4 2-1.2 3.2-0.2 1.8-0.2 2.5-0.9 3-0.7 2.5-2.2 2.2 0 0.2 1.8-0.4 3.7 0.2 3.4-1.1 2.3-1.4 7-2.4 7.1-3.3 8.2-4.6 9.4-4.7 7.2-6.6 8.8-5.6 5.2-8.4 6.4-5.3 4.8-6.2 7.8-1.3 3.4-1.3 1.5z",
      ZW: "M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z",
      KY: "M532.7 377.8l0.3 0.1 0.2-0.4 0.4 0.1 0.5 0 0.1 0.2-0.2 0.2-0.2-0.1-0.4 0.1-0.2 0.1-0.7 0 0.2-0.3z m8.1-2.5l-0.7 0.3 0.2-0.3 0.5 0z m0.6 0.1l-0.1-0.1 0.8-0.3-0.2 0.3-0.5 0.1z",
      ES: "M976.6 223.4l2 2.4 9.5 2.9 1.9-1.4 5.8 2.9 5.9-0.8 0.4 3.7-4.9 4.2-6.6 1.4-0.5 2.1-3.2 3.5-2 5.2 2 3.7-3 2.8-1.2 4.2-4 1.3-3.7 4.9-6.8 0.1-5-0.1-3.4 2.2-2.1 2.4-2.6-0.5-1.9-2.2-1.4-3.6-4.9-1-0.4-2.2 2-2.4 0.8-1.7-1.8-1.9 1.6-4.2-2-3.8 2.3-0.5 0.3-3.1 0.8-0.9 0.3-5 2.4-1.7-1.3-3.2-3.1-0.2-0.9 0.8-3 0-1.2-3.1-2.2 0.9-1.9 1.6 0.5-4.5-2-2.7 7.4-4.6 6.2 1.1 6.9 0 5.4 1.1 4.3-0.4 8.3 0.3z",
      ER: "M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z",
      ME: "M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z",
      MD: "M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z",
      MG: "M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z",
      MF: "M634.2 386l-0.4-0.1 0.2-0.3 0.3-0.1-0.1 0.5z",
      MA: "M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z",
      UZ: "M1352.7 230.7l1.7 0.6-3 4.1 4.6 2.4 3.2-1.6 7.2 3.4-5.3 4.6-4.1-0.6-2.1 0.1-1.3-1.7 0.2-3-6.5 1.5-0.5 4.1-1.5 3.5-4.4-0.3-0.6 2.8 4.2 1.5 2.4 4.8-1.3 6.5-4.3-1.4-3 0-0.8-3.9-7.7-2.8-6.3-3.1-4.2-3-7.1-4.4-4.3-6.6-2.1-1.2-5.5 0.3-2.3-1.3-1.9-5-7.9-3.4-3.4 3.7-3.8 2.2 1.7 3.2-5.9 0.1-6.2-23.4 12-3.7 1.1 0.5 9.2 4.5 4.8 2.4 6.6 5.7 5.7-0.9 8.6-0.5 7.6 4.6 1.5 6.4 2.6 0.1 2.5 5.2 6.7 0.2 2.3 3 2 0 0.9-4.6 5.4-4.4 2.6-1.2z",
      MM: "M1548.4 364.2l-4.1 4.2-0.8 2.3-3 1.5-2.8 2.8-3.9 0.3-1.5 6.9-2.2 1.2 3.5 5.6 4.1 4.7 2.9 4.3-1.4 5.5-1.8 1.2 1.8 3.2 4.3 5.1 1 3.6 0.2 3 2.7 5.9-2.6 6-2.2 6.6-0.9-4.8 1.3-4.9-2.2-3.8-0.2-7-2.6-3.4-2.7-7.6-2-8.1-3.1-5.4-3.2 3.3-5.8 4.5-3.3-0.5-3.6-1.5 0.9-8-2-6-5.3-7.4 0.3-2.3-3.4-0.9-4.6-5.2-1.1-5.2 2.1 1-0.6-4.6 2.5-1.5-1-2.7 1-2.2-0.9-6.7 4.6 1.5 1.6-5.3-0.3-3.1 2-5.4-0.9-3.7 6.2-4.4 4.2 1.1-1.4-3.9 1.7-1.2-1-2.4 3.1-0.5 2.7 3.8 2.7 1.5 1.3 4.9 0.9 5.3-4.2 5.4 0.7 7.6 5.6-1.1 2.4 5.9 3.7 1.3-0.8 5.3 4.5 2.4 2.6 1.2 3.8-1.9 0.5 2.7z",
      ML: "M1010.2 378.8l0.1 14.8-3.1 4.3-0.4 4-5 1-7.7 0.5-2 2.3-3.6 0.3-3.6 0-1.4-1.2-3.1 0.9-5.3 2.7-1.1 2-4.3 2.8-0.8 1.7-2.4 1.3-2.7-0.9-1.5 1.6-0.9 4.4-4.5 5.3 0.2 2.2-1.6 2.7 0.4 3.7-2.4 1-1.3 0.8-0.9-2.7-1.6 0.7-1-0.1-1 1.8-4.4 0-1.5-1-0.8 0.6-1.7-1.9 0.3-1.9-0.7-0.7-1.2 0.6 0.3-2.1 1.1-1.6-2.3-2.7-0.6-1.8-1.3-1.4-1.1-0.2-1.3 0.9-1.9 0.9-1.5 1.4-2.4-0.5-1.6-1.7-0.9-0.2-1.5 0.9-0.9 0-0.3-2.4 0.3-2-0.5-2.4-2-1.8-1.1-3.7-0.2-4 1.9-1.2 1-3.8 1.8-0.1 3.9 1.8 3.2-1.3 2.1 0.4 0.9-1.4 22.5-0.1 1.3-4.5-1-0.8-2.5-27.7-2.4-27.7 8.5-0.1 18.6 14 18.7 14 1.3 3 3.5 1.8 2.6 1.1 0.1 4.1 6.2-0.7z",
      MN: "M1496.2 181.5l4-1.2 5.7-0.8 5.4 0.9 6.6 2.9 4.9 3.2 4.6 0 6.8 1 3.6-1.6 5.9-1 4.4-4.4 3.4 0.7 3.9 2.1 5.6-0.6 0.6 4.7 0.3 6.3 2.8 2.5 2.3-0.8 5.5 1 2.5-2.3 5.2 2 7.2 4.4 0.8 2.2-4.4-0.7-6.8 0.8-2.5 1.8-1.3 4.2-6.4 2.4-3.2 3.4-5.9-1.3-3.2-0.6-0.5 4.1 2.9 2.4 1.9 2.1-2.4 2.2-2 3.4-4.9 2.2-7.6 0.2-7.2 2.2-4.4 3.4-3.3-1.9-6.2 0-9.4-3.9-5.6-0.9-6.4 0.9-11.3-1.5-5.6 0.2-4.7-3.8-5-5.8-3.4-0.7-8-4-7.2-0.8-6.5-1.1-3-2.8-1.4-7.3-5.8-5.1-8.2-2.3-5.7-3.3-3.3-4.4 4.7-1.1 6.7-5.3 5.9-2.9 5.3 1.9 5.2 0.1 4.8 2.9 5 0.2 8 1.6 2.4-4.4-4-3.6 1.3-6.4 7 2.5 4.8 0.8 6.7 1.6 3.6 4.6 8.5 2.6z",
      MH: "M1953.8 456l1 0.4-0.2 0-0.8-0.4z",
      MK: "M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z",
      MU: "M1307.7 630.8l0.4 0.9-0.2 0.6-0.4 0.4 0.1 0.3-0.3 0.3-0.5 0.2-0.5 0-0.6-0.1-0.1 0.1-0.3-0.3 0.2-0.2 0.1-0.4 0.1-0.7 0.2-0.4 0.5-0.4 0.1-0.2 0.2-0.5 0.4-0.3 0.4 0.1 0.2 0.6z m31.8-2.1l-0.3-0.3 0.4-0.2 0.3-0.1 0.2 0.1-0.1 0.2-0.5 0.3z",
      MT: "M1063.9 271.7l-0.2 0.3-0.5-0.2-0.5-0.3 0-0.5-0.1-0.1 0.6 0 0.4 0.3 0.2 0.2 0.1 0.3z m-1.6-1.1l-0.5-0.1 0-0.2 0.4-0.1 0.4 0.3-0.3 0.1z",
      MW: "M1182.3 588.9l0.4 0 1.9 2.1 2.2 4.6 0.1 8.3-2.5 1.3-1.9 4.5-3.5-4-0.2-4.5 1.3-3-0.2-2.6-2.2-1.6-1.5 0.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-0.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-0.1 0.8 1.8 4.1 0.2 7.7-1.8 3.6 1.6 4.7-0.2 2.8 1.2 1.9-0.1 2.4 0.9 1.4 1-1.6 1.9 2.5 0.2-0.8-1-3.4-1.1-0.3-0.1-0.9z",
      MV: "M1402.9 474.8l0 0.2-0.2-0.1 0.2-0.2 0 0.1z",
      MQ: "M644 406.9l0 0.2 0.4-0.1-0.2 0.5 0.2 0.2 0 0.2 0.2 0.2 0.2 0.9-0.3 0.3-0.1-0.4-0.1 0.1-0.6-0.1-0.4 0-0.2-0.3 0.6-0.5-0.4 0-0.4-0.4-0.1-0.5-0.2-0.5 0.3-0.4 0.4 0.1 0.5 0.3 0.2 0.2z",
      MP: "M1802.5 411.1l-0.1 0.1-0.2-0.1-0.1-0.2 0.5-0.2 0.2 0.2-0.3 0.2z m1.5-5.1l-0.2 0-0.3-0.6 0.1-0.3 0.3 0 0 0.3 0.2 0.2-0.1 0.4z m0.5-1.6l-0.2 0.2 0.1 0.3-0.4 0 0-0.7 0.1-0.2 0.4-0.2-0.1 0.5 0.1 0.1z m-1.9-7.5l-0.3 0-0.1-0.2 0.4 0 0 0.2z m-1.9-11l-0.1-0.2 0-0.5 0.3-0.1 0.2 0.3-0.4 0.5z m-1.2-4.3l-0.4-0.1 0-0.3 0.2-0.1 0.2 0.2 0 0.3z",
      MS: "M638.2 393.9l0.2 0.4 0 0.3-0.2 0.2-0.2-0.1-0.1-0.3 0.3-0.5z",
      MR: "M959.2 341.5l-8.5 0.1 2.4 27.7 2.5 27.7 1 0.8-1.3 4.5-22.5 0.1-0.9 1.4-2.1-0.4-3.2 1.3-3.9-1.8-1.8 0.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8-3.1 0-2.8 1.4-2.7-0.5-2 2-0.4-3.4 1.6-3.2 0.8-6-0.4-6.4-0.6-3.2 0.6-3.2-1.4-3-2.8-2.8 1.3-2.1 21.7 0-0.9-9.3 1.5-3.3 5.2-0.5 0.2-16.5 18 0.4 0.2-9.8 20.5 15.6z",
      UG: "M1179 474.5l2.7 4.5 0.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6 0 0.3-0.2-0.4-3-1.3-2.4 1.6-3.6 0.9-2.6 3.7 0.3 2.5-6.2-0.1-2 0.8-3.4 2-1.4-0.7 0.1-4.8 1.3-2.5 0.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-0.9 0.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5 4 0 3.5-3z",
      MY: "M1564.3 461.9l1.4 0.6 3.5 3.9 2.5 4.3 0.6 4.3-0.5 2.9 0.6 2.2 0.5 3.8 2.1 1.8 2.3 5.7 0 2.1-4 0.5-5.5-4.8-6.8-5.1-0.8-3.3-3.4-4.3-1-5.3-2.2-3.5 0.4-4.7-1.4-2.7 0.9-1.1 4.8 2.8 0.6 3.3 3.7-0.8 1.7-2.6z m89.8 13.4l-5-1.1-6.5 0-1.7 7.3-2.1 2.2-2.6 8.9-4.6 1.4-5.4-1.8-2.7 0.6-3.3 3.2-3.6-0.4-3.7 1.3-3.9-3.7-1-4.3 4.2 2.2 4.3-1.2 1-5.4 2.4-1.2 6.8-1.4 3.8-5.1 2.6-4 2.8 3.3 1.1-2.2 2.7 0.2 0.1-4.1 0.1-3.2 4.1-4.4 2.6-5 2.3-0.1 3.1 3.3 0.4 2.8 3.8 1.8 4.8 1.9-0.2 2.5-3.8 0.3 1.1 3.2-4 2.2z",
      MX: "M449.3 335.9l2.2-0.2-3.2 5.7-1.8 4.6-1.8 8.6-1.1 3.1 0.4 3.5 1.3 3.2 0.4 4.9 3 4.8 0.8 3.7 1.7 3.1 5.7 1.7 1.9 2.7 5.2-1.8 4.3-0.6 4.4-1.2 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.9 4-1.7 6.1-1.5 4.9 0.3 3.4-0.6 1.2 1.4-0.6 3.1-3.5 3.8-1.8 3.9 0.9 1.1-1.2 2.8-2.1 5-1.2-1.7-1.1 0.1-1.1 0.1-2.5 3.9-0.9-0.8-0.7 0.3-0.1 1-5.2-0.1-5.2 0-0.5 3.6-2.5 0.1 1.8 2.1 1.9 1.5 0.5 1.4 0.8 0.4-0.4 2.2-7.2 0-3.3 5.2 0.7 1.2-0.8 1.5-0.4 1.9-5.6-6.9-2.6-2.1-4.4-1.7-3.2 0.5-4.8 2.4-2.9 0.6-3.7-1.7-4.1-1.2-4.8-2.9-4.1-0.9-5.9-3-4.3-3.1-1.1-1.7-3.1-0.4-5.4-2-1.9-2.9-5.4-3.7-2.2-4-0.8-3.2 1.9-0.6-0.3-1.8 1.6-1.7 0.4-2.2-1.5-2.9 0-2.5-1.3-3.3-3.8-6.4-4.6-5-1.9-4-4.1-2.6-0.7-1.6 1.7-3.9-2.4-1.5-2.5-3.2-0.2-4.4-2.8-0.6-2.3-3.3-1.7-3.2 0.3-2-1.5-4.8-0.3-4.9 0.8-2.5-3.1-2.6-1.9 0.3-2.4-1.7-1.8 2.6-0.1 3-1 4.9 1 2.6 2.8 4.4 0.4 1.6 0.7 0.4 0.1 2.2 1-0.1 0 4.2 1.3 1.6 0.5 2.3 2.7 3.2 0.4 6 1 2.8 0.9 3-0.3 3.4 2.6 0.2 1.6 2.9 1.5 2.9-0.3 1.2-2.8 2.3-1 0-0.7-3.9-2.9-3.7-3.4-3.1-2.5-1.6 1.2-4.7-0.1-3.5-2.1-2-3.1-2.8-0.9 0.8-1-1.7-3-1.5-2.2-3.8 0.5-0.4 2.1 0.3 2.7-2.4 1-2.9-2.9-4.6-2.6-1.7-0.8-4-0.6-4.3-0.8-5.1-0.2-5.8 6.3-0.5 7.1-0.7-0.9 1.3 7 3.1 10.9 4.5 10.8 0 4.3 0 0.8-2.7 9.4 0 1.3 2.3 2.1 2.1 2.4 2.8 0.8 3.3 0.4 3.6 2.3 1.9 4 1.9 4.8-5 4.5-0.2 3.2 2.6 1.6 4.4 0.9 3.8 2.4 3.6 0.2 4.5 0.9 3 3.9 2 3.6 1.4z",
      IL: "M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z",
      FR: "M1035.7 231.4l-1.5 4.9-2.4-1.3-1.3-4.2 0.9-2.4 3.2-2.4 1.1 5.4z m-21.3-46.4l1.1 0.5 1.4-0.1 2.4 1.6 7.2 1.2-2.4 4.2-0.4 4.5-1.3 1.1-2.3-0.6 0.2 1.6-3.6 3.5 0 2.9 2.4-1 1.8 2.7-0.1 1.8 1.5 2.4-1.7 1.9 1.5 4.9 2.8 0.8-0.5 2.7-4.5 3.6-10.2-1.7-7.4 2.1-0.6 3.8-5.9 0.8-5.8-2.9-1.9 1.4-9.5-2.9-2-2.4 2.7-3.8 1-12.6-5.1-6.6-3.7-3.2-7.6-2.4-0.4-4.6 6.5-1.3 8.3 1.6-1.5-7.1 4.7 2.7 11.4-4.8 1.5-5.1 4.2-1.3 0.8 2.2 2.2 0.1 2.4 2.5 3.5 2.9 2.5-0.5 4.4 2.9z",
      FI: "M1104.1 70.1l0.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-0.9 3.8 7.4 3.9-0.9 2.9-3.4 3.4-8 7.4-8 0.5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9 0.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-0.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-0.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1-0.8 3.8z",
      FJ: "M1989.1 624.9l-0.3 0.1 0.1-0.4 0.2 0.3z m-7.5-1.6l0.2 0.2 0.3 0.1 0 0.3-0.5 0.2-0.5-0.3-0.5 0.3-0.3 0-0.2 0.3 0.1 0.3-0.4-0.1-0.1 0.2-0.4-0.1-0.1 0.1-0.4-0.2 0.3-0.1 0.2-0.1 0.2-0.2 0.4 0.1 0.3-0.3 0.2-0.3 0.5-0.1 0.5-0.3 0.2 0z m0.9-0.1l-0.2 0.1-0.2-0.1 0.2-0.2 0.2 0.2z m5.9-6.1l0.1 0.5-0.2 0.6-0.1-0.2-0.1-0.4-0.2 0 0.1-0.5 0.2-0.1 0.2 0.1z m-2.6-1.4l-0.1 0-0.1-0.4 0.2-0.2 0.4-0.1 0 0.4-0.2 0.2-0.2 0.1z m-2.2-2.5l-0.1 0.4 0.3 0.2 0.1 0.3 0.3 0.4 0.3 0.1 0.1 0.3 0.2 0 0.1 0.4-0.3 0.5 0.1 0.2 0.1 0.5-0.3 0.2 0 0.5 0.2 0 0.1 0.5-0.3 0.3-0.6 0.2-0.1-0.2-0.3 0.1-0.1 0.2-0.3-0.3-0.8 0.3-0.8 0.7-0.3-0.1-0.4 0.2-0.3-0.1-0.6 0.1-0.3-0.2-0.9-0.3-0.3-0.1-0.6-0.1-0.2-0.1-0.5-0.2-0.2-1 0.3-0.7 0.3 0 0.3-0.1 0.1-0.5 0.3-0.1 0.1-0.4-0.2-0.2 0.6-0.4 0.4-0.5 0.1 0.1 0.6-0.5 0.2 0 0.9-0.4 0.6 0.2 0.3-0.1 0.5-0.2 0.6-0.1 0.3-0.3 0.4 0.3z m6.3 0.2l-0.2 0.1 0.2-0.9 0.4 0-0.1 0.4-0.3 0.4z m-11.4-2l-0.2 0.3-0.5 0.3 0-0.3 0.4-0.4 0.3 0.1z m14.9-0.4l-0.2-0.2 0.1-0.2 0.5-0.5 0.3-0.5-0.3 1.1-0.4 0.3z m1-5l-0.4 0.4-0.8 1.1-0.3 0.1-0.7 0.4-0.2 0.6-0.4 0.2-0.2 0.3-0.1 0.2 0.3 0.1 0.6-0.3 0.1-0.1 0.3-0.3 0.2-0.3 0.6-0.3 0.3-0.3 0.6-0.3 0 0.3-0.5 0.7-0.2 0.1 0.1 0.6-0.3 0.3-0.3-0.3-0.4 0-0.5 0.1-0.4 0.3-0.7 0.1-1 0 0.5-0.5-0.4-0.2-0.6 0.2-0.4 0.2 0 0.2-0.3 0.1-0.2 0.1-0.1 0.4-0.2 0.3-0.3-0.1 0-0.2-0.4-0.1-0.4 0.2-0.2 0.5-0.3 0.2-0.3 0 0-0.3 0-0.4-0.2-0.4 0.1-0.2-0.1-0.1-0.6 0.2 0-0.4 0.4-0.3 0.1 0-0.1-0.5 0.3-0.1 0.5 0.3 0.6-0.4 0.2 0 0.3-0.3 0.2 0 0.3-0.3 0-0.2 0.8-0.1 0.9-0.3 0.3-0.1 0.4 0.1 0.5-0.2 0.2-0.4 0.2 0 0.2-0.4 0.4 0.1 0.1-0.2 0.2 0.1 1-0.5 0.1 0.3 0.2-0.1 0.2 0.1 0.3-0.3 0.5-0.2 0.1 0.1-0.5 0.4-0.2 0z",
      FK: "M697.4 836.2l0.4-0.1 0 0.4-0.8-0.3 0.3-0.3 0.2-0.1-0.1 0.4z m-0.7-1.4l0.2 0.2 0.4 0.1 0.1 0.4-0.3 0.1-0.1-0.4-0.2-0.2-0.1-0.2z m6.2-0.8l0.2 0.1-0.1 0.4-0.3-0.1-0.2-0.3 0.3-0.2 0.1 0.1z m-12.1-0.9l0 0.2 0.1 0.3-0.4 0.1-0.3-0.1-0.2-0.2-0.3-0.1-0.1-0.4 0.2 0 0.1-0.2 0.3-0.1 0.2 0.1-0.3 0.3 0.3 0.1 0.3-0.3 0.1 0.3z m2.9-1.3l-0.4-0.2-0.5-0.3-0.8-0.3 0.1-0.4-0.7-0.1-0.3-0.1-0.3-0.4 0.2-0.1 0.8 0.3 0.8 0.4 0.5 0.1 0.4 0.1 0.3-0.3 0.1-0.3 0.2 0.1 0.4-0.2 0.1 0.2 0.5 0 0 0.3 0.3 0 0.9-0.2 0.1 0.2 0.3 0 0.4-0.1-0.3-0.2-0.1-0.3 0.4 0 0.6 0.2 0.1 0.4-0.4 0.5 0.1 0.3-0.2 0.2-0.4 0-0.3 0.8-0.3 0.3-0.3 0.6-0.1 0.3-0.5 0.3-0.1-0.2-0.4 0 0 0.3-0.8-0.1-0.1 0.1 0.3 0.4-0.1 0.1-0.2 0.4-0.4 0-0.3 0.4-0.3 0.1-0.2 0-0.2-0.3-0.4-0.3 0-0.2-0.5 0 0.6 0.4-0.4 0-0.5-0.3-0.2-0.1-0.4-0.2-0.3-0.2 0-0.2 0.7 0.2 0.6-0.2-0.5-0.2-0.1-0.1 0.9 0 0.4 0.1 0.3 0.2 0-0.2 0.4-0.1 0.1-0.3-0.4-0.2-0.2-0.5 0.1-0.2 0.6 0 0.2 0.1 0.4-0.1-0.1-0.3-0.8 0 0 0.1-0.4 0.2-0.6 0-0.5-0.3 0-0.3 0.7 0.2 0.6-0.2 0.3 0 0.5-0.1 0.4 0.2 0-0.1-0.4-0.1z m1.6-1.9l0.3 0 0.3 0.3-0.3 0.1-0.3 0 0-0.4z m-1 0l-0.3 0-0.1-0.3 0.4 0.1 0 0.2z m-1.4-0.2l0.6-0.1 0.2 0.3-0.3 0.4-0.2-0.1-0.3 0.1-0.3-0.2 0.3-0.2 0.3 0.2 0.1-0.2-0.5-0.1 0.1-0.1z m7.2 0.1l0.6 0 0.1-0.1 0.5-0.1 0.4 0.2 0.4 0.3 0.1 0.3 0 0.1-0.5 0.1-0.2-0.3-0.2-0.1-0.1 0.3 0.2 0.1 0.1 0.3 0.3-0.2 0.2 0.1 0.1 0.4 0.3 0.1 0.1-0.1 0.5 0.3 0.1-0.4-0.8-0.2 0.1-0.5 0.3-0.2 1.5-0.1 0.7 0.6 0.2 0.1 0 0.4-0.6-0.1-0.5-0.2-0.6 0.2 0.3 0.2 0.4 0.1 0.9 0.1 0.3 0.1 0.1 0.2-0.2 0.5-0.5 0-0.1 0.1-0.7 0.1-0.5 0.2 0.3 0.2-0.9 0.4-0.4-0.1-0.5 0.1-0.7 0-0.6-0.2-0.6-0.4 0 0.3 0.3 0.2 0.6 0.2 0.3 0.3 0.2-0.1 0.4 0.1 0.4 0.3-0.2 0.1 0.2 0.5-0.2 0-0.3-0.3-0.4-0.1-0.5 0.4-0.2-0.3-0.3-0.2-0.3 0-0.5-0.2-0.2 0.1 0.2 0.4 0.3 0 0.2 0.2-0.2 0.1 0.7 0.6-0.2 0.1-0.4-0.2-0.3 0-0.3-0.3-0.3-0.1-0.3-0.1-0.1 0.6 0.5 0.1 0 0.3-0.1 0.2-0.4-0.1-0.1-0.2-0.5-0.2-0.1-0.2-0.2 0-0.4-0.5 0.3-0.4 0-0.2-0.4-0.5 0-0.2 0.5-0.2-0.1-0.2 0.5-0.1-0.1-0.3 0.6-0.4 0.6-0.2 0.4 0.4 0 0.4 0.3-0.1-0.5-0.6 0.1-0.3-0.6-0.2-0.4-0.3 0.1-0.2 0.4 0.2 0.1-0.5-0.7-0.2 0.1-0.3 0.2 0.1 0.3-0.2 0.3 0 0.2-0.3-0.3-0.3 0.4 0 0.5 0.2z m-5-0.4l0.7 0 0.2 0.2 0.2-0.2 0.2 0.1 0.2 0.3-0.2 0.1-0.4-0.1-0.4-0.2-0.8-0.1 0.1-0.2 0.2 0.1z m-6.8-1.1l-0.5-0.1 0.1-0.2 0.4 0.3z",
      FM: "M1909.4 467.7l-0.2 0.3-0.5-0.1 0-0.2 0.5-0.4 0.2 0.4z m-28.2-10.6l0.4 0 0.3 0.2 0.1 0.4-0.2 0.1 0.1 0.2-0.1 0.2-0.6 0-0.2-0.2 0-0.2-0.2-0.3 0-0.3 0.4-0.1z m-114.7-16.6l0.1 0.3-0.3 0-0.3 0.5-0.1-0.1 0.3-0.8 0.4-0.1-0.1 0.2z",
      FO: "M955.6 112l0.4 0.2 0.3 0 0.1 0.2 0 0.4 0.2 0.3-0.1 0.2-0.6-0.4-0.2-0.4-0.2-0.2-0.2-0.3 0.3 0z m0.3-1.6l0.8 0.2 0.2 0.2-0.1 0.4-0.1 0.1-0.4-0.5-0.5-0.1-0.2-0.4 0.3 0.1z m-1.3-1.4l0.1 0.2 0.3 0 0 0.3-0.4 0-0.2 0.2-0.6-0.2-0.2-0.1-0.2-0.3 0.5-0.1 0.1-0.1 0.6 0.1-0.3-0.2 0.2-0.8 0.5 0.1 0.3 0.5 0 0.1 0.6 0.2 0.3 0.5 0.3 0.2-0.1 0.6-0.5-0.4-0.2-0.2-0.2-0.1-0.1-0.2-0.2-0.2-0.5 0-0.1-0.1z m3.7-0.6l-0.2-0.2 0.3-0.2-0.1 0.4z m-2.4 0.5l-0.4-0.2-0.3-0.3-0.1-0.3 0.1-0.1 0.4-0.1 0.3 0 0.6 0.4-0.1 0.2 0.1 0.2 0.6 0.2 0 0.2-0.4 0.3-0.8-0.5z m2.2-0.6l-0.3 0.4-0.3-0.2-0.3 0 0.2-0.3-0.1-0.4 0.1-0.1 0.2 0.4 0.5 0.2z m-0.9 0l-0.2 0-0.2-0.4 0.1-0.3 0.2 0.4 0.1 0.3z",
      NI: "M519.6 405.5l-0.5 0.7-0.5 1.4 0.4 2.3-1.5 2.2-0.8 2.6-0.5 2.8 0.2 1.7-0.1 2.9-0.9 0.6-0.7 2.8 0.2 1.7-1.2 1.6 0.1 1.7 0.8 1.1-1.4 1.4-1.7-0.5-0.8-1.3-1.8-0.5-1.3 0.8-3.6-1.7-0.9 0.8-1.8-2-2.5-2.6-1.1-2.1-2.2-2.1-2.5-2.9 0.7-1 0.8 1 0.5-0.4 1.8-0.3 0.8-1.5 0.8 0 0.2-3.2 1.3-0.1 1.2 0 1.4-1.7 1.5 1.3 0.6-0.8 1.2-0.8 2.1-1.7 0.2-1.4 0.5 0.1 0.9-1.5 0.6-0.2 0.9 1 1.1 0.2 1.3-0.8 1.4 0 2-0.8 0.9-0.9 1.9 0.1z",
      NL: "M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z",
      NO: "M1113.7 67.5l-6.4 2.1-3.2 0.5 0.8-3.8-5.8-2.1-5.9 1.8-1.1 4-3.4 2.4-4.7-1.3-5.3 0.2-5.1-2.8-2.2 1.4-2.6 0.2 0.1 3.6-8-0.9-0.6 3.1-4 0-2.3 3.9-3.4 6.1-5.7 7.9 1.8 2-1.3 2.2-4.3-0.1-2.4 5.4 1 7.7 3.1 2.9-0.8 6.9-3.4 4-1.8 3.4-3.3-3.6-8.6 6.8-6.1 1.4-6.5-3-1.8-6.3-2-13.5 4-3.7 11.3-4.9 8.1-5.9 7.2-7.8 8.9-10.7 6.4-4.1 10.3-6.8 8.5-2.4 6.7 0.3 5.2-4.4 7.4 0.2 7-1 13.7 3.9-4.9 1.4 5.4 3.4z m-37.1-42.3l-7.6 1.9-6.8-1.1 2.2-1.2-2.6-1.5 7.3-0.9 1.9 1.7 5.6 1.1z m-25.6-8.5l12.6 3.4-8.6 1.8-1.2 3.4-3 0.9-0.9 4-4.4 0.2-8.5-2.9 3-1.7-5.7-1.4-7.7-3.9-3.2-3.5 9.3-1.6 2.3 1.5 5 0 1-1.5 5.2-0.2 4.8 1.5z m24.4-3l7.4 1.5-4.4 2.4-10.1 0.5-10.7-0.8-1-1.2-5.1 0-4.3-2 10.5-1.2 5.4 1 3.1-1.3 9.2 1.1z",
      NA: "M1116.2 614.3l4.6-1.4 3.6 0.3 2.2 1.5 0 0.5-3.2 1.5-1.7 0-3.7 2.5-2-2.7-8.7 2.3-4.2 0.2-0.8 22.9-5.5 0.2-0.6 18.7-1.1 23.7-5 3.3-2.9 0.5-3.4-1.2-2.5-0.5-0.8-2.7-2-1.8-2.8 3.2-3.9-4.9-2-4.6-1-6.3-1.2-4.6-1.6-9.9 0.1-7.7-0.6-3.5-2.1-2.7-2.8-5.3-2.8-7.7-1.1-4-4.4-6.3-0.3-4.9 2.7-1.2 3.4-1.1 3.6 0.2 3.3 2.9 0.8-0.5 22.7-0.2 3.8 3 13.5 0.9 10.4-2.6z",
      VU: "M1931.8 631.8l-0.5-0.2 0.2-0.4 0.5-0.1 0.2 0.4-0.1 0.2-0.3 0.1z m-1.2-3.8l-0.2 0-0.3-0.1-0.4-0.5-0.1-0.4 0-0.4 0.2-0.2 0.1-0.4 0.3-0.1 0.4 0-0.2 0.3 0 0.5 0.7 0.5-0.3 0.3-0.2 0.5z m0-5.9l0.3 0 0.1 0.2-0.5 0.1 0.1 0.3 0.4 0.2 0.1 0.3-0.1 0.4-0.4 0.1-0.4-0.3-0.4 0-0.2-0.2-0.3-0.2 0.1-0.4 0-0.3 0.2-0.5 0.3-0.4 0.5 0 0.2 0.1-0.1 0.4 0.1 0.2z m-3-7.6l0.6-0.1 0.1 0.1 0.2 0.6 0.2 0.3 0.1 0.1-0.4 0.6-0.8 0.2-0.3-0.3-0.1-0.5-0.3-0.1-0.4 0.3-0.1-0.1 0.2-0.4 0.4-0.3 0.4-0.5 0.2 0.1z m2.3-3.9l-0.1-0.3 0.3 0-0.2 0.3z m-1.6-2.4l0.1 0.5 0 0.2 0.4 0.1 0.2 0.5 0.5 0 0 0.4-0.1 0.1-0.3-0.3-0.3-0.1-0.6 0.2-0.3-0.1-0.1-0.2-0.1-0.4 0.2-0.5 0.2-0.3 0.2-0.1z m0.9-0.2l-0.1 0-0.1-0.3 0.2 0 0 0.3z m0.2-1.4l-0.2 0.2-0.6 0-0.3 0.1-0.2-0.2-0.4-0.1-0.5-0.4 0.1-0.2 0.5-0.2 0.4-0.1 0.4-0.3 0.1-0.3 0.2 0 0.1 0.3 0 0.6 0.5 0.4-0.1 0.2z m-4.7-1.3l0.2 0.3 0.6 0.4 0.7 0.7 0.1 0.1 0 0.4 0.2 0.3-0.3 0.2-0.4 0.4 0-0.2-0.3-0.1-0.4 0-0.2 0.1 0 0.2-0.4 0.2-0.3-0.1 0-0.7-0.1-0.6 0.1-0.6 0.1-0.5-0.2-0.5-0.6 0.3-0.2-0.2-0.1-0.3 0-0.3 0.3-0.3 0-0.4 0.1-0.3 0.3-0.1 0.6 0.3-0.1 0.2 0.2 0.5-0.1 0.2 0.2 0.4z m-0.6-2.4l-0.3 0-0.5-0.3 0-0.1 0.2-0.3 0.2-0.1 0.5 0.1-0.1 0.4 0 0.3z m-0.5-1l0.4-0.3 0.1 0.1 0.1 0.3-0.5 0-0.1-0.1z m5.7 2.6l-0.2-0.1 0.1-1.2-0.1-0.3 0.1-0.5 0.3-0.8 0.1-0.5 0.2 0.6-0.1 0.3 0 0.6 0 1-0.1 0.6-0.3 0.3z m-1.3-3.3l-0.7 0-0.3-0.1 0-0.2 0.9-0.7 0.5-0.2 0.5-0.1 0 0.2-0.3 0.4-0.2 0.3-0.4 0.4z m1.9-0.7l0 0.2-0.3 0 0.1-0.3 0.2-1.3 0-0.1 0.1-1.2 0.2 0.1-0.1 1.3 0.1 0.3-0.1 0.5-0.2 0.5z m-6.3 1.4l-0.9-0.1-0.6 0.3-0.1 0.2-0.2 0-0.1-0.6-0.2-0.1-0.4-1 0.4-0.8 0-0.4-0.1-0.2 0-1.4-0.1-0.3 0-0.5 0.2-0.3 0-0.3 0.2-0.3 0-0.2 0.3-0.1 0.1 0.5 0.2 0.4 0.2 0.3 0.1 1.3-0.1 0.8 0 0.1 0.6-0.1 0.3-0.3 0.2-0.8 0-0.2 0.3-0.2 0.3 0.1-0.1 0.4 0 0.9 0.3 0.1 0 0.5-0.2 0.1 0.3 0.4-0.2 0.2 0 0.5 0.2 0.5-0.1 0.2-0.3 0-0.5 0.4z m4.2-9.3l0.4 0.3-0.1 0.4-0.3 0.3-0.2 0.2-0.6 0 0-0.4 0.1-0.4 0.2-0.3 0.5-0.1z m0.6-1.9l-0.3 0.2-0.2 0.1 0 0.2-0.2 0.1 0-0.3-0.2-0.2-0.1-0.3 0.1-0.4 0.2-0.1 0.4-0.2 0.1 0.2 0.1 0.4 0 0.1 0.1 0.2z m-5-4.2l-0.1-0.1 0.1-0.5 0.2 0.2-0.2 0.4z",
      NC: "M1915.2 646.9l-0.2 0.1-0.2 0.4-0.4-0.2 0.2-0.5 0.1-0.2 0.3 0.1 0.2 0.3z m4.4-7.8l-0.1 0.1 0.2 0.4 0.3 0 0.4-0.2-0.1 0.6-0.2 0.2-0.1 0.4-0.5 0.3-0.4-0.2 0-0.1-0.3-0.3 0.1-0.2-0.2-0.2 0.1-0.4-0.1-0.4 0.1 0 0.4 0.1 0.4-0.1z m-2.7-4.3l-0.2 0.5 0 0.4-0.2 0.3 0.3 0.2 0.2 0.1 0.1 0.2-0.1 0.2 0.3 0.4-0.2 0-0.2 0.5-0.2 0.2-0.3-0.1-0.2-0.3-0.1-0.2-0.6-0.1-0.3-0.5 0-0.2-0.1-0.3 0.3 0 0.3-0.2 0.4-0.3 0.1-0.3-0.4-0.2-0.4 0.1 0.2-0.4 0.3-0.1 0.2 0.1 0.4-0.3 0.4 0.3z m-3.4-1.6l-0.3 0.6-0.1 0.3 0.3 0-0.5 0.5-0.2 0.2-0.1-0.2 0.3-0.4 0.2-0.5 0.4-0.5z m0 0l-0.2-0.4 0.4 0 0.1 0.4-0.3 0z m-13.9-2.4l0.2 0.1 0.5 0.9 0.3 0.3 0.3-0.1 0.2-0.3 0.9 0.5 0.3 0.5 0.7 0.6 0.3 0.4 0.1 0.3 0.4 0.4 0.1 0.2 0.2 0 0.3 0.3 0.9 0.2 0.1 0.3 0 0.4 0.3 0.4 0.4 0.1-0.3 0.5 0.1 0.2 0.4 0.5 0.1 0 0.4 0.5-0.1 0.4 0.7 0.2 0.4 0.5 0.3 0 0.3 0.2 0.5 0.4-0.1 0.3 0.3 0 0.4 0.5 0.6 0.4 0 0.2 0.3 0.1 0.3 0.3 0 0.2 0.3 0.6 0.4 0.4 0.1-0.1 0.4 0.6 0.5 0.1 0.3 0.3 0 0.4 0.1 0.4 0.1 0.1-0.2 0.6-0.7 0.4-0.1-0.3-0.3 0.1-0.3 0.3-0.6-0.8-0.4 0-0.1-0.2-0.2 0-0.2 0.3-0.9-0.9-0.2 0-0.4-0.5 0.1-0.8-0.3 0-0.4 0-0.3-0.2-0.1-0.2-0.2-0.1-0.3 0 0-0.3-0.2-0.5-0.4 0.1-0.8-0.5-0.1-0.2 0-0.3-0.3 0.2-0.6-0.3-0.1-0.4-0.4-0.3-0.2-0.5-0.5-0.1 0.2-0.2-0.3-0.3-0.3-0.1-0.3-0.7 0-0.4-0.2-0.3-0.3 0-0.2-0.6 0.1-0.2-0.7-0.4-0.3-0.2-0.4-0.6 0.3-0.2-0.2-0.2-0.2-0.3 0-0.5-0.5-0.3 0-0.6-0.2-0.3 0.3 0 0.1-0.3-0.1-0.2-0.6 0-0.2-0.3 0.5-0.7-0.3-0.3 0.2-0.1z m1.1 0.3l-0.3-0.1 0.1-0.4 0.2 0.5z m-2.3-2.4l-0.2 0.2-0.1-0.4 0.2-0.2 0.1 0.4z",
      NE: "M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z",
      NG: "M1066.2 421.7l2.3 2.5-0.6 1.2-0.3 2.1-4.7 5-1.4 4.1-0.8 3.3-1.2 1.5-1.1 4.5-3 2.6-0.8 3.2-1.3 2.6-0.5 2.7-3.9 2.2-3.2-2.7-2.1 0.1-3.4 3.8-1.6 0-2.7 6.2-1.4 4.6-5.9 2.3-2.1-0.3-2.2 1.4-4.5-0.1-3.1-4.1-1.9-4.6-4-4.2-4.2 0-5 0 0.3-10.3-0.2-4.1 1.1-4 1.7-2 2.8-4-0.6-1.7 1.1-2.6-1.3-3.8 0.2-2.1 0.4-5.8 1.6-2.6 0.8-3.7 1.4-1.3 6.1-0.8 5.6 2.4 2.1 2.4 2.9 0.1 2.7-1.5 6.8 3.3 2.9-0.2 3.3-2.7 3.3 0.2 1.6-0.9 3 0.3 4.4 1.9 4.3-3.6 1.4 0.3 3.9 7 1-0.1z",
      NZ: "M1886.2 764.4l-0.8 2.6 5.6-2.6-0.5 2.7-2.1 2.7-4.2 2.9-7.1 4.7-4.7 2.6-0.6 3-4 0.1-6.3 2.4-4.7 4.1-8.2 6.4-6.3 2.8-4 1.8-4.6-0.1-1.5-2.1-5.1-0.4 1-2.4 6.5-4.6 11.4-6.3 4.3-1.2 5.6-2.4 7-3.3 5.7-3.3 6-4.7 3.1-1.6 3.5-3.6 5.8-2.9-0.8 2.7z m29-30.5l-0.4 6.8 2.9-4.4 1.3 1.8-2.4 4.8 2.9 2.1 3.2 0.5 4.7-2.4 2.2 0.7-5.2 5.7-4.2 3.7-3.9-0.1-2.8 1.9-1.5 2.8-1.6 1.1-4.6 3.5-5.9 4.3-6 2.6 0.5-1.7-1.5-0.9 6.9-5.2 0.9-3.6-3.8-2.5 1.8-2.3 5.3-2.2 4.2-5 2.5-4.1 0.6-4.3 0.8-1.1-0.9-2.7-0.7-5.6 0.4-4.6 2.2-0.5 0.9 3.6 3.2 1.6-2 5.7z",
      BQBO: "M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z",
      NP: "M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z",
      NR: "M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z",
      XK: "M1097.8 230.8l-1.2 0.3-2.9 1-0.1 1.3-0.7-0.1-0.6-2.3-1.3-0.7-1.2-1.7 0.8-1.4 1.2-0.4 0.5-2.1 0.9-0.4 0.8 0.9 1 0.4 0.8 1 0.9 0.3 1.1 1.2 0.7-0.1-0.4 1.6-0.6 0.7 0.3 0.5z",
      CI: "M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z",
      CH: "M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z",
      CO: "M584.4 426.2l-3.7 1.1-1.6 3.2-2.3 1.8-1.8 2.4-0.9 4.6-1.8 3.8 2.9 0.4 0.6 2.9 1.2 1.5 0.3 2.5-0.7 2.4 0.1 1.4 1.4 0.5 1.2 2.2 7.3-0.6 3.3 0.8 3.8 5.6 2.3-0.7 4.1 0.3 3.2-0.7 2 1.1-1.2 3.4-1.3 2.2-0.6 4.6 1.1 4.3 1.5 1.9 0.2 1.4-2.9 3.2 2 1.4 1.5 2.3 1.6 6.4-1.1 0.8-1-3.8-1.6-2.1-1.9 2.3-11-0.2 0 4 3.3 0.7-0.2 2.5-1.1-0.7-3.2 1-0.1 4.7 2.6 2.4 0.9 3.6-0.1 2.8-2.2 17.6-2.9-3.4-1.7-0.1 3.5-6.6-4.4-3-3.4 0.6-2.1-1.1-3.1 1.7-4.2-0.9-3.5-6.7-2.6-1.6-1.8-3.1-3.8-3-1.5 0.6-2.4-1.5-2.8-2.1-1.6 1-4.8-0.9-1.4-2.8-1.1 0.1-5.6-3.6-0.7-2 2.1-0.5-0.2-3.2 1.4-2.4 2.8-0.4 2.5-4 2.2-3.4-2-1.5 1.2-3.7-1.1-5.9 1.3-1.7-0.7-5.4-2.2-3.5 0.9-3.1 1.8 0.5 1.1-1.9-1.1-3.8 0.7-0.9 2.9 0.2 4.5-4.5 2.4-0.7 0.1-2.1 1.4-5.5 3.4-2.9 3.5-0.2 0.6-1.3 4.4 0.5 4.6-3.2 2.3-1.4 2.9-3.1 2 0.4 1.3 1.7-1.2 2.1z",
      CN: "M1602.2 381.9l-4.3 3.1-4.9-2-1-5.5 2.2-2.9 5.8-1.8 3.3 0.1 1.6 2.5-2 2.8-0.7 3.7z m23.4-196.4l9 4.5 6 5.8 7.6 0 2.6-2.4 6.9-1.9 1.3 5.7-0.3 2.3 2.8 6.8 0.6 6.2-6.9-1.1-2.9 2.2 4.7 5.4 3.9 7.5-2.5 0.1 1.9 3.3-5.5-3.8 0 3.6-6.4 2.7 2.8 3.4-4.6-0.3-3.6-2-1.1 4.6-3.9 3.4-2.1 4.1-6.3 1.8-2.4 3-4.8 1.8 1.3-3-2.3-2.5 2-4.3-4.5-3.3-3.4 2.2-3.6 4.5-1.3 4.1-5 0.3-1.3 3 4.8 4.3 4.8 1.1 1.4 2.8 5.1 1.9 3.8-4.6 5.9 2.5 3.5 0.2 2.3 3.3-6.7 1.8-1 3.5-3.8 3.2-0.9 4.5 7.1 3.5 4.6 6.3 5.5 5.9 5.5 4.9 1.6 4.8-2.8 1.8 2.4 3.4 3.9 2 0.8 5.2 0.1 5.1-2.8 0.6-2.1 6.9-2.3 8.5-3.4 7.6-6.4 5.9-6.6 5.5-6.1 0.7-2.9 2.8-2.3-2-2.5 3.1-7.2 3.3-5.8 0.9-0.7 6.8-3.1 0.4-2.2-4.7 0.9-2.4-7.8-2.1-2.4 1.1-5.9-1.7-3.1-2.6 0.3-3.7-5.3-1.2-3.1-2.4-4.1 3.4-5.3 0.8-4.4-0.1-2.7 1.6-2.7 0.9 2 7.4-3-0.2-0.8-1.5-0.5-2.7-3.8 1.9-2.6-1.2-4.5-2.4 0.8-5.3-3.7-1.3-2.4-5.9-5.6 1.1-0.7-7.6 4.2-5.4-0.9-5.3-1.3-4.9-2.7-1.5-2.7-3.8-3.1 0.5-6.1-1 1.2-2.7-3.6-4-3.2 2.7-4.9-1.5-5.4 4-3.9 4.8-4.2 0.8-2.8-1.7-2.9-0.2-4.3-1.4-2.6 1.6-2.6 4.8-1.5-5.1-3.1 1.4-6.5-0.7-6.5-1.4-5-2.9-4.5-1.2-2.5-3.1-3.3-0.9-6.4-4.2-4.8-2-1.9 1.5-8.6-4.5-6.2-4-3.2-7.1 4.1 0.9-0.6-3.3-3-3.3-0.8-5.2-7.7-7.6-9.5-2.5-2.9-5-4.7-3-1.5-1.8-1.8-3.6-0.5-2.5-3.7-1.5-1.5 0.7-3.1-6 1.1-1.4-1.2-1.5 4.1-3 3.2-1.3 5.8 0.9 0.6-4.1 6.4-0.7 1-2.6 6.9-3.4 0.2-1.4-1.7-3.7 2.9-1.6-8.8-11 9.1-2.5 2-1.4-1-11.3 10.8 2.1 1.6-2.9-2.5-6.2 3.8-0.6 1.9-4.2 1.7-0.5 3.3 4.4 5.7 3.3 8.2 2.3 5.8 5.1 1.4 7.3 3 2.8 6.5 1.1 7.2 0.8 8 4 3.4 0.7 5 5.8 4.7 3.8 5.6-0.2 11.3 1.5 6.4-0.9 5.6 0.9 9.4 3.9 6.2 0 3.3 1.9 4.4-3.4 7.2-2.2 7.6-0.2 4.9-2.2 2-3.4 2.4-2.2-1.9-2.1-2.9-2.4 0.5-4.1 3.2 0.6 5.9 1.3 3.2-3.4 6.4-2.4 1.3-4.2 2.5-1.8 6.8-0.8 4.4 0.7-0.8-2.2-7.2-4.4-5.2-2-2.5 2.3-5.5-1-2.3 0.8-2.8-2.5-0.3-6.3-0.6-4.7 7.4 2.4 4.4-3.9-1.9-2.8-0.2-6.5 1.3-2-2.5-3.4-3.7-1.4 1.7-3.1 5.1-1.1 6.2-0.2 8.6 1.9 6 2.2 7.7 6.2 3.8 2.7 4.5 3.8 6.2 6 10 2z",
      CM: "M1072.8 454.2l-2.8 6.5-1.4 1.1-0.4 5 0.6 2.7-0.5 1.9 2.7 3.4 0.5 2.3 2.1 3.3 2.6 2.1 0.3 2.9 0.6 1.9-0.4 3.4-4.5-1.5-4.6-1.7-7.1-0.2-0.7-0.4-3.4 0.8-3.4-0.8-2.7 0.4-9.3-0.1 0.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-0.9 0.1-1.8 1.4-4.6 2.7-6.2 1.6 0 3.4-3.8 2.1-0.1 3.2 2.7 3.9-2.2 0.5-2.7 1.3-2.6 0.8-3.2 3-2.6 1.1-4.5 1.2-1.5 0.8-3.3 1.4-4.1 4.7-5 0.3-2.1 0.6-1.2-2.3-2.5 0.2-2.1 1.5-0.3 2.3 4.1 0.5 4.2-0.2 4.3 3.2 5.8-3.2 0-1.6 0.4-2.6-0.6-1.2 3 3.4 3.8 2.5 1.1 0.8 2.6 1.8 4.4-0.8 1.8z",
      CL: "M655.1 837.9l6 13.6 5 0 3 0.2-0.5 2.4-3.2 1.9-2.4-0.2-3.1-0.5-4.2-1.8-5.4-0.9-7.5-3.4-6.4-3.2-9.8-6.9 4.6 1.3 8.6 4.1 7.3 2.2 1.2-2.8-0.3-4.2 3.4-2.6 3.7 0.8z m-40.7-190.1l0.9 1.6-1.2 6.7-5.6 3.1 1.6 10.7-0.8 2.1 2 2.5-3.3 4-2.6 6-0.9 5.9 1.7 6.2-2.1 6.6 4.9 11.1 1.6 1.2 1.4 5.9-1.6 6.2 1.4 5.4-3 4.2 1.6 5.8 3.3 6.3-2.5 2.3 0.2 5.7 0.8 6.5 3.3 7.8-1.7 1.3 3.7 7.3 3.1 2.4-0.8 2.7 2.8 1.2 1.4 2.4-1.8 1.2 1.8 3.7 1.1 8.3-0.7 5.4 1.8 3.2-0.1 3.9-2.7 2.8 3.1 6.5 2.6 2.3 3.1-0.4 1.9 4.6 3.5 3.6 12.1 0.8 4.9 1-4.3 0-1.7 1.5-3.4 2.2 1.7 5.7-1.9 0.1-6.3-1.9-7.5-4.3-7.6-3.5-3.2-3.9-0.3-3.6-4.2-4.2-5-10.6-0.2-6 3.4-4.8-8.3-1.9 2.7-5.5-2-10.5 6.5 2.2-1.8-13.1-4-1.7 1 7.9-3.5-0.9-1.5-9-2-11.8 1.1-4.4-3.3-6.2-2.4-7.2 2.2-0.3 0.6-10.3 1.2-10.3 0.1-9.5-3.3-9.7 0.6-5.3-2.1-7.9 1.8-7.8-0.9-12.4 0-13.4 0.1-14.3-1.5-10.5-2.1-9.1 2.8-1.6 1.1-3.3 3.2 4.4 1.2 4.6 3.2 2.7-1.1 6.2 3.7 7.2 3.1 8.9 3.9-0.9z",
      CA: "M665.9 203.6l3.4 0.9 4.7-0.2-3.3 2.6-2 0.4-5.5-2.7-0.6-2.1 2.5-1.9 0.8 3z m14.4-16l-2.4 0.1-5.8-1.9-3.5-3 1.9-0.5 5.9 1.6 4.2 2.6-0.3 1.1z m-307.9 3.7l-3.1 0.9-6.3-2.8 0-2.2-2.9-2.2 0.3-1.8-4.3-1.1 0.6-3.4 1.5-1.4 4.1 1.3 2.4 1 4.1 0.6 0.2 2.2 0.4 2.9 3.2 2.6-0.2 3.4z m339.1-13.5l-5 5.4 3.9-2.1 2.9 1.4-2.4 2.1 3.8 1.7 2.8-1.5 4.3 1.9-2.8 4.6 3.8-1.1-0.3 3.3 0.5 3.9-3.6 5.6-2.4 0.2-2.9-1.2 2.5-5.1-1.2-0.8-7.3 5.4-3-0.2 4.4-3-4.4-1.5-5.5 0.4-9.6-0.2-0.2-1.8 3.8-2.3-1.7-1.6 5.4-3.8 8.2-9.9 4.2-3.5 5-2.1 2.1 0.2-1.5 1.7-3.8 3.9z m-360-21.4l1.5 0.8 5-0.5-7.2 6.9 0.3 5-1.9 0-0.7-2.8 0.5-2.9-0.8-1.9 1.3-2.7 2-1.9z m283.4-47.5l-3.6 3-1.7-0.5-0.1-1.7 0.4-0.4 2.8-1.7 1.7 0.1 0.5 1.2z m-9.7-3.2l-7.2 3.2-3-0.2 0-1.5 5-2.7 6 0.1-0.8 1.1z m-3.1-16.8l-0.9 2.5 2.7-0.9 1.5 1.5 3.5 2 3.8 1.7-1.4 2.7 3.5-0.4 1.9 1.9-5 1.8-5.9-1.4-0.8-2.6-6.3 3.1-8.2 2.9 0.7-3.3-6.3 0.5 5.7-2.8 3.6-4.5 5.1-5.1 2.8 0.4z m44.9-8.3l-4.9 0.3 0.7-2.7 3.8-3.1 4.3-0.7 2.3 1.5-1.5 2.3-0.9 0.8-3.8 1.6z m-74.5-10.7l-4.1 1.9-4.2-1.6-3.9 0.5-3.4-2.4 5-1.7 4.9-2.3 3 1.5 1.6 1 0.4 1 0.7 2.1z m53 142.6l-2.2-3.6 2.9-8.5-1.6-1.8-3.7 1-1.1-1.6-5.5 4.7-3.2 4.9-2.8 2.9-2.5 1-1.7 0.3-1.1 1.5-9.3 0-7.8 0.1-2.7 1.1-6.8 4.4 0-0.1-0.9-0.4-2 0.9-1.9 1.3-1.8-1.1-4.7 0.8-3.9 0.9-1.9 0.8-2.3 2.1 1.8 0.7 1.7-0.4 0.3 0-0.3 1.9-4.8 0.7-2.8 0.8-1.7 1-2.6-0.6-1.6 0.3-2.9 1.8-4.6 2-2.7-0.4 2-2.2 3.7-3.5 4.1-2.1 1.1-1.8 0.9-3 3.8-3.5 0.9-4 1.1 3.9 3.8 0.9 2.4-2.1-1.4-4.8-0.9-2-4-1.2-3.8-0.7-3.9 0-3.4-0.8-0.4-1.4-1.4 0.9-1.2-0.2 1.9-2.1-1.8-0.8 1.9-2.4-1.2-1.8 1.7-1.8-5.2-0.9-0.1-3.6-0.8-0.8-3.3-0.2-4.1-1.2-1.5 0.8-1.8 1.5-3.3 1-3.1 2.5-5.4-1.7-4.4 0.8-3.9-1.9-4.6-1-3.3-0.4-1-1 0.9-3.4-1.7 0-1.3 2.4-10.2 0-17 0-16.8 0-14.9 0-14.8 0-14.7 0-15.1 0-4.8 0-14.7 0-14.1 0-0.7 0-5.4-6.1-1.6-2.7-7-2.6 1.3-5.5 3.6-3.7-4.1-2.7 3.1-4.9-2.1-4.4 2.5-3.2 5.1-2.9 3.2-3.8-4.6-3.8 1.4-6.9 1.1-4.2-1.6-2.7-0.8-2.4 0.6-3.1-6.5 1.9-7.6 3.3-0.3-3.8-0.5-2.6-2.8-1.6-4.2-0.2 35.6-32.7 24.6-20.4 6 1.3 3.3 2.6 3.7 0.5 6.3-2.2 7-1.7 5.3 0.6 8.9-2.3 8.2-1.3 0.2 2.2 4.5-1.3 3.9-2.5 2.1 0.6 1.4 4.8 9.5-3.7-3.9 4.1 6-0.9 3.2-1.5 4.6 0.3 3.9 2.2 7.5 2 4.7 0.9 4.4-0.3 2.9 2.8-8.5 2.7 6.4 1.1 11.9-0.6 4.4-1 1.4 3.3 7.1-2.7-2.1-2.4 4.5-1.8 5.2-0.3 3.9-0.5 2.1 1.3 1.5 2.9 5-0.4 5.3 2.5 7.2-0.9 6 0.1 2.4-3.4 4.5-0.9 4.9 1.8-4.3 5.2 6.2-4.4 3.2 0.2 6.4-5.5-1.6-3.3-2.9-2.2 5.5-5.9 8.2-3.8 4.5 0.9 2 2.3 0.4 6-5.8 2.6 6.7 1.1-4.4 5.5 8.9-4.2 2.2 3.5-4.3 4 1.3 3.7 7.3-3.9 6.5-4.8 4.7-5.9 5.5 0.4 5.4 0.8 3.6 2.7-1.7 2.7-5.1 2.9 0.9 2.9-2.4 2.7-10.9 3.9-6.5 0.9-3.2-1.7-3.3 2.8-7.4 4.7-3 2.5-7.7 3.8-6.5 0.4-5.1 2.4-2.9 3.8-5.7 0.7-8.7 4.7-9.4 6.5-5 4.6-4.9 6.9 6 1-1.5 5.5-0.8 4.6 7.3-1.2 7 2.6 3.3 2.3 1.7 2.8 4.9 1.7 3.6 2.5 7.6 0.4 4.8 0.6-3.6 5.2-1.7 6.1 0.1 6.9 4.4 5.9 4.7-2 5.6-6.4 2.3-9.6-1.7-3.2 9-2.9 7.5-4.2 4.8-4.2 1.7-4-0.4-5.1-3.2-4.5 8.9-6.2 1-5.3 3.9-9 3.8-1.4 6.7 1.6 4.2 0.6 4.5-1.6 3.1 2 3.6 3.4 0.2 2.2 7.7 0.5-2.6 4.9-2.3 7.4 3.8 1 1.6 3.5 8.2-3.3 7.5-6.6 4.2-2.7 1.1 5.3 2.6 7.5 2 7.2-3.4 3.8 4.8 3.4 2.9 3.4 6.9 1.6 2.4 1.9 0 5.2 3.4 0.8 1.1 2.3-2 6.9-4.3 2.3-4.2 2.2-8.8 2.2-7.9 5-8.6 1.1-10.1-1.4-7.3 0-5.3 0.4-5.7 4.5-7.4 2.8-10.1 8.2-7.9 5.8 4.7-1 10.9-8.3 12.3-5.2 7.6-0.6 3.3 3.1-6.1 4.2-0.6 6.7 0.1 4.8 5.6 3.1 8.6-0.9 7.2-7.1-1 4.6 2.5 2.3-7.4 4.1-12.4 3.8-5.8 2.5-7.2 4.6-3.7-0.5 1.5-5.3 10.4-5.3-8.1 0.2-5.9 0.8z m-106.5-163.8l-4.7 2.4 10.5-1.5 2.6 2.6 7.3-2.7 1.8 1.7-2.2 5.1 4.3-2.1 2.8-5.3 4.3-0.8 3 0.8 2.2 2.1-2.7 5.1-2.4 3.7 4.2 2.6 5 2.6-2.6 2.3-7.1 0.5 0.8 2-3.2 2-6.7-0.8-5.7-1.5-5.1 0.3-9.5 1.9-11.3 0.8-7.9 0.5 0.3-2.6-4.1-1.4-4.3 0.6-0.6-4.3 3.3-0.6 7.3-0.9 5.5 0.3 6.2-1-6.5-1.2-9.1 0.4-5.7-0.1 0-1.9 11.7-2.2-6.3 0.1-5.4-1.4 7.8-3.9 5.2-2.1 14.2-3.1 2.8 1z m39.5-1.5l-7 3.4-2.3-3.6 2.1-0.8 5.5-0.2 1.7 1.2z m108.6 1.6l-0.7 1.4-4.1-0.1-4.1-0.1-4.9 0.7-0.9-0.4-2.1-2.7 1.7-1.8 2.2-0.4 8.4 0.6 4.5 2.8z m-39.8-0.3l0.3 3.2 7.2-4.1 11.7-2.1 2.3 5.3-3.2 3.4 9-1.5 5.3-2.1 6.8 2.6 3.7 2.5-1.1 2.3 8.2-1.2 1.9 3.4 8.4 2.1 2.2 2.1 0.9 5.1-9.1 2.5 7.7 3.6 5.9 1.2 3.3 5 6.5 0.4-3.3 3.9-10.9 6.5-4-2.4-3.8-5.4-5.9 0.7-2.3 3.3 2.7 3.2 4.5 2.6 1 1.5-0.1 5.7-3.6 4.1-4.7-1.6-8.6-4.5 3.6 4.9 2.8 3.5-0.3 2-10.9-2.3-7.6-3.4-3.8-2.7 2.4-1.7-4.8-2.9-4.7-2.7-0.9 1.6-13.1 0.9-2.4-1.9 5.4-4.2 8.1-0.1 9.3-0.7-0.2-2 3.1-2.8 8.8-5.4 0.4-2.5-0.5-1.8-4.7-2.7-7.1-1.8 3.5-1.4-2-3.4-3.4-0.3-1.9-1.8-3.3 1.6-7.9 0.7-14-1.2-7.4-1.6-5.9-0.8-1.9-1.9 6.3-2.4-5.7 0 3.3-5.3 7.1-4.6 6-2.1 11.2-1.4-5.8 3.3z m-50.4-3.5l3.6 1.1 7.6-0.7-0.5 1.5-6.1 2.5 3.8 2.2-5.2 4.7-8.4 2-3.4-0.4-0.9-2-5.9-4 1.7-1.7 7.4 0.6-0.9-3.3 7.2-2.5z m22.6 5.5l-7.8 3.9-4.4-0.2 1.8-4.6 2.6-2.5 4.2-2.2 5.2-1.4 7.9 0.2 6.2 1.2-10.1 4.6-5.6 1z m-115.8 7.2l-13.5 2.6 0.6-2.3-6-2.8 4.4-2.2 7.5-3.8 7.6-3.4 0.4-3.1 14-0.8 4.2 1.1 9.5 0.3 1.9 1.4 1.6 2.2-6.5 1.3-13.9 3.6-9.2 3.7-2.6 2.2z m125.2-18.4l-4.1 1.9-5.2-0.4-3.2-1.3 4.5-2.2 6.9-1.4 1.4 1.8-0.3 1.6z m-8.8-8.7l0.2 2.3-2.8 2.5-5.8 3.8-6.9 0.5-3.2-0.8 3.4-2.9-6.6 0.3 4.3-3.8 3.8 0.2 7.7-1.7 4.9 0.3 1-0.7z m-39.4 2.6l-0.7 1.7 4.4-0.8 3.6 0.2-2.3 2.5-5.1 2.3-13.9 0.8-12.3 2.2-6 0.1 1.5-1.6 10.7-2.3-17.9 0.6-4.2-0.9 11.7-4.8 5.4-1.4 8.3 1.7 2.9 2.9 6.1 0.4 0.7-4.7 5.8-1.8 3.1 0.5-1.8 2.4z m55.7-4.4l2.3 1.6 7.4 0 1.4 1.6-2.8 1.8 3.1 1.1 1.2 1.2 4.9 0.2 5.1 0.4 7.1-1 8.1-0.5 5.8 0.4 2.3 1.9-1 2-3.6 1.4-6.7 1.1-4.3-0.7-11.8 0.8-8 0.1-5.6-0.6-8.6-1.6 1.6-2.8 2.1-2.4-1.4-2.2-7-0.6-2.6-1.5 3.8-2 7.2 0.3z m-75.7-2.6l-5.8 3.7-5.3 1.7-3.8 0.2-9.9 2.1-7.1 0.8-3.6-1.1 11.7-3.7 12.2-3.1 5.5 0.1 6.1-0.7z m81.2 0.6l-1.8 0.1-6.6-0.3 0.7-1.3 7.2 0.1 1.6 0.8-1.1 0.6z m-58.8-0.9l-8.8 1.4-3.3-1.5 5.1-1.5 6-0.5 4.1 0.7-3.1 1.4z m7.8-4.2l-5.7 0.9-6 0 1-0.7 5.7-1.3 1.7 0.2 3.3 0.9z m46.8 2.5l-6.6 1-1.6-1.1 0.6-1.7 2.2-1.9 4.4 0.2 1.7 0.3 2.3 1.6-3 1.6z m-13.8-1.2l-1.1 1.9-5.3-0.5-4-1.5-7.8-0.2 5.3-1.3-2.8-1.1 2.2-1.8 6.1 0.6 7.5 1.7-0.1 2.2z m54.1-6.1l2.7 1.5-6.5 1.3-10.6 3.5-6.8 0.3-6.8-0.6-1.6-1.9 2.1-1.6 4.3-1.2-6.6 0-2-1.5 0.4-1.9 4.9-1.9 4.1-1.3 4-0.3-0.3-1 8.3-0.2 1.6 2.2 4.7 0.9 4.8 0.9-0.7 2.8z m79.2-14l8.7 0.3 6.7 0.5 5.2 1-1.1 1-9.8 1.7-9 0.8-4 0.9 7.5 0-10.5 2.5-6.8 1.2-9.3 3.5-8.1 0.7-3.1 1-11.3 0.4 4.4 0.6-3.3 0.8 0.7 2.3-5 1.6-6.9 1.3-3.5 1.8-6.6 1.5-0.5 1.1 6.5-0.2-1.1 1.2-12.7 2.9-8.5-1.4-11.7 0.8-5-0.6-6.8-0.3 2.1-2.3 8-1.1 2-3.4 2.6-0.3 7.5 2-1.7-3-4.9-0.9 5-1.8 7.6-1.1 2.8-1.6-3-1.7 1.1-2.2 9.4 0.1 2.2 0.5 7.3-1.6-7.3-0.5-12.6 0.3-4.4-1.4-0.8-1.7-2.5-1.2 1.1-1.3 6-0.8 4.2-0.1 7.4-0.6 6.8-1.5 3.9 0.2 2.4 1.1 5-2 5.2-0.6 6.5-0.4 10.4-0.2 1.3 0.4 10.3-0.6 7 0.2 7 0.2z",
      CG: "M1090.9 479.3l-0.3 3.9-1.7 3.4-1.1 4-0.7 5.7 0.3 3.7-0.9 2.2-0.1 2.4-0.7 2-3.7 3.1-2.6 3.3-2.5 6.2 0.1 5.3-1.4 2.1-3.3 3.1-3.4 4-2.1-1.1-0.3-1.8-3.1-0.1-2 2.5-1.5-0.7-2.1-2.2-1.7 1.1-2.3 2.8-4.6-6.8 4.3-3.6-2.1-4.2 2-1.6 3.8-0.8 0.4-2.9 3.1 3.1 5 0.3 1.7-3 0.7-4.3-0.6-5-2.7-3.8 2.5-7.5-1.4-1.2-4.2 0.5-1.6-3.3 0.4-2.8 7.1 0.2 4.6 1.7 4.5 1.5 0.4-3.4 3-6 3.3-3.4 3.9 1.1 3.6 0.3z",
      CF: "M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z",
      CD: "M1141.3 468.2l3.5 5.3 2.6 0.8 1.5-1.1 2.6 0.4 3.1-1.3 1.4 2.7 5.1 4.3-0.3 7.5 2.3 0.9-1.9 2.2-2.1 1.8-2.2 3.3-1.2 3-0.3 5.1-1.3 2.5-0.1 4.8-1.6 1.8-0.2 3.8-0.8 0.5-0.6 3.6 1.4 2.9 0.1 1-1.2 10.3 1.5 3.6-1 2.7 1.8 4.6 3.4 3.5 0.7 3.5 1.6 1.7-0.3 1.1-0.9-0.3-7.7 1.1-1.5 0.8-1.7 4.1 1.2 2.8-1.1 7.6-0.9 6.4 1.5 1.2 3.9 2.5 1.6-1.2 0.2 6.9-4.3 0-2.2-3.5-2-2.8-4.3-0.9-1.2-3.3-3.5 2-4.4-0.9-1.9-2.9-3.5-0.6-2.7 0.1-0.3-2-1.9-0.1-2.6-0.4-3.5 1-2.4-0.2-1.4 0.6 0.4-7.6-1.8-2.4-0.4-4 0.9-3.9-1.1-2.4-0.1-4.1-6.8 0.1 0.5-2.3-2.9 0-0.3 1.1-3.5 0.3-1.5 3.7-0.9 1.6-3.1-0.9-1.8 0.9-3.8 0.5-2.1-3.3-1.3-2.1-1.6-3.9-1.3-4.7-16.7-0.1-2 0.7-1.7-0.1-2.3 0.9-0.8-2 1.4-0.7 0.2-2.8 1-1.6 2-1.4 1.5 0.7 2-2.5 3.1 0.1 0.3 1.8 2.1 1.1 3.4-4 3.3-3.1 1.4-2.1-0.1-5.3 2.5-6.2 2.6-3.3 3.7-3.1 0.7-2 0.1-2.4 0.9-2.2-0.3-3.7 0.7-5.7 1.1-4 1.7-3.4 0.3-3.9 0.5-4.5 2.2-3.2 3-2.1 4.7 2.2 3.6 2.4 4.1 0.6 4.3 1.3 1.6-3.9 0.8-0.5 2.6 0.6 6.3-3.2 2.2 1.4 1.8-0.2 0.9-1.6 2.1-0.5 4.2 0.7 3.7 0.1 1.8-0.7z",
      CZ: "M1059.7 175.2l2.5 2 3.7 0.5-0.2 1.7 2.8 1.3 0.6-1.6 3.4 0.7 0.7 2 3.7 0.3 2.6 3.1-1.5 0-0.7 1.1-1.1 0.3-0.2 1.4-0.9 0.3-0.1 0.6-1.6 0.6-2.2-0.1-0.6 1.4-2.4-1.2-2.3 0.3-4-1.9-1.7 0.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-0.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3 0.7 2.2-0.6z",
      CY: "M1168.2 276.7l0.1 0.2 0.3 0.4-0.4-0.1-0.3 0-0.4 0.2-0.3-0.3 0-0.3 0.3-0.1 0.2 0.1 0.5-0.1z m-1.7 0.5l0 0.1-0.2 0.2-0.1 0.6-0.1 0.2-0.3 0-0.2 0.2-0.5 0.2-0.2 0.1-0.6 0.3-0.4-0.1-0.5 0.1-0.3 0.4-0.2-0.3-0.3 0.1-0.2 0-0.3-0.3-0.4 0.3-0.5 0-0.5-0.2-0.5-0.1-0.4-0.3-0.3-0.6-0.3-0.3-0.2-0.7-0.2-0.3 0.1-0.3 0.5 0.3 0.4-0.1 0.2-0.3 0.1-0.3 0.3-0.1 0.2 0.1 0.2-0.2 0.2 0 0.1 0.4 0.5 0.2 0.1 0.2 0.6 0 0.6-0.5 0.4 0.1 0.3-0.2 0.3 0.1 0.4 0.2 0.2-0.3 0.3 0 0.3 0.4 0 0.6 0.3-0.2 0.3 0.2 0.1-0.1 0.7 0.2z",
      CR: "M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z",
      CW: "M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z",
      CV: "M847.8 406.5l-0.2 0.3-0.2-0.2 0-0.3 0.3-0.1 0.1 0.3z m1.9 0.1l-0.2 0.1-0.4-0.1-0.3-0.3-0.1-0.3 0.2-0.4 0.5-0.3 0.4 0 0.2 0.7-0.1 0.4-0.2 0.2z m3.5-3.1l0.2 0.1 0 0.2 0.2 0.2 0.4 0.5 0.2 0 0.2 0.3 0.2 0.5 0.2 0.2-0.3 0.5-0.3 0.1-0.5-0.1-0.3-0.1-0.3-0.3 0-0.2-0.2-0.1-0.1-0.4 0.1-0.2 0-0.3 0.2-0.4-0.2-0.5 0.3 0z m3.1 0l0.3 0.1 0.1 0.6-0.1 0.4-0.4 0.2-0.4-0.4 0.2-0.4-0.1-0.2 0.4-0.3z m2-5.7l0.3-0.2 0.5 0.2 0.1 0.2 0 0.7-0.4 0.3-0.3 0.2-0.3 0-0.5-0.2 0-0.5 0.2-0.2 0-0.6 0.1-0.1 0.3 0.2z m-8-2.8l0.4-0.1 0.3 0.2 0.4 0 0.3 0.2 0.1 0.2-0.5 0-0.7-0.3-0.2 0.1-0.3 0.6-0.3-0.6-0.1-0.1-0.1-0.4 0.3-0.1 0.4 0.3z m7.8-0.5l0.1 0.1-0.1 0.6-0.2 0.1 0-0.5-0.2-0.3 0-0.3-0.1-0.3 0.4-0.3 0.2 0.2-0.1 0.6 0 0.1z m-11.3-1.3l0.2 0.3 0.1 0.3-0.7 0.3-0.3-0.2-0.2-0.2 0.4-0.4 0.5-0.1z m-0.8-1.8l0.3 0.1 0 0.2 0.3 0.3-0.2 0.4-0.6 0.3-0.4 0.4-0.7 0.1 0-0.1 0-0.5-0.2-0.2 0-0.2 0.2-0.2 0.2 0 0.2-0.2 0.7-0.4 0.2 0z",
      CU: "M544.8 355.7l1.9 2.3 5.2-0.7 1.8 1.5 4.2 4 3.2 2.9 1.8-0.1 3.2 1.3-0.6 1.8 4 0.3 3.9 2.6-0.8 1.5-3.8 0.8-3.8 0.3-3.7-0.5-8.1 0.6 4.2-3.5-2.1-1.7-3.6-0.4-1.7-1.9-0.8-3.6-3.2 0.2-5-1.7-1.5-1.4-7.1-1-1.8-1.2 2.3-1.6-5.4-0.3-4.4 3.3-2.3 0.1-1 1.6-2.8 0.7-2.3-0.7 3.2-1.9 1.5-2.4 2.7-1.4 3-1.2 4.3-0.6 1.4-0.8 4.7 0.5 4.4 0.1 4.9 2.2z",
      SZ: "M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z",
      SY: "M1195 287.5l-9.7 6.9-6.3-2.6-0.1 0 0.6-1-0.4-2.6 0.9-3.5 2.7-2.5-1.2-2.5-2.5-0.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-0.2-3.5 1.9 1.2 5.6-1.8 3 1.2 4.4 0 5.7-2.4 2.9 0.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7-11 6.7z",
      SX: "M634.2 386l0 0.1-0.4-0.1 0-0.1 0.4 0.1z",
      KG: "M1400.5 230.2l-0.2 1.4-6.9 3.4-1 2.6-6.4 0.7-0.6 4.1-5.8-0.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5 0.5-0.6-3.6 6 1 1.4-1.9 4.1 0.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-0.6 0.3-2.8 3.1-0.9 9.2 2.2-0.5-3.7 2.5-1.4 8.2 2.7 1.6-0.7 8.6 0.2 7.9 0.6 3.4 2.3 3.5 1z",
      KE: "M1223.5 476.7l-4.9 7.2 0.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2 0.4-0.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-0.3-3.7-20.5-13.1 0.4-4.7-1.4-2.5 0-0.3 1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-0.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1 0.1 3.6 1.9 2.1 4 0 7.2 5.4 1.8 0.1 1.3-0.2 1.3 0.7 3.8 0.6 1.6-2.7 5.2-2.7 2.3 2.2 3.9 0z",
      SS: "M1178.1 441.1l0.2 5-0.8 1.9-3 0.2-1.9 3.6 3.5 0.5 3 3.1 1 2.6 2.6 1.5 3.5 7-3.8 4.2-3.4 3.8-3.5 3-4 0-4.5 1.5-3.6-1.5-2.3 1.8-5.1-4.3-1.4-2.7-3.1 1.3-2.6-0.4-1.5 1.1-2.6-0.8-3.5-5.3-0.9-2-4.3-2.6-1.4-3.8-2.4-2.8-3.9-3.3-0.1-2.1-3.1-2.6-3.9-2.5 1.7-0.7 2-1.2 1.3-5.8 1.5-2.9 4.1-0.9 1 1.7 2.9 3.8 1.6 0.5 2-1.1 4.1 0.3 0.8 1.3 5.6 0 0.2-1.3 2.9-1.3 0.5-1.8 2.1-1.3 4.8 3.7 2.9-0.7 2.7-4.6 3-3.5-0.5-3.9-1.5-1.8 3.4-0.4 0.4-1.4 2.6 0.4-0.6 4.8 0.9 4.6 2.9 2.5 0.8 2.2-0.1 3.2 0.8 0.2z",
      SR: "M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z",
      KH: "M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z",
      SV: "M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z",
      KM: "M1233.2 581.3l-0.9-0.1-0.2-0.4 0-0.3 0.5 0.1 0.7 0.5-0.1 0.2z m3.7-1.9l0.2 1 0 0.7-0.1 0.2-0.2-0.3-0.4-0.3-0.1-0.2-0.3-0.1-0.6-0.4 0.1-0.1 0.5 0.2 0.3-0.1 0.2-0.4 0-0.2 0.3-0.1 0.1 0.1z m-5.7-1l-0.5-0.4-0.3-0.1-0.3-0.2-0.2-0.6 0.1-0.3 0-0.2 0.2-1.2-0.1-0.1 0.2-0.4 0.5-0.1 0.2 0.3-0.2 1.2 0.1 0.3 0.2 0.4 0.1 0.5 0.2 0.6-0.2 0.3z",
      ST: "M1023.9 501.3l-0.2 0-0.2 0.3-0.2 0-0.1-0.4-0.2-0.8 0-0.3 0.4-0.5 0.3-0.1 0.3-0.3 0.4 0.1 0.2 0.4 0.1 0.3-0.1 0.4-0.2 0.3-0.3 0.4-0.2 0.2z m4.6-9.8l-0.1 0.3-0.2 0.1-0.3-0.1 0-0.3 0.2-0.1 0-0.3 0.2-0.2 0.3 0.1-0.1 0.5z",
      SK: "M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z",
      KR: "M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z",
      SI: "M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z",
      KP: "m 1660.3,229.9 1.4,1.1 -2.2,-0.4 -1,2.2 -0.3,2.1 2.8,4.6 -1.9,1.4 -0.3,1.1 -0.9,1.9 -2.9,1.1 -1.4,1.7 1.3,2.7 -0.3,0.7 2.6,1.1 4.4,2.8 v 1.5 l -2,0.4 -3.6,0.4 -0.6,2.8 -2.5,-0.2 v 0.6 l -3.2,-1.2 -0.1,1.2 -1.3,0.5 -0.7,-1.2 -1.7,-0.6 -1.9,-1 0.1,-2.8 0.9,-0.8 -1,-1.1 -0.4,-3.5 -0.9,-1 -3.4,-0.7 -3.4,-1.7 2.1,-4.1 3.9,-3.4 1.1,-4.6 3.6,2 4.6,0.3 -2.8,-3.4 6.4,-2.7 v -3.6 z",
      KW: "M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z",
      SN: "M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z",
      SL: "M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z",
      SC: "M1249 562.1l-0.3 0.2-0.5 0-0.4 0.2-0.4 0 0-0.2 0.5 0 0.4-0.1 0.4-0.3 0.2 0 0.1 0.2z m-0.5-0.3l-0.2 0.1-0.4 0 0-0.2 0.6 0.1z m51.9-30.3l0.4 0.4-0.2 0.3-0.2-0.3-0.3-0.2 0.2-0.5 0.1 0.3z",
      KZ: "M1338.3 160.5l4.4-0.3 9.2-5.8-0.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-0.9 4.4 3.8-1.9 4.2-3.8 0.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-0.6-8.6-0.2-1.6 0.7-8.2-2.7-2.5 1.4 0.5 3.7-9.2-2.2-3.1 0.9-0.3 2.8-2.6 1.2-5.4 4.4-0.9 4.6-2 0-2.3-3-6.7-0.2-2.5-5.2-2.6-0.1-1.5-6.4-7.6-4.6-8.6 0.5-5.7 0.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-0.5-12 3.7 6.2 23.4-2.6 0.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-0.6-1.6 0.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-0.6-2.1 5.1 0.6-1-4.6 4.1-1 4.7 0.9-0.7-6.1-1.9-3.9-5 0.3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-0.2-3.2-4.3-4.2-3.6 0.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-0.6-4.5 8.1-6.7 7.6-0.2 12 4.3 6.6 2.5 4.4-2.6 7.7-0.1 7.3 3.2 0.8-1.9 7 0.3 0.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1 1.1 3.3z",
      SA: "M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z",
      SG: "m 1576.2725,494.53088 h 0.1 l 0.1,0.1 -0.1,0.1 -0.1,0.1 -0.1,0.1 v 0.1 h -0.1 -0.1 l -0.2,0.1 -0.1,0.1 h -0.1 v 0 0.1 h -0.1 -0.1 -0.1 v -0.1 0 l -0.1,-0.1 h -0.1 -0.1 l -0.2,-0.1 h -0.1 -0.1 -0.1 l -0.1,-0.1 0.1,-0.1 0.1,-0.2 0.1,-0.2 v -0.1 l 0.1,-0.1 h 0.1 0.1 0.1 l 0.2,-0.1 h 0.1 0.1 l 0.2,0.1 0.4,0.2 z",
      SE: "M1088.2 87l-7 1.6-3.5 3.9 1.3 3.5-6.2 4.5-7.8 5-2.1 8.1 3.7 4.1 4.8 3.3-3.3 6.6-4.6 1.4-0.6 10-2.1 5.7-5.7-0.6-2.2 4.8-5.5 0.3-1.9-5.7-4.5-6.9-4.2-8.4 1.8-3.4 3.4-4 0.8-6.9-3.1-2.9-1-7.7 2.4-5.4 4.3 0.1 1.3-2.2-1.8-2 5.7-7.9 3.4-6.1 2.3-3.9 4 0 0.6-3.1 8 0.9-0.1-3.6 2.6-0.2 6 2.7 7.2 3.7 1.8 8.5 1.8 2.2z",
      SD: "M1191 409.2l-0.7 5.5-2 6.4-3.3 3.1-2.3 5-0.5 2.6-2.6 1.8-1.5 6.7 0 0.8-0.8-0.2 0.1-3.2-0.8-2.2-2.9-2.5-0.9-4.6 0.6-4.8-2.6-0.4-0.4 1.4-3.4 0.4 1.5 1.8 0.5 3.9-3 3.5-2.7 4.6-2.9 0.7-4.8-3.7-2.1 1.3-0.5 1.8-2.9 1.3-0.2 1.3-5.6 0-0.8-1.3-4.1-0.3-2 1.1-1.6-0.5-2.9-3.8-1-1.7-4.1 0.9-1.5 2.9-1.3 5.8-2 1.2-1.7 0.7-0.5-0.3-1.9-1.9-0.4-2 0.8-2.6 0-2.7-3.3-4-0.7-2.7 0-1.6-2.1-1.9-0.1-3.7-1.3-2.5-1.9 0.4 0.5-2.4 1.4-2.6-0.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8 0.5-1.1-25.5 0-2.7 6.4 0-0.5-12.8 22.3 0 21.5 0 22.1 0 2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-0.3 4.2-2 9.5 0.7 2.5z",
      DO: "M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z",
      DM: "M642 401.7l0.5 0.1 0.2 0.5 0 0.6-0.1 0.8-0.1 0.2-0.2 0.1-0.4 0.2 0.1-0.4-0.1-0.2-0.1-0.7-0.3-0.5 0-0.3 0.1-0.3 0-0.3 0.2 0 0.2 0.2z",
      DJ: "M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z",
      DK: "M1046.1 147.7l-2.4 4.9-5.2-3.5-0.9-2.5 6.8-2 1.7 3.1z m-12.8 3.8l-2.9 0.9-3.7-0.8-2.1-3.4-0.4-6.1 0.6-1.7 1.3-1.8 4-0.3 1.6-1.7 3.6-1.7 0 3.1-1.2 2 0.7 1.6 2.6 0.9-1 2.3-1.4-0.6-3.1 4.3 1.4 3z",
      VG: "M626.1 383.4l-0.4 0.2-0.1 0-0.3 0.2-0.1-0.1 0.1-0.3 0.6-0.1 0.2 0.1z",
      DE: "M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-0.2 2.2 2.4 3.9-2.2 0.6-1.3-0.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8 0.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7 0.8 1 4.1-0.4 1.1-1.7-1.3-2.4-0.2-3.5 1.1-4.4-0.3-0.6 1.7-2.7-1.7-1.4 0.3-5.5-1.9-1 1.3-4.2 0 0.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6 0.2-2.7-1-1.4 0.4-4.2-1.1-6.5 2.9 0 1.2-2.3 0.9-5.6-0.9-2.1 0.8-1.3 4-0.3 1 1.3 3.1-3-1.3-2.3-0.4-3.4 3.7 0.8 2.9-0.9 0.3 2.3 4.9 1.4 0.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4 2.4 1.9z",
      YE: "M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z",
      DZ: "M1031 264.6l-1 3.3 1 6.1-1.1 5.3-3.2 3.6 0.6 4.8 4.5 3.9 0.1 1.5 3.4 2.6 2.6 11.5 1.9 5.7 0.4 3-0.8 5.2 0.4 3-0.6 3.5 0.6 4-2.2 2.7 3.4 4.7 0.2 2.7 2.1 3.6 2.5-1.2 4.5 3 2.5 4-18.8 12.3-16 12.6-7.8 2.8-6.2 0.7-0.1-4.1-2.6-1.1-3.5-1.8-1.3-3-18.7-14-18.6-14-20.5-15.6 0.1-1.2 0.1-0.4 0.1-7.6 8.9-4.8 5.4-1 4.5-1.7 2.1-3.2 6.4-2.5 0.3-4.8 3.1-0.6 2.5-2.3 7.1-1.1 1-2.5-1.4-1.4-1.9-6.8-0.3-3.9-1.9-4.1 5.1-3.5 5.8-1.1 3.3-2.6 5.1-2 9-1.1 8.8-0.5 2.7 0.9 4.9-2.5 5.7-0.1 2.2 1.5 3.6-0.4z",
      US: "M118.8 379.3l-1.1 1.1-1.2-0.9 0.6-1.8-0.4-2.4 0.5-0.7 1.2-1-0.1-1.3 0.4-0.6 0.4 0.1 1.9 1.1 0.9 0.6 0.7 0.8 0.9 2.3-0.2 0.3-2.5 1.4-2 1z m-0.7-10l-2 0.4-0.6-1.3-0.5-0.5 0-0.4 0.7-0.6 1.8 0.6 1.2 1-0.6 0.8z m-3-3.4l-0.3 0.7-3-0.2 0.6-0.8 2.7 0.3z m-4.7-1l-0.4 0.4-0.4-0.1-1.9-0.2-0.3-1.5-0.2-0.2 1.7-0.9 0.4 0.4 1.1 2.1z m-8.4-4.2l-0.8 0.6-1.6-1.1 0.4-0.5 1-0.6 1.3 0.1-0.3 1.5z m437.5-166.2l-6.1 2-4.7 2.5-4.6 2.7-0.5 0.9 5.7-1.3 2.1 2.1 4.6-1.5 4.9-2.1 5.4-2.1-3.1 3.3 2.5 0.8 2.5 2.4 5.1-1.4 5.1-0.5 0.3 1.8 1.5 0.2 1.2 0.2 1.5 2.5-4.7 0.6-0.1 0-3.7-0.7-4.5 1.2-3.7 0.6-4.7 4.1-3 2.3 0.4 0.7 5.5-4.1 0.7 0-4.7 4.9-2.9 4.4-2.5 3.6-0.6 3.1-0.8 1.5-0.6 1.7 0.1 3.3 0.3 0.5 1.8-0.1 1.6-0.7 1.4-0.8 3.3-3.1 1.8-4.2-0.1-3.9 1.4-2.7 2.6-3.1 2.1-2.2 2.7-1.5-0.4 2.1 2.2-3.1 1.3-0.6 1.7-2.4 3.8 1.3 2.8 2.4-0.8 2.9-1.6 2.9-3.8 2.5-0.4 1.6 1 0 4.3-2.7 1.6 0.6-0.5 3.7-0.7 2.6-3.7 3.5-2 2.2-2.7 2.4 2.7 1.3 2.5 0.4 4-0.9 3.7-1.7 3-0.9 4.6-1.8 5.8-3.8 0.1-0.6 0.3-1.9 2.7-0.8 3.9 0.3 4 0.5 4.6-2.1 0.6-2.5-0.2-0.9 6.8-4.4 2.7-1.1 7.8-0.1 9.3 0 1.1-1.5 1.7-0.3 2.5-1 2.8-2.9 3.2-4.9 5.5-4.7 1.1 1.6 3.7-1 1.6 1.8-2.9 8.5 2.2 3.6 0.2 2.1-6.4 3-6 2.2-6 1.9-4 3.8-1.3 1.4-1.2 3.4 0.7 3.3 2.1 0.2 0.2-2.3 1.1 1.4-1 1.8-3.8 1-2.5-0.1-4.2 1.1-2.3 0.3-3.1 0.3-5 1.9 8.1-1.2 1.1 1.2-7.9 1.9-3.3 0 0.4-0.8-2.1 1.8 1.4 0.3-2.5 4.6-5.3 4.9 0.1-1.7-1.1-0.3-1.2-1.6 0 3.5 1 1.1-0.6 2.4-2.4 2.5-4.5 5.1-0.4-0.2 2.9-4.4-2-2.4 1-5.4-1.9 2.8 0 4.1-3.2-1 3 2-1.5 6.1 1.4 0.5 0 2.2-1 6.4-4.6 4.7-6.1 1.9-4.4 3.8-2.8 0.4-3.4 2.4-1.3 2.1-6.9 4.2-3.8 3.1-3.5 3.8-1.9 4.5 0 4.5 0.6 5.5 1.5 4.5-0.5 2.8 1.3 7.4-1 4.4-0.6 2.5-2 3.9-1.8 0.8-2.6-0.8-0.4-2.8-1.8-1.5-2-5.5-1.6-4.9-0.4-2.5 2-4.3-0.8-3.5-3.1-5.4-1.9-1-6.1 3-0.9-0.4-2-3-3-1.6-6.4 0.9-4.6-0.8-4.3 0.5-2.5 1 0.6 1.7-0.7 2.6 0.8 1.3-1.2 0.8-1.8-0.9-2.3 1.2-3.9-0.2-3.3-3.4-4.9 0.8-3.6-1.5-3.5 0.5-5 1.5-6.1 4.7-6.1 2.8-3.7 3-1.9 2.9-1 4.5-0.4 3 0.6 2.2-2.2 0.2-3.6-1.4-3.9-2-0.9-3-0.2-4.5-2.4-3.6-0.9-3.8-1.6-4.4-3.2-2.6-4.5 0.2-4.8 5-4-1.9-2.3-1.9-0.4-3.6-0.8-3.3-2.4-2.8-2.1-2.1-1.3-2.3-9.4 0-0.8 2.7-4.3 0-10.8 0-10.9-4.5-7-3.1 0.9-1.3-7.1 0.7-6.3 0.5 0.3-3.2-2.1-3.7-2.2-0.8 0.1-1.8-2.9-0.4-1.2-1.7-4.8-0.6-0.9-1.1 0.8-3.5-2.5-6.4-0.5-8.9 0.9-1.5-1.3-2.1-1.5-5.4 1.8-5.2-0.9-3.5 3.9-5.3 2.8-5.4 1.1-4.9 5.5-6 4-5.7 4-5.7 4.3-8.5 1.8-5.3 0.4-2.9 1.4-1.3 5.8 2.2-1 5.9 2.2-1.7 2.5-5.1 1.6-5.1 14.1 0 14.7 0 4.8 0 15.1 0 14.7 0 14.8 0 14.9 0 16.8 0 17 0 10.2 0 1.3-2.4 1.7 0-0.9 3.4 1 1 3.3 0.4 4.6 1 3.9 1.9 4.4-0.8 5.4 1.7z m-264.5-55.9l-7 2.3-0.8-1.6 2.3-2.8 6.4-2.1 3.5-0.9 2.6 0.4 0 1.9-7 2.8z m-39-16.6l-3.9 0.9-1.7-1.1-0.8-1.6 5.7-1 3 0.6-2.3 2.2z m1.2-22.4l1.2 1 3.5-0.5 1.6 1.5 3.3 0.7-1.2 0.7-4.9 1.2-1.7-1.3-0.3-1-4.3 0.3-0.3-0.5 3.1-2.1z m172.8-33l-24.6 20.4-35.6 32.7 4.2 0.2 2.8 1.6 0.5 2.6 0.3 3.8 7.6-3.3 6.5-1.9-0.6 3.1 0.8 2.4 1.6 2.7-1.1 4.2-1.4 6.9 4.6 3.8-3.2 3.8-5.1 2.9-0.6-2.2-2.5-2 3.3-5.2-1.6-4.9 2.7-5.6-4.1-0.4-7.1-0.1-3.8-1.8-3.3-6.1-3.3-1.1-5.7-2.1-6.8 0.5-6-2.7-2.7-2.5-6.3 1.2-3.5 4.1-2.9 0.4-6.6 1.2-6.2 2-6.4 1.3 3.2-3.5 8.4-5.8 6.8-1.8 0.4-1.4-9.4 3.2-7.4 3.9-11.2 4.2 0.2 2.9-9 4.2-7.7 2.5-6.6 1.9-4 2.6-10.6 3.1-4.5 2.8-8.2 2.6-2.7-0.4-6.2 1.6-7 2.1-6.1 2-10 1.8 0.4-1.1 8.2-2.8 6.6-1.9 8.6-3.3 6.5-0.6 5-2.5 10.4-3.6 2.3-1.2 5.7-2.1 5.8-4.5 6.2-3.5-7.3 1.8-0.3-1.1-4.9 2.2 0.4-3-3.6 2.1 1.6-2.9-7.3 2.3-2.8 0 3.7-3.5 3.3-2.2-0.4-2.1-7.2 1.2-0.6-2.8-1.3-1.4 4-3.3-0.4-2.5 5.9-3.3 7.7-3.3 5.3-2.9 4.1-0.4 1.8 0.9 7.1-2.8 2.5 0.5 5.6-1.8 2.5-2.6-1.1-1 6-2.2-2.8 0.1-6.2 1.2-2.9 1.3-1.8-1.3-6.9 0.7-4.6-1.4 1.2-2.3-1-3.2 9.2-2.4 13.2-2.7 3.5 0-4.3 2.8 9.2-0.2 1.2-3.5-2.3-2.1 0.8-2.8-0.7-2.3-3.3-1.7 6.5-2.9 7.5-0.2 8.8-2.4 4.8-2.6 7.9-2.6 4.8-0.6 11.2-2.4 3.1 0.4 10.4-2.8 4.4 1.1-0.5 2.4 3.3-1 6.3 0.3-1.9 1.2 4.9 0.9 4.9-0.5 6.2 1.6 7.2 0.6 2.2 0.6 6.6-0.8 4.1 1.6 3.5 0.7z",
      UY: "M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z",
      YT: "M1240.2 583.1l0.2 0.3 0.5 0.2 0 0.3-0.2 0.2 0.1 0.2-0.3 0.6 0.1 0.2-0.3 0.1-0.2-0.3 0-0.3 0.2-0.2-0.2-0.7-0.1-0.1-0.1-0.2 0.3-0.3z",
      LB: "M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z",
      LC: "M643.7 413.8l-0.2-0.2-0.4-0.2-0.1-0.2 0-0.6 0.1-0.2 0.7-1.1 0.3 0.2 0 0.7-0.1 0.8-0.1 0.4-0.2 0.4z",
      LA: "M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z",
      TV: "M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z",
      TW: "M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z",
      TT: "M642.8 432.2l-0.2 0.5-0.3 0.4-0.2 0.1-0.1 0.4 0.2 0.6-0.2 0.1 0 0.7 0.2 0.3 0.2 0.2-0.2 0.2-0.1 0.3 0 0.7-0.2 0.1-0.4 0.2-0.5 0.1-0.3 0-0.5 0.1-0.5-0.1-0.4 0.1-0.3-0.1-0.5 0.2-0.4-0.2-0.6 0-0.3 0.2-0.3-0.1 0.5-0.2 0.3-0.3 0.4-0.1 0.4-0.3 0.2-0.3 0.6 0.1 0.3-0.4-0.2-0.8 0.2-0.4 0-0.5 0-0.2-0.3-0.4-0.3-0.1-0.4-0.1-0.1-0.1 0.4-0.3 1.1-0.1 0.2-0.2 1.1 0 0.1-0.1 1.2-0.2 0.2 0z m2.4-3.2l-0.1 0.5-0.3 0.1-0.4 0.3-0.2 0-0.7 0.4-0.2-0.2 0.3-0.3 0.7-0.5 0.9-0.3z",
      TR: "M1201.7 235.3l5.5-0.3 5.6 3.2 1.3 2.2 0.1 3.1 4.2 1.6 2.4 1.8-3.3 1.9 2.9 7.3-0.7 2 3.8 5.1-2.4 1.1-2.1-1.6-6.3-0.9-2.1 1-5.9 1-2.9-0.1-5.7 2.4-4.4 0-3-1.2-5.6 1.8-1.9-1.2 0.2 3.5-1.2 1.4-1.3 1.4-2.3-2.9 1.7-2.4-3.2 0.6-4.6-1.5-3.2 3.7-8 0.7-4.7-3.4-5.7-0.2-1 2.6-3.6 0.8-5.4-3.4-5.8 0.1-3.8-6.4-4.2-3.5 2-5-3.6-3.1 5.1-6.1 8-0.2 1.6-4.9 10 0.9 5.6-4.1 5.8-1.8 8.5-0.2 9.8 4.5 7.9 2.5 5.8-1 4.6 0.6 5.5-3.4z m-79.8 4.6l1.2-0.7 1.1-4-2.7-1.7 5-2 4.6 0.8 0.9 2.5 4.8 2-0.7 1.6-6.2 0.3-2 2-3.9 3.4-2-2.9-0.1-1.3z",
      LK: "M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z",
      LV: "M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-0.4-0.9-1.2-4.5 0.6-7.9-0.4-5.1 1.8-0.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-0.2 0.1-4.6 3.8-1 2.1 0.7 4.4 2.2 3.8 0.1z",
      TO: "M14.7 639.5l-0.5-0.3 0-0.2 0.3-0.2 0.2 0.7z m-2.8-2.1l0.3 0 0.4 0.3 0.3 0.1 0.2-0.4 0.3 0.3-0.3 0.3 0.1 0.2-0.1 0.2-0.2-0.1-0.3-0.3-0.7-0.2 0-0.4z m-0.8-8.6l-0.2 0.1-0.1-0.5 0.2 0.1 0.1 0.3z m4.4-7.5l-0.5 0.3-0.2 0-0.1-0.1 0.3-0.5 0.3 0.1 0.2 0.2z m-14.1-19.3l-0.1 0.1-0.3-0.1 0.1-0.2 0.3 0 0 0.2z",
      LT: "M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z",
      LU: "M1016.9 185.4l-1.4 0.1-1.1-0.5 0.4-3.5 1.3-0.2 1 1.4-0.2 2.7z",
      LR: "M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z",
      LS: "M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z",
      TH: "M1577.5 410.2l-5.3-0.9-7.1 1.2-3.1 5.3 2.1 7.8-5.3-3-4.8 0.2 0.3-5.1-4.9 0 0.2 7.1-2.2 9.4-1.4 5.7 0.7 4.6 3.7 0.2 2.7 5.9 1.3 5.5 3.4 3.7 3.4 0.7 3.1 3.4-1.7 2.6-3.7 0.8-0.6-3.3-4.8-2.8-0.9 1.1-2.3-2.4-1.2-3.2-3.2-3.6-2.9-3.1-0.7 3.8-1.3-3.6 0.4-4 1.2-6.1 2.2-6.6 2.6-6-2.7-5.9-0.2-3-1-3.6-4.3-5.1-1.8-3.2 1.8-1.2 1.4-5.5-2.9-4.3-4.1-4.7-3.5-5.6 2.2-1.2 1.5-6.9 3.9-0.3 2.8-2.8 3-1.5 2.7 2 0.9 3.9 3.8 0.3-0.4 6.7 1 5.8 5.3-3.8 1.9 1.1 3.2-0.2 0.8-2.2 4.3 0.4 5 5.2 1.3 6.4 5.3 5.6 0.4 5.4-1.5 2.9z",
      TG: "M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z",
      TD: "M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z",
      TC: "M587.7 361.6l0.7 0 0.3 0.4-0.3 0-0.3-0.1-0.5 0.1-0.1-0.3 0.2-0.1z m-2.7-0.1l0.3 0.4 0.6-0.1-0.2 0.2-0.6 0-0.4-0.2 0.3-0.3z m2.2-0.6l0 0.5-0.5-0.2-0.1-0.3 0.1-0.1 0.5 0.1z",
      BQSA: "M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z",
      LY: "M1122.6 299.1l-1.7 3.1 1 2.8-1.1 3.9 2 5.2 1.3 22.8 1 23.7 0.5 12.8-6.4 0 0 2.7-22.6-12.3-22.5-12.3-5.5 3.5-3.8 2.4-3.2-3.5-8.8-2.8-2.5-4-4.5-3-2.5 1.2-2.1-3.6-0.2-2.7-3.4-4.7 2.2-2.7-0.6-4 0.6-3.5-0.4-3 0.8-5.2-0.4-3-1.9-5.7 2.6-1.4 0.4-2.8-0.6-2.6 3.6-2.5 1.6-2.1 2.6-1.8 0.1-4.9 6.4 2.2 2.3-0.6 4.5 1.1 7.3 2.9 2.8 5.7 4.9 1.2 7.8 2.7 6 3.2 2.5-1.7 2.5-2.9-1.6-4.9 1.5-3.2 3.7-3 3.7-0.8 7.4 1.3 2 2.8 2 0.1 1.8 1.1 5.4 0.7 1.5 2.1z",
      VC: "M642.2 417.4l-0.1 0.1-0.5-0.3 0-0.4 0.2-0.3 0.2-0.5 0.4 0 0.1 0.4-0.1 0.8-0.2 0.2z",
      AE: "M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z",
      VE: "M648.7 448.1l-4.7 3.8-0.5 2.3 1.8 2.4-1.4 1.2-3.5 1 0 3-1.6 1.8 3.7 4.8 0.7 1.8-2.1 2.5-6.4 2.4-4.1 1-1.7 1.5-4.5-1.6-4.1-0.8-1.1 0.6 2.5 1.6-0.3 4.3 0.7 4.1 4.8 0.5 0.3 1.4-4.1 1.8-0.7 2.7-2.4 1.1-4.2 1.5-1.1 2-4.4 0.4-3.1-3.4-1.6-6.4-1.5-2.3-2-1.4 2.9-3.2-0.2-1.4-1.5-1.9-1.1-4.3 0.6-4.6 1.3-2.2 1.2-3.4-2-1.1-3.2 0.7-4.1-0.3-2.3 0.7-3.8-5.6-3.3-0.8-7.3 0.6-1.2-2.2-1.4-0.5-0.1-1.4 0.7-2.4-0.3-2.5-1.2-1.5-0.6-2.9-2.9-0.4 1.8-3.8 0.9-4.6 1.8-2.4 2.3-1.8 1.6-3.2 3.7-1.1-0.2 1.5-3.4 0.8 1.7 2.9-0.3 3.4-2.7 3.7 1.9 5.1 2.5-0.4 1.5-4.7-1.7-2.2 0-4.9 7.2-2.6-0.6-3 2.1-2.1 1.7 4.6 4 0.1 3.4 3.5 0.2 2.2 5 0 6.1-0.6 3.1 2.8 4.2 0.8 3.3-2 0.1-1.6 7.1-0.4 6.7-0.1-4.9 1.9 1.8 3.1 4.5 0.4 4.2 3.2 0.7 5.1 2.9-0.1 2.2 1.5z",
      AG: "M640.7 391.9l0.6 0.3-0.2 0.3-0.2 0-0.7 0.1-0.2-0.1 0-0.5 0.3-0.1 0.1-0.3 0.2 0 0.1 0.3z m0-3.7l0.2 0 0.2 0.2 0.1 0.4-0.1 0.3-0.2 0.1-0.1-0.2-0.3-0.2 0-0.5 0.2-0.1z",
      AF: "M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z",
      IQ: "M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z",
      VI: "M624.5 387.8l0.3 0.3-1.1 0.2-0.1-0.5 0.7-0.2 0.2 0.2z m0.7-3.8l-0.2 0.2-0.5 0 0-0.2 0.3-0.1 0.4 0.1z m-1.4-0.2l0.4 0.3-0.2 0.2-0.3-0.2-0.5 0 0.2-0.2 0.4-0.1z",
      IS: "M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z",
      IR: "M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z",
      AM: "M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z",
      AL: "M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z",
      AO: "M1121.2 572l0.6 2-0.7 3.1 0.9 3-0.9 2.4 0.4 2.2-11.7-0.1-0.8 20.5 3.6 5.2 3.6 4-10.4 2.6-13.5-0.9-3.8-3-22.7 0.2-0.8 0.5-3.3-2.9-3.6-0.2-3.4 1.1-2.7 1.2-0.5-4 0.9-5.7 2-5.9 0.3-2.7 1.9-5.8 1.4-2.6 3.3-4.2 1.9-2.9 0.6-4.7-0.3-3.7-1.6-2.3-1.5-3.9-1.3-3.8 0.3-1.4 1.7-2.5-1.6-6.2-1.2-4.3-2.8-4.1 0.6-1.2 2.3-0.9 1.7 0.1 2-0.7 16.7 0.1 1.3 4.7 1.6 3.9 1.3 2.1 2.1 3.3 3.8-0.5 1.8-0.9 3.1 0.9 0.9-1.6 1.5-3.7 3.5-0.3 0.3-1.1 2.9 0-0.5 2.3 6.8-0.1 0.1 4.1 1.1 2.4-0.9 3.9 0.4 4 1.8 2.4-0.4 7.6 1.4-0.6 2.4 0.2 3.5-1 2.6 0.4z m-65.9-33l-1.5-4.8 2.3-2.8 1.7-1.1 2.1 2.2-2 1.4-1 1.6-0.2 2.8-1.4 0.7z",
      AS: "M27.7 593.3l-0.3 0.4-0.2 0.3-0.2 0.1-0.4-0.3 0.2-0.2 0.3 0 0.1-0.2 0.5-0.1z m6.6 0l-0.5 0.1-0.1-0.2 0.4-0.1 0.2 0.2z",
      AR: "M669.1 851.7l-3-0.2-5 0-6-13.6 3.1 2.8 4.3 4.6 7.8 3.7 7.3 1.5-0.8 3-4.4 0.3-3.3-2.1z m-30.5-207l11.3 10.4 4.6 1 7.3 4.8 5.9 2.5 1.1 2.8-4.2 9.8 5.8 1.7 6.3 1 4.2-1 4.3-5 0.3-5.6 2.6-1.3 3.2 3.8 0.4 5.1-4.2 3.5-3.3 2.6-5.3 6.3-6 8.7-0.5 5.2-0.4 6.6 1.2 6.4-0.9 1.4 0.4 4.1 0.3 3.4 7.8 5.5 0.2 4.4 3.9 2.8 0.3 3.1-3.3 8.2-7 3.5-10.2 1.3-6-0.7 2.1 3.9 0.1 4.7 1.8 3.2-2.5 2.3-5.1 0.9-5.6-2.4-1.5 1.7 2.5 6.3 4 1.9 2.3-2 2.5 3.3-4.2 2-2.9 4 1.2 6.3-0.1 3.4-4.8 0-3 3.2 0.1 4.8 6.5 4.6 5.2 1.2 0.2 5.7-4.6 3.5-0.6 7.3-3.5 2.4-0.9 2.9 4.2 6.5 4.6 3.5-2.1-0.3-4.9-1-12.1-0.8-3.5-3.6-1.9-4.6-3.1 0.4-2.6-2.3-3.1-6.5 2.7-2.8 0.1-3.9-1.8-3.2 0.7-5.4-1.1-8.3-1.8-3.7 1.8-1.2-1.4-2.4-2.8-1.2 0.8-2.7-3.1-2.4-3.7-7.3 1.7-1.3-3.3-7.8-0.8-6.5-0.2-5.7 2.5-2.3-3.3-6.3-1.6-5.8 3-4.2-1.4-5.4 1.6-6.2-1.4-5.9-1.6-1.2-4.9-11.1 2.1-6.6-1.7-6.2 0.9-5.9 2.6-6 3.3-4-2-2.5 0.8-2.1-1.6-10.7 5.6-3.1 1.2-6.7-0.9-1.6 4-5.8 7.5 1.6 3.7 4.6 1.6-5.2 6.4 0.3 1 1.4z",
      AU: "M1743 763.6l3.7 2.2 3.3-0.9 4.9-1.2 2.8 0.4-4.5 7.6-3.3 2.1-4 5.2-0.6-1.8-6.6 4.4-0.8-0.3-3-0.2 0.5-5.4 2-4.2 0.6-5.6 2-2.9 3 0.6z m50.5-173.4l1.2 5 4-2.4 1.4 2.7 2.3 2.5-1.1 2.9 0.2 5.5 0.2 3.2 1.3 0.8 0.4 5.5-1.2 3.3 0.8 4.3 5.4 3.4 3.2 3 3.2 2.8-1.1 1.6 2.3 4 0.5 7 2.6-1.4 1.5 2.7 1.6-0.9-0.7 6.8 2.9 3.9 1.9 2.4 2.8 5.2 0 5.2-1 3.7-1.8 3.9 0.7 5.5-2.5 5.7-2.1 3-3.8 5.7-1.5 3.7-3.1 4.6-5 5.8-5.5 3.2-4.4 4.9-3.3 3.2-4.4 5.5-3.7 3.2-3.9 4.8-3.1 4.4-0.8 2.1-4.3 2.2-6.1 0.2-6.3 2.7-3.8 2.4-4.8 2.8-2.7-2.9-2.6-1.1 2.6-3.3-3.5 1.2-7.2 4.6-3.6-1.7-2.4-1-2.8-0.5-4.1-1.8-1.3-4 1.5-4.8 0.4-3.3-1.4-2.6-4.7-0.7 3.2-3.2 0.9-4.7-4.7 4.4-5.3 1.2 4.5-3.5 2.5-3.7 3.5-3.2 1.6-4.7-6.8 5.4-4.3 2.2-4.3 5.1-3-2.6 1.7-3.4-1.4-4.7-1.8-2.4 1.6-1.5-5.3-3.9-3.8-0.1-4-3.2-9.9 0.6-7.9 2.3-6.9 2.2-5-0.4-7 3.3-5.3 1.4-2.3 3.4-3 2.6-4.7 0.2-3.6 0.5-4.2-1.1-4.2 0.7-3.8 0.3-4.5 3.4-1.5-0.3-3.4 1.8-3.4 2-3.8-0.2-3.5 0-4.1-4.1-2.4-1.2 1.5-3.7 2.9-0.9 1.5-1.4 0.6-2.3 2.3-4.5 0.7-3.8-0.7-6.5 0.2-3.7 1.4-3.6-0.9-4.2 0.3-1.9-1.7-2.6 0.7-5-1.9-5.1-0.1-2.7 1.8 2.8-0.5-6 2.3 1.9 1.1 2.5 0.6-3.3-1.6-5.1-0.1-2-0.8-1.9 1.3-3.7 1.5-1.6 1.3-3.2 0.1-3.8 3.1-4.6-0.4 4.9 3.1-4.4 4.9-2.2 3.2-2.7 4.7-2.4 2.6-0.5 1.4 0.8 4.8-2.4 3.5-0.7 1.1-1.4 1.5-0.6 3.1 0.2 6.2-1.9 3.5-2.9 2-3.4 3.9-3.2 0.7-2.6 0.7-3.5 4.9-5.5 1.4 5.6 2.6-1.3-1.5-3 2.3-3.1 2.2 1.4 1.5-4.9 3.5-3.2 1.8-2.5 2.9-1.1 0.4-1.8 2.3 0.7 0.4-1.6 2.6-0.9 2.8-0.9 3.7 3 2.6 3.8 3.5 0 3.5 0.6-0.7-3.5 3.5-5.1 2.7-1.7-0.6-1.6 2.9-3.7 3.7-2.3 2.7 0.8 4.9-1.2 0.3-3.3-3.9-2.1 3.1-0.9 3.6 1.6 2.7 2.6 4.5 1.6 1.7-0.6 3.3 2 3.5-1.9 2 0.6 1.5-1.3 2.2 3.2-2 3.5-2.5 2.6-1.9 0.2 0.3 2.5-2.2 3.2-2.5 3.2 0.2 1.8 3.8 3.6 4 2 2.5 2.2 3.3 3.8 1.6 0 2.6 1.7 0.5 2 4.9 2.1 4.1-2.2 1.8-3.4 1.7-2.9 1.3-3.5 2.6-5.1-0.2-3.1 0.7-1.9-0.1-3.6 1.4-4.9 1.3-1.3-0.6-2.1 1.8-3.4 1.5-3.5 0.4-1.9 2.3-2.4 1.3 3.2-0.1 4 1.3 0.8-0.1 2.7 1.6 3.2-0.1 3.7-0.6 2.3z",
      AT: "M1070.6 190.8l-0.3 0.8 0.7 2.1-0.2 2.6-2.8 0 1.1 1.4-1.3 4-0.9 1.1-4.4 0.1-2.4 1.5-4.2-0.5-7.3-1.7-1.3-2.1-4.9 1.1-0.5 1.2-3.1-0.9-2.6-0.2-2.3-1.2 0.7-1.5-0.2-1.1 1.4-0.3 2.7 1.7 0.6-1.7 4.4 0.3 3.5-1.1 2.4 0.2 1.7 1.3 0.4-1.1-1-4.1 1.7-0.8 1.6-2.9 3.8 2.1 2.6-2.6 1.7-0.5 4 1.9 2.3-0.3 2.4 1.2z",
      AW: "M592.9 422l-0.5-0.2-0.5-0.5 0.1-0.6 0.2 0.3 0.4 0.4 0.3 0.5 0 0.1z",
      IN: "M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z",
      TZ: "M1167 508.4l-0.2 3.9-1.1 4.5 1.6 2.5 2.5-1.5 3.3-0.4 0.7 0.8 3.3-1.6-2.3-2.2 1.9-2.9 2.8-2.9 20.5 13.1 0.3 3.7 8.1 6.4-2.8 8 0.3 3.6 3.5 2.3 0.2 1.7-1.7 3.9 0.3 1.9-0.4 3.1 1.8 4 2.2 6.4 2 1.4-4.6 3.7-6.2 2.5-3.4-0.1-2.1 1.9-3.9 0.2-1.5 0.8-6.7-1.8-2.2 0.2 0.1-0.1-1.8-2.4-0.3-6.8-2.9-3.4-0.4 1.2-1-1.7-5.5-1.2-3.2-1.9-3.6-1.1-2.2-1.1-0.3-0.2-2.7-6.6-0.4-3.9-4.5-4.4 1.4-2.4-1.1-2.6 0.2-2.7-1-0.9 0.3-2.8 0.6-0.1 2-2.3 2.3-3.4 1.4-1.3 0-2.1-1.2-1.5-0.3-2.5 1.6-0.8 0.3-3.8-2.2-3.6 2-0.8 6.2 0.1z",
      IC: "M888.4 323.4l-0.3 0.5-0.4 0.5-0.3-0.4-0.4 0-0.2-0.2 0.2-0.3 0.4 0.1 0.4-0.4 0.3-0.2 0.2 0.1 0.1 0.3z m13.6-2.3l0 0.5 0.2 0.4-0.2 0.7 0.1 0.3-0.4 0.4-0.5 0.2-0.2 0.2-0.6-0.2-0.5-0.5-0.2-0.4 0-0.6 0.6-0.4 0.1-0.5 0-0.2 0.6 0.1 0.4 0 0.3 0.1 0.3-0.1z m-9.9 0.8l-0.2 0-0.3-0.2-0.2-0.3 0.1-0.4 0.1-0.3 0.3 0 0.3 0 0.5 0.4 0.1 0.3-0.5 0.5-0.2 0z m6.1-3.5l0 0.2-0.6 0.3-0.4 0.5-0.3 0.2 0 0.4-0.4 0.7-0.1 0.4-0.5 0.6-0.1 0.2-0.2 0-0.6 0.2-0.1-0.1-0.1-0.4-0.3-0.4-0.1-0.2-0.2-0.3 0-0.3-0.4-0.6 0.5-0.3 0.3 0.2 0.6-0.2 0.4 0 0.5-0.2 0.5-0.4 0-0.2 0.6-0.3 0.6 0 0.3-0.1 0.1 0.1z m10.2 2.8l-0.3 0.4-0.4 0.1-0.3-0.1-0.4 0 0-0.2 0.3 0 0.6-0.2 0.4-0.3 0.3-0.3 0.1-0.5 0.1-0.3 0.2-0.5 0.3-0.4 0.3-0.6 0.2-0.8 0.2-0.2 0.4-0.1 0.3 0.3 0.1 0.5-0.1 0.5-0.1 0.5 0 0.5-0.1 0.1-0.3 0.7-0.3 0.3-0.6 0.1-0.7 0.3-0.2 0.2z m-19.6-4.5l0.3-0.1 0.2 0.3 0.2 0.5-0.2 0.3 0.1 0.4-0.6 1-0.1-0.1-0.1-0.4-0.4-0.9-0.1-0.3-0.1-0.2 0.2-0.4 0.3-0.2 0.3 0.1z m24.1-2l0 0.4-0.2 0.5-0.7 0.5-0.5 0.1-0.4 0.5-0.5-0.2 0-0.1 0.2-0.4 0-0.4 0.2-0.3 0.3-0.2 0.3 0 0.3-0.3 0.5 0 0.1-0.1 0.2-0.5 0.2-0.1 0.2 0.2-0.2 0.4z",
      AZ: "M1229 253.2l-3.8-0.9-3.2-2.9-1.2-2.5 1-0.1 1.9 1.7 2.3 0 0.2 1 2.8 3.7z m6.3-17l2.5-2.6 3.5 3.3 3.6 4.6 2.5 0.3 1.9 1.7-4.2 0.5 0.1 5-0.4 2.2-1.7 1.5 0.8 3.1-1.3 0.4-3.9-3.4 1.2-3.1-1.9-1.9-1.9 0.5-5.3 4.7-0.9-4.5-2.5-1-2.6-1.7 1.1-2.1-3.2-2.2 0.7-1.6-2.2-1.1-1.4-1.6 1.1-1.1 4.2 1.9 2.9 0.3 0.6-0.7-3.3-3.5 1.2-0.8 1.5 0.2 4.3 3.8 2.4 0.5 0.6-1.6z",
      IE: "M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z",
      ID: "M1667.5 567.6l-2.4 0.1-7.1-4.5 5.4-1.3 2.8 2 1.8 1.9-0.5 1.8z m24.8-8.7l0.5 1.3-0.1 1.9-4.1 4.8-5 1.4-0.6-0.7 0.7-2.2 2.8-3.9 5.8-2.6z m-39.6-5.1l1.9 1.7 3.6-0.5 1.2 2.7-6.7 1.3-3.9 0.9-3.1-0.1 2.2-3.7 3.2 0 1.6-2.3z m28.3 0l-1.1 3.6-8.6 1.8-7.5-0.8 0.2-2.4 4.6-1.3 3.4 1.9 3.8-0.5 5.2-2.3z m-80.2-8.5l10.8 0.7 1.4-2.7 10.3 3.1 1.8 4.2 8.4 1.2 6.7 3.8-6.6 2.4-6.1-2.6-5.1 0.2-5.8-0.5-5.2-1.1-6.4-2.5-4.1-0.6-2.4 0.8-10.2-2.7-0.8-2.7-5.1-0.5 4.2-6.1 6.8 0.4 4.4 2.5 2.4 0.5 0.6 2.2z m147.9-3.6l-3.2 4.4-0.2-4.8 1.1-2.3 1.3-2.2 1.2 1.9-0.2 3z m-41.4-17.7l-2.2 2.2-3.8-1.2-1-2.8 5.7-0.3 1.3 2.1z m18.4-2.3l1.8 4.9-4.6-2.7-4.7-0.5-3.3 0.4-3.9-0.2 1.5-3.5 7-0.3 6.2 1.9z m59.8-3.2l-1 20.9-1.6 21-4.6-5.3-5.6-1.3-1.5 1.8-7.2 0.2 2.8-5.2 3.7-1.8-1-7-2.3-5.3-10.7-5.5-4.6-0.5-8.3-6-1.8 3.2-2.2 0.5-1.1-2.3 0.1-2.8-4.2-3.2 6.2-2.3 4 0.1-0.4-1.7-8.3 0-2.2-3.8-5-1.2-2.3-3.2 7.6-1.5 2.9-2.1 9.1 2.6 0.9 2.4 1.3 10.4 5.7 3.8 5-6.8 6.6-3.8 5 0 4.8 2.2 4.1 2.3 6.1 1.2z m-89.1-25.8l-4.5 6.4-4.3 1.2-5.4-1.2-9.5 0.3-4.9 0.9-0.8 4.9 5 5.7 3.1-2.9 10.6-2.2-0.5 2.9-2.5-0.9-2.5 3.8-5.1 2.5 5.1 8.2-1.1 2.2 4.8 7.4-0.3 4.2-3.1 1.9-2.1-2.3 3-5.2-5.7 2.5-1.3-1.8 0.8-2.5-3.9-3.8 0.7-6.2-3.9 1.9 0.2 7.5-0.2 9.2-3.7 0.9-2.3-1.8 1.9-5.9-0.6-6.2-2.4-0.1-1.6-4.4 2.5-4.2 0.9-5.1 3-9.7 1.1-2.6 4.8-4.8 4.5 1.9 7.1 0.9 6.5-0.3 5.6-4.6 1 1.4z m19.6 1.9l-0.3 5.6-2.9-0.7-0.9 3.9 2.3 3.4-1.6 0.8-2.2-4.1-1.7-8.2 1-5.1 1.8-2.3 0.5 3.5 3.4 0.5 0.6 2.7z m-108-5.7l1 4.3 3.9 3.7 3.7-1.3 3.6 0.4 3.3-3.2 2.7-0.6 5.4 1.8 4.6-1.4 2.6-8.9 2.1-2.2 1.7-7.3 6.5 0 5 1.1-3 5.8 4.4 6-0.9 3 6.4 5.9-6.7 0.8-1.8 4.4 0.2 5.8-5.5 4.4-0.4 6.4-2.5 9.8-0.7-2.3-6.6 2.9-2.1-3.9-4-0.4-2.8-2.1-6.8 2.4-1.9-3.2-3.8 0.4-4.6-0.7-0.6-8.6-2.8-1.8-2.7-5.5-0.8-5.6 0.6-6 3.3-4.3z m-22.8 50.5l-6.2 0.1-4.5-5.3-7.1-5.3-2.3-3.9-4.1-5.2-2.7-4.8-4.2-9-4.9-5.4-1.7-5.5-2.2-5-5.2-4-3.1-5.5-4.4-3.6-6.2-7.1-0.6-3.3 3.6 0.3 8.9 1.2 5.2 6.3 4.6 4.4 3.2 2.6 5.5 6.9 5.8 0.1 4.8 4.4 3.4 5.4 4.3 3-2.3 5.2 3.3 2.2 2 0.2 0.9 4.5 1.9 3.5 4.1 0.6 2.6 4.1-1.7 8-0.7 9.9z",
      UA: "M1157.2 174.6l2.3 2.7 0.1 1.2 6.7 2.2 3.6-1 3.6 2.9 2.9-0.1 7.7 2 0.4 1.9-1.3 3.2 1.8 3.5-0.3 2.1-4.8 0.4-2.2 1.8 0.4 2.7-3.9 0.5-3 2.1-4.6 0.3-4 2.4 1 3.9 2.8 1.5 5.1-0.4-0.6 2.3-5.4 1.1-6.3 3.6-3.1-1.3 0.7-2.9-5.9-1.9 0.7-1.2 4.6-2.1-1.7-1.4-8.1-1.6-0.8-2.4-4.5 0.8-1.3 3.5-3.3 4.6-2.4-1.1-2.3 1.1-2.4-1.2 1.2-0.7 0.6-2.1 1.1-2.1-0.6-1.1 1-0.5 0.6 0.9 3 0.2 1.3-0.5-1-0.6 0.2-1-2-1.6-1.1-2.6-2-1 0.1-2.1-2.6-1.7-2-0.3-4-1.9-3.2 0.6-1.1 0.9-2.1 0-1 1.5-3.6 0.6-1.6 1-2.5-1.6-3.2 0-3.2-0.7-2 1.4-0.5-1.7-3-1.7 0.7-2.5 1.2-1.7 1.1 0.4-1.6-2.8 3.8-5.2 2.3-0.7 0.3-1.7-3.2-5.4 2.3-0.3 2.4-1.6 3.8-0.2 4.9 0.5 5.7 1.5 3.9 0.1 1.9 0.9 1.7-1.1 1.5 1.5 4.3-0.3 2.1 0.6-0.3-3.1 1.3-1.4 4.1-0.3 1.8 0.2 1-1.4 1.5 0.3 4.9-0.6 3.8 3.5-0.9 1.3 0.8 1.9 3.9 0.3z",
      QA: "M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z",
      MZ: "m 1166.7,673.5 h -4.1 l -0.3,-2.9 -0.6,-2.9 -0.4,-2.3 1.4,-7.1 -1.1,-4.6 -2.2,-9 6.2,-7.3 1.7,-4.6 0.8,-0.6 0.9,-3.8 -0.8,-1.9 0.4,-4.8 1.3,-4.4 0.4,-8.2 -2.8,-2 -2.7,-0.5 -1.1,-1.6 -2.6,-1.3 -4.7,0.1 -0.2,-2.4 -0.4,-4.6 17.2,-5.3 3.2,3.1 1.5,-0.6 2.2,1.6 0.2,2.6 -1.3,3 0.2,4.5 3.5,4 1.9,-4.5 2.5,-1.3 -0.1,-8.3 -2.2,-4.6 -1.9,-2.1 h -0.4 l -0.6,-7.3 1.5,-6.1 2.2,-0.2 6.7,1.8 1.5,-0.8 3.9,-0.2 2.1,-1.9 3.4,0.1 6.2,-2.5 4.6,-3.7 0.9,2.8 -0.5,6.4 0.5,5.7 -0.2,10 0.8,3.1 -1.9,4.6 -2.4,4.5 -3.7,4 -5.3,2.4 -6.5,3.1 -6.6,6.9 -2.2,1.2 -4.2,4.6 -2.3,1.4 -0.8,4.6 2.4,4.9 0.9,3.7 v 2 l 1,-0.4 -0.5,6.3 -1.1,3 1.2,1.1 -1,2.7 -2.4,2.3 -4.7,2.1 -6.9,3.5 -2.5,2.4 0.3,2.7 1.3,0.4 z"
  },
  names: {
      BD: "Bangladesh",
      BE: "Belgium",
      BF: "Burkina Faso",
      BG: "Bulgaria",
      BA: "Bosnia and Herzegovina",
      BB: "Barbados",
      BL: "Saint-Barthélemy",
      BM: "Bermuda",
      BN: "Brunei",
      BO: "Bolivia",
      JP: "Japan",
      BI: "Burundi",
      BJ: "Benin",
      BT: "Bhutan",
      JM: "Jamaica",
      BW: "Botswana",
      WS: "Samoa",
      BR: "Brazil",
      BS: "Bahamas",
      BY: "Belarus",
      BZ: "Belize",
      TN: "Tunisia",
      RW: "Rwanda",
      RS: "Serbia",
      TL: "Timor-Leste",
      RE: "Reunion (France)",
      TM: "Turkmenistan",
      TJ: "Tajikistan",
      RO: "Romania",
      GW: "Guinea-Bissau",
      GU: "Guam",
      GT: "Guatemala",
      GR: "Greece",
      GQ: "Equatorial Guinea",
      GP: "Guadeloupe (France)",
      BH: "Bahrain",
      GY: "Guyana",
      GF: "France",
      GE: "Georgia",
      GD: "Grenada",
      GB: "United Kingdom",
      GA: "Gabon",
      GN: "Guinea",
      GM: "The Gambia",
      GL: "Greenland",
      GH: "Ghana",
      OM: "Oman",
      JO: "Jordan",
      HR: "Croatia",
      HT: "Haiti",
      HU: "Hungary",
      HN: "Honduras",
      PR: "Puerto Rico",
      PS: "Palestine",
      PW: "Palau",
      PT: "Portugal",
      KN: "Saint Kitts and Nevis",
      PY: "Paraguay",
      AI: "Anguilla",
      PA: "Panama",
      PF: "French Polynesia",
      PG: "Papua New Guinea",
      PE: "Peru",
      PK: "Pakistan",
      PH: "Philippines",
      PL: "Poland",
      ZM: "Zambia",
      BQSE: "St. Eustatius (Netherlands)",
      EH: "Western Sahara",
      RU: "Russian Federation",
      EE: "Estonia",
      EG: "Egypt",
      ZA: "South Africa",
      EC: "Ecuador",
      IT: "Italy",
      VN: "Vietnam",
      SB: "Solomon Islands",
      ET: "Ethiopia",
      SO: "Somalia",
      ZW: "Zimbabwe",
      KY: "Cayman Islands",
      ES: "Spain",
      ER: "Eritrea",
      ME: "Montenegro",
      MD: "Moldova",
      MG: "Madagascar",
      MF: "Saint Martin (French)",
      MA: "Morocco",
      UZ: "Uzbekistan",
      MM: "Myanmar",
      ML: "Mali",
      MN: "Mongolia",
      MH: "Marshall Islands",
      MK: "Macedonia",
      MU: "Mauritius",
      MT: "Malta",
      MW: "Malawi",
      MV: "Maldives",
      MQ: "Martinique (France)",
      MP: "Northern Mariana Islands",
      MS: "Montserrat",
      MR: "Mauritania",
      UG: "Uganda",
      MY: "Malaysia",
      MX: "Mexico",
      IL: "Israel",
      FR: "France",
      FI: "Finland",
      FJ: "Fiji",
      FK: "Falkland Islands",
      FM: "Micronesia",
      FO: "Faeroe Islands",
      NI: "Nicaragua",
      NL: "Netherlands",
      NO: "Norway",
      NA: "Namibia",
      VU: "Vanuatu",
      NC: "New Caledonia",
      NE: "Niger",
      NG: "Nigeria",
      NZ: "New Zealand",
      BQBO: "Netherlands",
      NP: "Nepal",
      NR: "Nauru",
      XK: "Kosovo",
      CI: "Côte d'Ivoire",
      CH: "Switzerland",
      CO: "Colombia",
      CN: "China",
      CM: "Cameroon",
      CL: "Chile",
      CA: "Canada",
      CG: "Republic of Congo",
      CF: "Central African Republic",
      CD: "Democratic Republic of the Congo",
      CZ: "Czech Republic",
      CY: "Cyprus",
      CR: "Costa Rica",
      CW: "Curaco (Netherlands)",
      CV: "Cape Verde",
      CU: "Cuba",
      SZ: "Swaziland",
      SY: "Syria",
      SX: "Saint Martin (Dutch)",
      KG: "Kyrgyzstan",
      KE: "Kenya",
      SS: "South Sudan",
      SR: "Suriname",
      KH: "Cambodia",
      SV: "El Salvador",
      KM: "Comoros",
      ST: "São Tomé and Principe",
      SK: "Slovakia",
      KR: "South Korea",
      SI: "Slovenia",
      KP: "North Korea",
      KW: "Kuwait",
      SN: "Senegal",
      SL: "Sierra Leone",
      SC: "Seychelles",
      KZ: "Kazakhstan",
      SA: "Saudi Arabia",
      SG: "Singapore",
      SE: "Sweden",
      SD: "Sudan",
      DO: "Dominican Republic",
      DM: "Dominica",
      DJ: "Djibouti",
      DK: "Denmark",
      VG: "British Virgin Islands",
      DE: "Germany",
      YE: "Yemen",
      DZ: "Algeria",
      US: "United States",
      UY: "Uruguay",
      YT: "Mayotte (France)",
      LB: "Lebanon",
      LC: "Saint Lucia",
      LA: "Laos",
      TV: "Tuvalu",
      TW: "Taiwan",
      TT: "Trinidad and Tobago",
      TR: "Turkey",
      LK: "Sri Lanka",
      LV: "Latvia",
      TO: "Tonga",
      LT: "Lithuania",
      LU: "Luxembourg",
      LR: "Liberia",
      LS: "Lesotho",
      TH: "Thailand",
      TG: "Togo",
      TD: "Chad",
      TC: "Turks and Caicos Islands",
      BQSA: "Saba (Netherlands)",
      LY: "Libya",
      VC: "Saint Vincent and the Grenadines",
      AE: "United Arab Emirates",
      VE: "Venezuela",
      AG: "Antigua and Barbuda",
      AF: "Afghanistan",
      IQ: "Iraq",
      VI: "United States Virgin Islands",
      IS: "Iceland",
      IR: "Iran",
      AM: "Armenia",
      AL: "Albania",
      AO: "Angola",
      AS: "American Samoa",
      AR: "Argentina",
      AU: "Australia",
      AT: "Austria",
      AW: "Aruba",
      IN: "India",
      TZ: "Tanzania",
      IC: "Canary Islands (Spain)",
      AZ: "Azerbaijan",
      IE: "Ireland",
      ID: "Indonesia",
      UA: "Ukraine",
      QA: "Qatar",
      MZ: "Mozambique"
  },
  default_regions: {
      "0": {
          name: "North America",
          states: ["MX", "CA", "US", "GL", "BM"]
      },
      "1": {
          name: "South America",
          states: ["EC", "AR", "VE", "BR", "CO", "BO", "PE", "BZ", "CL", "CR", "CU", "DO", "SV", "GT", "GY", "GF", "HN", "NI", "PA", "PY", "PR", "SR", "UY", "JM", "HT", "BS", "FK", "AI", "AG", "AW", "BB", "VG", "KY", "DM", "MQ", "LC", "VC", "GD", "GP", "MS", "TC", "SX", "MF", "KN", "CW"]
      },
      "2": {
          name: "Europe",
          states: ["IT", "NL", "NO", "DK", "IE", "GB", "RO", "DE", "FR", "AL", "AM", "AT", "BY", "BE", "LU", "BG", "CZ", "EE", "GE", "GR", "HU", "IS", "LV", "LT", "MD", "PL", "PT", "RS", "SI", "HR", "BA", "ME", "MK", "SK", "ES", "FI", "SE", "CH", "TR", "CY", "UA", "XK", "MT", "FO"]
      },
      "3": {
          name: "Africa and the Middle East",
          states: ["QA", "BH", "SA", "AE", "SY", "OM", "KW", "PK", "AZ", "AF", "IR", "IQ", "IL", "PS", "JO", "LB", "YE", "TJ", "TM", "UZ", "KG", "NE", "AO", "EG", "TN", "GA", "DZ", "LY", "CG", "GQ", "BJ", "BW", "BF", "BI", "CM", "CF", "TD", "CI", "CD", "DJ", "ET", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "MG", "MW", "ML", "MA", "MR", "MZ", "NA", "NG", "ER", "RW", "SN", "SL", "SO", "ZA", "SD", "SS", "SZ", "TZ", "TG", "UG", "EH", "ZM", "ZW", "RE", "KM", "SC", "MU", "CV", "IC", "ST", "YT"]
      },
      "4": {
          name: "South Asia",
          states: ["SG", "TW", "IN", "AU", "MY", "NP", "NZ", "TH", "BN", "JP", "VN", "LK", "SB", "FJ", "BD", "BT", "KH", "LA", "MM", "KP", "PG", "PH", "KR", "ID", "CN", "MV", "NC", "VU", "NR"]
      },
      "5": {
          name: "North Asia",
          states: ["MN", "RU", "KZ"]
      }
  },
  proj: "robinson",
  proj_coordinates: [{
      lat: 48.86666667,
      x: 997.9,
      lng: 2.333333333,
      y: 189.1
  }, {
      lat: -34.615,
      x: 673.5,
      lng: -58.446,
      y: 724.1
  }, {
      lat: -33.874,
      x: 1798.2,
      lng: 151.203,
      y: 719.3
  }],
  initial_view: {
      y: 0.99,
      x: 0.99,
      x2: 2018.99,
      y2: 864.5600000000001
  }
}

/* Map logic - do not edit */
function exe (plugin_name) {
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
    var demo = false;
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
        var map_trial = false;

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
};