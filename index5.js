import express from "express";
const app = express();

const cb1 = (req, res, next) => {
  console.log("First Cb.....");
  next();
};
const cb2 = (req, res, next) => {
  console.log("Second Cb.....");
  next();
};
const cb3 = (req, res, next) => {
  console.log("Third Cb.....");
  next();
};

app.get(
  "/crazy-routes",
  [cb1, cb2, cb3],
  (req, res, next) => {
    console.log("Fourth Cb....");
    next();
  },
  (req, res) => {
    console.log("Last Cb...");
    res.send("Hurrrah you Did it.....");
  }
);

app.listen(8040, () => console.log("Server Up!"));
