const express = require('express')
// const { people } = require('./02-expressjs/data')
// const people = require('./02-expressjs/routes/people')
const people = require('./routes/people')
const auth = require('./routes/auth')

const app = express()

// Static assets
// app.use(express.static('./02-expressjs/methods-public'))
app.use(express.static('./methods-public'))

// Parse from data
app.use(express.urlencoded({ extended: false }))

// Parse JSON
app.use(express.json())

// Set base router or path like: http://localhost:5000/api/people
app.use('/api/people', people)

app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is running on 5000...')
})
