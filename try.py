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

arr = [[1,2],[3,4]]
print('lenarr',len(arr))
print(2**2)
num = (len(arr)/2)**2
print('num',num)