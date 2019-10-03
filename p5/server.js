// Fork of https://github.com/CodingTrain/website/tree/master/Node/sockets
// Originally without MySQL

var express = require("express");
var mysql = require("mysql");
var app = express();

var server = app.listen(process.env.PORT || 3000, listen);
var io = require("socket.io")(server);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "iaddb"
});

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://" + host + ":" + port);
}

app.use(express.static("public"));

io.sockets.on("connection", function(socket) {
  console.log("We have a new client: " + socket.id);

  socket.on("mouse", function(data) {
    // console.log("Received: 'mouse' " + data.x + " " + data.y);
    var sql =
      "INSERT INTO data (event, x, y) VALUES ('mouse', '" +
      data.x +
      "', '" +
      data.y +
      "')";
    con.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    socket.broadcast.emit("mouse", data);
  });

  socket.on("disconnect", function() {
    console.log("Client has disconnected");
  });
});
