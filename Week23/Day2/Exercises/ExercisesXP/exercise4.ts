const positivity = (a:number):string => {
    if(a > 0) return "positive";
    if(a < 0) return "negative";
    if(a == 0) return "Zero";
    return ("invalid input")
}
console.log(positivity(5))
console.log(positivity(-5))
console.log(positivity(0))