import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import firebaseApp from "./utils/firebaseApp";
import { UserContext } from "./App";

function Home() {
  let [socket, setSocket] = useState();
  let [message, setMessage] = useState("");
  let [chats, setChats] = useState([]);
  let [active, setActive] = useState([]);

  let { user } = useContext(UserContext);

  useEffect(function () {
    user.getIdToken().then(function (token) {
      console.log(token);
      const soc = io("http://localhost:5000/", {
        extraHeaders: {
          Authorization: "Bearer " + token,
        },
      });

      soc.on("connect", () => {
        setSocket(soc);
      });

      soc.on("broadcast", (payload) => {
        setChats(function (old) {
          let copy = [...old];
          copy.push(payload);
          return copy;
        });
      });

      soc.on("active", (payload) => {
        setActive(payload);
      });

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
        <button
          onClick={function () {
            firebaseApp.auth().signOut();
          }}
        >
          logout
        </button>

        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {active.map(function (activePerson, index) {
            return (
              <div
                style={{
                  margin: "30px",
                  backgroundColor: "#9999999",
                  borderRadius: "8px",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                  alt={activePerson.name}
                  src={activePerson.picture}
                  height="50px"
                />
                <div>
                  <h4>{activePerson.nameq}</h4>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {chats.map(function (chat, index) {
            return (
              <div
                style={{
                  margin: "30px",
                  backgroundColor: "#9999999",
                  borderRadius: "8px",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                  alt={chat.sender}
                  src={chat.picture}
                  height="50px"
                />
                <div>
                  <h4>{chat.sender}</h4>
                  <p>{chat.message}</p>
                </div>
              </div>
            );
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

export default Home;
