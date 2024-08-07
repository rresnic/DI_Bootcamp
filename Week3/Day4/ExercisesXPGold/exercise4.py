print("Test Data") # just going by their exmple
first_num = int(input('Input the 1st number: '))
second_num = int(input("Input the 2nd number: "))
if second_num > first_num:
    first_num = second_num # save space
second_num = int(input("Input the 3rd number: "))
if second_num > first_num:
    first_num = second_num
print(f"The greatest number is: {first_num}")