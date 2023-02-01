const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
// Output:
// {
//   uid: 1000,
//   gid: 1000,
//   username: 'prince-11209',
//   homedir: '/home/prince-11209',
//   shell: '/bin/bash'
// }

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`) // Output: The System Uptime is 175938.64 seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
// Output:
// {
//   name: 'Linux',
//   release: '5.14.0-1054-oem',
//   totalMem: 16454148096,
//   freeMem: 1029492736
// }
