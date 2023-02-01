// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')

// Also can do
// const { john, peter } = require('./04-names')

const sayHi = require('./05-utils')

// Grap all the content which is exported from that file.
const _ = require('./06-alternative-flavor')

console.log(_) // Output: { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

// Invoke all the content of that specific file
require('./07-mind-grenade')
// Output: the sum is : 15

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
