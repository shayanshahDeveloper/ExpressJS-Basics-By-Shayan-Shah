import express from "express";
import userInfo from "./middleware/userDetails.js";
const app = express();

// Middleware in ExpressJs
function userCrediantial(req, res, next) {
  console.log("Username : Shayan Shah");
  console.log("Email: dummy@gmail.com");
  console.log("Age: 21");
  console.log("Country: Pakistan");
  next();
}

// app.use(will run the middleware for each Path)
app.use(userInfo);

// Using Middleware
app.get("/", (req, res) => {
  res.send("<h2>Welcome Admin</h2>");
});

//Middleware Run When we Hit each Path
app.get("/about", (req, res) => {
  res.send("<h1>This is About Section Path</h1>");
});

// Middleware Run when we Hit each or Specific Path
app.get("/contact", (req, res) => {
  res.send("<h1>This is a Contact Section Path </h1>");
});

app.listen(8040, () => console.log("Server is Up!"));
