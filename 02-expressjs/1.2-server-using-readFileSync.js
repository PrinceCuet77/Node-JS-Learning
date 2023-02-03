const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    // console.log(req.method) // GET, POST etc

    const url = req.url // Output: '/'

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // Provides header (meta-data)
        res.write(homePage)
        res.end() // Indicates that communication is over.
    } else if (url === '/about') {
        // about page
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } else {
        // 404
        res.writeHead(404, { 'content-type': 'text/html' }) // Provides header (meta-data)
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is running on 5000...')
})
