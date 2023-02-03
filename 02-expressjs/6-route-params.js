const express = require('express')
const { products } = require('./data')

const app = express()

app.get('/', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image, price } = product
        return { id, name, image, price }
    })
    res.send(newProducts)
})

// Work with parameters - http://localhost:5000/api/products/1
app.get('/api/products/:productId', (req, res) => {
    console.log(req.params) // Output: { productId: '1' }

    const productId = req.params.productId

    const singleProduct = products.find(
        (product) => product.id === Number(productId) // Beware, productId is string, need to pass integer.
    )
    console.log(singleProduct) // Output: undefined (if I pass - http://localhost:5000/api/products/abc), otherwise it will return the corresponding value of that id.

    if (!singleProduct) res.status(404).send('<h1>404 Page Not Found</h1>')
    res.send(singleProduct)
})

// Work with parameters - http://localhost:5000/api/products/1/reviews/abc
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params) // Output: { productId: '1', reviewId: 'abc' }

    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
