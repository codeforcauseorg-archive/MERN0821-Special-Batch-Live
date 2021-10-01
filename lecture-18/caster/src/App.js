import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
  let [socket, setSocket] = useState();
  let [message, setMessage] = useState("");
  let [chats, setChats] = useState([]);

  useEffect(function () {
    const soc = io("http://localhost:5000/");

    soc.on("connect", () => {
      setSocket(soc);
    });

    soc.on("broadcast", (payload) => {
      
      setChats(function(old){
         let copy = [...old];
         copy.push(payload);
         return copy;
      })

    });

  }, []);

  if (socket) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {chats.map(function(chat, index){
            return <p>{chat.message}</p>
          })}
        </div>

        <div
          style={{
            margin: "20px",
            height: "60px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input
            value={message}
            style={{
              flexGrow: 1,
            }}
            onChange={function (event) {
              setMessage(event.target.value);
            }}
          />
          <button
            onClick={function () {
              socket.emit("message", { message: message });
              setMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  } else {
    return <h1> Connecting .....</h1>;
  }
}

export default App;
