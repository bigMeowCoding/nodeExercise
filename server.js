const net = require('net');

net.createServer(
    (socket) => {
        // 只连接一次
        // socket.once('data', (data) => {
        socket.on('data', (data) => {
            socket.write(data);
        });
    }
).listen(3000);

console.log('serve open');
