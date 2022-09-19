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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _stores_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores/index */ \"./src/stores/index.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/taching/bitbucket/react-cli/tpl-ssr/src/App.tsx\";\n\n // import RootStore from '@/stores';\n\n // RootStore().subscribe(() =>{\n//   console.log(RootStore())\n//   localStorage.setItem(\"LJMRoot\", JSON.stringify(RootStore().getState()));\n//\n// })\n// console.log(RootStore())\n// const newJson = (str:any) => {\n//   let json = (new Function(\"return \" + str))();\n//   return json;\n// }\n// let prevStore = newJson(localStorage.getItem(\"LJMRoot\"))||{};\n\n\n\n\nconst App = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n  store: _stores_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://tpl-ssr/./src/App.tsx?");

/***/ }),

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../actions/reducers/addPageReducer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// import { createStore, applyMiddleware } from 'redux';\n// import thunk from 'redux-thunk';\n//\n// import rootReducer from '@/reducers';\n// const configureStore = ( prevStore: any ) => {\n//     const store = createStore(\n//         rootReducer,\n//         prevStore,\n//         applyMiddleware( thunk )\n//     );\n//     return store;\n// }\n// let store;\n// const RootStore = ( prevStore?: any ) => {\n//     store = configureStore( prevStore );\n//     return store;\n// }\n//\n// export default RootStore;\n\n // import {reducer as testReducer} from '../views/Test/_index.js';\n// import {reducer as delReducer} from '../views/Test/_index.js';\n\nconst reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  add: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../actions/reducers/addPageReducer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) // testList:testReducer,\n  // remove:removeReducer,\n  // edit:editReducer,\n\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer));\n\n//# sourceURL=webpack://tpl-ssr/./src/stores/index.ts?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8abb96e2ee38d55b4fad")
/******/ })();
/******/ 
/******/ }
;