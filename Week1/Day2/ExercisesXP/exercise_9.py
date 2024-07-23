MIN_HEIGHT = 145
TALL_STR = "You are tall enough to ride"
SHORT_STR = "You still need to grow some more to ride"
user_height = int(input("Enter your height in centimeters: "))
if user_height >= MIN_HEIGHT:
    print(TALL_STR)
else:
    print(SHORT_STR)