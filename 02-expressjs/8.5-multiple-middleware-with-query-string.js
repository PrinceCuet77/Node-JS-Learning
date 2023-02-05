const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize1')

const app = express()

// 1. For multiple middleware, I have to use it inside the array.
// 2. Order matters like [logger, authorize] is not the same as [authorize, logger].
app.use([logger, authorize])

// http://localhost:5000?user=john then works otherwise 'Unauthorized'
app.get('/', (req, res) => {
    res.send('Home Page')
})

// http://localhost:5000/about?user=john then works otherwise 'Unauthorized'
app.get('/about', (req, res) => {
    res.send('About page')
})

// http://localhost:5000/api/products?user=john then works otherwise 'Unauthorized'
app.get('/api/products', (req, res) => {
    res.send('Products Page')
})

// http://localhost:5000/api/reviews?user=john then works otherwise 'Unauthorized'
app.get('/api/reviews', (req, res) => {
    console.log(req.user) // Output: { user: 'Prince', id: 3 }

    res.send('Reviews page')
})

app.listen(5000, () => {
    console.log('Server is running on 5000...')
})
