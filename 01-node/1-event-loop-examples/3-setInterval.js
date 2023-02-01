setInterval(() => {
    console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

// Output:
// I will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// and so on... need to press ctrl + c to stop.
