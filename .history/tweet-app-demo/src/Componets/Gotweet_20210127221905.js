import React from "react";
import { useHistory } from "react-router-dom";
function Gotweet() {
  const history = useHistory();
  const go = () => {
    history.push("/tweets");
  };
  return <button>Login </button>;
}

export default Gotweet;
