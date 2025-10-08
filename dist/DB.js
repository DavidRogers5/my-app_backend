"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var sql = require("mssql");
var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: 1433,
  options: {
    encrypt: true,
    // required for Azure SQL
    trustServerCertificate: false // proper cert validation
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};
var poolPromise;
function getPool() {
  if (!poolPromise) {
    poolPromise = sql.connect(config);
    sql.on("error", function (err) {
      return console.error("MSSQL pool error:", err);
    });
  }
  return poolPromise;
}
function ConnAndQuery(_x) {
  return _ConnAndQuery.apply(this, arguments);
}
function _ConnAndQuery() {
  _ConnAndQuery = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(SQLPrm) {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getPool();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(SQLPrm);
        case 6:
          return _context.abrupt("return", _context.sent);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("DB error:", _context.t0.message);
          throw _context.t0;
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _ConnAndQuery.apply(this, arguments);
}
module.exports = {
  ConnAndQuery: ConnAndQuery
};