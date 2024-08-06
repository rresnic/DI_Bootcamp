fruits = input("Enter your favorite fruits, separated by a space (e.g. apples bananas): ").split()
current_fruit = input("Input the name of a fruit (plural, or matching the same format as you put in earlier): ")
if current_fruit in fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")