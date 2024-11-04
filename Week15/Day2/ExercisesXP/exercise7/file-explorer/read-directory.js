import fs from "fs";

fs.readdir(".", (err, data) => {
if (err) {
    console.error(err);
    return;
}
console.log(data);
});