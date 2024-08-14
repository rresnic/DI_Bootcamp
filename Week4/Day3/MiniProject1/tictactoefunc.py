# To do this project, you basically need to create four functions:

#     display_board() – To display the Tic Tac Toe board (GUI).
#     player_input(player) – To get the position from the player.
#     check_win() – To check whether there is a winner or not.
#     play() – The main function, which calls all the functions created above.


board_base = [" " for _ in range(9)]
players = {0: " ", 1: "O", 2: "X"}
current_player = 1
current_board = board_base
winning_combinations = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
underline = "_______"
def display_board():
    print("\nTICTACTOE")
    print("*********")
    print("\u0332".join("0|1|2|3"))
    print("\u0332".join(f"1|{current_board[0]}|{current_board[1]}|{current_board[2]}"))
    print("\u0332".join(f"2|{current_board[3]}|{current_board[4]}|{current_board[5]}"))
    print(f"3|{current_board[6]}|{current_board[7]}|{current_board[8]}")

def get_full():
    for piece in current_board:
        if piece == " ":
            return False
    return True

display_board()
def check_win():
    if get_full():
        return True
    for combination in winning_combinations:
        current_piece = current_board[combination[0]]
        all_correct = True
        for number in combination:
            if current_piece != current_board[number] or current_piece == " ":
                all_correct = False
        if all_correct:
            return True
    return False
    


def change_player():
    global current_player
    current_player = 3 - current_player

def player_input(player):
    invalid_coord = True
    x_coord = 0
    y_coord = 0
    position = 0
    while invalid_coord:
        move = input(f"Player {players[current_player]}, enter your move in coordinates without spaces e.g. 1,1: ").split(",")
        x_coord = int(move[0])
        y_coord = int(move[1])
        if not 1 <= x_coord <= 3:
            print("Invalid coordinate")
        elif not 1 <= y_coord <= 3:
            print("Invalid y coordinate")     
        else:
            position = 3 * (y_coord - 1) + (x_coord -1)
            if current_board[position] == " ":
                invalid_coord = False
            else:
                print("Invalid location")
    return position

print(check_win())
def play():
    current_board = board_base
    while not check_win():
        move = player_input(current_player)
        current_board[move] = players[current_player]
        display_board()
        change_player()
    print("Game over")

play()
    



    

