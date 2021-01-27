import React, { useState } from "react";
import Gotweet from "./Gotweet";
import "./Login.css";
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="flex">
        <input
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          placeholder="user name..."
          type="text"
        />
        <input
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          placeholder="passwaord..."
          type="password"
        />
        <Gotweet user={user} type="submit" button_text="Login" path="tweet" />
      </form>
    </div>
  );
}

export default Login;
