/**
 * Created by huhai on 2017/2/26.
 */
var express=require("express");
var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);
var path=require('path');
server.listen(8000);
app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile("./dist/index.html",{root:__dirname});
});


var  connectionCount=0;
io.sockets.on('connection', function (socket) {
    console.log("连接成功");
    socket.emit('initializeSuc', { totalCount:++connectionCount });
    socket.on('order_dish', function (data) {
        console.log("收到的信息为",data.dish,"连接数为",connectionCount);
        socket.emit('orderSuc', { item:data.dish,order_time:new Date(), totalCount:connectionCount});

    });
    socket.on("disconnect",function(){
        console.log("连接断开");
        --connectionCount;
    })

});

// io.sockets.on('connection',function(){});
// io.sockets.on('disconnect', function (socket) {
// console.log("连接失败");
//     --connectionCount;
//     console.log("连接统计",connectionCount);
// });
