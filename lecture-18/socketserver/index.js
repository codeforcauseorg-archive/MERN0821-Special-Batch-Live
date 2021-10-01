const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT;

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", function (payload) {
    io.sockets.emit("broadcast", payload);
  });
});

server.listen(PORT || 5000, function () {
  console.log("Server is up");
});
