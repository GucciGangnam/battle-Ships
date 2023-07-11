/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// imports \n\n\n\nclass GameBoard {\n    constructor() {\n        this.board = [];\n        this.ships = [];\n        this.misses = [];\n        this.availableShips = [];\n    }\n\n    createBoard() {\n        for (let i = 0; i < 10; i++) {\n            this.board.push([]);\n            for (let j = 0; j < 10; j++) {\n                this.board[i].push(\"empty\");\n            }\n        }\n        const ship1 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n        const ship2 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n        const ship3 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship4 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship5 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n        this.availableShips.push(ship1);\n        this.availableShips.push(ship2);\n        this.availableShips.push(ship3);\n        this.availableShips.push(ship4);\n        this.availableShips.push(ship5);\n    }\n\n    testIfShipIsLegal(ship, x, y) {\n        let response = 0;\n        if (ship.direction === 'horizontal') {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x] && this.board[x][y + i] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        } else {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x + i] && this.board[x + i][y] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        }\n        return response;\n    }\n\n    placeShip(ship, x, y) {\n        if (this.testIfShipIsLegal(ship, x, y) == 0) {\n            if (ship.direction === 'horizontal') {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x][y + i] = ship;\n                }\n            } else {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x + i][y] = ship;\n                }\n            }\n            this.ships.push(ship);\n            this.availableShips.shift();\n            console.log(this.availableShips);\n            console.log('ship placed successfully')\n        } else {\n            return \"error: did not pass legal test\";\n        }\n    }\n\n    receiveAttack(x, y) {\n        if (this.board[x][y] === \"empty\") {\n            this.misses.push([x, y]);\n            return \"miss\";\n        } else {\n            this.board[x][y].hit();\n            if (this.board[x][y].sunk === true) {\n                return \"sunk\";\n            } else {\n                return \"hit\";\n            }\n        }\n    }\n\n    allShipsSunk() {\n        let sunk = true;\n        this.ships.forEach(ship => {\n            if (ship.sunk === false) {\n                sunk = false;\n            }\n        });\n        return sunk;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battle-ships/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\n\n//imports  \n\n\n\n\n//build gameBoard\n\nconst playergameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nplayergameBoard.createBoard();\n\n\n// buold interface\n(0,_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playergameBoard.availableShips[0]);\n\n\n\n\n\n//# sourceURL=webpack://battle-ships/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n// imports \n\n\nfunction placeShipScreen(ship) { \n// format body \nconst body = document.querySelector('body');\n\nbody.style.backgroundColor = 'lightblue';\nbody.style.display = 'flex';\nbody.style.alignItems = 'center';\nbody.style.justifyContent = 'center';\nbody.style.height = '100vh';\nbody.style.width = '100vw';\n\n// craete steps banner \nconst stepsBanner = document.createElement('div');\n\nstepsBanner.style.backgroundColor = 'white';\nstepsBanner.style.height = '100px';\nstepsBanner.style.width = 'calc(100vw + 10px)';\nstepsBanner.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';\nstepsBanner.style.position = 'absolute';\nstepsBanner.style.top = '5vh'; \nstepsBanner.style.left = '-10px';\nstepsBanner.style.display = 'flex';\nstepsBanner.style.alignItems = 'center';\nstepsBanner.style.justifyContent = 'center';\n\nstepsBanner.innerHTML = 'Step 1: Place your ships!';\nstepsBanner.style.fontFamily = 'Arial, sans-serif';\nstepsBanner.style.fontSize = '50px';\nstepsBanner.style.color = 'black'; \nstepsBanner.style.fontWeight = 'bold';\n\nbody.appendChild(stepsBanner);\n\n// create player baord \nconst playerGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nplayerGameBoard.createBoard();\n\nconst playerBoard = document.createElement('div');\nplayerBoard.style.backgroundColor = 'white';\nplayerBoard.style.height = '500px';\nplayerBoard.style.width = '500px';\nplayerBoard.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)';\nplayerBoard.style.display = 'grid';\nplayerBoard.style.gridTemplateColumns = 'repeat(10, 1fr)';\nplayerBoard.style.gridTemplateRows = 'repeat(10, 1fr)';\n\nbody.appendChild(playerBoard);\n\n// create squares for player baord\n\nfor (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n        const square = document.createElement('div');\n        square.style.backgroundColor = 'lightblue';\n        square.style.border = '1px solid black';\n        square.id = `${i} ${j}`;\n        square.innerHTML = `${i}, ${j}`;\n        playerBoard.appendChild(square);\n        square.style.cursor = 'pointer';\n        square.addEventListener('click', () => {\n            playerGameBoard.placeShip(ship, i, j);\n            console.log(playerGameBoard.board);\n        });\n        square.addEventListener('mouseover', function() { \n            hoverCheck(square, ship);\n        });\n        square.addEventListener('mouseout', () => {\n            for (let i = 0; i < 10; i++) { \n                for (let j = 0; j < 10; j++) { \n                    const square = document.getElementById(`${i} ${j}`);\n                    square.style.backgroundColor = 'lightblue';\n                }\n            }\n        });\n    }\n}\n\n    function hoverCheck(square, ship) {\n        const squareId = square.id.split(' ');\n        const x = parseInt(squareId[0]);\n        const y = parseInt(squareId[1]);\n        const legal = playerGameBoard.testIfShipIsLegal(ship, x, y);\n        if (legal == 0) {\n            for (let i = 0; i < ship.length; i++) {\n                const square = document.getElementById(`${x} ${y + i}`);\n                square.style.backgroundColor = 'green';\n            }\n        } else {\n            square.style.backgroundColor = 'red';\n        }\n    }\nconsole.log('Hello from interface!')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShipScreen);\n\n//# sourceURL=webpack://battle-ships/./src/interface.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship { \n    constructor(length) { \n        this.length = length;\n        this.hits = 0;\n        this.sunk = false;\n        this.direction = 'horizontal';\n    }\n\n    hit() {\n        this.hits++;\n        if (this.hits === this.length) {\n            this.sunk = true;\n        }\n    }\n\n    isSunk() {\n        return this.sunk;\n    }\n\n    changeDirection() { \n        if (this.direction === 'horizontal') {\n            this.direction = 'vertical';\n        } else {\n            this.direction = 'horizontal';\n        }\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battle-ships/./src/ship.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;