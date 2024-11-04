import express from "express";
import {
  allEmploye,
  createEmploye,
  updateEmploye,
  deleteEmploye,
} from "../controllers/employe.js";
const router = express.Router();

router.get("/all", allEmploye);
router.post("/create", createEmploye);
router.put("/update", updateEmploye);
router.delete("/delete", deleteEmploye);

export default router;
