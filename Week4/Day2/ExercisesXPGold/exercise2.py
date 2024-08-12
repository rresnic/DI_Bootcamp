    # Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
    # my understanding is that it wants exactly those 4.

def four_sum(x):
    four_listed = []
    for i in range(1, 5):
        four_listed.append(str(x) * i)
    sum = 0
    for i in four_listed:
        sum += int(i)
    return sum

print(four_sum(3))
    