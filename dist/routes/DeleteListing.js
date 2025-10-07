"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListingsRoute = void 0;
//import { fakeListings } from "./fake-data";
var DBConn = require("../DB.js");
var DeleteListingsRoute = exports.DeleteListingsRoute = {
  method: 'POST',
  path: '/api/DeleteListing',
  handler: function handler(request, h) {
    var payload = request.payload;
    var PassID = JSON.stringify(payload.id);
    var QueryStr1 = "\n           delete FROM Table_1\n           where id = \n           ";
    var QuerySt2 = PassID.replace(/"/g, "");
    var FinalQuery = QueryStr1.concat(QuerySt2);
    DBConn.ConnAndQuery(FinalQuery);
    return request.payload;
  }
};