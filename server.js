const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    
    // Check if request method is GET
    if (req.method === 'GET') {
        
        // Different routes handling
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Home Page');
        } 
        else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is About Page');
        } 
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
        }
    } 
    else {
        // If not GET method
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});