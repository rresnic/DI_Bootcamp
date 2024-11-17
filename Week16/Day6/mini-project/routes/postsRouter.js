const Router = require("express");
const router = Router();
const path = require("path")
const {getPosts, getPostsByTitles, getPostsByCategory} = require("../controllers/postsController.js");

router.set('views', path.join(__dirname, "../public/pages"))
router.get("/", getPosts);

router.post("/search/title", getPostsByTitles);

router.post("/search/category", getPostsByCategory);

module.exports = router;