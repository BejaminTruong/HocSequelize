const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task");
router.get("/task", getAllTask);
router.get("/task/:id", getTaskById);
router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
module.exports = router;
