const {db} = require("./config/db.js");
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter.js")
const bcrypt = require("bcrypt");
const {createUsersTable,createHashpwdtable} = require("./models/usersData.js")
app.use(express.json());
app.use("/", usersRouter);



const PORT = 3000;
// await createUsersTable();
// await createHashpwdtable();
createUsersTable().then(data => {
  createHashpwdtable().then(data => {
    console.log("tables initialized")
  })
})
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
