# # import re

# # s = "Black, blue and browne ands"
# # pattern =  r'e a'
# # matches = re.findall(pattern, s, re.IGNORECASE)

# # print(matches)

# # def relation_to_luke(name):
# #     return "Luke, I am your "+ {'Darth Vader':'father.','Leia':'sister.',"Han":"brother in law.","R2D2":"droid."}[name]
# # print(relation_to_luke('Leia'))

# # def is_curzon(num):
# #     dividend = 2 ** num + 1
# #     divisor = 2 * num + 1
# #  if dividend % divisor == 0:
# #         return True
# #     return False

# # def calculator(num1, operator, num2):
# #     if operator == '/' and num2 ==0:
# #         return "Can't divide by 0!"
# #     return eval (str(num1) + str(operator) + str(num2))

# # def stutter(word):
# #     comword = {word[0]}+{wo6rd[1]}+'... '
# #     return {comword}+{comword}+{word}

# # print(stutter("incredible"))
# # import math
# # while True:
# #     print(math.factorial(int(input('number:'))))

# # class Solution(object):
# #     def earliestFullBloom(self, plantTime, growTime):
# #         self.planttime = plantTime
# #         self.growTime = growTime
        
# #     def sum_planttime(plantTime):
# #         sum = 0
# #         for x in plantTime:
# #             sum = sum + 1
# #         print('sum:',sum)
# #         return sum
# # x = Solution()
# # print(x.sum_planttime(3))

# # class Sample():
# #     def properties(self,length, base):
# #         self.length = length
# #         self.base = 'red'

# # x = Sample()

# # print(x.properties(3,4).base)
# # import math

# # arr = [1,3,5,7,9]

# # mx = max(arr)
# # sm = sum (arr)


# # mn = min(arr)
# # summin = sm - mx
# # summax = sm - mn
# # print('mn',mn)
# # print('mx',mx)
# # print('sm',sm)

# s = "12:45:54PM"


# if s[-2]=='P':
#     word=''
#     for x in range(2):
#         word = word + s[x]
#     print(word)
#     if int(word) >= 12:
#         newval = int(word)
#     else:
#         newval = int(word) + 12
#     output = str(newval).zfill(2) + s[slice(2,-2)]
#     print('output:',output)

# if s[-2]=='A':
#     word=''
#     for x in range(2):
#         word = word + s[x]
#     print(word)
#     if int(word) == 12:
#         newval = int(word) - 12
#     else:
#         newval = int(word)
#     output = str(newval).zfill(2) + s[slice(2,-2)]
#     print('output:',output)
# print('slice:',s[2:5])

#--------------------- Find the median ---------------------------

# arr = [0,1,1,2,4,6,5,3]
# arr.sort()
# print('arr',arr)
# print(set(arr))
# list = list(set(arr))
# print('list this:',list)
# print('list:',list[0])
# lenlist = len(list)
# print('lenlist:', lenlist)
# mid = ((lenlist-1)/2)+1

# print('mid ',int(mid-1))
# print(list[int(mid-1)])

#-----------------------------

# # print(round(2/5,2))

# # floatNumber = 2/5

# # print("%.6f" % floatNumber)
# # 2.0
# arr = [1,1,0,-1,-1]

# lenarr = len(arr)
# pos = 0
# neg = 0
# zer = 0

# for a in arr:
#     if a > 0:
#         pos += 1
#     if a == 0:
#         zer += 1
#     if a < 0:
#         neg += 1

# ratiopos = pos / lenarr
# rationeg = neg / lenarr
# ratiozer = zer / lenarr


# print("%.6f" % ratiopos)
# print("%.6f" % rationeg)
# print("%.6f" % ratiozer)



# arr = [1,2,3,4,3,2,1]

# lenarr = len (arr)

# outlist = []

# # lonely = 0
# for x in range(lenarr):
#     i = 0
#     for a in arr:
#         if arr[x] == a:
#             # lonely = a
#             i=i+1
#     outlist.append(i)
# print('outlist ', outlist) 
# lonely = 0

# index = outlist.index(1)
# return arr[index]
# print('index ',index)
#     # if i==2:
#     #     lonely = 0
# print(lonely)

#----------------------------------------------

# arr = [1,1,3,2,1]
# print(max(arr))

# initlist = []
# for x in range(max(arr)+1):
#     initlist.append(0)

# print(initlist)

# for a in arr:
#     initlist[a] += 1
# print(initlist)

#-----------------------------------------------------

# arr = [[1,2],[3,4]]
# print('lenarr',len(arr))
# print(2**2)
# num = (len(arr)/2)**2
# print('num',num)


# s='aaaa1b'
# def getMost(s):
#     dict = {}
#     for el in s:
#         # if el.isnumeric():
#         #     continue
#         if not el.isalpha():
#             continue

#         dict[el]=0
#         for a in s:
#             if a == el:
#                 dict[el]+=1
#     keylist = list (dict.keys())
#     valuelist = list (dict.values())

#     print('this is keylist: ',keylist)
#     print('this is valuelist: ',valuelist)

#     max_key = max(dict,key = dict.get)
#     min_key = min(dict,key = dict.get)
    

#     print(dict)
#     print(max_key)
#     print(min_key)
# getMost(s)


# def caesarCipher(s, k):
#     # dict = {}
#     alfa = "abcdefghijklmnopqrstuvwxyz"
#     rdict = dict([ (x[1],x[0]) for x in enumerate(alfa) ])

#     outlist = []

#     thisdict={}
#     newdict={}

#     for el in s:
#         # Checking if element is alphabet:
#         # permissibles = ["'",'-']
#         # if el in permissibles:
#         #     outlist.append(el)
#         #     continue
#         #Checking if element is uppercase:
#         # permissibles = "'-"
#         # if el in permissibles:
#         #     outlist.append(el)
#         #     print('yes')
#         #     continue
#         if el.isalpha():
#             if el != el.lower():
#                 value = rdict[el.lower()]+k        
#                 if value >= 26:
#                     value = value % 26

#                 outlist.append(alfa[value].upper())
#                 continue
        
#             if el == el.lower():
#                 value = rdict[el]+k        
#                 if value >= 26:
#                     value = value % 26

#                 outlist.append(alfa[value])
#                 continue
#         outlist.append(el)
    
        
    
        

#     print(outlist)
#     return ''.join(outlist)
        
#     # thisdict[el]=value

#     #     # newdict[rdict[el]]
#     # valuelist = list(thisdict.values())
#     # print('valuelist: ',valuelist)
#     # preoutputlist = []
#     # for val in valuelist:
#     #     print(alfa[val-1])
#     #     preoutputlist.append(alfa[val-1])
#     # output = ''.join(preoutputlist)

#     # print('output: ',output)
#     # # encrypstring = []
#     # # for val in valuval+1elist:
#     # #     print('this is val: ',val)
#     # #     if type(val) == int:
#     # #         print('numeric')
#     # #         encrypstring.append(alfa[val])
#     # #         continue
#     # #         # value = alfa[val]
#     # #         # if val > 26:
#     # #         #     print('this val: ',val)
#     # #         #     val = val - 26
#     # #         # encrypstring.append(alfa[val])
#     # #         # continue
#     # #         # encrypstring.append(alfa[val])
#     # #         # continue
#     # #     encrypstring.append(val)
        
#     # # print('encrypstring:' , encrypstring)Hel
#     # # output = ''.join(encrypstring)
#     # # print('output: ',output)


#     # # print(thisdict)
#     # # # valuelist = list(thisdict.values())
#     # # print('this is valuelist: ',valuelist)



#     # # print(newdict)

# s=input('input:')
# caesarCipher(s, k=3)
#     # Write your code here



# alfa = "abcdefghijklmnopqrstuvwxyz"
# rdict = dict([ (x[1],x[0]) for x in enumerate(alfa) ])
# print(rdict['z'])
# print(alfa[25])
# # letter = 'c'

# # pos = 0
# # for al in alfa:
# #     if letter != al:
# #         pos = pos +1
# #     # if letter == al:
# #     #     break

# dict = {'Rodrigo':68,"Mayssssssss":3,"Anne":28}
# values = min(list(dict.values()))
# print((values))

# array = 'abcdefghijklmnopqrstuvwxyz'

# alphapos = 0
# for count, value in enumerate(array, start=0):
#     if value == 'm':
#         print('this is count: ',count)
#         alphapos = count
# print(array[alphapos])
alphabet = "abcdefghijklmnopqrstuvwxyz"
iterable = [1,2,3,4,5,6,7,8]
# values = []
# for index, value in enumerate(iterable, start=0):
#     if index % 3: #If there is a remainder or can be converted to xx.xx in decimal form
#         print(index)
#         values.append(value)
# print(values) 

# for index, value in enumerate(alphabet, start=1):
#     if not index % 2: #if divisible by 2
#         print('index: ',index,'alphabet: ', value)


# print ([value for index, value in enumerate(iterable, start=1) if not value % 2])

# row1 = ["a", "b", "c","v"]
# row2 = ["d", "e", "f","x"]
# row3 = ["g", "h", "i","g"]


# for count, (column1, column2, column3) in enumerate(zip(row1, row2, row3), start=1):
#     print(count,column1, column2, column3)

# if not 9 % 3:
#     print('number A is divisible by number B')

# if not 15 % 5:
#     print('number A is divisible by number B')


s= 'abcA-xByz'
k=3
def caesarCipher(s, k):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    upperlist = []
    indexlist = []
    for count, el in enumerate(s,start=0):
        if el.isupper():
            el = el.lower()
            upperlist.append(count)
        for count, value in enumerate (alphabet, start=1):
            el = el.lower()
            if not el.isalpha():
                indexlist.append(el)
                break
            if el == value:
                indexlist.append(count)
                continue
            
            else:
                continue
    # print(upperlist)
    # print(indexlist)

#     remain = k % 26
#     indexlist2 = []
#     for el in indexlist:
#         # print('type: ',type(el),' el: ',el)
#         if type(el)==str:
#             indexlist2.append(el)
#             continue
#         if el >=0:
#             el = (el + remain) % 26
#             indexlist2.append(el)
#     # print(indexlist2)

#     indexlist3 = []
#     for count, el in enumerate (indexlist2):
#         if type(el) == str:
#             indexlist3.append(el)
#             continue
#         else:
#             indexlist3.append(alphabet[el-1])
#     # print('type:',type(indexlist3) , ' indexlist3: ',indexlist3)
    
#     indexlist4=[]
#     # print(type(upperlist), upperlist)
#     for count, value in enumerate(indexlist3):
#         # print(type(value) , value)
#         if count in upperlist:
#             indexlist4.append(value.upper())
#             continue
#         else:
#             indexlist4.append(value)
#     # print(type(indexlist4), indexlist4)


#     # indexlist3 = []
#     # for el in indexlist2:
#     #     if el > 26:
#     #         el = el - 26
#     #     indexlist3.append(el)
#     # # print(indexlist3)

#     # indexlist4 = []
#     # for el in indexlist3:
#     #     print(alphabet[el-1])
#     #     indexlist4.append(alphabet[el-1])
#     # # print(indexlist4)

#     # outstring = ''.join(indexlist4)
#     # print(outstring)
#     # return outstring

import math



# caesarCipher(s, k)




# #output should be: 'defabc'

# a = [ 'I am mid now','v', 's', 'first', 't', 'y', 'z']
# a[0], a[3] = a[3], a[0]
# print(type(a),a)

# Step 1: sort array
# Step 2: make a list to store the difference of max and min in a given index
# Step 3: 

# arr = [10,40,70,20,9]
# k = 3
# def maxMin(k, arr):
#     arr.sort()
#     print(arr)

#     difflist = []

#     xmin = max(arr)
#     print(xmin)
#     next = k -1

#     # print(arr[-1])
    
#     i = len(arr)-1
#     next = k -1
#     while len(arr)-1 != 0 and i-next>=0:
#         print(arr[i], arr[i-next],i)
#         diff = arr[i] - arr[i-next]
#         if diff < xmin:
#             xmin = diff
#         i = i -1
#     print(xmin)
#     return xmin


#     # for index in range(len(arr)):
#     #     print(index)
#     #     if index ==len(arr)-1:
#     #         break
#     #     diff = arr[index+next]-arr[index]
#     #     if diff < xmin:
#     #         xmin = diff
#     #     print('diff ',diff)
#     # print(xmin)
#     # return xmin
        

#     # for count1, value1 in enumerate(arr, start = 0 ):
#     #     difference = value1 - 

        # difference = 0 
    #     maxz = 0
    #     minz = 0
    #     next = k -1
    #     for count2, value2 in enumerate(arr, start = 0):
    #         if count1 == count2:
    #             minz = value2
    #         if count1 + next == count2:
    #             maxz = value2
    #     diff = maxz - minz
    #     print(type(diff), diff)
    #     difflist.append(diff)
    # print(type(difflist), difflist)
    # mins = 0

    # num_list = [item for item in difflist if item >= 0]
    # # for count3, value3 in enumerate(nu, start = 0):
    # #     if value3 <0:
    # #         continue
    # #     mins = min(difflist)
    # mins = min(num_list)
    # # print(mins)
    # minindex = num_list.index(mins)
    # # print(minindex)
    # arrnew = arr[minindex: minindex+k]
    # print(arrnew)
    # # minpos = difflist.index(getmin)
    # # print(type(minpos), minpos)



# maxMin(k, arr)

dict = {}
# for index in range(n):
#     dict
arr = [1,2,1,2,1,3,2]
for a1 in arr:
    dict[a1]=0   #initial value
    for a2 in arr:
        if a1 == a2:
            dict[a1] +=1

print(len(dict))
for key in dict:
    dict[key]=dict[key]//2
pairs = 0
for key in dict:
    pairs = pairs + dict[key]
    
print(pairs)
print(dict)
z=[1,21,1,1,8].count(1)
print('z ',z)