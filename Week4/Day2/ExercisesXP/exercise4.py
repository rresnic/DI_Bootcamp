import random

def got_lucky(number):
    if not 1 <= number <= 100:
        print("bad number")
        return 
    secret = int(100* random.random())
    if number == secret:
        print("You won!")
    else:
        print("Better luck next time")

got_lucky(1)

# below was used for testing to see that a success was in fact possible
# for i in range(1001):
#     got_lucky(1)