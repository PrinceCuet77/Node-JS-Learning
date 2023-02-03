const express = require('express')
const path = require('path')

const app = express()

// Store all my static resource in 'public' folder.
// I used styles.css, browser-app.js & logo.svg files. Like if I use more than that, then after storing in that folder, I can use like that.
// Setup static & middleware
// app.use(express.static('./02-expressjs/public'))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname,
            // './02-expressjs/navbar-app-for-express/index.html'
            './navbar-app-for-express/index.html'
        )
    )
})

app.get('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
