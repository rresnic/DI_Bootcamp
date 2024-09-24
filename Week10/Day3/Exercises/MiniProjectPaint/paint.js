let currentColor = '#000000'; // Default color

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('change', function () {
        currentColor = this.value; 
    });
});

// Custom color input listener
document.getElementById('customColor').addEventListener('change', function () {
    document.getElementById('colorInput').click(); // Trigger color input click
});

document.getElementById('colorInput').addEventListener('input', function () {
    currentColor = this.value;
    const customLabel = document.querySelector('.custom-color-label');
    customLabel.style.backgroundColor = currentColor; // Update the label to show the selected color
    document.getElementById('customColor').value = currentColor; // Update radio button value
});

const canvas = document.getElementById('canvas');

// Populate background
for (let i = 0; i < 900; i++) { // Create 100 cells
    const cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.appendChild(cell);

    // Add mouse event listeners
    cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = currentColor; 
    });
    cell.addEventListener('mouseenter', (event) => {
        if (event.buttons === 1) { // If left mouse button is held down
            cell.style.backgroundColor = currentColor; 
        }
    });
}

let cells = document.getElementsByClassName("cell");
let clear = document.createElement("button");
function clearCells() {
    for(let currentCell of cells){
        currentCell.style.backgroundColor = '';
    }
}

clear.addEventListener("click", (e) =>{
    e.preventDefault();
    clearCells();
    }
);

clear.textContent = "Clear";
let colorpickerDiv = document.querySelector(".color-picker");

colorpickerDiv.appendChild(clear)