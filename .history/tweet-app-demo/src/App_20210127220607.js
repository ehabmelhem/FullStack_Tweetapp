import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Componets/Login";

function App() {
  return (
    <Router>
        <div className="app">
      <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <button>Login</button>
          <button>SignIn</button>
        </div>
    </Router>
  );
}

export default App;
