
# ctions :

# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.


# Part I

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code

#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.


# Part II

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

#     Implement a classmethod that returns a Text instance but with a text file:

#         >>> Text.from_file('the_stranger.txt')

#     Hint: You need to open and read the text from the text file.

#     Now, use the provided the_stranger.txt file and try using the class you created above.


# Bonus:

#     Create a class called TextModification that inherits from Text.

#     Implement the following methods:
#         a method that returns the text without any punctuation.
#         a method that returns the text without any english stop-words (check out what this is !!).
#         a method that returns the text without any special characters.

# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

# I elected to make it case sensitive for now
class Text():
    def __init__(self, text):
        self.text = text

    def get_frequency(self, word):
        if word in self.text.split():
            return f"The word {word} appears {self.text.split().count(word)} times"
        else:
            return None
    def get_most_common(self):
        words= {}
        for word in self.text.split():
            if word in words:
                words[word] += 1
            else:
                words[word] = 1
        return max(words, key=words.get)

    def get_uniques(self):
        return set(self.text.split())

    @classmethod
    def from_file(cls, filepath):
        my_string =""
        with open(filepath, "r+") as f:
            for line in f:
                my_string += line
        return Text(my_string)

import os
print(os.getcwd())
sample_text ="""Copyright 1946 by ALFRED A. KNOPF, INC. All rights reserved. No part of this book may be reproduced in any form without permission in 
writing from the publisher, except by a reviewer who may quote brief passages in a review to be printed in a magazine or newspaper. Manufactured 
in the United States of America. Distributed in Canada by Random House of Canada Limited, Toronto. """
test = Text(sample_text)
print(test.get_frequency("in"))
print(test.get_frequency("Jabberwocky"))
print(test.get_most_common())
print(test.get_uniques())
test_2 = Text.from_file("the_stranger.txt")
print(test_2.get_most_common())
print(test_2.get_uniques())