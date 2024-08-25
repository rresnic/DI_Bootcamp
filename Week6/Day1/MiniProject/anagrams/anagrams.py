
# It should do the following:

#     Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

#     If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
#         Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
#         Only alphabetic characters are allowed. No numbers or special characters.
#         Whitespace should be removed from the start and end of the user’s input.

#     Once your code has decided that the user’s input is valid, it should find out the following:
#         All possible anagrams to the user’s word.
#         Create an AnagramChecker instance and apply it to the steps created above.
#         Display the information about the word in a user-friendly, nicely-formatted message such as: 
from anagram_checker import AnagramChecker
import string
def show_menu():
    print("Welcome to Anagram Checker!")
    print("Here you can check if a word is real, and find out what anagrams are valid.")

def get_input(exit_char = "x"):
    invalid = True
    user_input = ""
    while invalid and user_input != exit_char:
        try:
            user_input = input(f"Enter a word or exit by entering '{exit_char}': ")
            if len(user_input.split()) > 1:
                raise ValueError("Must be a single word")
            for character in user_input:
                if character not in string.ascii_letters:
                    raise ValueError("Must be a word without numbers or special characters")
        except ValueError as e:
            print(e)
        except: 
            print("An error occurred")
        else:
            invalid = False        
    return user_input.strip()

def main():
    anagram_checker = AnagramChecker()
    user = ""
    while user != "x":
        show_menu()
        user = get_input()
        if user != "x":
            print(f"Your word was {user}")
            print(f"It was a {'valid' if anagram_checker.is_valid_word(user) else 'invalid'} word")
            print(f"Valid anagrams for your word include: {', '.join(anagram_checker.get_anagrams(user))}")
    print("Thank you! Goodbye")

if __name__ == "__main__":
    main()