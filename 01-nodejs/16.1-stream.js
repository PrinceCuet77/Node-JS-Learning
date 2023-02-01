// Streams is read or write sequentially.
// 4 different types of streams.
// 1. Writeable used to write sequentially
// 2. Readable used to read sequentially
// 3. Duplex used to both write & read sequentially
// 4. Transform used to modify while writing & reading

// Why use 'stream'?
// If a file contains huge content, then a variable can't hold it. So, 'streams' are needed because it will store all the content in making several parts under its capacity.
// I can increase the capacity using 'highWaterMark' flag.

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
    console.log(result)
})

// Output:
// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 65486 more bytes>
// <Buffer 77 6f 72 6c 64 20 33 39 32 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 32 0a 68 65 6c 6c 6f ... 65486 more bytes>
// <Buffer 6f 72 6c 64 20 37 37 37 35 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 36 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 37 0a 68 65 6c 6c 6f 20 ... 37768 more bytes> 