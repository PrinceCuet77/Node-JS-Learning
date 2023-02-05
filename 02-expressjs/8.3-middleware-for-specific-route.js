const express = require('express')
const logger = require('./logger')

const app = express()

// Problem: I lot of times I need to declare 'logger' (middleware reference) in http methods.
// To get rid of that, I can use app.use(middleware_reference) so that I can not mention all the http methods all the times. Use that like the following:

// A. This is applicable for all the http methods. Like -
// 1. http://localhost:5000
// 2. http://localhost:5000/about
// 3. http://localhost:5000/api/products
// 4. http://localhost:5000/api/reviews

// app.use(logger)

// B. I can specify some http methods like the following:
// 1. http://localhost:5000/api/products
// 2. http://localhost:5000/api/reviews
app.use('/api', logger)

app.get('/', (req, res) => {
    res.send('Home')
})

// If I declare 'app.use(logger)' right here, then it can application for all without http://localhost:5000 url.
// Because I miss 'app.get('/', () => {})' http method's url.

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/reviews', (req, res) => {
    res.send('Reviews')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
