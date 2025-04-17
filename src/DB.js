const sql = require('mssql');

const config = {
    user: 'drogers',
    password: 'Impact2727*',
    server: 'mssqlserv.database.windows.net',
    port: 1433,
    database: 'NavBarDB',
    options: {
        encrypt: true,
        trustServerCertificate: false,
    }
};

async function ConnAndQuery(SQLPrm) {
    let poolConnection;
    try {
        poolConnection = await sql.connect(config);
        console.log("Reading rows from the Table...");

        const resultSet = await poolConnection.request().query(SQLPrm);
        console.log(`${resultSet.recordset.length} rows returned.`);
        
        return resultSet;
    } catch (err) {
        console.error("Database query error:", err.message);
    } finally {
        if (poolConnection) {
            try {
                await poolConnection.close();
            } catch (closeErr) {
                console.error("Error closing the database connection:", closeErr.message);
            }
        }
    }
}

module.exports = { ConnAndQuery };
