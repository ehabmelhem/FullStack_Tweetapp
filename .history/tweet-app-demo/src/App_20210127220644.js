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
          <Route path="/">
            <Link>
              <button>Login</button>
            </Link>

            <button>SignIn</button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
