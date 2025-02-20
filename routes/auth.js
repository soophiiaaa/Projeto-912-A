const express = require('express');
const bcrypt = require('bcrypt');
const { readData, saveData } = require('../database/database');
const router = express.Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const users = readData();

    const index = users.findIndex(user => (user.email == email));
    if (index === -1) {
        res.status(401).json({ error: "Email and password do not match." });
    } else {
        const isMatch = await bcrypt.compare(password, users[index].password);
        if (isMatch) {
            res.status(200).json({
                id: users[index].id,
                email: users[index].email,
                name: users[index].name,
            });
        } else {
            res.status(401).json({ error: "Email and password do not match." });
        }
    }
});

module.exports = router;