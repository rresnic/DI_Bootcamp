// You can comment out things to test separately. Remember to use 11 to bypass the prompt loop if you don't comment it out
// 🌟 Exercise 1 : List of people
// Instructions

const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays

//     Write code to remove “Greg” from the people array.
// people.shift() simple method
// please remember that console.log is not dependable. 
console.dir(people);
people.splice(people.indexOf("Greg"), 1);
console.dir(people);
//     Write code to replace “James” to “Jason”.
people.splice(people.indexOf("James"),1, "Jason");
console.log(people);

//     Write code to add your name to the end of the people array.
people.splice(people.length, 0, "Yitzy");
console.log(people);
//     Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
//     Write code to make a copy of the people array using the slice method.
//         The copy should NOT include “Mary” or your name.
//         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//         Hint: Check out the documentation for the slice method
let copyPeople = people.slice(1,-1);
console.log(copyPeople);
//     Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// it returns -1 because it's not found (and this behavior was before they began allowing negative indexing)

//     Create a variable called last which value is the last element of the array.
let last = people.slice(-1)
console.log(last);
//     Hint: What is the relationship between the index of the last element in the array and the length of the array?
// -1. 

// Part II - Loops

//     Using a loop, iterate through the people array and console.log each person.
for(let name of people){
    console.log(name);
}
//     Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//     Hint: take a look at the break statement in the lesson.
for(let name of people){
    console.log(name);
    if(name == "Devon"){
        break;
    }
}

// 🌟 Exercise 2 : Your favorite colors
// Instructions

//     Create an array called colors where the value is a list of your five favorite colors.
const colors = ["Sappire", "Ruby", "Emerald", "Amber", "Onyx"];
//     Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
const suffixes = ["1st", "2nd", "3rd", "4th", "5th"]
for(let i = 0; i < colors.length; i++){
    console.log(`My ${suffixes[i]} choice is ${colors[i]}`);
}
//     Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus


// 🌟 Exercise 3 : Repeat the question
// Instructions

//     Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number;
do {
    number = parseInt(prompt("Enter an integer "));
} while (number < 10 || isNaN(number))
//     While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:

// Review about objects

//     Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//     Console.log the number of floors in the building.
console.log(building.numberOfFloors)

//     Console.log how many apartments are on the floors 1 and 3. 
// My understanding was separately. It's easy enough to add them instead
console.log(`floor 1 has ${building.numberOfAptByFloor.firstFloor} apartments and floor 3 has ${building.numberOfAptByFloor.thirdFloor} apartments`)

//     Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`The second tenant is ${building.nameOfTenants[1]}, he has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`)
//     Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
} 

// 🌟 Exercise 5 : Family
// Instructions

//     Create an object called family with a few key value pairs.
//     Using a for in loop, console.log the keys of the object.
//     Using a for in loop, console.log the values of the object.
const family = {
    members: ["Mom", "Dad", "Baby"],
    name: "Robinson",
    house: false
}
// both in one, could duplicate the loop and separate  the statements
for( let i in family){
    console.log(i)
    console.log(family[i])
}

// Exercise 6 : Rudolf
// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

//     Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let reindeerIntro = ""
for(let i in details) {
    reindeerIntro += i;
    reindeerIntro += " " +details[i] + " "
}
console.log(reindeerIntro.slice(0, -1))

// Exercise 7 : Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//     A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
//     Console.log the name of their secret society. The output should be “ABJKPS”
let secret = ""
for(let i of names.sort()){
    secret += i.slice(0, 1)
}
console.log(secret)