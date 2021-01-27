import React from "react";
import { useHistory } from "react-router-dom";
function Gotweet({ text }) {
  const history = useHistory();
  const go = () => {
    history.push(`/${text}`);
  };
  return <button onClick={go}>Login </button>;
}

export default Gotweet;
