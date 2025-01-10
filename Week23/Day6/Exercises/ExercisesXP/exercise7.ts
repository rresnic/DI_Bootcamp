function formatInput <T extends {toString() : string}>(arg: T){
    return arg.toString() as string;
} 

console.log(formatInput("Hello"))
console.log(formatInput(formatInput));