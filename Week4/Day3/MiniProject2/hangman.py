import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 
display_word = ["_" for _ in range(len(word))]
# "borrowed" pics
HANGMAN_PICS = ['''
     +---+
         |
         |
         |
       ===''', '''
     +---+
     O   |
         |
         |
       ===''', '''
     +---+
     O   |
     |   |
         |
       ===''', '''
      +---+
      O   |
     /|   |
          |
      ===''', '''
      +---+
      O   |
     /|\  |
          |
        ===''', '''
      +---+
      O   |
     /|\  |
     /    |
      ===''', '''
       +---+
       O   |
      /|\  |
      / \  |
       ===''']

    ### YOUR CODE STARTS FROM HERE ###

    # The computer choose a random word and mark stars for each letter of each word.
    # Then the player will guess a letter.
    #     If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
    #     If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
    #     The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
    #     The player can’t guess the same letter twice.

guessed = set()

def display_board():
    print("***Hangman***")
    for char in display_word:
        print(char, end =" ")
    print(HANGMAN_PICS[len(guessed)])
    for char in guessed:
        print(char, end= ",")
    print("\n")

def player_move():
    invalid_input = True
    user_guess = ""
    while invalid_input:
        user_guess = input("Guess a letter:")
        if user_guess not in guessed and len(user_guess) == 1:
            invalid_input = False
        else:
            print("Invalid guess")
    guessed.add(user_guess)
    return user_guess

def check_win():
    return "".join(display_word) == word

def check_loss():
    return len(guessed) == 6

def swap_letters(character, display, target):
    indices = [index for index, char in enumerate(target) if char == character]
    for index in indices:
        display_word[index] = character

def play():
    display_board()
    while not check_win() and not check_loss():
        global errors
        guess = player_move()
        if guess in word:
            swap_letters(guess, display_word, word)
        display_board()
    if check_win():
        print("You won!")
    else:
        print("You lost")

play()