// In the js file, you must add the following functionalities:

//     Create an empty array : const tasks = [];
const tasks = []
//     Create a function called addTask(). As soon as the user clicks on the button:
//         check that the input is not empty,
//         then add it to the array (ie. add the text of the task)
//         then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
//         Each new task added should have (starting from left to right - check out the image at the top of the page)
//             a “X” button. Use font awesome for the “X” button.
//             an input type="checkbox". The label of the input is the task added by the user.
let taskInput = document.getElementById("task");
let taskList = document.querySelector('.listTasks');
let clearBtn = document.createElement("button");
clearBtn.type = "button";
clearBtn.addEventListener("click", ()=>{
    for(let task of tasks){
        task.remove();
    }
})
clearBtn.textContent = "Clear";
let container = document.querySelector(".container");
container.appendChild(clearBtn)
function addTask(){
    let task_value = taskInput.value;
    if(task_value.length == 0){
        return;
    }
    let newTask = document.createElement("div");
    let newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type ="checkbox";
    newTaskCheckbox.style.marginLeft = "1%";
    let newTaskDesc = document.createElement("label");
    newTaskDesc.style.width ="90%";
    newTaskDesc.style.paddingLeft = '1%';
    newTaskDesc.append(document.createTextNode(task_value));
    newTaskCheckbox.addEventListener('change', function() {
        newTaskDesc.classList.toggle('completed');
    });

    const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash', 'delete-icon'); 
        deleteIcon.addEventListener('click', function() {
            newTask.remove();  
    });    
    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskDesc);
    newTask.appendChild(deleteIcon)
    taskList.appendChild(newTask);
    tasks.push(newTask);
    taskInput.value = "";
}
let submit = document.getElementById("submitBtn");
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addTask();
})
let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addTask();
})
//     BONUS I (not mandatory):
//         Change the variable tasks to an array of task objects.
//         Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
//         Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
//         Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

//     BONUS II (not mandatory):
//         Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.
