const io = require("socket.io-client");

const socket = io("http://localhost:3000/");

socket.on("connect", () => {
    console.log(socket.id); 

    setInterval(function(){
        socket.emit("tellmetime")
    }, 5000)

});

socket.on("now", (payload) => {
    console.log(payload); 
});
