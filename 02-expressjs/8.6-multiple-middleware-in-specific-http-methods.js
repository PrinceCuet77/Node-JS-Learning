const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize1')

const app = express()

// No use of any middleware
app.get('/', (req, res) => {
    res.send('Home Page')
})

// No use of any middleware
app.get('/about', (req, res) => {
    res.send('About page')
})

// No use of any middleware
app.get('/api/products', (req, res) => {
    res.send('Products Page')
})

// If I don't use 'app.use([logger, authorize])' the I have to use it like the following and only applicable which http methods use middleware function reference.
// http://localhost:5000/api/reviews?user=john then works otherwise 'Unauthorized'
app.get('/api/reviews', [logger, authorize], (req, res) => {
    console.log(req.user) // Output: { user: 'Prince', id: 3 }

    res.send('Reviews page')
})

app.listen(5000, () => {
    console.log('Server is running on 5000...')
})

// I can use my own created middleware & express default provided middleware like app.use(express.static('public')) for static resource.