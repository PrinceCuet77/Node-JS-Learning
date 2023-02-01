// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }

console.log(module)

// Output:
// Module {
//   id: '.',
//   path: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-node',
//   exports: { john: 'john', peter: 'peter' },
//   parent: null,
//   filename: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-node/04-names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-node/node_modules',
//     '/home/prince-11209/Desktop/JS/Node-JS-Learning/node_modules',
//     '/home/prince-11209/Desktop/JS/node_modules',
//     '/home/prince-11209/Desktop/node_modules',
//     '/home/prince-11209/node_modules',
//     '/home/node_modules',
//     '/node_modules'
//   ]
// }
