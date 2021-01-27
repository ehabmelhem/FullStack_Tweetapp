import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Componets/Login";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route>
            <Login
          </Route>
          <button>Login</button>
          <button>SignIn</button>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
