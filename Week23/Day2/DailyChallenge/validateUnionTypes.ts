function validateUnionType(value: any, allowedTypes: string[]):boolean {
    for(let type of allowedTypes){
        if(typeof value === type) return true;
    }
    return false;
}

console.log("This should be true", validateUnionType(true, ["number", "boolean"]))
console.log("This should be false", validateUnionType("true", ["number", "boolean"]))