const fs = require('fs')

// fs.readFile('example.txt' , 'utf8' ,(err,data) =>{
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })    


const content = 'hello world'

fs.writeFile('output.txt',content,(err) =>{
    if (err) {
        console.log(err)
        return;
    }
    console.log('written in new file successfully')
})