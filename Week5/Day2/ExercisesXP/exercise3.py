
    # Create a new python file and import your Dog class from the previous exercise.
    # In the new python file, create a class named PetDog that inherits from Dog.
    # Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    # Add the following methods:
    #     train: prints the output of bark and switches the trained boolean to True

    #     play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

    #     do_a_trick: If the dog is trained the method should print one of the following sentences at random:
    #         “dog_name does a barrel roll”.
    #         “dog_name stands on his back legs”.
    #         “dog_name shakes your hand”.
    #         “dog_name plays dead”.

from exercise2 import Dog
from random import randint
class PetDog(Dog):
    trick_list = [" does a barrel roll", " stands on his back legs", " shakes your hand", " plays dead"]
    def __init__ (self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dogs):
        play_str = f"{self.name}, "
        for dog in dogs:
            play_str += dog.name +", "
        play_str = play_str[:-2]
        play_str += " all play together"
        print(play_str)
    
    def do_a_trick(self):
        if(self.trained):
            index = randint(0, len(PetDog.trick_list) -1)
            print(self.name + PetDog.trick_list[index] +".")

bob = PetDog("Bob", 2, 20)
bob.train()
bob.do_a_trick()

sam = Dog("Sam", 3, 30)
joe = Dog("Joe", 4, 14)
bob.play(sam, joe)