const db = require("../database/dbConfig");

async function getAllUsers() {
  let connection;

  try {
    connection = await db.getConnection();
    const result = await connection.execute(
      `
      SELECT user_id, username, full_name, email, phone_number, user_type, created_at 
      FROM Users
      `,
      [], // No parameters needed
      { outFormat: db.oracledb.OUT_FORMAT_OBJECT } // Ensures readable output
    );

    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Rethrow to handle in the calling function
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

module.exports = { getAllUsers };
