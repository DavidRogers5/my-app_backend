"use strict";

var _interopRequireDefault2 = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator2 = _interopRequireDefault2(require("@babel/runtime/regenerator"));
var _asyncToGenerator3 = _interopRequireDefault2(require("@babel/runtime/helpers/asyncToGenerator"));
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _hapi = _interopRequireDefault(require("@hapi/hapi"));
var _routes = _interopRequireDefault(require("./routes"));
// ================================
// 🌐 LOCAL DEVELOPMENT VERSION
// ✅ This block is ACTIVE (uncommented) for local dev
// ❌ Comment this entire block before deploying
// ================================

// import Hapi, { server } from '@hapi/hapi';
// import routes from './routes';
// const DBConn = require("./DB.js");

// var cors = require('cors');

// const start = async () => 
// {
//     //Angular version
//     /*
//     const server = Hapi.server({
//         port:8080,
//         host: 'localhost' , 
//         "routes": {
//             "cors": {
//                 "origin": ["http://localhost:4200"],
//                 "headers": ["Accept", "Content-Type"],
//                 "additionalHeaders": ["X-Requested-With"]
//             }
//         }
//     */

//     //React version
//     const server = Hapi.server({
//         port:8080,
//         host: 'localhost' , 
//         "routes": {
//             "cors": {
//                 "origin": ["http://localhost:3000"],
//                 "headers": ["Accept", "Content-Type"],
//                 "additionalHeaders": ["X-Requested-With"]
//             }
//         }
//     });

//     //Angular app IP is http://localhost:4200 , React is 3000

//     routes.forEach(routes => server.route(routes));

//     server.route({
//         method: 'GET',
//         path: '/hello',
//         handler: (req, h) => {  
//             return 'Hello';        
//         }
//     });

//     await server.start();
//     console.log('Server is listening on ${server.info.uri}');
// }

// process.on('unhandledRejection' , err => {
//     console.log(err);
//     process.exit(1);
// });

// start();

// ================================
// ☁️ AZURE DEPLOYMENT VERSION
// ❌ This block is currently commented out
// ✅ Uncomment this block when deploying to Azure
// ================================

console.log("🔥 App has started running...");
var DBConn = require("./DB.js");
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          server = _hapi["default"].server({
            port: process.env.PORT || 8080,
            host: '0.0.0.0',
            // Required for Azure
            routes: {
              cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
              }
            }
          });
          _routes["default"].forEach(function (route) {
            return server.route(route);
          });
          server.route({
            method: 'GET',
            path: '/',
            handler: function handler() {
              console.log("🔁 Root route hit");
              return 'API is live!';
            }
          });
          server.route({
            method: 'GET',
            path: '/hello',
            handler: function handler() {
              return 'Hello from Azure!';
            }
          });
          _context.next = 6;

          // ✅ DB connectivity probe
          server.route({
            method: 'GET',
            path: '/dbcheck',
            handler: function () {
              var _handler = (0, _asyncToGenerator3["default"])(/*#__PURE__*/_regenerator2["default"].mark(function _callee2(req, h) {
                var _r$recordset, r;
                return _regenerator2["default"].wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return DBConn.ConnAndQuery('SELECT 1 AS ok');
                    case 3:
                      r = _context2.sent;
                      return _context2.abrupt("return", h.response({
                        ok: true,
                        result: (_r$recordset = r.recordset) === null || _r$recordset === void 0 ? void 0 : _r$recordset[0]
                      }).code(200));
                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](0);
                      console.error('DB check failed:', _context2.t0);
                      return _context2.abrupt("return", h.response({
                        ok: false,
                        error: _context2.t0.message
                      }).code(500));
                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, null, [[0, 7]]);
              }));
              function handler(_x, _x2) {
                return _handler.apply(this, arguments);
              }
              return handler;
            }()
          });
          return server.start();
        case 6:
          console.log("\u2705 Server is running at ".concat(server.info.uri));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function start() {
    return _ref.apply(this, arguments);
  };
}();
process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});
start();