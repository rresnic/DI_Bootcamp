type Person = {
    name:string;
    age:number;
}
type Address = {
    street:string;
    city:string;
}
type PersonWithAddress = Person & Address;
let pa1 = {
    name: "John",
    age: 25,
    street: "Betzelel",
    city: "Tel Aviv"
};
console.log(pa1)