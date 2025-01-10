const Router = require("express");
const router = Router();
const {getTasks, 
    getTaskFromId, 
    addTask, 
    updateT, 
    deleteTaskID,
} = require("../controllers/tasksController.js")

// get all
router.get("/", getTasks);

// // get specific by id
router.get("/:id", getTaskFromId);

router.post("/", addTask);

router.put("/:id", updateT);

router.delete("/:id", deleteTaskID)

module.exports = router;