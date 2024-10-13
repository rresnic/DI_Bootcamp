
//     Analyze these pieces of code before executing them. What will be the outputs ?

------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ['bread', 'carror', 'potatoe', 'chicken', 'apple', 'orange']
------2------
const country = "USA";
console.log([...country]);

// ["U", "S", "A"] spreading the string into the array automatically splits it
------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [undefined, undefined] due to empty slots being spread
