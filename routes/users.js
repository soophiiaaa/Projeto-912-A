const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router()

router.get('/users', (req, res) => {
    res.status(200).json();
})

router.post('/users', async (req, res) => {
    res.status(200).json();
});

router.delete('/users/:id', (req, res) => {
    res.status(200).json();
});

router.put('/users/:id', async (req, res) => {
    res.status(200).json();
});

module.exports = router;
