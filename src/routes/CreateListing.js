//import { fakeListings } from "./fake-data";
const DBConn = require("../DB.js");

export const CreateListingsRoute = {
    method: 'POST',
    path: '/api/CreateListing',
    handler: (request, h) => {
        
        const payload = request.payload;
        const PassName = JSON.stringify(payload.name);        
        
        const QueryStr1 = `
        INSERT INTO [dbo].[Table_1]
           ([Col1MyStrData]
           ,[Col2StrData]
           )
        VALUES
           ('
           `
           ;      
           
        const QuerySt2 = PassName.replace(/"/g, "");              
        
        const QuerySt3 = 
        `
           ',
           null
           )
        `;        
       
        const FinalQuery = QueryStr1.concat(QuerySt2 , QuerySt3);     
        DBConn.ConnAndQuery(FinalQuery); 

        return request.payload;
        
    }   

}


