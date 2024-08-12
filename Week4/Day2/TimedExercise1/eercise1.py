# were we meant to take these from the command line? We haven't really discussed using that at all.

def count_letters(a_string, a_char):
    return a_string.count(a_char)

def display_counted_letters(a_string, a_char):
    print(f"String: {a_string}\nCharacter: {a_char}\n{count_letters(a_string, a_char)}")
#display_counted_letters('programming is cool', 'o')

# version with command line
import sys


message = sys.argv[1]
character = sys.argv[2]
display_counted_letters(message, character)