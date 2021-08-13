//Provides methods for interacting with the operating system
const os = require ('os')

//info about the user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds `)

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)