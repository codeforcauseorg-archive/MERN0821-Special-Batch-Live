import logo from "./logo.svg";
import "./App.css";
import markers from "./data/forms/markers";

function InputField(props) {
  return (
    <div className="ifdiv">
      <p
        style={{
          width: "200px",
        }}
      >
        {props.label}
      </p>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        style={{
          maxWidth: "400px",
          margin: "32px",
          padding: "8px",
        }}
      ></input>
    </div>
  );
}

function App() {

  let emptyForm = {};

  markers.forEach(marker => {
    emptyForm[marker.name] = marker.default;
  })

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {markers.map(function (marker, index) {
        return (
          <InputField
            key={index}
            name={marker.name}
            type={marker.type}
            label={marker.label}
            value={emptyForm[marker.name]}
          />
        );
      })}
    </div>
  );
}

export default App;
