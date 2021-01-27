import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  };
  return (
    <div className="signup">
      <form className="flex">
        <input onChange placeholder="user name..." type="text" />
        <input placeholder="passwaord..." type="text" />
        <button onClick={submitHandler} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
