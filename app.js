const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({
    msg: "hello world"
  });
});

app.listen(port, () => console.log("The server has started..."));
