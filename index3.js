import express from "express";
const app = express();

// Mutilple Routing
app.get("/product/iphone", (req, res) => {
  res.send("Buy Iphone 16 PROMAX");
});

// other Example like

app.get("/category/tech/product/airpods", (req, res) => {
  res.send("Product out of Stock" );
});

app.listen(8040, () => console.log("Server is Up!"));
