const Router = require("express");
const router = Router();

// Sample in-memory database for storing books
const books = [{title: "Harry Potter and the Sorceror's Stone", author: "J.K. Rowling", id: 0}];
let book_id = 1;
// Get all books
router.get("/books", (req, res)=> {
    res.send(books);
})
// Add a new book
router.post("/books", (req, res) => {
    const {title, author} = req.body;
    books.push({title, author, id: book_id++})
    res.status(201).send("book added")
})
// Update a book by ID
router.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const book = books.find(item => item.id == id);
    if(!book) {
        res.sendStatus(404);
        return;
    }
    const {title = book.title, author=book.author} = req.body;
    book.title = title;
    book.author = author;
    res.status(200).send("book Updated");
})

// Delete a book by ID
router.delete("/books/:id", (req, res) => {
    const {id} = req.params;
    const bookIndex = books.findIndex(item => item.id == id);
    if(bookIndex == -1) {
        res.sendStatus(404);
        return;
    }
    books.splice(bookIndex, 1);
    res.status(200).send("book Deleted");
})

module.exports = router;