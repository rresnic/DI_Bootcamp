const {getAllPosts, getFilteredPostsTitle, getFilteredPostsCategory} = require("../models/postsData.js");

const getPosts = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.render('index', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).render('index', {posts:[]});
    }
};

const getPostsByTitles = async (req, res) => {
    const title = req.body.title;
    try {
        const posts = await getFilteredPostsTitle(title);
        res.render('search', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).render('search', {posts:[]});
    }
};

const getPostsByCategory = async (req, res) => {
    const category = req.body.category;
    try {
        const posts = await getFilteredPostsCategory(category);
        res.render('search', {posts})
    } catch (error) {
        console.log(error);
        res.status(500).render('search', {posts:[]});
    }
};

module.exports = {
    getPosts,
    getPostsByTitles,
    getPostsByCategory,
}