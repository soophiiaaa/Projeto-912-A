const express = require('express')
const User = require('../models/users')
const router = express.Router()

// Rota para listar todos os usuários
router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Rota para obter um usuário por ID
router.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Rota para criar um novo usuário
router.post('/users', async (req, res) => {
    try {
        const { username, birthday } = req.body;
        const user = await User.create({ username, birthday });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para deletar um usuário
router.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

module.exports = router;
