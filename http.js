const http = require ('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end ('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('welcome to the next page')
    }
    res.end(`<h1> oops </h> <p> this page is not exit </p> 
    <a href=""> back home </a>`)

   
})

server.listen(5000)