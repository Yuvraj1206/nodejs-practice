const express = require("express");
const app = express();
const EventEmitter = require("events");

const event = new EventEmitter();

let count = 0;
event.on("countAPI", () => {
  //this is the event
  count++;
  console.log("Event Called ", count);
});

app.get("/", (req, res) => {
  res.send("api called");
  event.emit("countAPI"); //event will called
});

app.listen(5000);
