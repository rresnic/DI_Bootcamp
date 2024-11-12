const Router = require("express");
const router = Router();
const {getPosts, getPostFromId, addPost, updateP, deletePostID} = require("../controllers/postsController.js")

// get all
router.get("/", getPosts);

// get specific by id
router.get("/:id", getPostFromId);

router.post("/", addPost);

router.put("/:id", updateP);

router.delete("/:id", deletePostID)

module.exports = router;