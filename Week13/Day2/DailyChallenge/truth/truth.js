// Create a function that returns true if all parameters are truthy, and false otherwise.
function allTruthy(...args){
    for(let arg of args){
        if(!arg){
            return false;
        }
    }
    return true;
}
console.log(allTruthy(true, true, true)); // true

console.log(allTruthy(true, false, true)) ; // false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false