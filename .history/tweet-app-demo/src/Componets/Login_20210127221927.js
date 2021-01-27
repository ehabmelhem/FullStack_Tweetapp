import React from "react";
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
  <
      </form>
    </div>
  );
}

export default Login;
