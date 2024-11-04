import express from "express";
import product from "./product.js";
const app = express();

app.get("/product", (req, res) => {
    res.json(product)
});

app.listen(8040, () => console.log("Server is Running on the Port 8040"));
