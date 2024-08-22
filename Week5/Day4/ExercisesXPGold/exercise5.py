import re
import string
from random import randint

valid_letters = string.ascii_letters + string.digits + "@$!%*?&"
pattern_password = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,31}$'

def generate_password(length):
    password = ""
    while True:
        password = ""
        for i in range(length):
            password += valid_letters[randint(0, len(valid_letters) -1)]
        if re.match(pattern_password, password):
            break
    return password

def get_password():
    length = 0
    while True:
        try:
            length = int(input("Enter password length (6-31): "))
            if not 6 <= length <= 31:
                raise ValueError("Must be 6-31")
        except:
            print("Must be 6-31")
        else:
            break
    print(f"{generate_password(length)} is your password. Keep it somewhere safe!")

get_password()