function validateUnionType(value, allowedTypes) {
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (typeof value === type)
            return true;
    }
    return false;
}
console.log("This should be true", validateUnionType(true, ["number", "boolean"]));
console.log("This should be false", validateUnionType("true", ["number", "boolean"]));
