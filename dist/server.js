"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _hapi = _interopRequireDefault(require("@hapi/hapi"));
var _index = _interopRequireDefault(require("./routes/index.js"));
// or './routes'
var DBConn = require("./db.js");
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          server = _hapi["default"].server({
            port: process.env.PORT || 8080,
            host: '0.0.0.0',
            routes: {
              cors: {
                origin: ['*'],
                // Allow all origins for now
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
              }
            }
          }); // Register all API routes
          _index["default"].forEach(function (route) {
            return server.route(route);
          });

          // Optional: Add a simple root route for health check or test
          server.route({
            method: 'GET',
            path: '/',
            handler: function handler() {
              return 'API is live!';
            }
          });

          // Start the server
          _context.next = 6;
          return server.start();
        case 6:
          console.log("\u2705 Server is running at ".concat(server.info.uri));
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('🔥 Server failed to start:', _context.t0);
          process.exit(1);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function start() {
    return _ref.apply(this, arguments);
  };
}();

// Graceful shutdown on unhandled rejections
process.on('unhandledRejection', function (err) {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});
start();