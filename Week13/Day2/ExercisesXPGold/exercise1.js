let output = document.getElementById("output");
const params = new URLSearchParams(window.location.search);

const fname = params.get('fname');
const lname = params.get('lname');

// Display in console
console.log(`First Name: ${fname}, Last Name: ${lname}`);

// Show on the page
output.innerHTML = `<p>First Name: ${fname}</p><p>Last Name: ${lname}</p>`;