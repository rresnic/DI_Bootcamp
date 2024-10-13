// Instructions

// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

    // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
    // Hint : Use the array methods taught in class and ternary operator.
    // interesting.

let sentence = ` choice is `;
for(let [index, color] of colors.entries()){
    
    (index <3)? console.log(`${index + 1}${ordinal[index + 1]}${sentence}${color}.`):  console.log(`${index + 1}${ordinal[0]}${sentence}${color}.`)
}