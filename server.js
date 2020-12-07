const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

server.on('-> ', (data) => console.log(data));

