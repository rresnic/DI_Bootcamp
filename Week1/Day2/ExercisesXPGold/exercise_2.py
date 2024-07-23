SPRING = [3,4,5]
SUMMER = [6, 7, 8]
AUTUMN = [9, 10, 11]
WINTER = [12, 1, 2]
current_month = int(input("Enter the current month (1 to 12): "))
if current_month in SPRING:
    print("Spring")
elif current_month in SUMMER:
    print("Summer")
elif current_month in AUTUMN:
    print("Autumn")
elif current_month in WINTER:
    print("Winter")
else:
    print("Sorry, something was wrong with your input")