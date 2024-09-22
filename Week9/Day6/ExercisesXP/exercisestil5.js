
//     Create a function call displayNumbersDivisible() that takes no parameter.

//     In the function, loop through numbers 0 to 500.

//     Console.log all the numbers divisible by 23.

//     At the end, console.log the sum of all numbers that are divisible by 23.

//     Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
//     368 391 414 437 460 483
//     Sum : 5313

// function displayNumbersDivisible(){
//     let divisibles = [];
//     for(let i = 0; i <= 500; i++){
//         if(i % 23 == 0){
//             divisibles.push(i);
//         }
//     }
//     console.log(divisibles.join(" "));
//     // use reduce by providing a function that will apply to each value of the array, with the initial value being index 0 if none is supplied.
//     console.log(divisibles.reduce((accumulator, currentValue) => accumulator + currentValue));
// }
// displayNumbersDivisible()

function displayNumbersDivisible(divisor){
    let divisibles = [];
    for(let i = 0; i <= 500; i++){
        if(i % divisor == 0){
            divisibles.push(i);
        }
    }
    console.log(divisibles.join(" "));
    // use reduce by providing a function that will apply to each value of the array, with the initial value being index 0 if none is supplied.
    console.log(divisibles.reduce((accumulator, currentValue) => accumulator + currentValue));
}
//     Bonus: Add a parameter divisor to the function.

//     displayNumbersDivisible(divisor)
displayNumbersDivisible(23)
//     Example:
displayNumbersDivisible(3) 
//     and their sum
//     displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
//     and their sum


// 🌟 Exercise 2 : Shopping List
// Instructions

//     Add the stock and prices objects to your js file.

//     Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

//     Create a function called myBill() that takes no parameters.

//     The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//         The item must be in stock. (Hint : check out if .. in)
//         If the item is in stock find out the price in the prices object.

//     Call the myBill() function.

//     Bonus: If the item is in stock, decrease the item’s stock by 1


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"]
function myBill(){
    let sum = 0;
    for(let item of shoppingList){
        console.log("logging", item)
        if(item in stock && stock[item] > 0){
            console.log("in stock");
            if(item in prices){
                sum += prices[item];
                stock[item] -= 1;
            }
        }
    }
    console.log(sum);
}

myBill();
// Exercise 3 : What’s in my wallet ?
// Instructions

// Note: Read the illustration (point 4), while reading the instructions

//     Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//         an item price
//         and an array representing the amount of change in your pocket.

//     In the function, determine whether or not you can afford the item.
//         If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//         If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

//     Change will always be represented in the following order: quarters, dimes, nickels, pennies.

//     A quarters is 0.25
//     A dimes is 0.10
//     A nickel is 0.05
//     A penny is 0.01



//     4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])

//     The value 4.25 represents the item’s price
//     The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
//     The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples


function changeEnough(itemPrice, amountOfChange){
    let sum = .25 * amountOfChange[0] + .10 * amountOfChange[1] + .05 * amountOfChange[2] + .01 * amountOfChange[3];
    return sum >= itemPrice;
}
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]) );
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// 🌟 Exercise 4 : Vacations Costs
// Instructions

// Let’s create functions that calculate your vacation’s costs:

//     Define a function called hotelCost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let nights = 0;
    do {
        nights = parseInt(prompt("Enter the number of nights you would like to stay: "));
    }while(isNaN(nights) || nights < 0)
    return 140*nights;        
}
//     Define a function called planeRideCost().
//         It should ask the user for their destination.
//         If the user doesn’t answer or if the answer is not a string, ask again.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination : 300$
function planeRideCost(){
    let destination = "";
    do {
        destination = prompt("Enter the destination: ");
    }while(destination === null || destination.trim(),length === 0)
    let price = 0;
    switch(destination){
        case "London":
            price = 183;
            break;
        case "Paris":
            price = 220;
            break;
        default:
            price = 300;
    }
    return price;        
}

function rentalCarCost(){
    let days = 0;
    do {
        days = parseInt(prompt("Enter the number of days you would like to rent the car: "));
    }while(isNaN(days) || days < 0)
    return 40*days;      
}
//     Define a function called rentalCarCost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car. The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5% discount.
//         The function should return the total price of the car rental.

//     Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost(){
    nights = hotelCost();
    plane = planeRideCost();
    car = rentalCarCost()
    return `The car cosr: $${car}, the hotel cost: $${nights}, the plane tickets cost: $${plane}`;
}
//     Call the function totalVacationCost()
// Please uncomment this. I don't like prompts being active while  testing the functions. I assume you want it alerted to match the prompts
alert(totalVacationCost());

// trying to do this with one promt, given the restrictions that you want the prompt to repeat if the data isn't valid, could be quite complicated. 
//     Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.







