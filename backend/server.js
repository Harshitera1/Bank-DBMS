const express = require("express");
const { initialize } = require("./database/dbConfig");

const app = express();
const PORT = 5000;

async function startServer() {
  await initialize(); // Connect to Oracle DB
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();
