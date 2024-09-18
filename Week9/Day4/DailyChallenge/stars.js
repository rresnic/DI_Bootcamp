console.log("Version in one loop")
let height = 7
let current_stars = 0
let output = ""
for(let i = 1; i < 7;) {
    output +="*";
    current_stars++;
    if (current_stars < i){
        continue;
    }
    console.log(output);
    output = "";
    current_stars = 0;
    i++;
}

console.log("Version in two loops")
let sen = ""
for(let i = 1; i < 7; i++){
    sen = ""
    for(let j = 0; j < i; j++){
        sen += "*"
    }
    console.log(sen)
}

