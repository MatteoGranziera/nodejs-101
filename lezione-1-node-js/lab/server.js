const http = require('http');

const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
  } else {
    res.statusCode = 404;
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});