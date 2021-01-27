import React from "react";
import Gotweet from "./Gotweet";
import "./Login.css";
function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="flex">
        <input placeholder="user name..." type="text" />
        <input placeholder="passwaord..." type="password" />
        <Gotweet onC />
      </form>
    </div>
  );
}

export default Login;
