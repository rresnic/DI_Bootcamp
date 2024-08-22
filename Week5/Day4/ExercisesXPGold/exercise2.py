

    # Given an age in seconds, calculate how old someone would be on:
    #     Earth: orbital period 365.25 Earth days, or 31557600 seconds
    #     Mercury: orbital period 0.2408467 Earth years
    #     Venus: orbital period 0.61519726 Earth years
    #     Mars: orbital period 1.8808158 Earth years
    #     Jupiter: orbital period 11.862615 Earth years
    #     Saturn: orbital period 29.447498 Earth years
    #     Uranus: orbital period 84.016846 Earth years
    #     Neptune: orbital period 164.79132 Earth years
planet_dict = {}
def setup():
    global planet_dict
    planet_dict = {"Earth": 31557600}
    planet_list = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    planet_modifier = [0.2408467, 0.61519726, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132]
    for index, value in enumerate(planet_list):
        planet_dict[value] = planet_dict["Earth"] / planet_modifier[index]

setup()
print(list(planet_dict.items()))

def get_age(seconds, planet="Earth"):
    print(f"You are {seconds / planet_dict[planet]:.2f} {planet} years old") 
    
get_age(1000000000)