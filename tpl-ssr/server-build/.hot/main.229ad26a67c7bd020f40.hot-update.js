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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/reducers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst configureStore = prevStore => {\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@/reducers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), prevStore, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n  return store;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); // let store;\n// const RootStore = ( prevStore?: any ) => {\n//     store = configureStore( prevStore );\n//     return store;\n// }\n//\n// // export default RootStore;\n// import {createStore, combineReducers} from 'redux';\n// import rootReducer from '@/reducers';\n// // import {reducer as testReducer} from '../views/Test/_index.js';\n// // import {reducer as delReducer} from '../views/Test/_index.js';\n// // const reducer = combineReducers({\n// //     add : addReducer,\n// //     // testList:testReducer,\n// //     // remove:removeReducer,\n// //     // edit:editReducer,\n// // })\n// export default createStore(rootReducer);\n\n//# sourceURL=webpack://tpl-ssr/./src/stores/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2258f4e286d2eca5e6e6")
/******/ })();
/******/ 
/******/ }
;