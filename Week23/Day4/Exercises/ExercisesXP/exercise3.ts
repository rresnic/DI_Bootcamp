class Animal{
    constructor(public name:string) {
        
    }
    public makeSound():string{
        return "Moo"
    }
}
class Dog extends Animal {
    constructor(public name:string) {
        super(name)
    }
    public makeSound():string{
        return "Woof";
    }
}
let spot = new Dog("Spot");
console.log(spot.makeSound())