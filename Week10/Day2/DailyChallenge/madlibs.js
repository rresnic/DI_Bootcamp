
    // Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
    // Make sure the values are not empty
    // Write a story that uses each of the values.
    // Make sure you check the console for errors when playing the game.
    // Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let form = document.getElementsByTagName("form")[0];
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let displayed = document.getElementById("story");
let shuffle = document.getElementById("shuffle");
let lib = document.getElementById("lib-button");
lib.addEventListener("click", (e) =>{
    e.preventDefault();
    getStory();
});
shuffle.addEventListener("click", insert_story)
let stories = []

function getStory(){

    console.log("in story)");
    let noun_value = noun.value;
    let adjective_value = adjective.value;
    let person_value = person.value;
    let verb_value = verb.value;
    let place_value = place.value;
    if(!(noun_value.length) || !(adjective_value.length) || !(person_value.length) || !(verb_value.length) || !(place_value.length)){
        alert("All fields must be filled! ");
        return false;
    }
    stories = makeLibs(noun_value, adjective_value, person_value, verb_value, place_value);
    insert_story();

}

function insert_story(){
    if(stories.length == 0){
        alert("Must generate stories first");
        return;
    }
    let newTextContent = stories[Math.floor(Math.random() * stories.length)];
    displayed.textContent = newTextContent;

}

function makeLibs(noun, adjective, person, verb, place){
    let madLibs = [
  `Once upon a time, ${person} went to the ${place} to find the most ${adjective} ${noun}.`,
  `Yesterday, ${person} decided to ${verb} a ${adjective} ${noun} at the ${place}.`,
  `In the middle of the ${place}, ${person} found a ${noun} that looked very ${adjective} and decided to ${verb}.`,
  `To everyone's surprise, ${person} managed to ${verb} the ${adjective} ${noun} all the way to the ${place}.`,
  `${person} couldn't believe their eyes when the ${adjective} ${noun} started to ${verb} in the ${place}.`,
  `After a long day, ${person} relaxed by the ${place}, thinking about the ${adjective} ${noun} they had ${verb} earlier.`,
  `The ${adjective} ${noun} was hidden somewhere in the ${place}, and only ${person} knew how to ${verb} it.`,
  `${person} had never seen such a ${adjective} ${noun} before, especially not in the middle of the ${place}.`,
  `While exploring the ${place}, ${person} stumbled upon a ${adjective} ${noun} and decided to ${verb} with it.`,
  `It was a ${adjective} day at the ${place} when ${person} decided to ${verb} the mysterious ${noun}.`
    ];
    return madLibs;
}