import express from "express";
const app = express();

// Single Callback in ExpressJS
app.get("/cb", (req, res) => res.send("Single Callback....."));

// Double Callback in ExpressJs
app.get(
  "/db",
  (req, res, next) => {
    console.log("First Callback.....");
    // next is used to Jump to the next Callback
    next();
  },
  (req, res) => {
    console.log("Second Callback....");
    res.send("Last Callback");
  }
);

// Callback in Arrays

const cb1 = (req, res, next) => {
  console.log("First Callback Run.....");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Seoncd Callback Run.....");
  next();
};

const cb3 = (req, res, next) => {
  console.log("Third Callback Run.....");
  next();
};

const cb4 = (req, res) => {
  console.log("Fourth Callback Run.....");
  res.send("You Reached the Destination....");
};

app.get("/array-cb", [cb1, cb2, cb3, cb4]);

app.listen(8040, () => console.log("Server Up!"));
