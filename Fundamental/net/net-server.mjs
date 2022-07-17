import net from 'net';

// create server
const server = net.createServer((client) => {
    console.log('Client connected');

    // define data to doing callback
    client.on('data' , (data) => {
        console.log(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
})

server.listen(5500 , 'localhost')