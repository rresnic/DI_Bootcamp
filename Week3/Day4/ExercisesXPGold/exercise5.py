ALPHABET_STRING = "abcdefghijklmnopqrstuvwxyz"
vowels = set("aeiou")
for character in ALPHABET_STRING:
    if character in vowels:
        print(f"{character} is a vowel")
    else:
        print(f"{character} is a consonant")