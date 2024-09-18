const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers)
let numberToString = numbers.toString();
console.log(numberToString)
let numbersJoinStringEmpty = numbers.join("");
console.log(numbersJoinStringEmpty)
let numbersJoinStringPlus = numbers.join("+");
console.log(numbersJoinStringPlus)
let numbersJoinStringSpace = numbers.join(" ");
console.log(numbersJoinStringSpace)

// You only need to loop up until the last index because the inner loop checks one step ahead
for(let i = 0; i < numbers.length -1; i++){
    // you only need to loop up until the last sorted index
    for(let j = 0; j < numbers.length -1 - i; j++){
        // if the current number is smaller, swap it forward. The goal is to have the smallest numbers on the right
        if(numbers[j] < numbers[j + 1]){
            // save the array value you are replacing in a temp
            let temp = numbers[j]
            // copy the larger number into the earlier index
            numbers[j] = numbers[j+1]
            // cioy the smaller number back into the array, but at the next index
            numbers[j+1] = temp
        }
    }
}

console.log(numbers)

    // Using the .toString() method convert the array to a string.
    // Using the .join()method convert the array to a string. Try passing different values into the join.
    // Eg .join(“+”), .join(” “), .join(“”)
    // Bonus : To do this Bonus look up how to work with nested for loops
    // Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
    // The output should be: [9,8,7,6,5,4,3,2,1,0]
    // Hint: The algorithm is called “Bubble Sort”
    //     Use a temporary variable to swap values in the array.
    //     Use 2 “nested” for loops (Nested means one inside the other).
    //     Add comments and console.log the result for each step, this will help you understand.
    //     Requirement: Don’t copy paste solutions from Google