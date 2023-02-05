const express = require('express')
const logger = require('./logger')

const app = express()

// Must provide the middleware function reference - logger
app.get('/', logger, (req, res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
