function logLength <T extends {length: number}>(arg: T):number {
    return arg.length;
}

console.log(logLength("Hello World"))
console.log(logLength(["Hello", "World"]))