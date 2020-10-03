const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DRIVER,
    dialectOptions: {
        timezone: 'Etc/GMT0'
    },
    logging: false,
})

module.exports = {
    db,
    dataTypes: DataTypes
}
