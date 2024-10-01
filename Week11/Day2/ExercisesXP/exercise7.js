// John has just signed in to your website and you want to welcome him.

//     Create a Navbar in your HTML file.
//     In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//     The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// This is a terribly written exercise. Which HTML file? What do you mean "his profile picture"? Are we suppose to waste time downloading a bunch of fake image files and creating a login system? 
// I'm not wasting time on that. You can inspect the page to verify that the corresponding image src is named _1 _2 etc. I see no reason to make it look particularly good either. 

let users = {
    "john": {
        profile_pic : "img_1.png"
    },
    "barry": {
        profile_pic : "img_2.png"
    }
};

(function setGreetings(username){
    let navbar = document.getElementById("navbar");
    let newDiv = document.createElement("div")
    let newText = document.createTextNode(username);
    let newImg = document.createElement("img");
    newImg.style.height = '50px';
    newImg.style.width = '50px';
    newImg.src = users[username].profile_pic;
    newDiv.append(newText);
    newDiv.appendChild(newImg);
    navbar.appendChild(newDiv)
})("john")