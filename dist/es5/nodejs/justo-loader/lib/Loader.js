"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _path = require(
"path");var _path2 = _interopRequireDefault(_path);var 




Loader = (function () {function Loader() {_classCallCheck(this, Loader);}_createClass(Loader, null, [{ key: "load", value: 



    function load() {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      return require(_path2["default"].join.apply(_path2["default"], [process.cwd()].concat(args)));} }, { key: "loadJusto", value: 





    function loadJusto() {
      return Loader.load("node_modules", "justo");} }]);return Loader;})();exports["default"] = Loader;module.exports = exports["default"];
