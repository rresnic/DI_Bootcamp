const express = require("express");
const app = express();
const taskRouter = require("./routes/tasksRouter.js")
app.use(express.json());
app.use("/tasks", taskRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
