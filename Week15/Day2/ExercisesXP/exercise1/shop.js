const products = require("./products");
const printProduct = name => {
    let myProd = products.find(x=> x.name == name);
    if(myProd){
        for(let key in myProd){
            console.log(key, myProd[key]);
        }
    }
    else {
        console.log("item not found");
    }
}

printProduct("apple");
printProduct("orange");
printProduct("banana");
printProduct("coke");
printProduct("pepsi");