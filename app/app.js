import "./styles/main.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"

function App() {

    const [todos, setTodos] = useState([]);
    return (

    <div className="APP">
      <header className="App-header">
        <p>React Todo</p>
      </header>
    </div>

  );
  
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
