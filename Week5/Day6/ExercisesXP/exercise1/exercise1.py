
    # Download this word list

    # Save it in your development directory.

    # Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

    # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
    #     use the words list to get your random words.
    #     the amount of words should be the value of the length parameter.

    # Take the random words and create a sentence (using a python method), the sentence should be lower case.

    # Create a function called main which will:
    #     Print a message explaining what the program does.

    #     Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
    #         If the user inputs incorrect data, print an error message and end the program.
    #         If the user inputs correct data, run your code.

 # assumption made: between means non-inclusive
import random
def get_words_from_file(filepath):
    word_set = None
    with open(filepath, "r") as f:
        word_list = f.readlines()
        word_list = [line.strip() for line in word_list] # get rid of newlines
        word_set = set(word_list)
    return word_set

word_list = get_words_from_file("sowpods.txt")
def get_random_sentence(length):
    output_str = ""
    words = list(word_list)
    for i in range(length):
        output_str += random.choice(words) + " "
    if len(output_str):
        output_str = output_str[:-1]
        output_str += "."
    return output_str.capitalize() # I'm more comfortable with the first letter matching expected sentence capitalization

# print(get_random_sentence(5))

# below is if you wanted to keep asking for a valid length
def get_length(lower=3, upper = 19):
    user_input = None
    while True:
        try:
            user_input = int(input("Enter sentence length (between 2 and 20 not inclusive): "))
            if lower <= user_input <= upper:
                break
        except:
            print("Invalid input")
    return user_input

def main():
    print("This program generates a sentence of variable length from a list of words")
    try:
        user_input = int(input("How long do you want the sentence to be (between 2 and 20 not inclusive)? "))
        if not (3 <= user_input <= 19):
            raise ValueError("Must be valid input.")
    except:
        print("Sorry, Invalid input received")
    else:
        print(get_random_sentence(user_input))

if __name__ == "__main__":
    main()