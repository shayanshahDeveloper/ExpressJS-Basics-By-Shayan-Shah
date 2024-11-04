import express from "express";
import employe from "./route/employe.js";
const app = express();

app.use("/employe", employe);

app.listen(8040, () => console.log("Server is Up!"));
