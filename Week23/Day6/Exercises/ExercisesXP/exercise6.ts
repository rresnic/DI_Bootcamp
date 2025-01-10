// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Person = {
    name:string;
    age:number;
}

type Job = {
    position:string; // Manager or Developer
    department:string;
}
type Employee = Person & Job;

function describeEmployee(e: Employee){
    if(e.position === "Manager") return `${e.name} is a manager`;
    if(e.position === "Developer") return `${e.name} is a developer`;
    return "Position not recognized"
}

let emp1:Employee = {
    name: "John",
    age: 20,
    position: "Manager",
    department: "Sales"
}
let emp2:Employee = {
    name: "Bob",
    age: 25,
    position: "Developer",
    department: "R&D"
}
let emp3:Employee = {
    name: "Anne",
    age: 30,
    position: "None",
    department: "None"
}

console.log(describeEmployee(emp1))
console.log(describeEmployee(emp2))
console.log(describeEmployee(emp3))