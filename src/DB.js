const sql = require('mssql');

const config = {
    user: 'NavBarLogin', // better stored in an app setting such as process.env.DB_USER
    password: 'Impact2727*', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'localhost\\sqlexpress', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'NavBarDB', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
        encrypt: false,        
    }
}

async function ConnAndQuery(SQLPrm) {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");

        //Angular version returns an object
        
        var resultSet = await poolConnection.request().query(SQLPrm);
        console.log(`${resultSet.recordset.length} rows returned.`); 
        JSON.stringify(resultSet.recordsets.recordset);
        return resultSet;
        


        //React version returns smaller object
        /*
        var resultSet = await poolConnection.request().query(SQLPrm);
        console.log(`${resultSet.recordset.length} rows returned.`); 
        const recordsObj = resultSet.recordset;  
        var SmallerResult = Object.keys(recordsObj).map((key) => [key, recordsObj[key]]);
        
        return SmallerResult;
        */

        
        //const recordsArray = results.recordset;  

        // close connection only when we're certain application is finished
        poolConnection.close();

    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { ConnAndQuery };
