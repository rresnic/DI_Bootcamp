import datetime
# Create a function that displays the amount of time left from now until January 1st.
def display_nyd_countdown():
    today = datetime.datetime.now()
    nyd = datetime.datetime(year=today.year +1, month = 1, day = 1)
    interval = nyd - today
    print(f"The 1st of January is in {interval.days} days and {interval.seconds//3600}:{(interval.seconds%3600)//60}:{(interval.seconds%3600)%60} hours")

display_nyd_countdown()