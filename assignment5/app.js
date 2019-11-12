const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  res.sendFile(path.join("/index.html"));
});
server.post("/submit", (req, res) => {
  console.log(req);
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  res.send("test: ");
});
server.listen(8000);
