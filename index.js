import express from "express";

const app = express();

// Basic Routing in Express Js
app.get("/", (req, res) => {
  res.send("Welcome to Express Js");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me </h1>");
});


app.listen(8040, () => console.log("Server is Running on the POrt 8040"));
