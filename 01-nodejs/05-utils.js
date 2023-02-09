const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
// export default
module.exports = sayHi

console.log(module)

// Output:
// Module {
//   id: '.',
//   path: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-nodejs',
//   exports: [Function: sayHi],
//   parent: null,
//   filename: '/home/prince-11209/Desktop/JS/Node-JS-Learning/01-nodejs/05-utils.js',
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
