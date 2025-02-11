const { execute } = require("../database/dbConfig");

async function getAllEmployees() {
  const query = "SELECT * FROM employees"; // Replace with your actual table name
  return execute(query);
}

module.exports = { getAllEmployees };
