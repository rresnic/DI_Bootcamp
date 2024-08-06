# version 1
# user_num = int(input("Please enter a number: "))
# user_length = int(input("Please enter a length: "))
# output_list = []
# for i in range(1, user_length + 1):
#     output_list.append(user_num * i)
# print(output_list)

# version 2
user_num, user_length = map(int, input("Please enter an integer number and length, separated by a space (e.g. 5 10): ").split())
output_list = []
for i in range(1, user_length + 1):
    output_list.append(user_num * i)
print(f"Number: {user_num} - Length: {user_length} -> {output_list}")