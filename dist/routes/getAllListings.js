"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllListingsRoute = void 0;
var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));
//import { fakeListings } from "./fake-data";
var DBConn = require("../DB.js");
var getAllListingsRoute = exports.getAllListingsRoute = {
  method: 'GET',
  path: '/api/FakeListing',
  handler: function handler(req, h) {
    var QueryStr = "SELECT ID, Col1MyStrData, Col2StrData FROM Table_1";
    var results = DBConn.ConnAndQuery(QueryStr);
    return results;
  }
};