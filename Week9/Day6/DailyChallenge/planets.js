// Used GPT to create a string to color hashing function used below
function stringToColor(str) {
    // Hash the string to a number
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 6) - hash); // Hash function
    }
    
    // Convert hash to RGB color
    const r = (hash & 0xFF0000) >> 16; // Red
    const g = (hash & 0x00FF00) >> 8;  // Green
    const b = (hash & 0x0000FF);       // Blue

    // Return the RGB color in CSS format
    return `rgb(${r % 256}, ${g % 256}, ${b % 256})`;
}
    // Create an array which value is the planets of the solar system.
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let moons = {
    Earth: ["Moon"],
    Mars: ["Phobos", "Deimos"]
}
    // For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let sect = document.getElementsByClassName("listPlanets")[0];
for (let planet of planets) {
    let myDiv = document.createElement("div");
    myDiv.classList.add("planet");
    myDiv.style.backgroundColor = stringToColor(planet);
    if(planet in moons){
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon")
        moonDiv.style.backgroundColor = stringToColor(moons[planet][0]);
        moonDivText = document.createTextNode(moons[planet].length)
        moonDiv.append(moonDivText)
        myDiv.appendChild(moonDiv);        
    }
    sect.appendChild(myDiv)

}
    // Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
    // Finally append each div to the <section> in the HTML (presented below).
    // Bonus: Do the same process to create the moons.
    //     Be careful, each planet has a certain amount of moons. How should you display them?
    // This is a good question, as your file has display absolute. This makes things complicated. I'm starting with just a number.
    //     Should you still use an array for the planets ? Or an array of objects ?
    // I used an array for the planets and an object to hold moons. 
