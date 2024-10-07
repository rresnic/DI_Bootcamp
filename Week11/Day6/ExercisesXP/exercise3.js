// Instructions

// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

//     Using methods taught in class, turn the users object into an array:
//     Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//     FYI : The number is their ID number.

//     Modify the outcome of part 1, by multipling the user’s ID by 2.
//     Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
entries = Object.entries(users);
console.log(entries);
// it's kind of cool that you can access the second value of an array without assigning the first. 
for( let [index, [, id]] of entries.entries()){
    entries[index][1] = id* 2;
}
console.log(entries);