const fs = require("fs");
function readfile(filepath){
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    });
}

module.exports = readfile;