
    // Using a DOM property, retrieve the h1 and console.log it.
let headline = document.getElementsByTagName("h1")[0];
console.log(headline);
    // Using DOM methods, remove the last paragraph in the <article> tag.
let lastP = document.querySelector("article> p:last-child");
lastP.remove();
    // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let subheading = document.getElementsByTagName("h2")[0];
subheading.addEventListener("click", () => {
    subheading.style.backgroundColor = "red";
});

    // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let subSubHeading = document.getElementsByTagName("h3")[0];
subSubHeading.addEventListener("click", () => {
    subSubHeading.style.display = "none";
});
    // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let myButton = document.createElement("button");
myButton.textContent = "bold paragraphs";
myButton.addEventListener("click", () => {
    let paragraphs = document.getElementsByTagName("p");
    for (let paragraph of paragraphs){
        paragraph.style.fontWeight = "bold";
    }
})
document.body.appendChild(myButton);
    // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
headline.addEventListener("mouseover", () => {
    headline.style.fontSize = (Math.floor(Math.random() * 100) + 1) + 'px' ;
});
    // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let paragraphTwo = document.getElementsByTagName("p")[1];
let isFading = false;
function fadeOut(event){
    let elem = event.target;
    let opacity = parseFloat(window.getComputedStyle(elem).opacity);
    if (isFading || opacity == 0){
        return;
    }
    isFading = true;
    let interval = setInterval(()=> {

        if(opacity > .1) {
            opacity -= .1;
            elem.style.opacity = opacity;
        } else {
            clearInterval(interval);
            elem.style.display = "none"
            isFading = false;
        }
    },200)
}
paragraphTwo.addEventListener("mouseover", fadeOut)