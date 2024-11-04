import express from "express";
import router from "./route/student.js";
import routers from "./route/teacher.js";
const app = express();

app.use("/students", router);
app.use("/teachers", routers);

app.listen(8040, () => console.log("Server is Up!"));
