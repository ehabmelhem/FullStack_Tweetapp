import React from "react";
import "./SignUp.css";
function SignUp() {
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("add/user",{
        method="POST",
        headers
    })
  };
  return (
    <div className="signup">
      <form className="flex">
        <input placeholder="user name..." type="text" />
        <input placeholder="passwaord..." type="text" />
        <button onClick={submitHandler} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
