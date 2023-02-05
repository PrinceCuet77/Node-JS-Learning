const express = require('express')
const router = express.Router()
const { people } = require('../data')

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

// GET method
// Base router or path is set like: http://localhost:5000/api/people, so adjusting that, I can use 'router.get('/', (req, res) => {})'.
router.get('/', getPeople)

// POST method
router.post('/', createPerson)
router.post('/postman', createPersonPostman)

// PUT method
router.put('/:id', updatePerson)

// DELETE method
router.delete('/:id', deletePerson)

module.exports = router
