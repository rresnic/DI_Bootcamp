# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.
import datetime

def get_user_minutes():
    user_dob = input("Enter your date of birth in dd/mm/yyyy format: ").split("/")
    day = int(user_dob[0])
    month = int(user_dob[1])
    year = int(user_dob[2])
    birthday = datetime.datetime(year=year, month=month, day=day)
    today = datetime.datetime.now()
    interval = today - birthday
    print(f"You have lived for {(interval.days *1440)+ (interval.seconds / 60)}  minutes")


get_user_minutes()