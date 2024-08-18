
    # Create a class called Dog with the following attributes name, age, weight.
    # Implement the following methods in the Dog class:
    #     bark: returns a string which states: “<dog_name> is barking”.
    #     run_speed: returns the dogs running speed (weight/age*10).
    #     fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

    # Create 3 dogs and run them through your class.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age * 10)
    
    def fight(self, other_dog):
        winner = self
        if self.run_speed() * self.weight  < other_dog.run_speed() * other_dog.weight:
            winner = other_dog
        return f"{winner.name} won the fight"
    
bob = Dog("Bob", 10, 20)
joe = Dog("Joe", 5, 20)
ian = Dog("Ian", 2, 5)

print(ian.bark())
print(ian.run_speed())
print(ian.fight(bob))