import React, { useState, useEffect } from "react";
import "./Tweet.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Tweet() {
  const [tweets, setTweets] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("/users/get-tweets")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setTweets(data);
      });
  }, []);
  const handelClick = (e) => {
    e.preventDefault();
    fetch(`/users/add-tweet?tweet=${input}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        // setTweets(data);
      });
  };
  return (
    <div className="tweet">
      <form className="tweet__form">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="add tweet..."
          type="text"
          name=""
          id=""
        />
        <IconButton type="submit" onClick={handelClick} color="primary">
          <AddIcon />
        </IconButton>
      </form>
      <div className="container">
        {tweets.map((elm) => {
          return <h3>{elm}</h3>;
        })}
      </div>
    </div>
  );
}

export default Tweet;
