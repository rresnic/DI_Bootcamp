let Parser = require('rss-parser');
let parser = new Parser();
const feedURL = "https://thefactfile.org/feed/";

async function getAllPosts(){
    const feed = await parser.parseURL(feedURL);
    return feed.items
}

async function getFilteredPostsTitle(title) {
    const posts = await getAllPosts();
    return posts.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
}

async function getFilteredPostsCategory(category) {
    const posts = await getAllPosts();
    return posts.filter(post => post.categories.includes(category));
}

module.exports = {
    getAllPosts,
    getFilteredPostsTitle,
    getFilteredPostsCategory,
}