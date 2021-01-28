import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import Tweet from "./Componets/Tweet";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/tweet">
            <Tweet />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>SignUp</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
