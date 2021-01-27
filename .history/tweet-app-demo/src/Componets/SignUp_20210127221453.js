import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="/signup">
      <form className="flex">
        <input placeholder="user name..." type="text" />
        <input placeholder="passwaord..." type="text" />
        <button onClick={submitHandler} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp;
