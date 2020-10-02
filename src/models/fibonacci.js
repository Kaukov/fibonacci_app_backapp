const { db, dataTypes } = require('../utils/db')

const Fibonacci = db.define('fibonacci', {
    num: dataTypes.INTEGER,
    table: dataTypes.TEXT
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Fibonacci
