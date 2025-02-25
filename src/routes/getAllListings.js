import _toArray from "@babel/runtime/helpers/toArray";

//import { fakeListings } from "./fake-data";
const DBConn = require("../DB.js");

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/FakeListing',
    handler: (req, h) => {

        const QueryStr = `SELECT ID, Col1MyStrData, Col2StrData FROM Table_1`;        
        const results = DBConn.ConnAndQuery(QueryStr);  
       
        return results;        
           
    }
    
}


