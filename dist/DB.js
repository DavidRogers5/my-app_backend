"use strict";
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: 1433,
  options: {
    encrypt: true,                // required for Azure SQL
    trustServerCertificate: false // proper cert validation
  },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

let poolPromise;
function getPool() {
  if (!poolPromise) {
    poolPromise = sql.connect(config);
    sql.on("error", err => console.error("MSSQL pool error:", err));
  }
  return poolPromise;
}

async function ConnAndQuery(SQLPrm) {
  try {
    const pool = await getPool();
    return await pool.request().query(SQLPrm);
  } catch (err) {
    console.error("DB error:", err.message);
    throw err;
  }
}

module.exports = { ConnAndQuery };
