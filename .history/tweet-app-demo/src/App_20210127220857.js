import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <SignUp />
          </Route>
          <Route path="/">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>SignUn</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
