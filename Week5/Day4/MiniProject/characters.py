class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.life = other.life - self.attack

    def __repr__(self):
        return f"{self.name}: Life: {self.life}, Attack: {self.attack}"

class Druid(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print("I protect the forest!")
    
    def meditate(self):
        self.life += 10
        self.attack -= 2
    
    def animal_help(self):
        self.attack += 5

    def fight(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.life = other.life - (0.75 * self.life + 0.75*self.attack)

class Warrior(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print("Taste my blade!")
    
    def train(self):
        self.life += 2
        self.attack += 2
    
    def roar(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.attack -= 3

    def brawl(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.life = other.life - (2*self.attack)
        self.life += .5 * self.attack

class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print("Tomes hold secrets to control the world!")
    
    def summon(self):
        self.attack += 3
    
    def curse(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.attack -= 2

    def cast_spell(self, other):
        if not isinstance(other, Character):
            raise TypeError("Cannot attack a noncharacter")
        other.life = other.life - (self.attack/self.life)
basic = Character("npc")
druid = Druid("Woodsy")
warrior = Warrior("Gimli")
mage = Mage("Raistlin", 5, 20)
print(warrior)
print(mage)
mage.cast_spell(warrior)
mage.summon()
mage.curse(warrior)
print(warrior)
print(mage)
warrior.roar(mage)
warrior.train()
warrior.brawl(mage)
print(warrior)
print(mage)
print(druid)
print(basic)
basic.basic_attack(druid)
druid.meditate()
druid.animal_help()
druid.fight(basic)
print(druid)
print(basic)