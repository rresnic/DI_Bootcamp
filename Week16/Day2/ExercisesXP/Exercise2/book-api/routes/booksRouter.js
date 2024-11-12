const Router = require("express");
const router = Router();
const {getBooks, getBookFromId, addBook, updateB, deleteBookID} = require("../controllers/booksController.js")

// get all
router.get("/", getBooks);

// get specific by id
router.get("/:id", getBookFromId);

router.post("/", addBook);

router.put("/:id", updateB);

router.delete("/:id", deleteBookID)

module.exports = router;