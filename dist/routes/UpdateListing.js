"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateListingsRoute = void 0;
//import { fakeListings } from "./fake-data";
var DBConn = require("../DB.js");
var UpdateListingsRoute = exports.UpdateListingsRoute = {
  method: 'POST',
  path: '/api/UpdateListing',
  handler: function handler(request, h) {
    var payload = request.payload;
    var PassName = JSON.stringify(payload.name);
    var PassID = JSON.stringify(payload.id);
    var QueryStr1 = "\n            UPDATE [dbo].[Table_1]\n            SET [Col1MyStrData] = '\n           ";
    var QuerySt2 = PassName.replace(/"/g, "");
    var QuerySt3 = "\n            ',\n            [Col2StrData] = null\n            WHERE ID = \n           ";
    var QueryID4 = PassID.replace(/"/g, "");
    var FinalQuery = QueryStr1.concat(QuerySt2, QuerySt3, QueryID4);
    DBConn.ConnAndQuery(FinalQuery);
    return request.payload;
  }
};