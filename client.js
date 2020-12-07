const net = require('net');
const stdin = process.stdin;
const fs = require('fs');

stdin.setEncoding('utf8'); // interpret data as text
stdin.resume()

const client = net.createConnection({
  host: "localhost",
  port: 3000
}); 

stdin.setEncoding('utf8');


client.on('connect', () => {
  console.log('I connected to the server');
  client.write('Hello this is Kevin')

});

client.on('data', (data) => {
  fs.readFile(`./data.txt`, 'utf8', (error, data) => {
    if (error) {
      console.log(data);
    } else {
      console.log(data);
    }
  });

})

client.on('-> ', (data) => console.log(data));

client.on('data', (data) => {client.write(data)})