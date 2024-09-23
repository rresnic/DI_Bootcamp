// Part I

//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.

setTimeout(()=>{alert("Hello World")}, 2000);

setTimeout(()=>{
    let parent = document.getElementById("container");
    let para = document.createElement("p");
    para.textContent = "Hello World";
    parent.appendChild(para);
}, 2000);
//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III

//     In your Javascript file, using setInterval, call a function every 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//     The interval will be cleared (ie. clearInterval), when the user will click on the button.
//     Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// I'm not entirely sure I understood the request.
let clear = document.getElementById("clear");
let interval = setInterval(()=>{
    let parent = document.getElementById("container");
    let paras = parent.querySelectorAll("p");
    if(paras.length >= 5){
        clearInterval(interval);
        return;
    }
    let para = document.createElement("p");
    para.textContent = "Hello World";
    parent.appendChild(para);
}, 2000)
clear.addEventListener("click", () => clearInterval(interval));
