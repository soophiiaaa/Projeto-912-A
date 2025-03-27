const { DataTypes } = require('sequelize')
const {sequelize} = require('../database/database')

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

module.exports = User
