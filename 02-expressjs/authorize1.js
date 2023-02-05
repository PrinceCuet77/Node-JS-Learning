const authorize = (req, res, next) => {
    const { user } = req.query

    if (user) {
        req.user = { user: 'Prince', id: 3 }
        next()
    } else {
        res.send('Unauthorized')
    }
}

module.exports = authorize
