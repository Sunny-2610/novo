const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // ROUTING
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    }

    else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    }

    else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Page');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }

});

// Start server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});