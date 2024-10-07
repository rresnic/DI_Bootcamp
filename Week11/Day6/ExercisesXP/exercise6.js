

    // Evaluate these (ie True or False)

    // [2] === [2]  // false  
    // {} === {} // false 
    // (object and array equality is always false unless it's the same reference)


    // What is, for each object below, the value of the property number and why?

    // const object1 = { number: 5 }; 
    // 5
    // const object2 = object1;  // points to same object no copying done
    // 5
    // const object3 = object2;  // points to same object no copying  done
    // 5
    // const object4 = { number: 5}; // new object entirely
// 5
    // object1.number = 4;
    // console.log(object2.number) // 4
    // console.log(object3.number) // 4
    // console.log(object4.number) // 5 -not sure why this is even a question, there is no link to any other object


    // Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
    // Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
        
    }
    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}
    // Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
    // For example: Moooo I'm a cow, named Lily and I'm brown and white
let farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));