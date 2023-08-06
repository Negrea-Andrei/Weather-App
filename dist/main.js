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

eval("const test = document.querySelector('.test')\r\nconst press = document.querySelector('.press')\r\nconst image = document.querySelector('.image')\r\n\r\nasync function testing() {\r\n    try {\r\n        const location = document.querySelector('.location');\r\n        const temperature = document.querySelector('.temperature');\r\n        const condition = document.querySelector('.condition');\r\n        const windSpeed = document.querySelector('.wind_speed');\r\n        const humidity = document.querySelector('.humidity')\r\n\r\n        const value = test.value\r\n        const API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${value}`);\r\n        const realAPI = await API.json();\r\n        const bla = realAPI\r\n        image.src = realAPI.current.condition.icon\r\n        console.log(bla)\r\n\r\n        location.innerHTML = realAPI.location.name;\r\n        temperature.innerHTML =`Temperature: ${realAPI.current.temp_c}°C`;\r\n        condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;\r\n        windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;\r\n        humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;\r\n    }\r\n    catch {\r\n        console.log(\"City not found\")\r\n    }\r\n}\r\n\r\npress.addEventListener('click', () => testing());\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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