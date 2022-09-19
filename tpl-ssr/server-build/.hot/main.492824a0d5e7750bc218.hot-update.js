"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/stores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/taching/bitbucket/react-cli/tpl-ssr/src/App.tsx\";\n\n\n\n\n\nconst unsubscribe = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/stores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().subscribe(() => {\n  // console.log(Store.getState())\n  localStorage.setItem(\"LJMRoot\", JSON.stringify(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/stores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().getState()));\n});\n\nconst newJson = str => {\n  var json = new Function(\"return \" + str)();\n  return json;\n};\n\nlet prevStore = newJson(localStorage.getItem(\"LJMRoot\")) || {};\n\nconst App = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n  store: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/stores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prevStore),\n  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://tpl-ssr/./src/App.tsx?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cacbd14f0de01b738432")
/******/ })();
/******/ 
/******/ }
;