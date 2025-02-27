const express = require('express');
const router = express.Router()
const User = require('../models/User')

//const bcrypt = require('bcrypt');

router.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.status(200).json({ users }); //retorna os usuários cadastrados no banco
})

router.post('/users', async (req, res) => {
    await User.create({
        username: 'Sophia Lacerda',
        birthday: new Date(2007, 5, 11)
    }) //toda entidade precisa de um id para um identificador único
}); //o uso do async/await é importante para o uso de programação assíncrona

router.delete('/users/:id', (req, res) => {
    res.status(200).json();
});

router.put('/users/:id', async (req, res) => {
    res.status(200).json();
});

module.exports = router;
