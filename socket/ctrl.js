var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;
app.get('/', function(req, res){
	console.log(req.query);
  res.sendfile('ctrl.html');
});

io.on('connection', function(socket){
	console.log("go");
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});


