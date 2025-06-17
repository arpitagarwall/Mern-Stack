const express = require("express");
const router = express.Router();

const { likePost,unlikePost } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost,getAllPosts } = require("../controllers/postController");



router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comments/createComment", createComment);
router.post("/posts/createPost", createPost);
router.get("/posts/getPosts", getAllPosts);


module.exports = router;