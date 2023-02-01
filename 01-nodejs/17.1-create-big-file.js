const { writeFileSync, write } = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big2.txt', `hello world ${i}\n`, { flag: 'a' })
}
