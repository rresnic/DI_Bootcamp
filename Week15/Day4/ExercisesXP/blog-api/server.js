    // Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.
const blogPosts = [
  {
    id: 1,
    title: "The Rise of JavaScript",
    content: "JavaScript has become one of the most popular programming languages in the world. In this post, we explore its rise to prominence and how it became an essential part of web development."
  },
  {
    id: 2,
    title: "Understanding Async/Await in JavaScript",
    content: "Async/await is a modern JavaScript feature that allows developers to write asynchronous code in a more readable and synchronous-looking manner. In this post, we break down how it works and when to use it."
  },
  {
    id: 3,
    title: "A Guide to CSS Flexbox",
    content: "CSS Flexbox is a powerful layout tool that allows developers to create responsive and flexible layouts with ease. This post will help you understand how Flexbox works and when to use it in your designs."
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    content: "In this tutorial, we’ll explore how to build a simple RESTful API using Node.js. We'll cover the basics of creating routes, handling HTTP methods, and working with data."
  },
  {
    id: 5,
    title: "Introduction to React Components",
    content: "React components are the building blocks of React applications. In this post, we’ll cover the basics of functional and class components and explain how to use them in your React projects."
  }
];

    // Implement the following routes using Express:
    // GET /posts: Return a list of all blog posts.
    // GET /posts/:id: Return a specific blog post based on its id.
    // POST /posts: Create a new blog post.
    // PUT /posts/:id: Update an existing blog post.
    // DELETE /posts/:id: Delete a blog post.

    // Implement error handling for invalid routes and server errors.

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, ()=>{
    console.log('Run on port', PORT);
});

app.get("/posts", (req, res) => {
    res.send(blogPosts);
});

app.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = blogPosts.find(x => x.id == id);
    if(!post){
        res.status(404).send("Post not found");
        return;
    }
    res.send(post);
});

app.post("/posts", (req, res) => {
    const {title, content} = req.body;
    blogPosts.push({id: blogPosts.length +1, title, content})
    res.status(201).send("post created");
});

app.put("/posts/:id", (req, res) => {
    const {id} = req.params;
    const post = blogPosts.find(x => x.id == id);
    if(!post){
        res.status(404).send("Post not found");
        return;
    }
    const {title=post.title, content=post.content} = req.body;
    post.title = title;
    post.content = content;
    res.send("Post updated.")
});

app.delete("/posts/:id", (req, res) => {
     const {id} = req.params;
    const postindex = blogPosts.findIndex(x => x.id == id);
    if(postindex == -1){
        res.status(404).send("Post not found");
        return;
    }
    blogPosts.splice(postindex, 1)
    res.send("post deleted");
})