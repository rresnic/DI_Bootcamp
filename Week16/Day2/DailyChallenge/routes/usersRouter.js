const Router = require("express");
const router = Router();
const {getUsers, getUserFromId, addUser, updateU, deleteUserID, login} = require("../controllers/usersController.js")

// get all
router.get("/users", getUsers);

// get specific by id
router.get("/users/:id", getUserFromId);

router.post("/users", addUser);

router.put("/users/:id", updateU);

router.delete("/users/:id", deleteUserID)

router.post("/register", addUser)

router.post("/login", login)
module.exports = router;