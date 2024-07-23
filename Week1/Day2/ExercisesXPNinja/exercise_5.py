max_len = 0
user_input = "Hello"
while(user_input != "exit"):
    user_input = input("Enter the longest sentence you can without the letter 'A': ")
    if "A" in user_input:
        print("That didn't count! try one without an 'A'")
    elif len(user_input) > max_len:
        max_len = len(user_input)
        print(f"Congratulations, your record is now {max_len}")
print("Thanks for playing")