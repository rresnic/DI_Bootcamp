

    # Create a class called Family and implement the following attributes:
    #     members: list of dictionaries
    #     last_name : (string)

    # Implement the following methods:
    #     born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    #     is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
    #     family_presentation: a method that prints the family’s last name and all the members’ details.

    # Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

a =      [
            {'name':'Michael','age':35,'gender':'Male','is_child':False},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False}
        ]

class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on a new member: {kwargs['name']}!")
    def is_18(self, name): #the assumption is that only one person is named the same
        for member in self.members:
            if member["name"] == name:
                return member["age"] > 18
        return False
    def family_presentation(self):
        output_str = f"The {self.last_name} Family: \n"
        for member in self.members:
            for key in list(member.keys()):
                output_str += key + ": " + str(member[key] )+", "
            output_str = output_str[:-2] + ".\n"
        print(output_str)
    
if __name__ == "__main__":
    bornSein = Family(a, "Johnson")
    bornSein.born(name="John", age="20", gender="Male", is_child=False)
    print(bornSein.is_18("Michael"))
    bornSein.family_presentation()