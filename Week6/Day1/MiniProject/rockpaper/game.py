# Part I - game.py

#     game.py – this file/module should contain a class called Game. It should have 4 methods:
#         get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.

#         get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).

#         get_game_result(self, user_item, computer_item) – Determine the result of the game.
#             Parameters:
#                 user_item – the user’s chosen item (rock/paper/scissors)
#                 computer_item – the computer’s chosen (random) item (rock/paper/scissors)
#                 Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

#         play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
#             Get the user’s item (rock/paper/scissors) and remember it

#             Get a random item for the computer (rock/paper/scissors) and remember it

#             Determine the results of the game by comparing the user’s item and the computer’s item
#                 Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”

#                 Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.
from random import choice
class Game:
    choices = ["rock", "paper", "scissors"]
    choice_dict = {"rock": 1, "paper":2, "scissors":3} # this will be replaced by an enum at some point

    def __init__(self) -> None:
        pass
    def get_user_item(self):
        invalid = True
        while invalid:
            try:
                user_item = input("Select an item (rock/paper/scissors): ")
                if user_item not in Game.choices:
                    raise ValueError("Must be a valid choice")
            except:
                print("Must be rock/paper/scissors")
            else:
                invalid = False
        return user_item
    
    def get_computer_item(self):
        return choice(Game.choices)
    def get_game_result(self, user_item, computer_item):
        outcome = (Game.choice_dict[user_item] - Game.choice_dict[computer_item]) % len(Game.choice_dict)
        if outcome == 0:
            return "drew"
        elif outcome == 1:
            return "won"
        else:
            return "lose"
    def play(self):
        user = self.get_user_item()
        computer = self.get_computer_item()
        res = self.get_game_result(user, computer)
        print(f"You selected {user}. The computer selected {computer}. You {res}")
        return res
