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
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="user name..."
          type="text"
        />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          placeholder="passwaord..."
          type="text"
        />
        <button onClick={submitHandler} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
