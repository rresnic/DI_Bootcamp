import random
num_games = 0
won_games = 0
winning_number = int(10 *random.random())
guess = int(input("Guess a number between 1 and 9, inclusive, or -1 to quit: "))
while guess != -1:
    if guess == winning_number:
        print("Winner")
        won_games += 1
        winning_number = int(10 *random.random())
    else:
        print("Better luck next time")
    num_games += 1
    guess = int(input("Guess a number between 1 and 9, inclusive, or -1 to quit: "))
print(f"You won: {won_games} and made {num_games - won_games} wrong guesses")