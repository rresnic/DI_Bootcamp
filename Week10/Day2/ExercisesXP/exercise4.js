    // Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
let form = document.getElementsByTagName("form")[0];
console.log(form)
let radius = form.elements["radius"];
console.log(radius);
let volume = form.elements["volume"];
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let radius_value = parseFloat(radius.value);
    let volume_value = (4/3) * Math.PI * Math.pow(radius_value, 3);
    volume.value = volume_value;
})
