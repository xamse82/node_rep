const {readFileSync, writeFileSync} = require ('fs')
console.log ('start')
const first = readFileSync ('./content/first.txt', 'utf8')
const second = readFileSync ('./content/second.txt', 'utf8')

console.log('start the task')
console.log (first , second)

writeFileSync (
    './content/results.txt',
    `here is the results ${first}, ${second}`

)

console.log('startig again')