const http = require("http");
const socketio = require("socket.io");
const admin = require("firebase-admin");
const serviceAccount = require("./service.json");

const PORT = process.env.PORT;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const onlineUsers = new Map();

const server = http.createServer();
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.use((socket, next) => {
  admin
    .auth()
    .verifyIdToken(socket.request.headers.authorization.substring(7))
    .then((user) => {
      console.log(user);
      socket.user = user;
      next();
    })
    .catch((error) => {
      next(new Error("invalid"));
    });
});

io.on("connection", (socket) => {
  onlineUsers.set(socket.user.uid, socket);

  socket.on("message", function (payload) {
    payload.sender = socket.user.name;
    payload.picture = socket.user.picture;
    io.sockets.emit("broadcast", payload);
  });

  socket.on("disconnect", function () {
    onlineUsers.delete(socket.user.uid);
  });
});

setInterval(function () {
  let payload = Array.from(onlineUsers.values()).map((info) => {
    info = info.user;
    return { name: info.name, uid: info.uid, picture: info.picture };
  });

  console.log(payload);
  io.sockets.emit("active", payload);
}, 5000);

server.listen(PORT || 5000, function () {
  console.log("Server is up");
});
