const {db} = require("./config/db.js");
const express = require("express");
const app = express();
const postRouter = require("./routes/postsRouter.js")
app.use(express.json());
app.use("/posts", postRouter);

const initializeDB = async () =>{
    const exists = await db.schema.hasTable("posts");

    if(!exists) {
        await db.schema.createTable("posts", (table) => {
            table.increments('id');
            table.string('title').notNullable();
            table.text('content');
        });
        console.log("Posts table created");
        await db("posts").insert({title: "First Post", content: "A first post to ensure that there is a post to work with"})
        console.log("First post added");

    } else {
        console.log("Posts table already exists");
    }

}

const PORT = 3000;
initializeDB();
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
