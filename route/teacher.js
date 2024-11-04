import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});

router.post("/create", (req, res) => {
  res.send("Create Teacher");
});

router.put("/update", (req, res) => {
  res.send("Update Teacher");
});

router.get("/delete", (req, res) => {
  res.send("Delete Teacher");
});

export default router;
