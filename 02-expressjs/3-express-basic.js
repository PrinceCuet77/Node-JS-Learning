const express = require('express') // Imported
const app = express() // Invoked server instances

// instead of that, I can write like the following (my choice). Actually combination of the previous two lines.
// const app require('express')()

// Home page
app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

// About page
app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

// Grap which is not writen logic router in website. So, I can use for '404 Page not found' situation.
app.all('*', (req, res) => {
    // If I use that, then the browser will send status 200 but it actually 404. So, I customize the status what it actually is.
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

// HTTP Methods are used:
// app.get - Read Data
// Example:
// GET - www.store.com/api/orders - get all orders
// GET - www.store.com/api/orders/:id - get single order (path params)

// app.post - insert Data
// Example:
// POST - www.store.com/api/orders - place an orders (send data)

// app.put - Update Data
// Example:
// PUT - www.store.com/api/orders/:id - update specific order (params + send data)

// app.delete - Delete Data
// Example:
// DELETE - www.store.com/api/orders/:id - delete orders (path params)

// app.all - Works for all of that (GET, POST, PUT, DELETE)
// app.use - Works for middleware
// app.listen - Works for the endpoint.
