import express from "express";
const app = express();

// Route Params

app.get("/student/delete/:id", (req, res) => {
  res.send(req.params.id);
});

// Route Params
app.get("/ecom/products/iphone/:model", (req, res) => {
  const { model } = req.params;
  res.send(`You Ordered Iphone ${model} PROMAX`);
});

// Route Params
app.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`The Products Category (${category}) & Product ID (${id})`);
});

// Route Params
app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Product was ordered on: ${day}/${month}/${year}`);
});

// Route Param
app.param("id", (req, res, next, id) => {
  console.log(`ID is: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("The is User ID Path");
  res.send("Response Ok....");
});

app.listen(8040, () => console.log("Sever is Up!"));
