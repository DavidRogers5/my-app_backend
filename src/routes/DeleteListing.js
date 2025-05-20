//import { fakeListings } from "./fake-data";
const DBConn = require("../DB.js");

export const DeleteListingsRoute = {
    method: 'POST',
    path: '/api/DeleteListing',
    handler: (request, h) => {

        const payload = request.payload;
        const PassID = JSON.stringify(payload.id);    
        
        const QueryStr1 = 
           `
           delete FROM Table_1
           where id = 
           `
           ;      
           
        const QuerySt2 = PassID.replace(/"/g, "");      
       
        const FinalQuery = QueryStr1.concat(QuerySt2);     
        DBConn.ConnAndQuery(FinalQuery); 

        return request.payload;
        
    }   

}


