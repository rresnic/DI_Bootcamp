users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

#     Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
#     Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
#     Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
#     Only recreate the 1st result for:
#         The characters, which names contain the letter “i”.
#         The characters, which names start with the letter “m” or “p”.
output_str = "{"
for index, value in enumerate(users):
    output_str += "\"" + value + "\": " +str(index) + ","
print(output_str[:-1] + "}")
output_str = "{"
for index, value in enumerate(users):
    output_str += str(index) + ": \"" + value +","
print(output_str[:-1] + "}")
def print_alpha(list_input):
    new_list = sorted(list_input)
    output_str = "{"
    for index, value in enumerate(new_list):
        output_str += "\"" + value + "\": " +str(index) + ","
    print(output_str[:-1] + "}")
print_alpha(users)

output_str = "{"
for index, value in enumerate(users):
    if "i" in value:
        output_str += "\"" + value + "\": " +str(index) + ","
print(output_str[:-1] + "}")

output_str = "{"
for index, value in enumerate(users):
    if value[0] == "M" or value[0] == "P":
        output_str += "\"" + value + "\": " +str(index) + ","
print(output_str[:-1] + "}")