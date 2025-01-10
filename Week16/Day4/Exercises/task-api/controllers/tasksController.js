const {getAllTasks,
     getTaskById, 
    insertTask,
     updateTask, 
    deleteTask,
    } = require("../models/tasksData.js");

const getTasks = async (req, res) => {
    try {
        const data = await getAllTasks();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const getTaskFromId = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await getTaskById(id);
        if(!data){
            res.sendStatus(404);
        } else {
        res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const addTask = async (req, res) => {
    const {description} = req.body;
    try {
        const data = await insertTask(description);
        if(!data){
            res.sendStatus(404);
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const updateT = async (req, res) => {
    const {id} = req.params;
    const {decription, active} = req.body;
    try {
        const data = await updateTask(id, decription, active);
        if(!data){
            res.sendStatus(404);
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const deleteTaskID = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await deleteTask(id);
        if(!data){
            res.sendStatus(404);
        } else {
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

module.exports = {
    getTasks,
    getTaskFromId,
    addTask,
    updateT,
    deleteTaskID,
}