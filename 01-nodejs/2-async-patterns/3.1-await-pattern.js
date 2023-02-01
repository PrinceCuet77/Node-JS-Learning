// Using async-await (only read files)
const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./../content/first.txt')
        console.log('First:', first) // Output: First: This is first file.

        const second = await getText('./../content/second.txt')
        console.log('Second:', second) // Output: Second: This is second file.
    } catch (err) {
        console.log(err)
    }
}

start()