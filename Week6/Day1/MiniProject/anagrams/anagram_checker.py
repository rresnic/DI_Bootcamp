# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.

# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
class AnagramChecker:
    def __init__(self, filepath="words.txt"):
        self.words = []
        with open(filepath, "r") as f:
            word_list = f.readlines()
            word_list = [line.strip() for line in word_list] # get rid of newlines
            self.words = set(word_list)
    def is_valid_word(self, word):
        word = word.upper()
        return word in self.words
    def is_anagram(self, word1, word2):
        word1 = word1.upper()
        word2 = word2.upper()
        if not self.is_valid_word(word1) or not self.is_valid_word(word2):
            return False
        if len(word1) != len(word2):
            return False
        for character in word1:
            if word1.count(character) != word2.count(character):
                return False
        return True
    def get_anagrams(self, user_word):
        return [word.capitalize() for word in self.words if len(word) == len(user_word) and word != user_word.upper() and self.is_anagram(user_word, word)] # again, I'm more comfortable with capital case
    
# anagrams = AnagramChecker()
# print(anagrams.is_valid_word("Lame"))
# print(anagrams.get_anagrams("Lame"))