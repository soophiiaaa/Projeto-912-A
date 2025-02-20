const express = require('express');
const bcrypt = require('bcrypt');
const { readData, saveData } = require('../database/database');
const router = express.Router()

const DATABASE = 'users.json';

router.get('/users', (req, res) => {
    const users = readData(DATABASE);
    res.status(200).json({ users: users });
})

router.post('/users', async (req, res) => {
    if (req.body.name && req.body.email && req.body.password) {
        const users = readData(DATABASE);
        const user = {
            id: new Date().getTime(),
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10) 
        }
        users.push(user);
        saveData(DATABASE, users);
        res.status(201).json({ user });
    } else {
        res.status(400).json({ error: "Name and email are mandatory." });
    }
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    const users = readData(DATABASE);
    const index = users.findIndex(user => (user.id == userId));

    if (index == -1) {
        res.status(404).json({ error: "User not found." });
    } else {
        users.splice(index, 1);
        saveData(DATABASE, users);
        res.status(200).json({ message: 'User successfully removed.' });
    }
});

router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    if (name && email) {
        const users = readData(DATABASE);
        const index = users.findIndex(user => (user.id == userId));

        if (index == -1) {
            res.status(404).json({ error: "User not found." });
        } else {
            users[index].name = name;
            users[index].email = email;
            users[index].password = await bcrypt.hash(password, 10);
            saveData(DATABASE, users);
            res.status(200).json({ user: {
                id: userId,
                name: name,
                email: email   
            } });
        }
    } else {
        res.status(400).json({ error: "Name and email are mandatory." });
    }

});

module.exports = router;