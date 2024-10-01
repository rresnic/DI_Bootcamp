// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.
console.log(getGramDecl(1)) // invoked first to demonstrate declaration hoisting

function getGramDecl(kgs) {
    return 1000 * kgs;
}
//     Then, use function expression and invoke it.
const getGramExp = function(kgs){
    return 1000 * kgs;
}
console.log(getGramExp(1));
//     Write in a one line comment, the difference between function declaration and function expression.
// not much, but you can't invoke it before the definition. 
//     Finally, use a one line arrow function and invoke it.
const getGrams = kgs => 1000 * kgs;
console.log(getGrams(1))