/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_view__ = __webpack_require__(4);
// import Ball from './lib/ball';



// 1) make a game frame X
// 2) Select angle with keypress; show cast of path
// 3) shoot object at constant velocity

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  new __WEBPACK_IMPORTED_MODULE_0__lib_game_view__["a" /* default */](ctx);
  // const ball = new Ball({});
  // setupBall(ctx, 100, 100);
  // document.addEventListener("keydown", e => changeAngle(ctx, e, 100, 100));
});

// let theta = 0;
//
// const calculateRadians = (rootX, x, rootY, y) => {
//   theta = Math.atan2(y - rootY, x - rootX);
//   return theta;
// };
//
// const setupBall = (ctx, ballX, ballY) => {
//   drawBall(ctx, ballX, ballY);
// };
//
// const drawBall = (ctx, x, y) => {
//   ctx.beginPath();
//   ctx.arc(x, y, 5, 0, 2 * Math.PI);
//   ctx.fill();
//   ctx.stroke();
// };
//
// let thetaDirection = 1;
// const changeAngle = (ctx, e, rootX, rootY) => {
//   ctx.clearRect(0, 0, 500, 500);
//   setupBall(ctx, 100, 100);
//   switch (e.key) {
//     case "s":
//     case "ArrowDown":
//       theta += thetaDirection * .017;
//       break;
//     case "w":
//     case "ArrowUp":
//       theta -= thetaDirection * .017;
//       break;
//     case "a":
//     case "ArrowLeft":
//       theta = Math.PI;
//       thetaDirection = -1;
//       break;
//     case "d":
//     case "ArrowRight":
//       thetaDirection = 1;
//       theta = 0;
//       break;
//     default:
//   }
//
//   const lineY = 150 * Math.sin(theta) + rootX;
//   const lineX = 150 * Math.cos(theta) + rootY;
//
//   ctx.beginPath();
//   ctx.moveTo(rootX, rootY);
//   ctx.lineTo(lineX, lineY);
//   ctx.stroke();
// };


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Ball {

  constructor({ pos, vel, radius, color }) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  move() {
    const x = this.pos[0] + this.vel[0];
    const y = this.pos[1] + this.vel[1];

    this.pos = [x, y];
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__putter__ = __webpack_require__(5);



class Game {
  constructor({ ctx, level }) {
    this.level = level;
    this.setWindow();
    this.gameObjects = [];
    this.draw(ctx);
  }

  setWindow() {
    this.DIM_X = 480;
    this.DIM_Y = 640;
    Object.freeze(this.DIM_X);
    Object.freeze(this.DIM_Y);
  }

  addBall() {
    const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]({
      pos: this.level.ballStartPos,
      vel: [0, 0],
      radius: 5,
      color: null,
    });

    this.gameObjects.push(ball);
    return ball;
  }

  addPutter() {
    const putter = new __WEBPACK_IMPORTED_MODULE_1__putter__["a" /* default */]({
      theta: 0,
      thetaDirection: 1,
      pos: this.level.ballStartPos
    });

    this.gameObjects.push(putter);
    return putter;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.gameObjects.forEach( (obj) => obj.draw(ctx));
  }

  moveObjects() {
    this.gameObjects.forEach( (obj) => obj.move());
  }


}


/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(3);


const placeHolderLevel = { ballStartPos: [100, 100]};

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]({
      level: placeHolderLevel,
      ctx
    });

    this.putter = this.game.addPutter();
    this.ball = this.game.addBall();
    this.start();
  }

  start() {
    this.bindKeyHandlers();
    setInterval(() => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 1000 / 60 );
  }

  bindKeyHandlers() {
    const putter = this.putter;
    document.addEventListener("keydown",
      e => {
        this.changeTheta(e);
        this.changeVelocity(e);
      });
  }

  changeTheta(e) {
    switch (e.key) {
      case "s":
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .017;
        break;
      case "w":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .017;
        break;
      case "a":
      case "ArrowLeft":
        this.putter.theta = Math.PI;
        this.putter.thetaDirection = -1;
        break;
      case "d":
      case "ArrowRight":
        this.putter.thetaDirection = 1;
        this.putter.theta = 0;
        break;
      default:
    }
  }

  changeVelocity(e) {
    switch (e.key) {
      case " ":
        this.ball.vel = [2, 2];
        break;
      default:
        console.log(e);
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Putter {

  constructor({ theta, thetaDirection, pos}) {
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
  }

  draw(ctx, e) {
    const [x, y] = this.pos;

    const lineX = 150 * Math.cos(this.theta) + y;
    const lineY = 150 * Math.sin(this.theta) + x;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
  }

  move() {

  }

}

/* harmony default export */ __webpack_exports__["a"] = (Putter);


/***/ })
/******/ ]);