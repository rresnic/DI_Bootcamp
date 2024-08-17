class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, species, number = 1):
        if species in self.animals:
            self.animals[species] += number
        else:
            self.animals[species] = number

    def get_info(self):
        output_str = f"{self.name}'s farm\n\n"
        for key in list(self.animals.keys()):
            output_str += f"{key}: {self.animals[key]}\n"
        output_str += "\nE-I-E-I-O"    
        return output_str
    
    def get_animal_types(self):
        return sorted(list(self.animals.keys()))
    
    def get_short_info(self):
        output_str = f"{self.name}'s farm has "
        animal_list = self.get_animal_types()
        for i in range(len(animal_list)):
            if i == len(animal_list) - 1:
                output_str = output_str[:-2]
                output_str += " and " +  animal_list[i]
                if self.animals[animal_list[i]] > 1:
                    output_str += "s"
                output_str += "."
            else:
                output_str += animal_list[i]
                if self.animals[animal_list[i]] > 1:
                    output_str += "s"
                output_str += ", "
        return output_str

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())