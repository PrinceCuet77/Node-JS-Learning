const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()

// 1. For multiple middleware, I have to use it inside the array.
// 2. Order matters like [logger, authorize] is not the same as [authorize, logger].
app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/api/products', (req, res) => {
    res.send('Products Page')
})

app.get('/api/reviews', (req, res) => {
    res.send('Reviews page')
})

app.listen(5000, () => {
    console.log('Server is running on 5000...')
})
