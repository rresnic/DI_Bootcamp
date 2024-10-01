let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//     Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(x => console.log(x))
}
displayGroceries();

//     Create another arrow function named cloneGroceries.
//         In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//             Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? 
// No. Why would we? it's a primitive, so it's passed by value
const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user); // still John
    console.log(client); // Betty
    let shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    console.log(shopping); // added so there's something to see
    console.log(groceries); // added so there's something to see
}
//         In the function, create a variable named shopping that is equal to the groceries variable.
//             Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// yes, as the shallow copy done by the assignment operator passed it by reference so both point to the same object.
//             Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
// yes, for the same reason as before. 
//     Invoke the cloneGroceries function.
cloneGroceries()
