const {getAllBooks, getBookById, insertBook, updateBook, deleteBook} = require("../models/booksData.js");

const getBooks = async (req, res) => {
    try {
        const data = await getAllBooks();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const getBookFromId = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await getBookById(id);
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

const addBook = async (req, res) => {
    const {title, author, publishedYear} = req.body;
    try {
        const [data] = await insertBook(title, author, publishedYear);
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

const updateB = async (req, res) => {
    const {id} = req.params;
    const {title, author, publishedYear} = req.body;
    try {
        const [data] = await updateBook(id, title, author, publishedYear);
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

const deleteBookID = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await deleteBook(id);
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
    getBooks,
    getBookFromId,
    addBook,
    updateB,
    deleteBookID,
}