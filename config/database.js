import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite', //escolher qual banco utilizar
    storage: 'database.sqlite' //onde será o armazenamento dos dados
})

export default sequelize
