import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../config/database'

const sequelize = new Sequelize('')

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
})

export default User //modelo mais moderno para exportar módulos
