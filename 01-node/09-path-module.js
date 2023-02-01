const path = require('path')

// Platform seperator (different from win10, linux & mac)
console.log(path.sep) // Output: /

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath) // Output: content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base) // Output: test.txt

const absolute = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolute) // Output: /home/prince-11209/Desktop/JS/Node-JS-Learning/01-node/content/subfolder/test.txt
