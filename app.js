const express = require("express"),
  app = express();

const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send({
    msg: "hello world"
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("The server has started..."));
