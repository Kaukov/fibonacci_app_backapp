// Load the values from .env
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.APP_PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (_req, res) => res.status(200).send('Hello World'))

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
})
