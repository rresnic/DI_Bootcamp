const fs = require("fs/promises")
const path = require("path")
const {v4} = require("uuid");

const filepath = path.join(__dirname, "tasks.json");

// Get all 
const getAllTasks = async() => {
    return fs.readFile(filepath, "utf8")
}    

const writeTasks = async (tasks) => {
    await fs.writeFile(filepath, JSON.stringify(tasks, null, 2), "utf8");
};

const getTaskById = async (id) => {
    const tasksJson = await getAllTasks();
    const tasks = JSON.parse(tasksJson)
    console.log(tasks);
    const task = tasks.find(item => item.id == id);
    console.log(task)
    return Promise.resolve(task)
};

const insertTask = async(description) => {
    const tasksJson = await getAllTasks();
    const tasks = JSON.parse(tasksJson)
    const newTask = {id: v4(), description, active:true}
    tasks.push(newTask)
    await writeTasks(tasks);
    return newTask;
}

const updateTask = async (id, description, active) => {
    const tasksJson = await getAllTasks();
    const tasks = JSON.parse(tasksJson)
    const task = tasks.find(task => task.id == id);
    if(!task) throw new Error("task not found");
    if(description !== undefined) task.description = description;
    if(active !== undefined) task.active = active;
    await writeTasks(tasks);
    return task;
}

const deleteTask = async (id) => {
    const tasksJson = await getAllTasks();
    const tasks = JSON.parse(tasksJson)
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return { message: "Task not found" };
    }

    const [deletedTask] = tasks.splice(taskIndex, 1);
    await writeTasks(tasks);
    return deletedTask;}

module.exports = {
    getAllTasks,
    getTaskById,
    insertTask,
    updateTask,
    deleteTask,
}