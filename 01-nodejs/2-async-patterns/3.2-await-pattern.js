// Using async-await (read & write)
const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./../content/first.txt', 'utf8')
        console.log('F:', first) // Output: F: This is first file.

        const second = await readFilePromise('./../content/second.txt', 'utf8')
        console.log('S:', second) // Output: S: This is second file.

        await writeFilePromise(
            './../content/result-mind-grenade.txt',
            `THIS IS AWESOME: ${first} & ${second}`,
            { flag: 'a' }
        )
    } catch (err) {
        console.log(err)
    }
}

start()
