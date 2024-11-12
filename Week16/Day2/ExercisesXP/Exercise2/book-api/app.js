const {db} = require("./config/db.js");
const express = require("express");
const app = express();
const booksRouter = require("./routes/booksRouter.js")
app.use(express.json());
app.use("/api/books", booksRouter);

const initializeDB = async () =>{

    try {
        const exists = await db.schema.hasTable("books");
        if(!exists) {
            await db.schema.createTable("books", (table) => {
                table.increments('id');
                table.string('title').notNullable();
                table.string('author');
                table.string('publishedYear');
            });
            console.log("Books table created");
            await db("books").insert({title: "Harry Potter and the Sorceror's stone", author: "J.K. Rowling", publishedYear: "1997"})
            console.log("First Book added");

        } else {
            console.log("Books table already exists");
    }
    } catch(error) {
        console.log(error)
    }

}

const PORT = 3000;
initializeDB();
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
