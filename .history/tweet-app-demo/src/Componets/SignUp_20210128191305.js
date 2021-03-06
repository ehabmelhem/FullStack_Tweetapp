import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/users/get-users")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="signup">
      <form className="flex">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
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
