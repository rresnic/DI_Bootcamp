const {db} = require("../config/db.js");

// Get all 
const getAllBooks = () => {
    return db("books").select("id", "title", "author", "publishedYear")
}

const getBookById = (id) => {
    return db("books").select("id", "title", "author", "publishedYear").where({id});
};

const insertBook = (title, author, publishedYear) => {
    return db("books").insert({title, author, publishedYear}, ["id", "title", "author", "publishedYear"]);
}

const updateBook = (id, title, author, publishedYear) => {
    const updateData = {};
    if(title !== undefined) updateData.title = title;
    if(author !== undefined) updateData.author = author;
    if(publishedYear !== undefined) updateData.publishedYear = publishedYear;

    if(Object.keys(updateData).length == 0) {
        return Promise.resolve({message: "No updated fields provided"});
    }


    return db("books").where({id}).update(updateData, ["id", "title", "author", "publishedYear"]);
}
const deleteBook = (id) => {
    return db("books").where({id}).del().returning(["id", "title", "author", "publishedYear"]);
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook,
}