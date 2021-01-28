import React from "react";
import "./Tweet.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Tweet() {
  return (
    <div className="tweet">
      <form className="tweet__form">
        <input placeholder="add tweet..." type="text" name="" id="" />
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      </form>
      <div className="container">
          
      </div>
    </div>
  );
}

export default Tweet;
