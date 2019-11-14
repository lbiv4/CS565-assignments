const express = require("express");
const bp = require("body-parser");
const server = express();

server.use(
  bp.urlencoded({
    extended: true
  })
);
server.get("*", (req, res) => {
  res.status(200);
  //This is expecting you to be in the assignment5 folder - otherwise it will throw an error
  res.sendFile("index.html", { root: __dirname });
});
server.post("/submit", (req, res) => {
  let output = "";
  Object.keys(req.body).forEach(key => {
    output += `${key}: ${req.body[key]}\n`;
  });
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  res.send(output);
});
server.listen(8000);
console.log(
  `This is your directory from which files will be served: ${__dirname}`
);
console.log(`Consider moving to assignment5 if necessary`);
