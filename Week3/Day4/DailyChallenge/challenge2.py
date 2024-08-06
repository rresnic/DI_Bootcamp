user_word = input("Enter a word: ")
if len(user_word):
    current_letter = user_word[0]
else:
    print("Word not found")
current_index = 0
final_word = current_letter
while current_index < len(user_word) - 1:
    current_index += 1
    if user_word[current_index] == current_letter:
        continue
    else:
        final_word += user_word[current_index]
        current_letter = user_word[current_index]
print(f"user's word : {user_word} -> {final_word}")
        