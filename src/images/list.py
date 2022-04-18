import os

parent = os.getcwd()

url = os.path.join(parent, 'src/images')

print(url)

os.chdir(url)


list = os.listdir()

w = open('a.txt', 'w')


for i in list:

    w.write("import " + i[-7 : -4] + " from " +"'./" + i + "'" + "\n")

for i in list:

    w.write(i[-7 : -4] + ",\n")
    
w.close()