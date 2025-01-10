
function describeValue(value: number | string) :string {
    if(typeof value === "string") return "This is a string";
    if(typeof value === "number") return "This is a number";
    return "Invalid value type"
}

console.log(describeValue(25));
console.log(describeValue("25"));