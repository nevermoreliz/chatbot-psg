require("dotenv").config();
const PostgreSQLAdapter = require('@bot-whatsapp/database/postgres')
const { Sequelize } = require("sequelize");

/** libreria pg npm -> para realizar consultas */
/**
 * Declaramos las conexiones de PostgreSQL
 */
const adapterDB = new PostgreSQLAdapter({
    host: process.env.POSTGRES_DB_HOST,
    user: process.env.POSTGRES_DB_USER,
    database: process.env.POSTGRES_DB_NAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    port: process.env.POSTGRES_DB_PORT
})

/**
 * conexion sequelize
 */
const configDB = {
    database: process.env.POSTGRES_DB_NAME,
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    params: {
        host: process.env.POSTGRES_DB_HOST,
        dialect: process.env.POSTGRES_DB_DIALECT,
        logging: false
    }
}

const adapterSequelizeDB = new Sequelize(
    configDB.database,
    configDB.username,
    configDB.password,
    configDB.params
);

module.exports = { adapterDB, adapterSequelizeDB };
