# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

#     Create a function get_age(year, month, day)
#     Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
#     After calculating the age of a person, the function should return the age (the age is an integer).
#     Create a function can_retire(gender, date_of_birth).
#     It should call the get_age function (with what arguments?) in order to receive an age.
#     Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
#     Calculate. You may need to do a little more hard-coding here.
#     Return True if the person can retire, and False if he/she can’t.

# Some Hints

#     Ask for the user’s gender as “m” or “f”.
#     Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
#     Call can_retire to get a definite value for whether the person can or can’t retire.
#     Display a message informing the user whether they can re
# Why april 1947??
current_year = 2024
current_month = 8
current_day = 12
retirement_ages ={"m": 67, "f": 62}

def get_age(year, month, day):
    temp_year = year
    if month - current_month > 0:
        temp_year += 1
    elif month - current_month == 0:
        if day-current_day > 0:
            temp_year += 1
    return current_year - temp_year

def can_retire(gender, date_of_birth):
    if gender not in retirement_ages:
        print("invalid gender")
        return False
    limit = retirement_ages[gender]
    year, month, day = map(int, date_of_birth.split("/"))
    age = get_age(year, month, day)
    if age >= limit:
        return True
    else:
        return False

def display_retire(boo):
    if boo:
        print("You can retire")
    else:
        print("You can't retire")

def main():
    user_gender = input("Enter gender as 'm' or 'f': ")
    user_age = input("Enter date of birth in 'yyyy/mm/dd' format: ")
    display_retire(can_retire(user_gender, user_age))

main()