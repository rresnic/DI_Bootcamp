IDEAL_LENGTH = 10
user_str = input("Enter a string: ")
if len(user_str) == IDEAL_LENGTH:
    print("perfect String")
    output_str = ""
    for character in user_str:
        output_str += character
        print(output_str)
elif len(user_str) > IDEAL_LENGTH:
    print("string too long")
else:
    print("string not long enough")
