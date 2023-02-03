// query string

const express = require('express')

const app = express()

// process
// req => middleware => res

// Why use middleware?
// To avoid the common part of code in every http method. In the below, all the content from 15-18 lines are common for '/' & '/about' url. So, I used middleware.
// This is just for two urls. consider that in bigger scenario like for 10 or 20 urls.

// must provide 'next' which is the middleware function
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)

    // If I want that, I don't go to method where this middleware reference is used, then I don't use 'next()' method and write code like something very similar to the following line.
    // res.send('Middleware')

    // If I use 'next()' method then I move to that urls or http methods where I used this 'logger' middleware reference.
    next()
}

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
