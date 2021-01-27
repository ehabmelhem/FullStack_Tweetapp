import React from "react";
import "./Login.css";
function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="flex">
        <input type="text" />
        <input type="password" />
        <button placeholder="passwaord" onClick={submitHandler} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
