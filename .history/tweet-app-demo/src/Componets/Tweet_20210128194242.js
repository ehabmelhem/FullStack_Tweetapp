import React from "react";
import "./Tweet.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Tweet() {
  return (
    <div className="tweet">
      <form>
        <input type="text" name="" id="" />
        <IconButton color
        >
          <AddIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default Tweet;
