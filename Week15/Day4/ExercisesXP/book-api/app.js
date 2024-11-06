const express = require('express');
const app = express();
const PORT = 5000;
const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
    { id: 4, title: 'Moby-Dick', author: 'Herman Melville', publishedYear: 1851 },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 }
];

app.use(express.json());
app.listen(PORT, ()=>{
    console.log('Run on port', PORT);
});   
    
    // Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get("/api/books", (req, res)=> {
    res.send(books);
})

    // Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
app.get("/api/books/:bookId", (req, res) => {
        const {bookId} = req.params;
    const book  = books.find(x => x.id == bookId);
    if(!book){
        res.status(404).send("Book not found");
        return;
    }
    res.status(200).send(book);
})
    // Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
app.post("/api/books", (req, res) => {
    const {title, author, publishedYear} = req.body;
    const newBook = {id: books.length +1, title, author, publishedYear};
    books.push(newBook)
    res.status(201).send(newBook);
});