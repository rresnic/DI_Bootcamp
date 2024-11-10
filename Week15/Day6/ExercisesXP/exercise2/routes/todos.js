const Router = require("express");
const router = Router();

// Sample in-memory database for storing to-do items
const todos = [{id:0, description: "Make todo list"}];
let todo_id = 1;
// Get all to-do items
router.get("/todos", (req, res)=> {
    res.send(todos);
})
// Add a new to-do item
router.post("/todos", (req, res) => {
    const {description} = req.body;
    todos.push({description, id: todo_id++})
    res.status(201).send("todo added")
})
// Update a to-do item by ID
router.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const {description} = req.body;
    const todo = todos.find(item => item.id == id);
    if(!todo) {
        res.sendStatus(404);
        return;
    }
    todo.description = description;
    res.status(200).send("Todo Updated");
})

// Delete a to-do item by ID
router.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    const todoIndex = todos.findIndex(item => item.id == id);
    if(todoIndex == -1) {
        res.sendStatus(404);
        return;
    }
    todos.splice(todoIndex, 1);
    res.status(200).send("Todo Deleted");
})

module.exports = router;