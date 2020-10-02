module.exports = (err, _req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    if (err instanceof Error) {
        return res.status(400).json({ error: err.message })
    }

    return res.status(500).json({ error: 'Something went wrong. Please try again later!' })
}
