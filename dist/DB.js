"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var sql = require('mssql');
var config = {
  user: 'NavBarLogin',
  // better stored in an app setting such as process.env.DB_USER
  password: 'Impact2727*',
  // better stored in an app setting such as process.env.DB_PASSWORD
  server: 'localhost\\sqlexpress',
  // better stored in an app setting such as process.env.DB_SERVER
  port: 1433,
  // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: 'NavBarDB',
  // better stored in an app setting such as process.env.DB_NAME need to see if works...
  authentication: {
    type: 'default'
  },
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    encrypt: false
  }
};
function ConnAndQuery(_x) {
  return _ConnAndQuery.apply(this, arguments);
}
function _ConnAndQuery() {
  _ConnAndQuery = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(SQLPrm) {
    var poolConnection, resultSet;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sql.connect(config);
        case 3:
          poolConnection = _context.sent;
          console.log("Reading rows from the Table...");

          //Angular version returns an object
          _context.next = 7;
          return poolConnection.request().query(SQLPrm);
        case 7:
          resultSet = _context.sent;
          console.log("".concat(resultSet.recordset.length, " rows returned."));
          JSON.stringify(resultSet.recordsets.recordset);
          return _context.abrupt("return", resultSet);
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0.message);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _ConnAndQuery.apply(this, arguments);
}
module.exports = {
  ConnAndQuery: ConnAndQuery
};