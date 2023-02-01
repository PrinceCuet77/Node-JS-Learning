const { readFileSync, writeFileSync, read, readFile } = require('fs')

// Must provide './' part otherwise I will get an error.
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// If file is not found then create one.
// Remove all the content of the file & then write the content (mainly override).
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`
)

// Append the file content
writeFileSync(
    './content/result-sync2.txt',
    `Here is the result: ${first} ${second}`,
    { flag: 'a' }
)
