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
        <input onChange={(e)=>{
            setUser
        }} placeholder="user name..." type="text" />
        <input placeholder="passwaord..." type="password" />
        <Gotweet user={} type="submit" button_text="Login" path="tweet" />
      </form>
    </div>
  );
}

export default Login;
