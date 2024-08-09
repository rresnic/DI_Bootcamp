family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# family = {}
# ran out of time before shabbos for bonus
family_prices = []
ESCAPE = -1
family_members = list(family.keys())
for family_member in family_members:
    age = family[family_member]
    if age < 3:
        family_prices.append(0)
        print(f"For {family_member}, the price is 0")
    elif 3 <= age <= 12:
        family_prices.append(10)
        print(f"For {family_member}, the price is 10")
    else:
        family_prices.append(15)
        print(f"For {family_member}, the price is 15")
total_price = sum(family_prices)
print(f"Total price: {total_price}")