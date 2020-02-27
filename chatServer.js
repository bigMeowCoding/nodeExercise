const net = require('net'), Events = require('events');

// 实例化事件发送器
const channel = new Events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};
channel.on('join', function (id, client) {
    channel.clients[id] = client;
    channel.subscriptions[id] = function (senderId, data) {
        this.clients[id].write(data.toString());
    };
    this.on('broad', this.subscriptions[id]);
});

channel.on('leave', function (id) {
    this.emit('broad', id, 'id has leave');
    this.removeListener('broad', this.subscriptions[id]);
});


net.createServer(function (client) {
    const id = client.remoteAddress + client.remotePort;
    channel.emit('join', id, client);
    client.on('data', function (data) {
        channel.emit('broad', id, data.toString());
    });
    client.on('close', function () {
        channel.emit('leave', id);
    });
}).listen(3000);



