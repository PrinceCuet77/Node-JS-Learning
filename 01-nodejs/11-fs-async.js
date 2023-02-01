const { readFile, writeFile } = require('fs')

// If I don't give 'utf8' so I will get Buffer value.
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile(
            './content/result-sync2.txt',
            `Here is the result from async file system: ${first} ${second}`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }

                console.log(result)
            }
        )
    })
})
