"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var sql = require('mssql');
var config = {
  user: 'drogers',
  password: 'Impact2727*',
  server: 'mssqlserv.database.windows.net',
  port: 1433,
  database: 'NavBarDB',
  options: {
    encrypt: true,
    trustServerCertificate: false
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
          _context.next = 7;
          return poolConnection.request().query(SQLPrm);
        case 7:
          resultSet = _context.sent;
          console.log("".concat(resultSet.recordset.length, " rows returned."));
          return _context.abrupt("return", resultSet);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("Database query error:", _context.t0.message);
        case 15:
          _context.prev = 15;
          if (!poolConnection) {
            _context.next = 25;
            break;
          }
          _context.prev = 17;
          _context.next = 20;
          return poolConnection.close();
        case 20:
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t1 = _context["catch"](17);
          console.error("Error closing the database connection:", _context.t1.message);
        case 25:
          return _context.finish(15);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12, 15, 26], [17, 22]]);
  }));
  return _ConnAndQuery.apply(this, arguments);
}
module.exports = {
  ConnAndQuery: ConnAndQuery
};