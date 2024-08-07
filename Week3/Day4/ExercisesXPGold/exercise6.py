words = input("Enter 7 words, separated by spaces: ").split()
letter = input("Enter a letter: ")
for word in words:
    if letter in word:
        print(word.index(letter))
    else:
        print(f"{letter} does not appear in {word}")
