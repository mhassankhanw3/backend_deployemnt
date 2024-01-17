require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const url = "youtube";

app.get(`/${url}`, (req, res) => {
  res.send(`You are on the ${url}!`);
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
