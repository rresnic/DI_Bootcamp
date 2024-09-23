// Retrieve the form and console.log it.
let form = document.getElementsByTagName("form")[0];
console.log(form);
// Retrieve the inputs by their id and console.log them.
let fnameById = document.getElementById("fname");
console.log(fnameById)
let lnameById = document.getElementById("lname");
console.log(lnameById)
let buttonById = document.getElementById("submit");
console.log(buttonById);
// Retrieve the inputs by their name attribute and console.log them.
let fname = form.elements["firstname"];
let lname = form.elements["lastname"];
let buttonName = form.elements["submit"];
console.log(fname);
console.log(lname);
console.log(buttonName);
// When the user submits the form (ie. submit event listener)
function insertLi(parent, value, model){
    let newLi = document.createElement("li");
    let output = `${value} ${model}`;
    let text = document.createTextNode(output);
    newLi.append(text);
    parent.appendChild(newLi);
}
let userAnswer = document.getElementsByClassName("usersAnswer")[0];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let fname_value = fname.value;
    let lname_value= lname.value;
    if(fname_value.length == 0 || lname_value.length == 0) return;
    insertLi(userAnswer, fname_value, 'is the first name of the user. ');
    insertLi(userAnswer, lname_value, 'is the last name of the user. ');

})
//     use event.preventDefault(), why ?
//     get the values of the input tags,

// There is no instruction as to what to do if they are empty... I just returned without continuing. 
//     make sure that they are not empty,
//     create an li per input value,
//     then append them to a the <ul class="usersAnswer"></ul>, below the form