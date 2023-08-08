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

eval("const city = document.querySelector('.city');\r\nconst country = document.querySelector('.country')\r\nconst press = document.querySelector('.press')\r\nconst image = document.querySelector('.image')\r\nconst card = document.querySelector('.weather_info_card')\r\nconst humidity = document.querySelector('.humidity')\r\n\r\nasync function testing() {\r\n    card.style.display = 'flex'\r\n    const location = document.querySelector('.location');\r\n    const temperature = document.querySelector('.temperature');\r\n    const condition = document.querySelector('.condition');\r\n    const windSpeed = document.querySelector('.wind_speed');    \r\n    \r\n\r\n    try {\r\n\r\n        const cityName = city.value\r\n        const countryName = country.value\r\n        \r\n\r\n        if (countryName !== '') {\r\n            API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${cityName},${countryName}`);\r\n\r\n            const realAPI = await API.json();\r\n            const bla = realAPI\r\n            image.src = realAPI.current.condition.icon\r\n            console.log(bla)\r\n\r\n            location.innerHTML = realAPI.location.name;\r\n            temperature.innerHTML = `Temperature: ${realAPI.current.temp_c}°C`;\r\n            condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;\r\n            windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;\r\n            humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;\r\n        }\r\n        else {\r\n            API = await fetch(`https://api.weatherapi.com/v1/current.json?key=95435ac00eca4f8d88a162138230108&q=${cityName}`);\r\n\r\n            const realAPI = await API.json();\r\n            image.src = realAPI.current.condition.icon\r\n\r\n            location.innerHTML = realAPI.location.name;\r\n            temperature.innerHTML = `Temperature: ${realAPI.current.temp_c}°C`;\r\n            condition.innerHTML = `Conditions: ${realAPI.current.condition.text}`;\r\n            windSpeed.innerHTML = `Wind Speed: ${realAPI.current.wind_kph} km/h`;\r\n            humidity.innerHTML = `Humidity: ${realAPI.current.humidity}`;\r\n        }\r\n\r\n    }\r\n    catch {\r\n        location.innerHTML = \"City not found\";\r\n        temperature.innerHTML = 'Please enter a different city and country';\r\n        condition.innerHTML = '';\r\n        windSpeed.innerHTML = '';\r\n        humidity.innerHTML = '';\r\n        image.src = '../src/Profile1.jpg'\r\n    }\r\n}\r\n\r\npress.addEventListener('click', () => testing());\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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