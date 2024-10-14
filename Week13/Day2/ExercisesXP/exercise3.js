// Instructions

// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

    // Convert this JS object into a JSON object. What happens to the nested objects ?
// I assume you mean JSON string. The same thing that happens to the entire object? Do you mean to emphasize the lack of indentation?
const marioString = JSON.stringify(marioGame);
console.log(marioString);

    // Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
const prettyMario = JSON.stringify(marioGame, null, 4);
console.log(prettyMario);
// this instruction is unclear. What exactly are you asking me to do here? I assume you mean to emphasize the pretty printing with indentation.

    // Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
// breakpoint where? nothing is happening. I assume you just want us to examine marioString and prettyMario. prettyMario has exta newline characters and spaces. 