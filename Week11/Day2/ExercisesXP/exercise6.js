
    // Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
    // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
    // The dom is a weird place for this, but ok. 
    
let children = 4, partner = "John", locale = "Jerusalem", job = "Developer";

(function domDisplay(numCh, spouse, place, title){
    let myString = `You will be a ${title} in ${place}, and married to ${spouse} with ${numCh} kids.`
    let heading = document.createElement("h1");
    heading.textContent = myString;
    document.body.appendChild(heading);
})(children, partner, locale, job)