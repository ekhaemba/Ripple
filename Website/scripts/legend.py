from View import *
# import Pillow
from PIL import Image

# n = .98

# print(red(n))
# print(green(n))

width = 200
height = 15
colors = 3

a = np.random.rand(height,width,colors)
for i in range(width):
    change = 2*i/width-1
    for j in range(height):
        a[j][i][0] = red(change)
        a[j][i][1] = green(change)
        a[j][i][2] = 0

im_out = Image.fromarray(a.astype('uint8')).convert('RGB')
im_out.save('legend.jpg')

a = np.random.rand(height,width,colors)
for i in range(width):
    change = (2*i/width-1)/10
    for j in range(height):
        a[j][i][0] = red(change)
        a[j][i][1] = green(change)
        a[j][i][2] = 0

im_out = Image.fromarray(a.astype('uint8')).convert('RGB')
im_out.save('legendZoom.jpg')