import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <button>Login</button>
        <button>SignIn</button>
      </div>
    </Router>
  );
}

export default App;
