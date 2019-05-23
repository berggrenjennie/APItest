const express = require('express');
const router = express.Router();

const posts = require('./posts.js');

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

router.get("/posts", posts.getPosts);
router.post("/posts", posts.addPost);
router.get("/posts/:postId", posts.getPostBypostId);
router.put("/posts/:postId", posts.putPostBypostId);
router.patch("/posts/:postId", posts.patchPostByPostId);
router.delete("/posts/:postId", posts.deletePostById);

module.exports = router;
