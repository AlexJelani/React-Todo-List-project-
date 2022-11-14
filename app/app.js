import "./styles/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import todo from "./components/todo";

function App() {
  return (
    <div
      className="container border border-primary rounded mt-5"
      style={{
        background: `url(https://walpapercave.com/wp/wp7422936.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <todo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
