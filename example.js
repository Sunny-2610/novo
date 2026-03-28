const fs = require('fs')
const http = require('http')


// fs.readFile('example.txt' , 'utf8' ,(err,data) =>{
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })    


// const content = 'hello world'

// fs.writeFile('output.txt',content,(err) =>{
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('written in new file successfully')
// })

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('hello world')
})

server.listen(3000,()=>{
    console.log('server running at http://localhost:3000')
})
