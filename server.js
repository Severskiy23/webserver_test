const express = require('express')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandler.js')

function createServer(){
    const app = express()
    app.use(express.json())
    app.use('/', router)
    app.use(errorHandler)
    return app
}
module.exports = createServer