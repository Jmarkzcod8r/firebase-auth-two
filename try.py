# import re

# s = "Black, blue and browne ands"
# pattern =  r'e a'
# matches = re.findall(pattern, s, re.IGNORECASE)

# print(matches)

# def relation_to_luke(name):
#     return "Luke, I am your "+ {'Darth Vader':'father.','Leia':'sister.',"Han":"brother in law.","R2D2":"droid."}[name]
# print(relation_to_luke('Leia'))

# def is_curzon(num):
#     dividend = 2 ** num + 1
#     divisor = 2 * num + 1
#  if dividend % divisor == 0:
#         return True
#     return False

# def calculator(num1, operator, num2):
#     if operator == '/' and num2 ==0:
#         return "Can't divide by 0!"
#     return eval (str(num1) + str(operator) + str(num2))

# def stutter(word):
#     comword = {word[0]}+{wo6rd[1]}+'... '
#     return {comword}+{comword}+{word}

# print(stutter("incredible"))
# import math
# while True:
#     print(math.factorial(int(input('number:'))))

# class Solution(object):
#     def earliestFullBloom(self, plantTime, growTime):
#         self.planttime = plantTime
#         self.growTime = growTime
        
#     def sum_planttime(plantTime):
#         sum = 0
#         for x in plantTime:
#             sum = sum + 1
#         print('sum:',sum)
#         return sum
# x = Solution()
# print(x.sum_planttime(3))

class Sample():
    def properties(self,length, base):
        self.length = length
        self.base = 'red'

x = Sample()
print(x.properties(3,4).base)

