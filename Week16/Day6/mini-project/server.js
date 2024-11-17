let Parser = require('rss-parser');
let parser = new Parser();

// (async () => {

//   let feed = await parser.parseURL('https://thefactfile.org/feed/');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item)
//   });

// })();
const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
const feedURL = "https://thefactfile.org/feed/";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'public/pages'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  async (req, res) => {
    try {
        const feed = await parser.parseURL(feedURL);
        const posts = feed.items;
        res.render('index', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching posts')
    }
})

app.get('/search', (req, res) => {
    res.render('search', { posts: [] });
});

app.post('/search/title', async (req, res) => {
    const title = req.body.title;
    console.log(req);
    
    try {
        const feed = await parser.parseURL(feedURL);
        const posts = feed.items.filter(post => post.title && post.title.toLowerCase().includes(title.toLowerCase()));
        res.render('search', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching posts')
    }
})

app.post('/search/category', async (req, res) => {
    const category = req.body.category;
    console.log(req);
    
    try {
        const feed = await parser.parseURL(feedURL);
        const posts = feed.items.filter(post => post.categories && post.categories.includes(category));
        res.render('search', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching posts')
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})