"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _hapi = _interopRequireWildcard(require("@hapi/hapi"));
var _routes = _interopRequireDefault(require("./routes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var DBConn = require("./DB.js");
var cors = require('cors');
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //Angular version
          /*
          const server = Hapi.server({
              port:8080,
              host: 'localhost' , 
              "routes": {
                  "cors": {
                      "origin": ["http://localhost:4200"],
                      "headers": ["Accept", "Content-Type"],
                      "additionalHeaders": ["X-Requested-With"]
                  }
              }
          */
          //React version
          server = _hapi["default"].server({
            port: 8080,
            host: 'localhost',
            "routes": {
              "cors": {
                "origin": ["http://localhost:3000"],
                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
              }
            }
          }); //Angular app IP is http://localhost:4200 , React is 3000
          _routes["default"].forEach(function (routes) {
            return server.route(routes);
          });
          server.route({
            method: 'GET',
            path: '/hello',
            handler: function handler(req, h) {
              return 'Hello';
            }
          });
          _context.next = 5;
          return server.start();
        case 5:
          console.log('Server is listening on ${server.info.uri}');
        case 6:
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