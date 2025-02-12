const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Ensure correct path
const employeeRoutes = require("./routes/employeeRoutes"); // Corrected line

app.use(express.json());
app.use("/api/users", userRoutes); // Route for users
app.use("/api/employees", employeeRoutes); // Route for employees

app.listen(5000, () => console.log("Server running on port 5000"));
