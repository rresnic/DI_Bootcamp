REPS = 5

user_list = []
for i in range(REPS):
    user_name = input("Enter a name:")
    user_age = int(input("Enter an age: "))
    user_score = int(input("Enter a score: "))
    user_list.append((user_name, user_age, user_score))

print("original", user_list)
print(sorted("sorted", user_list, key=lambda x: (x[0], x[1], x[2])))
