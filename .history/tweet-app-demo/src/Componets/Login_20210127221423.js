import React from "react";
import "./Login.css";
function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="flex">
        <input placeholder="user" type="text" />
        <input placeholder="passwaord..." type="password" />
        <button onClick={submitHandler} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
