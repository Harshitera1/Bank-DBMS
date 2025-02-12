const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../models/userModel");

router.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
