import express from "express";
// Import Body parser
import bodyParser from "body-parser";
import router from "./route/home.js";
const app = express();

app.set("view engine", "ejs");
app.use("/", router);

// using parer Json()
app.use(bodyParser.json());

// Post request using package called body parser
app.post("/post", (req, res) => {
  const { name, linkedin, id } = req.body;
  res.send(`${name} ${linkedin} ${id}`);
});

// ExpressJS Basics Ends....

app.listen(8040, () => console.log("Server is Running on the Port 8040"));
