// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // because there is no declaration here, you can modify higher scoped variables within a block and that will stick. 
    }
    alert(`inside the funcOne function ${a}`); // 3
}

// #1.1 - run in the console:
funcOne() // 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError trying to reassign a const. 

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// Again, alert doesn't work in console. Assuming console.log.
// #2.1 - run in the console:
funcThree() // 0
funcTwo() // 5 (although no output)
funcThree() // 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError trying to change const. 

//#3
// are we running this from a browser? the window object doesn't exist in the console. 

function funcFour() {
    window.a = "hello"; 
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // In the console,.. errors out. In the browser, it sets a global "a" variable to "hello"
funcFive() // Isn't reached in the console... In the browser, alerts the string using the "hello"  value since it accesses the global a variable.

//#4
let a = 1;  // never accessed in this exercise
function funcSix() {
    let a = "test"; // sets block level a to test
    alert(`inside the funcSix function ${a}`); // uses "test"
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Absolutely nothing changes.

//#5
let a = 2;
if (true) {
    let a = 5; // sets a block level a to 5
    alert(`in the if block ${a}`); // uses that 5
}
alert(`outside of the if block ${a}`); // uses the 2 as it doesn't have access to the block level 5

// #5.1 - run the code in the console
// again, please stop claiming the code can be run in the console using alert. Please fix your instructions.
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Nothing will change, the scope is different so the values will behave exactly the same as let in this case. What's the point of this? It's pretty much exactly 4 except a function instead of if
