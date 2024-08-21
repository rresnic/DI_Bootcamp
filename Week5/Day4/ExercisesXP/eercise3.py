from random import randint
from string import ascii_letters as valid_letters
LENGTH = 5

def get_random_string():
    output_str = ""
    for i in range(LENGTH):
       output_str += valid_letters[randint(0, len(valid_letters) - 1)]
    return output_str

print(get_random_string())