from game import Game
def show_menu():
    print("Welcome to Rock-Paper-Scissors!")
    print("Here you can play a (g)ame, (s)how scores or (q)uit: ")

def get_menu_choice(exit_char = "q"):
    invalid = True
    user_input = ""
    while invalid and user_input != exit_char:
        try:
            user_input = input(f"Choose your option (g, s, or q): ")
            print(user_input)
            if len(user_input.split()) > 1:
                raise ValueError("Must be a single word")
            valid_inputs = ["g","s","q"]
            if user_input not in valid_inputs:
                raise ValueError("Must be one of g, s, or q.")
        except ValueError as e:
            print(e)
        except: 
            print("An error occurred")
        else:
            invalid = False        
    return user_input

def show_scores(score_dict):
    print(f"Game Results:\nWon: {score_dict['won']}\nLost: {score_dict['lose']}\nDrew: {score_dict['drew']}")

def main():
    scores = {"won": 0, "lose": 0, "drew": 0}
    game = Game()
    user = ""
    while user != "q":
        show_menu()
        user = get_menu_choice()
        if user == "q" or user == "s":
            show_scores(scores)
        else:
            res = game.play()
            scores[res] += 1
    print("Thank you! Goodbye")

if __name__ == "__main__":
    main()