import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});
router.post("/create", (req, res) => {
  res.send("Create Student");
});
router.put("/update", (req, res) => {
  res.send("Update Student");
});
router.delete("/delete", (req, res) => {
  res.send("Delete Student");
});

export default router;
