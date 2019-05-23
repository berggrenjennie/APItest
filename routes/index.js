const express = require('express');
const router = express.Router();

const users = require('./users.js');
const posts = require('./posts.js');
const bodyData = require('./middleware.js');

router.use(bodyData.bodyData)

router.get("/users", users.getUsers);
router.post("/users", users.postUsers);
router.get("/users/:id", users.getUserId);
router.put("/users/:id",users.putUser);

router.get("/params", users.params);

router.get("/posts", posts.paramsPost);
router.get("/posts", posts.getPosts);
router.post("/posts", posts.addPost);
router.get("/posts/:id",posts.postById);
router.put("/posts/:id", posts.putPostByID);

module.exports = router;
