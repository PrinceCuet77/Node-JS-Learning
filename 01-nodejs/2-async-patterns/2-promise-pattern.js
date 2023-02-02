// Using promise
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

getText('./../content/first.txt')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))