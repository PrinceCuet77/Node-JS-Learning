const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()

// Emits request event
// Subcribe to it / listen for it / respond to it.
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000, () => {
    console.log('Server starts on 5000...')
})
