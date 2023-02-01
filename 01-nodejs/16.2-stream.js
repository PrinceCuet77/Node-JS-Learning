const { createReadStream } = require('fs')

// Default - 64kb
// last buffer - remainder
// highWaterMark - control the size
// {highWaterMark: 90000, encoding: 'utf8'} use as a last paramter

const stream = createReadStream('./contcent/big.txt', { highWaterMark: 90000 })

stream.on('data', (result) => {
    console.log(result)
})

// Output:
// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 89950 more bytes>
// <Buffer 6f 72 6c 64 20 35 33 35 39 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 35 33 36 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 35 33 36 31 0a 68 65 6c 6c 6f 20 ... 78840 more bytes>

stream.on('error', (err) => {
    console.log(err)
})

// Output: (Showing error)
// [Error: ENOENT: no such file or directory, open './contcent/big.txt'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './contcent/big.txt'
// }
