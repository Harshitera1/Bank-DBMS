const db = require("../database/dbConfig");

async function getAllEmployees() {
  let connection;

  try {
    connection = await db.getConnection();
    const result = await connection.execute(
      `
      SELECT e.employee_id, u.full_name, e.role, e.salary, b.branch_name 
      FROM Employees e 
      JOIN Users u ON e.user_id = u.user_id 
      JOIN Branches b ON e.branch_id = b.branch_id
      `,
      [], // No parameters needed
      { outFormat: db.oracledb.OUT_FORMAT_OBJECT } // Ensures readable output
    );

    return result.rows;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error; // Rethrow to handle in the calling function
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

module.exports = { getAllEmployees };
