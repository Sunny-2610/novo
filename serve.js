const http = require('http');
const url = require('url');


// Route handler
const routes = {
  '/': (req, res) => {
      res.writehead(200, {'Content-Type': 'text/plain'});
      res.end('Welcome to Home Page');
  },
  '/about': (req, res) => {
      res.writehead(200, {'Content-Type': 'text/plain'});
      res.end('This is About Page');
  },
}