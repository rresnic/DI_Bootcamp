
    # Create a function called get_random_temp().
    #     This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
    #     Test your function to make sure it generates expected results.

    # Create a function called main().
    #     Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
    #     Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

    # Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
    #     below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
    #     between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
    #     between 16 and 23
    #     between 24 and 32
    #     between 32 and 40

    # Change the get_random_temp() function:
    #     Add a parameter to the function, named ‘season’.
    #     Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
    #     Now that we’ve changed get_random_temp(), let’s change the main() function:
    #         Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
    #         Use the season as an argument when calling get_random_temp().

    # Bonus: Give the temperature as a floating-point number instead of an integer.
    # Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

import random
def get_bounded_random(lower_bound, upper_bound):
    if lower_bound < 0:
        return (upper_bound - lower_bound) * random.random() + lower_bound # lower bound should be negative
    else:
        return (upper_bound - lower_bound) * random.random() + lower_bound

# version at part 1-3
# def get_random_temp():
#     upper = 40
#     lower = -10
#     return int(get_negative_random (lower, upper))
def get_season_console():
    month = int(input("Enter the current month (January = 1, etc): "))
    if month in [1, 2, 12]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "fall"
    else:
        print("Invalid month. Assuming 1 (January)")
        return "winter"

season_temps= {"winter": {"upper": 16, "lower": -10}, "spring": {"upper": 32, "lower": 23}, "summer": {"upper": 40, "lower": 23}, "fall": {"upper": 23, "lower": 5}}
def get_random_temp(season):
    if season not in season_temps:
        return "Invalid season"
    upper = season_temps[season]["upper"]
    lower = season_temps[season]["lower"]
    return (get_bounded_random(lower, upper))

def display_temp_message(temp):
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp < 23:
        print("It's cool outside. maybe bring a sweater")
    elif temp < 32:
        print("It's quite nice outside")
    else:
        print("Scorching heat! Maybe go sleeveless today")

def main():
    # season = input("What season is it? (winter, spring, summer or fall): ")
    season = get_season_console()
    temperature = get_random_temp(season)
    print(f"The current temperature is {temperature:.2f} degrees Celsius")
    display_temp_message(temperature)

main()