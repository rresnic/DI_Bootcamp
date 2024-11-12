const {getAllPosts, getPostById, insertPost, updatePost, deletePost} = require("../models/postsData.js");

const getPosts = async (req, res) => {
    try {
        const data = await getAllPosts();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const getPostFromId = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await getPostById(id);
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

const addPost = async (req, res) => {
    const {title, content} = req.body;
    try {
        const [data] = await insertPost(title, content);
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

const updateP = async (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    try {
        const [data] = await updatePost(id, title, content);
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

const deletePostID = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await deletePost(id);
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
    getPosts,
    getPostFromId,
    addPost,
    updateP,
    deletePostID,
}