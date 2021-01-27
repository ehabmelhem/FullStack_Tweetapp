import React from "react";
import { useHistory } from "react-router-dom";
function Gotweet({ pass, user, path, button_text }) {
  const history = useHistory();
  const go = () => {
    if (button_text === "login") {
      fetch("/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, pass }),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data.messege);
        });
    }
    // history.push(`/${path}`);
  };
  return <button onClick={go}>{button_text} </button>;
}

export default Gotweet;
