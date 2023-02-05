const express = require('express')
// const { people } = require('./02-expressjs/data')
const { people } = require('./data')

const app = express()

// Static assets
// app.use(express.static('./02-expressjs/methods-public'))
app.use(express.static('./methods-public'))

// Parse from data - actually grabbing data from body (body parser)
app.use(express.urlencoded({ extended: false }))

// Parse JSON - Sending data using JSON
app.use(express.json())

// GET method
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// POST method
app.post('/api/people', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }

    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }

    res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    const { name } = req.body

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
})

// PUT method
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    console.log(id, name)

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: newPeople })
})

// DELETE method
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params

    console.log(id)

    if (!id) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople = people.filter((person) => {
        return person.id !== Number(id)
    })

    res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('Server is running on 5000...')
})
