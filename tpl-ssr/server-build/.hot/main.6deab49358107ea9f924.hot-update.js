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

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/reducers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst newJson = str => {\n  let json = new Function(\"return \" + str)();\n  return json;\n};\n\nlet prevStore = newJson(localStorage.getItem(\"LJMRoot\")) || {};\nconst Store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/reducers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\nStore.subscribe(() => {\n  console.log(Store.getState()); //   console.log(RootStore())\n\n  localStorage.setItem(\"LJMRoot\", JSON.stringify(RootStore().getState())); //\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n//# sourceURL=webpack://tpl-ssr/./src/stores/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d462bdb3301ca38b1967")
/******/ })();
/******/ 
/******/ }
;