function greet():string;
function greet(name: string):string;
function greet(name?: string):string {
    if(name) {
        return `Hello ${name}`;
    }
    return `Welcome`;
}

console.log(greet());
console.log(greet("Bob"));

