const chalk = require("chalk");
function colorGreet() {
    console.log(chalk.blue("Hello"), chalk.red("bob"));
}

module.exports = colorGreet;