const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || 3002;
app.get("/stam",(req,res)=>{
    res.send({})
})

app.listen(port, () => {
  console.log("localhost:", port);
});
