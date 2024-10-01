// You will use nested functions, to open a new juice bar.
// Part I:

//     The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

//     The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// again. what is your absurd obsession with displaying on the dom?? This is pointless. Either provide or request a structured HTML file and specify how exactly it should be displayed, or don't bother with this DOM and just console log it. 
//     Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// What in the world do you want from this? 
// function makeJuice(size){
//         function addIngredients(a, b, c){
//             let mySentence = `The client wants a ${size} juice, containing ${a}, ${b} and ${c}`;
//             let myP = document.createElement("p");
//             let myNode = document.createTextNode(mySentence)
//             myP.append(myNode);
//             document.body.appendChild(myP);
//         }
//     addIngredients("lemons", "limes", "strawberries");
// }

// makeJuice("large");
// Part II:
function makeJuice(size){
    let ingredients = []
    function addIngredients(a, b, c){
        ingredients.push(a, b, c);
    }
    addIngredients("lemons", "limes", "strawberries");
    addIngredients("kiwi", "watermelon", "cherries");

    function displayJuice(){
        let mySentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")},`;
        let myP = document.createElement("p");
        let myNode = document.createTextNode(mySentence)
        myP.append(myNode);
        document.body.appendChild(myP);
    }
    
    displayJuice();
}

makeJuice("large");
//     In the makeJuice function, create an empty array named ingredients.

//     The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

//     Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//     The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
