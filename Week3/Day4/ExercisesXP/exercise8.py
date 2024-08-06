topping_list = []
ESCAPE = "quit"
BASE_PRICE = 10
TOPPING_PRICE = .25
INPUT_MESSAGE = "Enter a new Topping or 'quit' to finish': "
new_topping = input(INPUT_MESSAGE)
while new_topping != ESCAPE:
    print(f"Added {new_topping}.")
    topping_list.append(new_topping)
    new_topping = input(INPUT_MESSAGE)
print(topping_list,"Total Price:",  BASE_PRICE + (TOPPING_PRICE * len(topping_list))) # The format of this was unclear.