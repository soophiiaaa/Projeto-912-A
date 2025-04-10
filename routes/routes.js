const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.createPost);
router.get('/users/:userId/posts', postController.getPostsByUser);

module.exports = router;
