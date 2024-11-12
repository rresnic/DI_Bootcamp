const {getAllUsers, getUserById, insertUsers, updateUser, deleteUser, checkLogin} = require("../models/usersData.js");

const getUsers = async (req, res) => {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const getUserFromId = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await getUserById(id);
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

const addUser = async (req, res) => {
    const {username, email, password, firstname, lastname} = req.body;
    try {
        const data = await insertUsers(username, email, password, firstname, lastname);
        if(!data){
            res.sendStatus(404);
        } else {
            res.status(201).json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const updateU = async (req, res) => {
    const {id} = req.params;
    const {username, email, password, firstname, lastname} = req.body;
    try {
        const data = await updateUser(id, username, email, firstname, lastname);
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

const deleteUserID = async (req, res) => {
    const {id} = req.params;
    try {
        const [data] = await deleteUser(id);
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


const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const data = await checkLogin(email, password);
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
    getUsers,
    getUserFromId,
    addUser,
    updateU,
    deleteUserID,
    login,
}