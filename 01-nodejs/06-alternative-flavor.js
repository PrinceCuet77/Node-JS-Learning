module.exports.items = ['item1', 'item2']
const person = {
    name: 'bob',
}

module.exports.singlePerson = person

console.log(module)

// Output:
// Module {
//   id: '.',
//   path: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-nodejs',
//   exports: { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } },
//   parent: null,
//   filename: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-nodejs/06-alternative-flavor.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-nodejs/node_modules',
//     '/home/prince-11209/Desktop/JS/Node-JS-Learning/node_modules',
//     '/home/prince-11209/Desktop/JS/node_modules',
//     '/home/prince-11209/Desktop/node_modules',
//     '/home/prince-11209/node_modules',
//     '/home/node_modules',
//     '/node_modules'
//   ]
// }
