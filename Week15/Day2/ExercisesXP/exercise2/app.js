import {people} from "./data.js";
const avgAge = persons =>{
    if(persons.length == 0){
        return;
    }
    const sum = persons.reduce((acc, num) => acc + num.age, 0)
    return sum/persons.length;
}
console.log("The average age is", avgAge(people));