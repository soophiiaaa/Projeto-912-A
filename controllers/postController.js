const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const post = await Post.create({ title, content, userId });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPostsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const posts = await Post.findAll({ where: { userId } });
        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
