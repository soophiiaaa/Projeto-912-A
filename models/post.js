const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
const User = require('./users')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER, //DataTypes -> classe do sequelize que contém todos os tipos disponíveis nele
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
})

//relacionamentos
User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' })

module.exports = Post
