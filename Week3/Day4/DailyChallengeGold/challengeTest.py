from datetime import datetime
user_birth = input("Enter your birthday (dd/mm/yyyy): ")
user_birth_year = int(user_birth.split("/")[2])
current_year = datetime.now().year
user_age = current_year - user_birth_year

cake_bottom = '''
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
'''
top_string= "       "
candle_space = 11
non_age_character ="_"
candles = user_age % 10
candle_char = "i"
left_non_age = (candle_space - candles) // 2
right_non_age = candle_space - candles- left_non_age
top_string = top_string + (left_non_age * non_age_character) + (candles * candle_char) + (right_non_age * non_age_character)

cake_bottom = top_string + cake_bottom
def is_leap_year( year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0 :
        return True
    return False
if not is_leap_year(user_birth_year):
    print(cake_bottom)
else:
    print(cake_bottom)
    print(cake_bottom)