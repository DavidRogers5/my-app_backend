"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _getAllListings = require("./getAllListings");
var _CreateListing = require("./CreateListing");
var _UpdateListing = require("./UpdateListing");
var _DeleteListing = require("./DeleteListing");
var _default = exports["default"] = [_getAllListings.getAllListingsRoute, _CreateListing.CreateListingsRoute, _UpdateListing.UpdateListingsRoute, _DeleteListing.DeleteListingsRoute];