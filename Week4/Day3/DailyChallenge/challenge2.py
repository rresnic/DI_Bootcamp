def get_longest(string):
    words = string.split()
    max_word = ""
    for word in words:
        if len(word) > len(max_word):
            max_word = word
    return max_word

print(get_longest("Margaret's toy is a pretty doll."))
print(get_longest("A thing of beauty is a joy forever."))
print(get_longest("Forgetfulness is by all means powerless!"))