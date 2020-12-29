const express = require('express')
const app = express()

const chalk = require('chalk')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')

// Database Connection
const connectDB = require('./connect')
connectDB()

// Middlewares
app.use(express.json())
app.use(compression())
app.use(cors())

app.use(morgan('dev'))

// Index Router 
app.use('/', require('./routes'))

// Error Handler
app.use((error, req, res, next) => {
    console.error(chalk.red(error.message))
    res.status(error.statusCode || 500).json({
        error: true,
        message: error.message || 'An Error Occured',
        route: req.url,
    })
})


module.exports = app