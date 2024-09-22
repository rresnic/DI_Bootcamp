// Exercise 7 : My Book List
// Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

//     In the body of the HTML page, create an empty section:
    // <section class="listBooks"></section>

//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//         title,
//         author,
//         image : a url,
//         alreadyRead : which is a boolean (true or false).

//     Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
let allBooks = [];
let book1 = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    image: "hp1",
    alreadyRead: true
}
let book2 = {
    title: "Harry Potter and the Deathly Hallows",
    author: "J. K. Rowling",
    image: "hp7",
    alreadyRead: false
}
allBooks.push(book1);
allBooks.push(book2);

let sect = document.getElementsByClassName("listBooks")[0];
for(let book of allBooks){
    let myDiv = document.createElement("div");
    let myDivText = document.createTextNode(`${book.title}, written by ${book.author}`);
    if(book.alreadyRead) {
        myDiv.style.color = "red";
    }
    myDiv.append(myDivText);
    // I think it looks better with the image on the next line
    myDiv.appendChild(document.createElement("br"))
    let myDivImg = document.createElement("img");
    myDivImg.src=book.image;
    myDivImg.style.width = "100px";
    myDivImg.style.height = "auto";
    myDiv.appendChild(myDivImg);

    sect.appendChild(myDiv);
}
//     Requirements : All the instructions below need to be coded in the js file:
//         Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//         For each book :
//             You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//             The width of the image has to be set to 100px.
//             If the book is already read. Set the color of the book’s details to red.
