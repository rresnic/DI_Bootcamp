family_prices = []
ESCAPE = -1
age = int(input("Enter the age of someone who wants to see a movie, or -1 to finish: "))
while age != -1:
    if age < 3:
        family_prices.append(0)
    elif 3 <= age <= 12:
        family_prices.append(10)
    else:
        family_prices.append(15)
    age = int(input("Enter the age of someone who wants to see a movie, or -1 to finish: "))
total_price = sum(family_prices)
print(f"Total price: {total_price}")


# not really sure why these are the same exercise, it makes it confusing when we are required to use the exercise as the file name.
# also not sure what "restricted for people between the ages ..." Does it mean only they can watch or only they cannot watch? My assumptions: Between is noninclusive, restricted for means they cannot watch
# I used a secondary list and reversed it so I could pop by index. I could have used a while loop and only incremented if the age was allowed
teenagers = ["John", "Lyam", "Kyle", "John"] 
to_remove = []
for i in range(len(teenagers)):
    age = int(input(teenagers[i] + " Enter your age: "))
    if 16 < age < 21:
        to_remove.append(i)
to_remove = sorted(to_remove, reverse=True)
for index in to_remove:
    teenagers.pop(index)
print(teenagers)

# while loop version
# current_index = 0
# while current_index < len(teenagers):
#     age = int(input(teenagers[current_index] + " Enter your age: "))
#     if 16 < age < 21:
#         teenagers.pop(current_index)
#         continue
#     current_index += 1
# print(teenagers)