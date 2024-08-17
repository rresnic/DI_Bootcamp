class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

tony = Cat("Tony", 27)
bob = Cat("Bob", 15)
jack = Cat("Jack", 33)
cat_list = [tony, bob, jack]
def get_oldest(cats):
    oldest = cats[0]
    highest_age = oldest.age
    for cat in cats:
        if cat.age > highest_age:
            oldest = cat
            highest_age = cat.age
    
    return oldest

print(f"The oldest cat is {get_oldest(cat_list).name}, and is {get_oldest(cat_list).age} years old.")