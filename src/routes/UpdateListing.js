//import { fakeListings } from "./fake-data";
const DBConn = require("../DB.js");

export const UpdateListingsRoute = {
    method: 'POST',
    path: '/api/UpdateListing',
    handler: (request, h) => {

        const payload = request.payload;
        const PassName = JSON.stringify(payload.name);    
        const PassID = JSON.stringify(payload.id);    
        
        const QueryStr1 = 
           `
            UPDATE [dbo].[Table_1]
            SET [Col1MyStrData] = '
           `
           ;      
           
        const QuerySt2 = PassName.replace(/"/g, "");           

        const QuerySt3 = 
            `
            ',
            [Col2StrData] = null
            WHERE ID = 
           `
           ;      
           
        const QueryID4 = PassID.replace(/"/g, "");   
       
        const FinalQuery = QueryStr1.concat(QuerySt2 , QuerySt3, QueryID4);     
        DBConn.ConnAndQuery(FinalQuery); 

        return request.payload;
        
    }   

}


