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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// imports \n\n\n\nclass GameBoard {\n    constructor() {\n        this.board = [];\n        this.ships = [];\n        this.misses = [];\n        this.hits = [];\n        this.availableShips = [];\n    }\n\n    createBoard() {\n        for (let i = 0; i < 10; i++) {\n            this.board.push([]);\n            for (let j = 0; j < 10; j++) {\n                this.board[i].push(\"empty\");\n            }\n        }\n        const ship1 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n        const ship2 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n        const ship3 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship4 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship5 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n        this.availableShips.push(ship1);\n        this.availableShips.push(ship2);\n        this.availableShips.push(ship3);\n        this.availableShips.push(ship4);\n        this.availableShips.push(ship5);\n        // this.placeShip(ship1, 5, 4);\n        // this.receiveAttack(9, 0);\n        // this.placeShip(ship2, 1, 0);\n        // this.receiveAttack(1, 0);\n        // this.receiveAttack(1, 1);\n        // this.receiveAttack(1, 2);\n\n\n        // console.log(this.board);\n        // console.log(this.misses);\n        // console.log(this.hits);\n    }\n\n    testIfShipIsLegal(ship, x, y) {\n        let response = 0;\n        if (ship.direction === 'horizontal') {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x] && this.board[x][y + i] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        } else {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x + i] && this.board[x + i][y] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        }\n        return response;\n    }\n\n    placeShip(ship, x, y) {\n        if (this.testIfShipIsLegal(ship, x, y) == 0) {\n            if (ship.direction === 'horizontal') {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x][y + i] = ship;\n                }\n            } else {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x + i][y] = ship;\n                }\n            }\n            this.ships.push(ship);\n            this.availableShips.shift();\n            console.log(this.availableShips);\n            console.log('ship placed successfully')\n        } else {\n            return \"error: did not pass legal test\";\n        }\n    }\n\n    receiveAttack(x, y) {\n        if (this.board[x][y] === \"empty\") {\n            this.misses.push([x, y]);\n            this.board[x][y] = \"miss\";\n            console.log('misses so far: ' + this.misses);\n            return \"miss\";}\n            else if (this.board[x][y] === \"miss\") {\n                return \"miss\";\n            }\n            else {\n            this.board[x][y].hit();\n            this.hits.push([x, y]);\n            console.log('hits so far: ' + this.hits);\n            if (this.board[x][y].sunk === true) {\n                return \"sunk\";\n            } else {\n                return \"hit\";\n            }\n        }\n    }\n\n    allShipsSunk() {\n        let sunk = true;\n        this.ships.forEach(ship => {\n            if (ship.sunk === false) {\n                sunk = false;\n            }\n        });\n        return sunk;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battle-ships/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n\n//imports  \n\n\n\n\n\n\n//build player gameBoard\nconst playergameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nplayergameBoard.createBoard();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playergameBoard);\n\n// build Ai gameBoard \n// const AiGameBoard = new GameBoard();\n// AiGameBoard.createBoard();\n// export { AiGameBoard };\n\n(0,_interface__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// placeFirstShip();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battle-ships/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// imports \n\n\n\n\n// display both game boards \n\nfunction displayPageSkeleton() {\n// create sreps header\nconst stepsHeader = document.createElement('div');\nstepsHeader.classList.add('steps-header');\nstepsHeader.textContent = 'Place 1st ship';\ndocument.body.appendChild(stepsHeader);\n\n//insert rotate button \nconst rotateButtonDiv = document.createElement('div');\nrotateButtonDiv.classList.add('rotate-button-div');\ndocument.body.appendChild(rotateButtonDiv);\nconst rotateButton = document.createElement('button');\nrotateButton.classList.add('rotate-button');\nrotateButton.textContent = 'Rotate';\nrotateButton.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].availableShips[0].changeDirection();\n    console.log(_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].availableShips[0].direction);\n});\nrotateButtonDiv.appendChild(rotateButton);\n\n// create game container \nconst gameContainer = document.createElement('div');\ngameContainer.classList.add('game-container');\ndocument.body.appendChild(gameContainer);\n\n// create player game board \nconst playerGameBoard = document.createElement('div');\nplayerGameBoard.classList.add('player-game-board');\ngameContainer.appendChild(playerGameBoard);\n\n// create computer game board \n// const computerGameBoard = document.createElement('div');\n// computerGameBoard.classList.add('computer-game-board');\n// gameContainer.appendChild(computerGameBoard);\n\n// display player game board\ndisplayPlayerGameBoard();\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPageSkeleton);\n\n\n\nfunction displayPlayerGameBoard() {\n    for (let i = 0; i < 10; i++){ \n        for (let j = 0; j < 10; j++){ \n            const square = document.createElement('div');\n            square.classList.add('square');\n            square.id = `${i}${j}`;\n            let playerGameBoard = document.querySelector('.player-game-board');\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board[i][j] == 'empty') { \n                square.addEventListener('mouseover', function() {\n                    mouseOver(square.id);\n                })\n                square.addEventListener('click', function() {\n                    placeShip(square.id);\n                })\n                square.addEventListener('mouseout', function() {\n                    mouseOut(square.id);\n                })\n            };\n            playerGameBoard.appendChild(square);\n        }\n    }\n    for (let i = 0; i < 10; i++){ \n        for (let j = 0; j < 10; j++){\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){\n                let square = document.getElementById(`${i}${j}`);\n                square.classList.add('ship');\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board[i][j] == 'miss') {\n                let square = document.getElementById(`${i}${j}`);\n                square.classList.add('miss');\n            }\n            \n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hits.some(arr => JSON.stringify(arr) === JSON.stringify([i, j]))) {\n                console.log('a hit ship has been colored ')\n                let square = document.getElementById(`${i}${j}`);\n                square.classList.add('hitship');\n            }\n\n        }\n    }\n}\nfunction mouseOver(squareid) {\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].availableShips[0];\n    // let square = document.getElementById(squareid);\n    let x = parseInt(squareid[0]);\n    let y = parseInt(squareid[1]);\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testIfShipIsLegal(currentShip, x, y) == 0){ \n        if (currentShip.direction == 'horizontal') { \n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById(`${x}${y + i}`);\n                square.style.backgroundColor = 'green';\n            }\n        }\n        if (currentShip.direction == 'vertical') {\n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById(`${x + i}${y}`);\n                square.style.backgroundColor = 'green';\n            }\n        }\n    } else { \n        if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testIfShipIsLegal(currentShip, x, y) == -0) {\n            return;\n        }\n    }\n}\n\nfunction mouseOut(squareid) {\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].availableShips[0];\n    // let square = document.getElementById(squareid);\n    let x = parseInt(squareid[0]);\n    let y = parseInt(squareid[1]);\n    if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testIfShipIsLegal(currentShip, x, y) == 0){ \n        if (currentShip.direction == 'horizontal') { \n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById(`${x}${y + i}`);\n                square.style.backgroundColor = 'white';\n            }\n        }\n        if (currentShip.direction == 'vertical') {\n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById(`${x + i}${y}`);\n                square.style.backgroundColor = 'white';\n            }\n        }\n    } else { \n        if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testIfShipIsLegal(currentShip, x, y) == -0) {\n            return;\n        }\n    }\n}\n\nfunction placeShip(squareid){ \n    let x = parseInt(squareid[0]);\n    let y = parseInt(squareid[1]);\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].availableShips[0];\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].placeShip(currentShip, x, y);\n    displayPlayerGameBoard();\n}\n\n\n//# sourceURL=webpack://battle-ships/./src/interface.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;