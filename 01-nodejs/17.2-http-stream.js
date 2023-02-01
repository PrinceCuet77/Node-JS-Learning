const http = require('http')
const fs = require('fs')

// http.createServer((req, res) => {
//     const text = fs.readFileSync('./content/big2.txt', 'utf8')
//     res.end(text)
// }).listen(5000, () => {
//     console.log('Server starts on 5000...')
// })

// If I inspect the webpage and click the 'network' section, I can see 'localhost' will take 1.8 MB (size).
// If I click the 'localhost' then I can see the amount of 'Content-Length' pass in the webpage (Content-Length: 1788890).

// To reduce that 'Content-Length'...
http.createServer((req, res) => {
    // change into the 'stream' becuase it will store big amount of data on it.
    const fileStream = fs.createReadStream('./content/big2.txt', 'utf8')

    fileStream.on('open', () => {
        fileStream.pipe(res) // Pushing from the 'readStream' to 'writeStream'. So, if I can read data in chunks then I can write data in chunks.
    })

    fileStream.on('error', (err) => {
        console.log(err)
    })
}).listen(5000, () => {
    console.log('Server starts on 5000...')
})

// Now the 'Response Headers' is changed (Transfer-Encoding: chunked).