// Exercise 2 : keys and values
// Instructions

//     Create a function that takes an object and returns the keys and values as separate arrays.
//     Return the keys sorted alphabetically, and their corresponding values in the same order.
// The same order is a pretty meaningless statement. Do you mean the same order as "sorted alphabetically" or as "the same order as the keys"
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]


// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// please explain the sorting for this... it's definitely not alphabetical.
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
function keysAndValues(obj){
    resultSet = [];
    let keys = Object.keys(obj);
    if(typeof keys[0] === "number"){
        keys.sort((a, b) => a - b);
    } else {
        keys.sort;
    }
    resultSet.push(keys);
    let values = [];
    for(let key of keys){
        values.push(obj[key]);
    }
    resultSet.push(values);
    return resultSet;
}

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));