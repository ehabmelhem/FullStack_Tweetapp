import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <form className="flex">
        <input type="text" />
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
