const express = require("express");
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 8000;
const helmet = require("helmet");

const nodeCron = require("node-cron");

const task = nodeCron.schedule("*/1 * * * *", () => {
  console.log("success!");
});
task.start();

app.use(helmet());

app.get("/status", (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.end(JSON.stringify({status: 'ok'}));
});

http.listen(PORT, function(){
  console.log('Server listening. Port:' + PORT);
});
