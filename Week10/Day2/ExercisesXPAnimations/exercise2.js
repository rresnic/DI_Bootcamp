
//     Copy the code above, to a structured HTML file.
//     In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
let animate = document.getElementById("animate");
let interval;
function myMove(){
    if(!animate.style.left){
        animate.style.left = "0px";
    }
    
    let left = parseInt(animate.style.left)

    // allow for clicking again once it is all the way on the right;
    if(left >= 350){
        animate.style.left = "0px";
        left = 0;
    }
    clearInterval(interval)
    interval = setInterval(()=>{
        left = parseInt(animate.style.left)
        if(left >= 350){
            clearInterval(interval);
            return;
        }
        animate.style.left = (left + 1) + 'px';
    },1)
}
