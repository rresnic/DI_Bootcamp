let fnameField = document.getElementById("fname");
let lnameField = document.getElementById("lname");
let myForm = document.getElementById("myForm");
let outputDiv = document.getElementById("output");
function printOutput(){
    let name = fnameField.value;
    let lastname = lnameField.value;
    
    // I don't really know why you wanted it to be in json form, but here goes. 
    let myJson = {
        name,
        lastname
    };

    let newP = document.createElement("p");
    newP.textContent= JSON.stringify(myJson);
    outputDiv.appendChild(newP);
}

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    printOutput();
})