const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");

// Create a new task
router.post("/createtask", taskController.createTask);

// Get all tasks
router.get("/viewtask", taskController.getAllTasks);

// Get a task by ID
router.get("/edittask/:id", taskController.getTaskById);

// Update a task
router.put("/updatetask/:id", taskController.updateTask);

// Delete a task
router.delete("/deletetask/:id", taskController.deleteTask);

module.exports = router;
