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

/***/ "./src/VIS-Battle-Ships.js":
/*!*********************************!*\
  !*** ./src/VIS-Battle-Ships.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VIS-Display-boards */ \"./src/VIS-Display-boards.js\");\n/* harmony import */ var _VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VIS-displayPageSkeleton */ \"./src/VIS-displayPageSkeleton.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _VIS_Place_Ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VIS-Place-Ships */ \"./src/VIS-Place-Ships.js\");\n// imports \n\n\n\n\n\n\n\nfunction battleShips() {\n    const body = document.querySelector('body');\n    body.innerHTML = '';    \n    (0,_VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const stepsHeader = document.querySelector('.steps-header');\n    stepsHeader.textContent = 'Choose a square to attack';\n    const rotateButtonDiv = document.querySelector('.rotate-button-div');\n    rotateButtonDiv.innerHTML = '';\n\n    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // Ai place ships on conputer board \n\n    AiPlaceShips();\n    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__.displayComputerBoard)();\n\n    // add event listeners to computers board squares\n    addELForComputerBoardSquares();\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battleShips);\n\n\nfunction AiPlaceShips() { \n    while (_index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.availableShips.length > 0) { \n        let ship = _index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.availableShips[0];\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n        let direction = Math.floor(Math.random() * 2);\n        if (direction == 0) {\n            ship.changeDirection();\n        }\n        if (_index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.testIfShipIsLegal(ship, x, y) == 0) {\n            _index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.placeShip(ship, x, y);\n        }\n        else {\n            AiPlaceShips();\n        }\n    }\n}\n\nfunction addELForComputerBoardSquares() { \n    for (let i = 0; i < 10; i++) { \n        for (let j = 0; j < 10; j++) { \n            let square = document.getElementById('computer' + i + j);\n            if (square.classList == 'square') {\n                square.addEventListener('click', () => {\n                    _index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.receiveAttack(i, j);\n                    let body = document.querySelector('body');\n                    body.innerHTML = '';\n                    (0,_VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                    let stepsHeader = document.querySelector('.steps-header');\n                    stepsHeader.textContent = 'Choose a square to attack';\n                    let rotateButtonDiv = document.querySelector('.rotate-button-div');\n                    rotateButtonDiv.innerHTML = '';\n                    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n                    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__.displayComputerBoard)();\n                    if (_index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.allShipsSunk() == true){ \n                        let stepsHeader = document.querySelector('.steps-header');\n                        stepsHeader.textContent = 'You win!';\n                        setTimeout(() => {\n                            \n                            // display player win screen  /////\n                        }, 1000);\n                    } else { \n                        setTimeout(() => {\n                            AiAttack();\n                        }, 200);\n                    }\n                });\n            } \n        }\n    }\n}\n\nfunction AiAttack() {\n    let x = Math.floor(Math.random() * 10);\n    let y = Math.floor(Math.random() * 10);\n    let guessArr = [x, y];\n    if (_index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.guesses.some(item => JSON.stringify(item) === JSON.stringify([x, y]))) {\n        AiAttack();\n        console.log('already guessed');\n    } else {\n    _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].receiveAttack(x, y);\n    console.log(_index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.guesses);\n    _index__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard.guesses.push(guessArr);\n    let body = document.querySelector('body');\n    body.innerHTML = '';\n    (0,_VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    let stepsHeader = document.querySelector('.steps-header');\n    stepsHeader.textContent = 'Choose a square to attack';\n    let rotateButtonDiv = document.querySelector('.rotate-button-div');\n    rotateButtonDiv.innerHTML = '';\n    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_0__.displayComputerBoard)();\n\n    if (_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].allShipsSunk() == true) {\n        let stepsHeader = document.querySelector('.steps-header');\n        stepsHeader.textContent = 'You lose!';\n        setTimeout(() => {\n            // Display Player lose screen /////\n        }, 1000);\n    } else { \n        addELForComputerBoardSquares();\n    }\n\n    }\n}\n\n\n//# sourceURL=webpack://battle-ships/./src/VIS-Battle-Ships.js?");

/***/ }),

/***/ "./src/VIS-Display-boards.js":
/*!***********************************!*\
  !*** ./src/VIS-Display-boards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   displayComputerBoard: () => (/* binding */ displayComputerBoard)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n//imports \n\n\n\n\n\nfunction displayPlayerBoard() { \n    // create player game board \n    const playerGameBoardDiv = document.createElement('div');\n    playerGameBoardDiv.classList.add('player-game-board');\n    const gameContainer = document.querySelector('.game-container');\n    gameContainer.appendChild(playerGameBoardDiv);\n\n    for (let i=0; i<10; i++) { \n        for (let j=0; j<10; j++) { \n            let square = document.createElement('div');\n            square.classList.add('square');\n            square.id = 'player' + i + j;\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){\n                square.classList.add('ship');\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board[i][j] == 'miss') {\n                square.classList.add('miss');\n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hits.some(arr => JSON.stringify(arr) === JSON.stringify([i, j]))) {\n                square.classList.add('hitship');\n            }\n            \n            document.querySelector('.player-game-board').appendChild(square);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPlayerBoard);\n\nfunction displayComputerBoard() { \n\n    // create computer game board \n    const computerGameBoardDiv = document.createElement('div');\n    computerGameBoardDiv.classList.add('computer-game-board');\n    const gameContainer = document.querySelector('.game-container');\n    gameContainer.appendChild(computerGameBoardDiv);\n\n\n\n    for (let i=0; i<10; i++) { \n        for (let j=0; j<10; j++) { \n            let square = document.createElement('div');\n            square.classList.add('square');\n            square.id = 'computer' + i + j;\n            // if (computerGameBoard.board[i][j] instanceof Ship){\n            //     square.style.backgroundColor = 'pink';\n            // }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.computerGameBoard.board[i][j] == 'miss') {\n                square.classList.add('miss');\n                \n            }\n            if (_index__WEBPACK_IMPORTED_MODULE_1__.computerGameBoard.hits.some(item => JSON.stringify(item) === JSON.stringify([i, j]))) {\n                square.classList.add('hitship');\n                square.innerHTML = 'X';\n                square.style.display = 'flex';\n                square.style.justifyContent = 'center';\n                square.style.alignItems = 'center';\n                square.style.textAlign = 'center';\n                \n\n            }\n            document.querySelector('.computer-game-board').appendChild(square);\n        }\n    }\n\n}\n\n\n//# sourceURL=webpack://battle-ships/./src/VIS-Display-boards.js?");

/***/ }),

/***/ "./src/VIS-Place-Ships.js":
/*!********************************!*\
  !*** ./src/VIS-Place-Ships.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VIS-displayPageSkeleton */ \"./src/VIS-displayPageSkeleton.js\");\n/* harmony import */ var _VIS_Display_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VIS-Display-boards */ \"./src/VIS-Display-boards.js\");\n/* harmony import */ var _VIS_Battle_Ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VIS-Battle-Ships */ \"./src/VIS-Battle-Ships.js\");\n// import \n\n\n\n\n\n\n\n\n//build player gameBoard\nfunction placeShips() {\n    let body = document.querySelector('body');\n    body.innerHTML = '';\n    (0,_VIS_displayPageSkeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_VIS_Display_boards__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    // displayComputerBoard(); // delete me later\n\n\n    // add steps header text\n    const stepsHeader = document.querySelector('.steps-header');\n    stepsHeader.textContent = 'Place your ships';\n\n    // add rotate button\n    const rotateButton = document.querySelector('.rotate-button');\n    rotateButton.textContent = 'Rotate';\n    rotateButton.addEventListener('click', () => {\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availableShips[0].changeDirection();\n    });\n\n    // add event listeners to squares\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board[i][j] == 'empty') {\n                const square = document.getElementById('player' + i + j);\n                square.addEventListener('mouseover', function() {\n                    mouseOver(square.id);\n                });\n                square.addEventListener('mouseout', function() {\n                    mouseOut(square.id);\n                });\n                square.addEventListener('click', function() {\n                    placeShip(square.id);\n\n                });\n            }\n        }\n    }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShips);\n\n\nfunction mouseOver(squareid) {\n\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availableShips[0];\n    let x = parseInt(squareid[6]);\n    let y = parseInt(squareid[7]);\n    if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testIfShipIsLegal(currentShip, x, y) == 0){ \n        if (currentShip.direction == 'horizontal') { \n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById('player' + `${x}${y + i}`);\n                square.style.backgroundColor = 'green';\n            }\n        }\n        if (currentShip.direction == 'vertical') {\n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById('player' + `${x + i}${y}`);\n                square.style.backgroundColor = 'green';\n            }\n        }\n    } else { \n        if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testIfShipIsLegal(currentShip, x, y) == -0) {\n            return;\n        }\n    }\n}\n\nfunction mouseOut(squareid) {\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availableShips[0];\n    let x = parseInt(squareid[6]);\n    let y = parseInt(squareid[7]);\n    if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testIfShipIsLegal(currentShip, x, y) == 0){ \n        if (currentShip.direction == 'horizontal') { \n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById('player' + `${x}${y + i}`);\n                square.style.backgroundColor = 'white';\n            }\n        }\n        if (currentShip.direction == 'vertical') {\n            for (let i = 0; i < currentShip.length; i++) { \n                let square = document.getElementById('player' + `${x + i}${y}`);\n                square.style.backgroundColor = 'white';\n            }\n        }\n    } else { \n        if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testIfShipIsLegal(currentShip, x, y) == -0) {\n            return;\n        }\n    }\n}\n\nfunction placeShip(squareid){ \n\n    let x = parseInt(squareid[6]);\n    let y = parseInt(squareid[7]);\n    let currentShip = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availableShips[0];\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].placeShip(currentShip, x, y);\n    if (_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availableShips.length > 0) {\n    placeShips();\n\n\n    } else {\n        (0,_VIS_Battle_Ships__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n}\n\n//# sourceURL=webpack://battle-ships/./src/VIS-Place-Ships.js?");

/***/ }),

/***/ "./src/VIS-displayPageSkeleton.js":
/*!****************************************!*\
  !*** ./src/VIS-displayPageSkeleton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//imports \n\n\n\nfunction displayPageSkeleton() {\n    // create sreps header\n    const stepsHeader = document.createElement('div');\n    stepsHeader.classList.add('steps-header');\n    document.body.appendChild(stepsHeader);\n    \n    //insert rotate button \n    const rotateButtonDiv = document.createElement('div');\n    rotateButtonDiv.classList.add('rotate-button-div');\n    document.body.appendChild(rotateButtonDiv);\n    const rotateButton = document.createElement('button');\n    rotateButton.classList.add('rotate-button');\n    rotateButton.textContent = 'button';\n    rotateButtonDiv.appendChild(rotateButton);\n    \n    // create game container \n    const gameContainer = document.createElement('div');\n    gameContainer.classList.add('game-container');\n    document.body.appendChild(gameContainer);\n    \n    }\n\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPageSkeleton);\n\n//# sourceURL=webpack://battle-ships/./src/VIS-displayPageSkeleton.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// imports \n\n\n\nclass GameBoard {\n    constructor() {\n        this.board = [];\n        this.ships = [];\n        this.misses = [];\n        this.hits = [];\n        this.availableShips = [];\n        this.guesses = [];\n    }\n\n    createBoard() {\n        for (let i = 0; i < 10; i++) {\n            this.board.push([]);\n            for (let j = 0; j < 10; j++) {\n                this.board[i].push(\"empty\");\n            }\n        }\n        const ship1 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n        const ship2 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n        const ship3 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship4 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const ship5 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n        this.availableShips.push(ship1);\n        this.availableShips.push(ship2);\n        this.availableShips.push(ship3);\n        this.availableShips.push(ship4);\n        this.availableShips.push(ship5);\n\n    }\n\n    testIfShipIsLegal(ship, x, y) {\n        let response = 0;\n        if (ship.direction === 'horizontal') {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x] && this.board[x][y + i] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        } else {\n            for (let i = 0; i < ship.length; i++) {\n                if (this.board[x + i] && this.board[x + i][y] == \"empty\") {\n                    response += 0;\n                } else {\n                    response -= 1;\n                    return response;\n                }\n            }\n        }\n        return response;\n    }\n\n    placeShip(ship, x, y) {\n        if (this.testIfShipIsLegal(ship, x, y) == 0) {\n            if (ship.direction === 'horizontal') {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x][y + i] = ship;\n                }\n            } else {\n                for (let i = 0; i < ship.length; i++) {\n                    this.board[x + i][y] = ship;\n                }\n            }\n            this.ships.push(ship);\n            this.availableShips.shift();\n\n            console.log('ship placed successfully')\n        } else {\n            return \"error: did not pass legal test\";\n        }\n    }\n\n    receiveAttack(x, y) {\n        if (this.board[x][y] === \"empty\") {\n            this.misses.push([x, y]);\n            this.board[x][y] = \"miss\";\n\n            return \"miss\";}\n            else if (this.board[x][y] === \"miss\") {\n                return \"miss\";\n            }\n            else {\n            this.board[x][y].hit();\n            this.hits.push([x, y]);\n\n            if (this.board[x][y].sunk === true) {\n                return \"sunk\";\n            } else {\n                return \"hit\";\n            }\n        }\n    }\n\n    allShipsSunk() {\n        let sunk = true;\n        this.ships.forEach(ship => {\n            if (ship.sunk === false) {\n                sunk = false;\n            }\n        });\n        return sunk;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battle-ships/./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerGameBoard: () => (/* binding */ computerGameBoard),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _VIS_Place_Ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VIS-Place-Ships */ \"./src/VIS-Place-Ships.js\");\n\n//imports  \n\n\n\n\n\n\n//build player gameBoard\nconst playerGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nplayerGameBoard.createBoard();\n// playerGameBoard.placeShip(playerGameBoard.availableShips[0], 0, 0);\n// playerGameBoard.receiveAttack(1, 0);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerGameBoard);\n\n// build Ai gameBoard \nconst computerGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ncomputerGameBoard.createBoard();\n// computerGameBoard.placeShip(computerGameBoard.availableShips[0], 9, 0);\n// computerGameBoard.placeShip(computerGameBoard.availableShips[0], 8, 0);\n// computerGameBoard.placeShip(computerGameBoard.availableShips[0], 7, 0);\n// computerGameBoard.placeShip(computerGameBoard.availableShips[0], 6, 0);\n// computerGameBoard.placeShip(computerGameBoard.availableShips[0], 5, 0);\n\n\n\n\n\n\n\n\n// place ships screen \n(0,_VIS_Place_Ships__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n//# sourceURL=webpack://battle-ships/./src/index.js?");

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