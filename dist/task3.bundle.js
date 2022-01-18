/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task3.js":
/*!**********************!*\
  !*** ./src/task3.js ***!
  \**********************/
/***/ ((module) => {

eval("class Calculator {\n  add(x = 0, y = 0) {\n    if (typeof x === 'number' && typeof y === 'number') {\n      return x + y;\n    }\n    return null;\n  }\n\n  subtract(x = 0, y = 0) {\n    if (typeof x === 'number' && typeof y === 'number') {\n      return x - y;\n    }\n    return null;\n  }\n\n  divide(x = 1, y = 1) {\n    if (typeof x === 'number' && typeof y === 'number') {\n      if (y > 0) {\n        return x/y;\n      }\n      return undefined;\n    }\n    return null;\n  }\n\n  multiply(x = 1, y = 1) {\n    if (typeof x === 'number' && typeof y === 'number') {\n      return x * y;\n    }\n    return null;\n  }\n}\n\nmodule.exports = Calculator;\n\n\n//# sourceURL=webpack://testing-exercise/./src/task3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/task3.js");
/******/ 	
/******/ })()
;