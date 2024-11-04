import express from "express";

const app = express();

// Query String in ExpressJs
app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category: ${category} & Product ID: ${id}`);
});

app.listen(8040, () => console.log("Server is Up!"));
