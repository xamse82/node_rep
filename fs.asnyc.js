const {readFile, writeFile} = require ('fs') 
console.log('start')

readFile('./content/first.txt' ,'utf8' ,(err , result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;

readFile('./content/first.txt' ,'utf8' ,(err , result) => {
        if(err) {
            console.log(err)
            return
        }
const second = result 
writeFile ('./content/result-async.txt', `here is the result ,${first} ${second}`,
(err , result ) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('welcome')
    console.log('done the task')
}
)
    })


    
})
console.log('starting again the task')