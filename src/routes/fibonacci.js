const { fibonacciTable } = require('fibonacci_app_lib')
const { Fibonacci } = require('../models')
const router = require('express').Router()

/**
 * generateFibonacci
 * Generates a Fibonacci table for the n-th provided number.
 * If it exists in the DB, directly return it,
 * else generate a new table
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Response}
 */
const generateFibonacci = async (req, res, next) => {
    try {
        const fibonacciNumber = req.query.n

        if (!fibonacciNumber) {
            throw new Error('No valid parameter and value provided!')
        }

        // Search for a cached table in the DB
        const fibTableInDB = await Fibonacci.findOne({ where: { num: fibonacciNumber } })

        // If we have already cached a table for this number, send it
        if (fibTableInDB) {
            return res.status(200).json(JSON.parse(fibTableInDB))
        }

        // Send a newly generated table for the provided number
        res.status(200).json(fibonacciTable(fibonacciNumber))
    } catch (err) {
        next(err)
    }
}

/**
 * cacheFibonacci
 * Generates a Fibonacci table for the n-th provided number and caches it.
 * If it exists in the DB, directly return it,
 * else generate a new table
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Response}
 */
const cacheFibonacci = async (req, res, next) => {
    try {
        const fibonacciNumber = req.query.n

        if (!fibonacciNumber) {
            throw new Error('No valid parameter and value provided!')
        }

        // Search for a cached table in the DB
        const fibTableInDB = await Fibonacci.findOne({ where: { num: fibonacciNumber } })

        // If we have already cached a table for this number, send it
        if (fibTableInDB) {
            return res.status(200).json(JSON.parse(fibTableInDB.table))
        }

        // Generate a new Fibonacci table
        const table = fibonacciTable(fibonacciNumber)

        // Cache the generated table in the DB in the backgorund
        Fibonacci.create({ num: fibonacciNumber, table: JSON.stringify(table) })

        // Send the generated table
        res.status(200).json(table)
    } catch (err) {
        next(err)
    }
}

router.get('/', generateFibonacci)
router.post('/', cacheFibonacci)

module.exports = router
