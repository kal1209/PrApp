"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reducer = _interopRequireDefault(require("../reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: _reducer["default"],
  devTools: process.env.NODE_ENV !== 'production'
});
var _default = store;
exports["default"] = _default;