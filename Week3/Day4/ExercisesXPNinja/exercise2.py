# list1 =  [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list1 =     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
for number in list1:
    print(number, end=" ")
print()
reversed_list = sorted(list1)
reversed_list.reverse()
print(reversed_list)
print(sum(list1))
print(list1[::len(list1)-1])
print(list(filter(lambda x: x > 50, list1)))
print(list(filter(lambda x: x < 10, list1)))
print(list(map(lambda x: x **2, list1)))
print(set(list1), f"new list length: {len(set(list1))}")
print(sum(list1)/len(list1))
print(max(list1))
print(min(list1))
