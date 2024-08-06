sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

    # The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
    # We need to prepare the orders of the clients:
    #     Create an empty list called finished_sandwiches.
    #     One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
    # After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
while sandwich_orders.count("Pastrami sandwich") > 0:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
# simple method, but not the order you wanted. Could be easily solved by reversing the finished sandwich list
# while len(sandwich_orders) > 0:
#     finished_sandwiches.append(sandwich_orders.pop())
# for sandwich in finished_sandwiches:
#     print(f"I made your {sandwich}")

# more complex method
while len(sandwich_orders) > 0:
    made_sandwich = sandwich_orders[0]
    finished_sandwiches.append(made_sandwich)
    sandwich_orders.remove(made_sandwich)
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")
