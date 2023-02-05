const express = require('express')
const router = express.Router()

// Base router or path is set like: http://localhost:5000/login, so adjusting that, I can use 'router.get('/', (req, res) => {})'.
router.post('/', (req, res) => {
    const { name } = req.body

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
})

module.exports = router
