const express = require("express");
const router = express.Router();
const { getAllEmployees } = require("../models/employeeModel");

router.get("/employees", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
