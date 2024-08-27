# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python OpenWeatherMap).
# Use this documentation for this Mini Project.
from dotenv import load_dotenv
import os
from pyowm.owm import OWM
import json
from datetime import datetime
from zoneinfo import ZoneInfo
from timezonefinder import TimezoneFinder
import matplotlib.pyplot as plt

# Load environment variables from .env file
load_dotenv()
# Access the environment variable
api_key = os.getenv('API_KEY')

def get_local_timezone(lat, lon):
    tzf = TimezoneFinder()
    return tzf.timezone_at(lat=lat, lng=lon)
# print(f"API Key: {api_key}")

owm = OWM(api_key)
reg = owm.city_id_registry()

# TODO separate some of these functions into modules
def get_location_input():
    city = input("Please enter a city name (e.g. Chicago): ")
    country = input("Pleae enter a two letter country code, (e.g. US, IL): ").upper()
    state = None
    if country == 'US':
        state = input("Please enter a two digit state code (e.g. OH, NY): ")
    return {"city": city, "country": country, "state": state}
    
def get_id_by_city_name(city, country, state=None):
    id = reg.ids_for(city,country,state, matching="exact")
    return id[0]

def get_celcius_temp(weather_obj):
    return weather_obj.temperature('celsius')['temp']

def get_weather_by_id(id):
    mgr = owm.weather_manager()
    weather = mgr.weather_at_id(id[0]).weather
    display_weather(weather, id[4], id[5])
    # print(f"Current weather: {weather.detailed_status}")
    # print(f"Current temperature: {get_celcius_temp(weather)} degrees Celcius")
    # print(get_wind_info(weather))
    print(get_local_sunrise_sunset(weather, id[4], id[5]))

def display_weather(weather, lat, lon):
    print(f"Weather: {weather.detailed_status}")
    print(f"Temperature: {get_celcius_temp(weather)} degrees Celcius")
    print(get_wind_info(weather))
    # print(get_local_sunrise_sunset(weather, lat, lon))

def get_3h_by_id(id):
    mgr = owm.weather_manager()
    forecast = mgr.forecast_at_id(id[0], "3h").forecast
    weathers = forecast.weathers
    local_zone = get_local_timezone(id[4], id[5])
    for weather in weathers:
        print(f"Time: {get_local_reference(weather_obj=weather, zone=local_zone)}")
        display_weather(weather, id[4], id[5])

def get_wind_info(weather_obj):
    output_str ="Wind Info: "
    wind = weather_obj.wind()
    for key in wind:
        output_str += key + ": " + str(wind[key]) + ", "
    output_str = output_str[:-2] + "."
    return output_str

def get_local_sunrise(weather_obj, zone):
    sunrise_utc = datetime.fromtimestamp(weather_obj.sunrise_time(), tz= ZoneInfo("UTC"))
    sunrise_local = sunrise_utc.astimezone(ZoneInfo(zone)).time()
    return sunrise_local
def get_local_sunset(weather_obj, zone):
    sunset_utc  = datetime.fromtimestamp(weather_obj.sunset_time(), tz= ZoneInfo("UTC"))
    sunset_local = sunset_utc.astimezone(ZoneInfo(zone)).time()
    return sunset_local
def get_local_reference(weather_obj, zone):
    ref_utc  = datetime.fromtimestamp(weather_obj.reference_time(), tz= ZoneInfo("UTC"))
    ref_local = ref_utc.astimezone(ZoneInfo(zone)).time()
    return ref_local

def get_local_sunrise_sunset(weather_obj, lat, lon):
    local_zone = get_local_timezone(lat, lon)
    sunrise = get_local_sunrise(weather_obj, local_zone)
    sunset = get_local_sunset(weather_obj, local_zone)
    return f"Sunrise: {sunrise}, Sunset: {sunset}"

def get_TLV():
    print("Tel Aviv Weather:")
    city_id= get_id_by_city_name("Tel Aviv", "IL")
    get_weather_by_id(city_id)

def get_TLV_forecast():
    city_id= get_id_by_city_name("Tel Aviv", "IL")
    get_3h_by_id(city_id)



# get_TLV_forecast()
# get_TLV()

def get_air_pollution_by_id(id):
    amng = owm.airpollution_manager()
    air_status = amng.air_quality_at_coords(id[4], id[5])
    display_air_pollution(air_status=air_status)

def display_air_pollution(air_status):
    print(f"Carbon Monoxide: {air_status.co}")
    print(f"Nitric Oxide: {air_status.no}")
    print(f"Nitrogen Dioxide: {air_status.no2}")
    print(f"Ozone: {air_status.o3}")
    print(f"Sulfur Dioxide: {air_status.so2}")
    print(f"Particulate Matter 2.5: {air_status.pm2_5}")
    print(f"Particulate Matter 10: {air_status.pm10}")
    print(f"Ammonia: {air_status.nh3}")
    print(f"Air Quality Index: {air_status.aqi}")

def get_air_forecast_by_id(id):
    amng = owm.airpollution_manager()
    forecast = amng.air_quality_forecast_at_coords(id[4], id[5])
    local_zone = get_local_timezone(id[4], id[5])

    for air_status in forecast:
        print(f"Time: {get_local_reference(weather_obj=air_status, zone=local_zone)}")
        display_air_pollution(air_status)

# city_id= get_id_by_city_name("Tel Aviv", "IL")
# get_air_pollution_by_id(city_id)
def get_humidity_forecast_by_id(id):
    mgr = owm.weather_manager()
    forecast = mgr.forecast_at_id(id[0], "3h").forecast
    weathers = forecast.weathers
    local_zone = get_local_timezone(id[4], id[5])
    # humidity_list = []
    for weather in weathers:
        print(f"Time: {get_local_reference(weather_obj=weather, zone=local_zone)}")
        print(weather.humidity)

def get_humidity_data_by_id(id):
    mgr = owm.weather_manager()
    forecast = mgr.forecast_at_id(id[0], "3h").forecast
    weathers = forecast.weathers
    daily_humidity = {}
    for weather in weathers:
        date = datetime.fromtimestamp(weather.reference_time(), tz=ZoneInfo("UTC")).date()
        humidity = weather.humidity
        if date not in daily_humidity:
            daily_humidity[date] = []
        daily_humidity[date].append(humidity)
    for date in daily_humidity:
        daily_humidity[date] = sum(daily_humidity[date]) / len(daily_humidity[date])
    return daily_humidity

def init_plot():
    plt.xlabel('Day')
    plt.ylabel('Humidity (%)')
    plt.title('Daily Humidity Forecast')
    plt.xticks(rotation=45)  # Rotate x-axis labels for better readability

def write_humidity_on_bar_chart(bars, humidity_values):
    for bar, value in zip(bars, humidity_values):
        plt.text(
            bar.get_x() + bar.get_width() / 2,  # X position: center of the bar
            bar.get_height() - 5,  # Y position: slightly below the top of the bar
            f'{value}%',  # The text to display (value and percent sign)
            ha='center',  # Horizontal alignment: center
            va='top',  # Vertical alignment: top
            color='white',  # Text color
            fontsize=10  # Font size
        )

def plot_humidity_by_day(daily_humidity):
    dates = list(daily_humidity.keys())[:3]
    humidity_values = list(daily_humidity.values())[:3]
    formatted_dates = [date.strftime('%m/%d') for date in dates]
    plt.figure(figsize=(10, 5))
    bars = plt.bar(formatted_dates, humidity_values, color='blue')
    init_plot()
    write_humidity_on_bar_chart(bars, humidity_values)
    plt.tight_layout()  # Adjust layout to fit labels
    plt.show()

def main():
    get_TLV()
    city = get_location_input()
    city_id =get_id_by_city_name(city["city"], city["country"], city["state"])
    get_weather_by_id(city_id)
    plot_humidity_by_day(get_humidity_data_by_id(city_id))
# city_id = get_id_by_city_name("Chicago", "US", "IL")
# plot_humidity_by_day(get_humidity_data_by_id(city_id))    

if __name__ == "__main__":
    main()
#     Get the current weather in Tel Aviv.
#     Get current wind info of Tel Aviv.
#     Get today’s sunrise and sunset times of Tel Aviv.
#     Display all these information in a user friendly way.

#     Recreate these steps, but this time, ask the user for a location (display the information in a user friendly way).
#         Instead of working with the name of the city, retrieve the id of the city.
#         Check out the documentation section : “Identifying cities and places via city IDs”.

#     Retrieve weather forecasts : The OpenWeatherMap free tier gives you access to 5 day forecasts. The forecasts contain the weather data in three-hour intervals.
#         The methods for retrieving the forecast are:
#             forecast_at_place('Los Angeles, US', '3h')
#             forecast_at_id(5391959, '3h')
#             forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')
#             Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.

#     Use this API to retrieve the Air Pollution in a specific city.


# Mini project : XP Ninja

# BONUS: Your goal is to produce a weather GUI that shows the three-day humidity forecast for a city of your choice.
# If you’ve never built a GUI with Python, don’t worry! We’ll be going through step by step how to build it. We will be using Matplotlib to
# plot the weather data. Matplotlib uses Tkinter behind the scenes to display the interactive GUI.


# You have to reproduce this bar chart:






# You will have to use :

#     the matplotlib module for the bar chart
#     the pytz and datetime module for the date
#     the pyowm module for the weather


# Instructions:

#     Start by updating the values for the ylabel and title by creating a function called init_plot().
#     Create a function called plot_temperatures() to determine the details of the bar chart.
#     Create a function called write_humidity_on_bar_chart() to display the % humidity in the bar chart.
#     Style the bar chart


