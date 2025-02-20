import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
})

export default User //modelo mais moderno para exportar módulos
