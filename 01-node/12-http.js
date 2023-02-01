const http = require('http')

// Web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our webpage')
    } else if (req.url === '/about') {
        res.end('Welcome to our about page')
    } else {
        res.end(
            `<h1>Opps!</h1>
            <p>404 Not Found</p>
            <a href="/">Back home</a>
        `
        )
    }
})

server.listen('5000')
