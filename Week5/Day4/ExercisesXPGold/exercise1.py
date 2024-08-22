
    # Write a function that displays today’s date.
    # The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
    # Hint: Start by hardcoding the datetime and name of the upcoming holiday.
# I have no idea what the point of this is if we are hard coding dates and names, as exercises already covered time until new years day
import datetime 
import holidays

def display_next_holiday():
    today = datetime.datetime.now()
    il_holidays = holidays.IL(years=today.year)  # this is a dict-like object
    future_holidays = [x for x in list(il_holidays.keys()) if x > today.date()]
    # since the assumption is that this is sorted, we can just use the first. Also, this is going to be based on midnight, since actually calculating sundown by date is a mess.
    interval =datetime.datetime.combine(future_holidays[0], datetime.datetime.min.time()) - today
    print(f"Today is {today.strftime('%a %b %d %Y')}. The next holiday ({il_holidays[future_holidays[0]]}) is in {interval.days} days and {interval.seconds//3600}:{(interval.seconds%3600)//60}:{(interval.seconds%3600)%60} hours")

display_next_holiday()