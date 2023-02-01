const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./../content/first.txt', 'utf8')
        console.log('First file:', first) // Output: First file: This is first file.

        const second = await readFile('./../content/second.txt', 'utf8')
        console.log('Second file:', second) // Output: Second file: This is second file.

        await writeFile(
            './../content/result-mind-grenade.txt',
            `THIS IS SUPER AWESOME ${first} + ${second}`,
            { flag: 'a' }
        )
    } catch (err) {
        console.log(err)
    }
}

start()
