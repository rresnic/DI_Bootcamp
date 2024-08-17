
    # Create a class called Zoo.
    # In this class create a method __init__ that takes one parameter: zoo_name.
    # It instantiates two attributes: animals (an empty list) and name (name of the zoo).
    # Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
    # Create a method called get_animals that prints all the animals of the zoo.
    # Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

    # Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    # Example

    # { 
    #     1: "Ape",
    #     2: ["Baboon", "Bear"],
    #     3: ['Cat', 'Cougar'],
    #     4: ['Eel', 'Emu']
    # }


    # Create a method called get_groups that prints the animal/animals inside each group.
    # Create an object called ramat_gan_safari and call all the methods.
    # Tip: The zookeeper is the one who will use this class.
    # Example

    # Which animal should we add to the zoo --> Giraffe
    # x.add_animal(Giraffe)
class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []
        self.animal_groups = {} # required for 6 and 7
    
    def add_animal(self, animal):
        if animal not in self.animals:
            self.animals.append(animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    def sort_animals(self):
        # the instructions for this and the next part are really unclear
        current_letter = ""
        current_group = 0
        for animal in sorted(self.animals):
            if animal[0] == current_letter:
                if type(self.animal_groups[current_group][0]) == str:
                    new_list = []
                    new_list.append(self.animal_groups[current_group])
                    new_list.append(animal)
                    self.animal_groups[current_group] = new_list
                else:
                    self.animal_groups[current_group].append(animal)
            else:
                current_letter = animal[0]
                current_group += 1
                self.animal_groups[current_group] = animal

    def get_groups(self):
        for group in self.animal_groups:
            print(f"{group}: {self.animal_groups[group]} ")
            
ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Parakeet")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Parakeet")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()