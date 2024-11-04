const {add, multiply} = require("./math.js");
const _ = require("lodash");
const numbers = [1, 2, 3];

const sum = _.reduce(numbers, add, 0); // 6
const product = _.reduce(numbers, multiply, 1); // 6

console.log("sum", sum);
console.log("product", product);