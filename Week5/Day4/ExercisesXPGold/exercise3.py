import re


test_string = "k5k3q2g5z6x9bn"

def get_numbers(string):
    pattern = r"\d"
    output_str = ""
    for character in string:
        if re.match(pattern, character):
            output_str+= character
    return output_str



print(get_numbers(test_string))