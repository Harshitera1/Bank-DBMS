const getConnection = require("./dbConfig");

async function testConnection() {
  try {
    const connection = await getConnection();
    console.log("Connected to Oracle DB successfully!");
    await connection.close();
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
}

testConnection();
