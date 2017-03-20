/**
 * Created by huhai on 2017/2/26.
 */
var SocketClient=require("socket.io-client");
var $=require("jquery");

var socket = SocketClient.connect('http://localhost:8000');

socket.on('initializeSuc', function (data) {
    $(".alert").html("服务器当前socket连接数:"+data.totalCount);
    // socket.emit('my other event', { my: '已经收到请求数'+(++count) });
});


socket.on('orderSuc', function (data) {
    $(".alert").html("你下订单的时间是:"+data.order_time+" 您预定的是:"+data.item+" 当前连接总数:"+data.totalCount);
    // socket.emit('my other event', { my: '已经收到请求数'+(++count) });
});

//$()==


$(".row>div").click(function(){
   //click
    var value=$(this).data("value");

    socket.emit('order_dish', { dish:value});
});
