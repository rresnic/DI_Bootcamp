from datetime import datetime

def display_date():
    print(datetime.now().strftime("%a %b %Y"))

display_date()