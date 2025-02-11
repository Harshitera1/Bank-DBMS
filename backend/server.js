const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Enable JSON parsing

// Sample employee data
const employees = [
  { id: 1, name: "Alice Johnson", role: "Teller" },
  { id: 2, name: "Bob Smith", role: "Loan Officer" },
];

// API endpoint for employee data
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// Sample manager data (Just for comparison)
app.get("/api/managers", (req, res) => {
  res.json([{ id: 1, name: "John Doe", role: "Branch Manager" }]);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
