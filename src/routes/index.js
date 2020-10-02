const router = require('express').Router()

router.use('/fibonacci', require('./fibonacci'))

module.exports = router
