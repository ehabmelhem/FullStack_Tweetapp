import React from "react";
import { useHistory } from "react-router-dom";
function Gotweet({ path, button_text }) {
  const history = useHistory();
  const go = () => {
    if (button_text === "login") {
    }
    // history.push(`/${path}`);
  };
  return <button onClick={go}>{button_text} </button>;
}

export default Gotweet;
