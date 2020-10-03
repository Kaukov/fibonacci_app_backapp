// Load the values from .env
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { db } = require('./utils')
const routes = require('./routes')
const { errorHandler } = require('./middleware')

const app = express()
const port = process.env.APP_PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)
app.use(errorHandler)

db.sync({ force: process.env.DB_FORCE_CLEAN === 'true' })
    .then(() => {
        app.listen(port, () => {
            console.log(`App started on http://localhost:${port}`)
        })
    })
    .catch((error) => {
        console.log('--------------------------------')
        console.log('Error while connecting to the database!\n')
        console.log(error.message)
        console.log('--------------------------------')
    })

// Export the server so we can run tests
module.exports = app
