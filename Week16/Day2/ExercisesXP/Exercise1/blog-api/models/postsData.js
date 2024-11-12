const {db} = require("../config/db.js");

// Get all 
const getAllPosts = () => {
    return db("posts").select("id", "title", "content")
}

const getPostById = (id) => {
    return db("posts").select("id", "title", "content").where({id});
};

const insertPost = (title, content) => {
    return db("posts").insert({title, content}, ["id", "title", "content"]);
}

const updatePost = (id, title, content) => {
    const updateData = {};
    if(title !== undefined) updateData.title = title;
    if(content !== undefined) updateData.content = content;

    if(Object.keys(updateData).length == 0) {
        return Promise.resolve({message: "No updated fields provided"});
    }


    return db("posts").where({id}).update(updateData, ["id", "title", "content"]);
}
const deletePost = (id) => {
    return db("posts").where({id}).del().returning(["id", "title", "content"]);
}

module.exports = {
    getAllPosts,
    getPostById,
    insertPost,
    updatePost,
    deletePost,
}