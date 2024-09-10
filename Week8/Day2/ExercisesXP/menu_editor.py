
# Create a file called menu_editor.py , which will have the following functions:
#     show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
#         View an Item (V)
#         Add an Item (A)
#         Delete an Item (D)
#         Update an Item (U)
#         Show the Menu (S)
#         Call the appropriate function that matches the user’s input.

#     add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#         If the item was added successfully print a message which states: item was added successfully.

#     remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#         If the item was deleted successfully – print a message to let the user know this was completed.
#         If not – print a message which states that there was an error.

#     update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
#         If the item was updated successfully – print a message to let the user know this was completed.
#         If not – print a message which states that there was an error.

#     show_restaurant_menu() - print the restaurant’s menu.

# When the user chooses to exit the program, display the restaurant menu and exit the program.
from menu_item import MenuItem
from menu_manager import MenuManager
from tabulate import tabulate

def view_item():
    item_name = input("Enter an item name - case sensitive, e.g. Apples: ")
    item = MenuManager.get_by_name(item_name)
    if not item:
        print(f"Item {item_name} not found")
    else:
        print(f"item : {item_name} costs {item.price}")

def add_item_to_menu():
    item_name = input("Enter an item name - case sensitive, e.g. Apples: ")
    item_price = input("Enter an item price - a whole number: ")
    item = MenuItem(item_name, item_price)
    if item.save():
        print("Item was added successfully")

def remove_item_from_menu():
    item_name = input("Enter an item name - case sensitive, e.g. Apples: ")
    item = MenuManager.get_by_name(item_name)
    if(item):
        results =item.delete()
        if(results): 
            print("Item Deleted")
        else:
            print("An Error occurred ")
    else:
        print("Item not found")

def update_item_from_menu():
    item_name = input("Enter the item name - case sensitive, e.g. Apples: ")
    item_price = input("Enter the item price - a whole number: ")
    new_item_name = input("Enter the new item name - case sensitive, e.g. Apples: ")
    new_item_price = input("Enter the new item price - a whole number: ")
    item = MenuManager.get_by_name_and_price(item_name, item_price)
    if (item):
        results = item.update(new_item_name, new_item_price)
        if results:
            print("Item updated")
        else:
            print("Error updating item")
    else:
        print("Item not found")


def show_restaurant_menu():
    items = MenuManager.all_item_rows()
    print(tabulate(items, ["Dish", "Price"]))

function_dict = {"V": view_item, "A": add_item_to_menu, "D": remove_item_from_menu, "U": update_item_from_menu, "S": show_restaurant_menu}
def get_valid_input(prompt, valid):
    invalid = True
    while invalid:
        user_input = input(prompt)
        if user_input in valid:
            invalid = False
            return user_input
        else:
            print("Invalid input.")
    
def show_user_menu():
    menu_string = """
Welcome to the Restaurant Program!
    Select one of these options:
    (V)iew an Item: (V)
    (A)dd an Item: (A)
    (D)elete an Item: (D)
    (U)pdate an Item: (U)
    (S)how the Menu: (S)
    or e(X)it the Program: (X): 
    """
    user_choice = get_valid_input(menu_string, ["V", "A","D", "U", "S", "X"])
    return user_choice

def main():
    while True:
        user_choice = show_user_menu()
        if user_choice == "X":
            break
        else:
            funct = function_dict[user_choice]
            funct()
    show_restaurant_menu()
    print("Goodbye!")

if __name__ == "__main__":
    main()
