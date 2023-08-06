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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const test = document.querySelector('.test')\r\nconst press = document.querySelector('.press')\r\nconst image = document.querySelector('.image')\r\n\r\nasync function testing() {\r\n    try {\r\n        const value = test.value\r\n        const API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${value}`);\r\n        const realAPI = await API.json();\r\n        const bla = realAPI\r\n        image.src = realAPI.current.condition.icon\r\n        console.log(bla)\r\n    }\r\n    catch {\r\n        console.log(\"City not found\")\r\n    }\r\n}\r\n\r\npress.addEventListener('click', () => testing());\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;