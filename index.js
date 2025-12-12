const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const userInput = queryObject.code;

  // HIGH-RISK VULNERABILITY — always detected by CodeQL
  eval(userInput);

  res.end("Executed");
}).listen(8080);
