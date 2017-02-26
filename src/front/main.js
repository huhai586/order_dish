/**
 * Created by huhai on 2017/2/26.
 */
var SocketClient=require("socket.io-client");


var socket = SocketClient.connect('http://localhost');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

