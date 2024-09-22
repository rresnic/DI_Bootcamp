
// 🌟 Exercise 5 : Users
// Instructions

// Create a new structured HTML file and a new Javascript file



//     Add the code above, to your HTML file

//     Using Javascript:
//         Retrieve the div and console.log it
//         Change the name “Pete” to “Richard”.
//         Delete the second <li> of the second <ul>.
//         Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

//     Using Javascript:
//         Add a class called student_list to both of the <ul>'s.
//         Add the classes university and attendance to the first <ul>.

//     Using Javascript:
//         Add a “light blue” background color and some padding to the <div>.


// Which is it? Dan is in the second UL. I assumed Dan was more important. 
//         Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
//         Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
//         Change the font size of the whole body.

//     Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let container = document.getElementById("container");
console.log(container)
let pete = document.querySelector("#container + ul > li:last-child")
pete.textContent = "Richard";
let sarah = document.querySelector("ul:nth-of-type(2) > li:nth-of-type(2)")
sarah.remove();
let lis = document.querySelectorAll("ul > li:first-of-type");
for(let name of lis){
    name.textContent = "Yitzy";
}

let uls = document.getElementsByTagName("ul");
for(let bullets of uls){
    bullets.classList.add("student_list");
}
uls[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
let dan = uls[1].querySelector("li:last-child")
dan.style.visibility = "hidden";

pete.style.border ="1px solid black"

document.body.style.fontSize = "20px";