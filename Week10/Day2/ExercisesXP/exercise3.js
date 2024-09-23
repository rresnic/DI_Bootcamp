
    // Declare a global variable named allBoldItems.
var allBoldItems;
    // Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let para = document.getElementsByTagName("p")[0];

function getBoldItems(){
    let bolds = para.getElementsByTagName("strong");
    allBoldItems = [];
    for(let bold of bolds){
        allBoldItems.push(bold)
    }
}

function highlight(){
    for(let bold of allBoldItems){
        bold.style.color = "blue";
    }
}

function returnItemsToDefault(){
        for(let bold of allBoldItems){
        bold.style.color = "";
    }
}
getBoldItems();
para.addEventListener("mouseenter", highlight);
para.addEventListener("mouseleave", returnItemsToDefault)
    // Create a function called highlight() that changes the color of all the bold text to blue.

    // Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

    // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
