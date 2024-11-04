import express from "express";
const app = express();

// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//   res.send("If the user hit (acd) or (abcd) then this will run.");
// });

// Regex
app.get(/x/, (req, res) => {
  res.send('If the Path Inculdes letter "X" it Will Work...');
});

// Regex
// users/4 Digit number
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("User Found....");
});

app.listen(8040, () => console.log("Server Up!"));
