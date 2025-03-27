const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

/**
 * Conecta-se com o banco de dados.
 * Exibe uma mensagem de falha ou sucesso na conexão.
 * @returns {Promisse<void>}
 */
async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Conexão bem sucedida")
    } catch (e) {
        console.log("Falha na conexão com o Banco de dados.")
        console.error(e.message);
    }
}

module.exports = { sequelize, connectDB }
