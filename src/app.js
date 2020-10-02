// Load the values from .env
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { db } = require('./utils')

db.sync({ force: process.env.DB_FORCE_CLEAN })
    .then(() => {
        const app = express()

        const port = process.env.APP_PORT || 3000

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))

        app.get('/', (_req, res) => res.status(200).send('Hello World'))

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
