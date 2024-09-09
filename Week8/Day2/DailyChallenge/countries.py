import sqlite3
from tabulate import tabulate
import requests
import random


def run_query(query, params=None):
    try:
        connection = sqlite3.connect("countries.db")
        cursor = connection.cursor()
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        connection.commit()
        results = cursor.fetchall()
        connection.close()
        return results
    except sqlite3.Error as e:
        print(e)

def create_country_table():
    # name, capital, flag, subregion, population
    query = """CREATE TABLE IF NOT EXISTS countries (
            id INTEGER PRIMARY KEY, 
            name TEXT,
            capital TEXT, 
            flag TEXT, 
            subregion TEXT,
            population INT 
    );
    """
    
    result = run_query(query)
    return result

def insert_country(country):
    name = country['name']['common']
    capital = country['capital'][0] if 'capital' in country and country['capital'] else 'No Capital'
    flag = country['flag']
    subregion = country['subregion'] if 'subregion' in country and country['subregion'] else 'No Subregion'
    population = country['population']
     # SQL query using parameterized placeholders
    query = """
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (?, ?, ?, ?, ?);
    """
    
    # Tuple of values to safely pass into the query
    params = (name, capital, flag, subregion, population)
    
    result = run_query(query, params)
    # this failed due to apostrophes in capital cities
    # query = f"""
    #     INSERT INTO countries (name, capital, flag, subregion, population)
    #     VALUES (
    #         '{name}',
    #         '{capital}',
    #         '{flag}',
    #         '{subregion}',
    #         {population}
    #     );
    # """
    # result = run_query(query)
    return result

def get_countries():
    query = "SELECT * FROM countries"
    result = run_query(query)
    return result

def print_countries():
    countries = get_countries()
    print(tabulate(countries, headers=["id", "name", "capital", "flag", "subregion", "population"]))

def get_ten():
    # Fetch all countries from the REST Countries API
    response = requests.get("https://restcountries.com/v3.1/all")

    # Check if the request was successful
    if response.status_code == 200:
        countries = response.json()
        
        # Randomly select 10 countries
        random_countries = random.sample(countries, 10)
        
        # Print the selected countries
        for country in random_countries:
            insert_country(country)
    else:
        print("Error fetching country data.")

def main():
    create_country_table()
    print_countries()
    print("Getting 10 more")
    get_ten()
    print_countries()

if __name__ == '__main__':
    main()