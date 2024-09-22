
// 🌟 Exercise 6 : Change the navbar
// Instructions

// Create a new structured HTML file and a new Javascript file




//     Add the code above, to your HTML file

//     Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let nav = document.getElementById("navBar");
nav.setAttribute("Id", "socialNetworkNavigation");


//     We are going to add a new <li> to the <ul>.
//         First, create a new <li> tag (use the createElement method).
//         Create a new text node with “Logout” as its specified text.
//         Append the text node to the newly created list node (<li>).
//         Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

let newLi = document.createElement("li");
let liContent = document.createTextNode("Logout");
newLi.append(liContent);
nav.children[0].appendChild(newLi);
//     Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

console.log(nav.children[0].firstElementChild.textContent);
console.log(nav.children[0].lastElementChild.textContent);