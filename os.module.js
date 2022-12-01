const os = require ('os')


const user = os.userInfo()
console.log(user)

console.log(`the systme is ${os.uptime()}`)

const app = require ('./alternative-flavor')
console.log (app)

const currentos = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.free

}

console.log( currentos)