# formula Q = Square root of [(2  * C * D)/H]
# C = 50
# H = 30

C = 50
H = 30
user_numbers = map(int, input("Enter a comma separated string of numbers, like 22,33: ").split(","))
output_str = ""
for number in user_numbers:
    output_str += str(int(((2 * C * number)/ H)**.5)) + ","
print(output_str[:-1])