import express from "express";
const app = express();

// Ugly Code
app.get("/student", (req, res) => {
  res.send("All Student");
});
app.post("/student", (req, res) => {
  res.send("Add Student");
});
app.put("/student", (req, res) => {
  res.send("Update Student");
});
app.delete("/student", (req, res) => {
  res.send("Delete Student");
});

// Refactor single Path to all method Like GET,POST,PUT,DELETE
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

app.listen(8040, (req, res) => console.log("Server is Up!"));
