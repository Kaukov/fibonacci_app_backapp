const path = require('path')

const rootDir = require.main.path

const getFilePath = (...args) => path.join(rootDir, ...args)

module.exports = {
    rootDir,
    getFilePath
}
