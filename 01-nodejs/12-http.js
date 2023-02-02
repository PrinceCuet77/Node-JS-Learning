const http = require('http')

// Web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our webpage')
    } else if (req.url === '/about') {
        // res.end('Welcome to our about page')

        res.write('Welcome to our about page')
        res.end()
    } else {
        res.end(
            `<h1>Opps!</h1>
            <p>404 Not Found</p>
            <a href="/">Back home</a>
        `
        )
    }
})

server.listen(5000, () => {
    console.log('Server is running on 5000...')
})
