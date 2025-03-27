const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// Definição do modelo User
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

const app = express();
app.use(bodyParser.json());

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try {
        const { username, birthday } = req.body;
        const user = await User.create({ username, birthday });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para listar todos os usuários
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Rota para obter um usuário por ID
app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Rota para atualizar um usuário
app.put('/users/:id', async (req, res) => {
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
app.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Inicializa o banco de dados e inicia o servidor
sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});
