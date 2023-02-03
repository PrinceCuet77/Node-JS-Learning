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

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
