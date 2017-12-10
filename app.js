const http = require('http');
const fs = require('fs');
const io = require('socket.io')();

console.log('Server started')
const server = http.createServer((req, res) => {
  console.log('Incoming request for ' + req.url);

  if(req.url == '/' || req.url == '/index' || req.url == '/index.html'){
    fs.readFile(__dirname + '/html-css/index.html', 'utf-8', (error, content) => {

      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);

    });
  } else if(req.url == '/html-css/roomList.html'){
    fs.readFile(__dirname + '/html-css/roomList.html', 'utf-8', (error, content) => {

      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);

    });
  } else {
    fs.readFile(__dirname + '/html-css/template.html', 'utf-8', (error, content) => {

      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);

    });
  }

  console.log('Response given for ' + req.url);
});

io.listen(server);
// Quand un client se connecte, on le note dans la console
io.on('connection', (socket) => {
  console.log('New player!');
});

server.listen(3000);
