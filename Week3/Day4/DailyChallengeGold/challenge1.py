LINE_LENGTH = 19
CANDLE_SPACE = 11
TOP_PAD = 4
MIDDLE_PAD = 3
BOTTOM_PAD = 1
PADDING_CHAR = " "
NON_AGE_CHAR = "_"
BORDER_CHAR = "|"
user_age = int(input("Enter your age in years: "))
candles = user_age % 10
left_non = (CANDLE_SPACE - candles) //2
right_non = CANDLE_SPACE - candles - left_non


FIRST_STR = TOP_PAD * PADDING_CHAR + left_non * NON_AGE_CHAR + "i" * candles + right_non * NON_AGE_CHAR + TOP_PAD * PADDING_CHAR
SECOND_STR = MIDDLE_PAD * PADDING_CHAR + "|:H:a:p:p:y:|" + MIDDLE_PAD * PADDING_CHAR
THIRD_STR = BOTTOM_PAD * PADDING_CHAR + NON_AGE_CHAR * (MIDDLE_PAD - BOTTOM_PAD) + BORDER_CHAR + CANDLE_SPACE * PADDING_CHAR + BORDER_CHAR + NON_AGE_CHAR * (MIDDLE_PAD - BOTTOM_PAD) + BOTTOM_PAD * PADDING_CHAR
FOURTH_STR = BORDER_CHAR + (LINE_LENGTH - 2 ) * "^" + BORDER_CHAR
FIFTH_STR = BORDER_CHAR + ":B:i:r:t:h:d:a:y:" + BORDER_CHAR
SIXTH_STR = BORDER_CHAR + (LINE_LENGTH -2) * PADDING_CHAR + BORDER_CHAR
SEVENTH_STR = "~" * LINE_LENGTH

cake = [FIRST_STR, SECOND_STR, THIRD_STR, FOURTH_STR, FIFTH_STR, SIXTH_STR, SEVENTH_STR]
def is_leap_year( year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0 :
        return True
    return False

def get_birth_year (age):
    CURRENT_YEAR = 2024
    return CURRENT_YEAR - age

if not is_leap_year(get_birth_year(user_age)):
    for string in cake:
        print(string)
else:
    for string in cake:
        output_str = string + "   " + string
        print(output_str)




