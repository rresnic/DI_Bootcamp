import re


# test_str = "John Smith"
# test_str_2 = "JohnSmith"
# test_str_3 = "John smith"
# test_str_4 = "john Smith"
# test_str_5 = "John Smith1"

def get_name():
    pattern = r"^[A-Z][a-z]*\s[A-Z][a-z]*$"
    name = ""
    while True:
        try:
            name = input("Enter your first and last name:")
            if not re.match(pattern, name):
                raise ValueError("Must match normal naming conventions e.g. John Smith")
        except:
            print("Must match normal naming conventions e.g. John Smith")
        else:
            break
    print("hello", name)



get_name()