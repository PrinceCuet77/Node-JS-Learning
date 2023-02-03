// Not working properly but focus on the functionality.
const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./02-expressjs/navbar-app/index.html')
const homeStyle = readFileSync('./02-expressjs/navbar-app/styles.css')
const homeImage = readFileSync('./02-expressjs/navbar-app/logo.svg')
const homeLogic = readFileSync('./02-expressjs/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method) // GET, POST etc

    const url = req.url
    console.log(url)
    // Output:
    // /
    // /styles.css
    // /browser-app.js
    // /logo.svg

    // Here, I can see extra 3 links are needed. So, I need to use extra 3 more condition for that like the following:

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
    } else if (url === '/styles.css') {
        // for -> '/style.css' url
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    } else if (url === '/logo.svg') {
        // for -> '/logo.svg' url
        res.writeHead(200, { 'content-type': 'text/svg+xml' })
        res.write(homeImage)
        res.end()
    } else if (url === '/brosser-app.js') {
        // for -> '/browser-app.js' url
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
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
