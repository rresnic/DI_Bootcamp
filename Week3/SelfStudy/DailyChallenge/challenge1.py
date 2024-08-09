user_word = input("Enter a word: ")
my_dict = {}
for index, letter in enumerate(user_word):
    if letter in my_dict:
        my_dict[letter].append(index)
    else:
        my_dict[letter] = [index]

print(my_dict)
print(type(list(my_dict.keys())[0]))
print(type(list(my_dict.values())[0]))