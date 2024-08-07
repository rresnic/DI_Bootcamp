paragraph = "In these examples, we have used slicing to extract a range of characters from the sentence string. The 4:9 slice means that we are selecting characters starting from index 4 (inclusive) up to index 9 (exclusive), which correspond to the second word \"quick\". Similarly, the 10:15 slice means we are selecting characters starting from index 10 up to index 15 (exclusive), which correspond to the third word \"brown\"."
print(f"Total characters: {len(paragraph)}\nTotal sentences: {paragraph.count('.')}\nTotal words: {len(paragraph.split())}\nTotal unique words: {len(set(paragraph.split()))}")
