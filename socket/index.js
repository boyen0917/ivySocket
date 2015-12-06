
var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path');

var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	console.log("comming");
	var html = "index.html";
	if(req.query.ctrl == "123"){
		html = 'ctrl.html'
	}
  res.sendfile(html);
});

io.on('connection', function(socket){
  socket.on('click', function(status){
    io.emit('click', status);
  });
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});


