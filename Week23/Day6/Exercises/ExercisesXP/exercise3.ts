//I'd like a good explanation on what thee difference is, I'm not seeing it (other than not being able to cast in React).

let someValue:any = "Test Value";

someValue = <string>someValue;
console.log(someValue.toUpperCase())