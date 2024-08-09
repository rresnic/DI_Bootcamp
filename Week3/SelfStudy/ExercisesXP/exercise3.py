# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green
brand = {"name": "Zara", "creation_date" : 1975, "creator_name": "Amancio Ortega Gaona", "type_of_clothes": ["men", "women", "children", "home"], "international_competitors": ["Gap", "H&M", "Benetton"], "number_stores": 7000, "major_color": {"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]}}

brand["number_stores"] = 2
print(f"Zara's clients are {' and '.join(brand['type_of_clothes'])}")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(list(brand.keys()))
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
def update_dict(dict_target, dict_to_add):
    for key in list(dict_to_add.keys()):
        dict_target[key] = dict_to_add[key]
update_dict(brand, more_on_zara)
print(brand["number_stores"])