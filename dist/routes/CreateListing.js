"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateListingsRoute = void 0;
//import { fakeListings } from "./fake-data";
var DBConn = require("../DB.js");
var CreateListingsRoute = exports.CreateListingsRoute = {
  method: 'POST',
  path: '/api/CreateListing',
  handler: function handler(request, h) {
    var payload = request.payload;
    var PassName = JSON.stringify(payload.name);
    var QueryStr1 = "\n        INSERT INTO [dbo].[Table_1]\n           ([Col1MyStrData]\n           ,[Col2StrData]\n           )\n        VALUES\n           ('\n           ";
    var QuerySt2 = PassName.replace(/"/g, "");
    var QuerySt3 = "\n           ',\n           null\n           )\n        ";
    var FinalQuery = QueryStr1.concat(QuerySt2, QuerySt3);
    DBConn.ConnAndQuery(FinalQuery);
    return request.payload;
  }
};