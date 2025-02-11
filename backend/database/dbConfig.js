const oracledb = require("oracledb");

const dbConfig = {
  user: "user",
  password: "qwerty",
  connectString: "localhost/XE", // Adjusted for Oracle XE
};

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log("✅ Oracle DB Connection Pool Initialized!");
  } catch (err) {
    console.error("❌ Oracle DB Initialization Error:", err);
    process.exit(1); // Exit the process if DB fails to connect
  }
}

async function getConnection() {
  let connection;
  try {
    connection = await oracledb.getConnection();
    console.log("✅ Successfully connected to Oracle DB!");
    return connection;
  } catch (err) {
    console.error("❌ Error getting Oracle DB connection:", err);
    throw err;
  }
}

module.exports = { initialize, getConnection };
