const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const { URL } = require('url'); // ✅ fixed import
const crypto = require('crypto');
const sayHello = require('./greetings');


// ---------- Read File ----------
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });


// ---------- Write File ----------
// const content = 'hello world';

// fs.writeFile('output.txt', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('written in new file successfully');
// });


// ---------- Create Server ----------
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello world');
// });

// server.listen(3000, () => {
//     console.log('server running at http://localhost:3000');
// });


// ---------- Path Module ----------
// const directory = '/user/local';
// const filename = 'example.txt';
// const fullpath = path.join(directory, filename);
// console.log(fullpath);


// ---------- OS Module ----------
// console.log('Platform:', os.platform());
// console.log('Arch:', os.arch());


// ---------- URL Module (FIXED) ----------
// const myUrl = new URL('http://example.com:8080/path/name?query=hello#hash');

// console.log('Host:', myUrl.host);
// console.log('Hostname:', myUrl.hostname);
// console.log('Port:', myUrl.port);
// console.log('Pathname:', myUrl.pathname);
// console.log('Query:', myUrl.search);
// console.log('Hash:', myUrl.hash);



// const hash = crypto.createHash('sha256');
// hash.update('hello world');

// console.log(hash.digest('hex'))

// ---------- Greetings Module ----------
// const message = require('./greetings');
// console.log(message('Sunny'));


fs.mkdir('newDir', (err) => {
    if (err) {
        console.log('Error creating directory:', err);
        return;
    }
    console.log('directory created successfully');
});
