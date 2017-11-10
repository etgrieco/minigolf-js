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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_view__ = __webpack_require__(1);
// import Ball from './lib/ball';



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  new __WEBPACK_IMPORTED_MODULE_0__lib_game_view__["a" /* default */](ctx);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_level_1__ = __webpack_require__(9);




class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]({
      level: __WEBPACK_IMPORTED_MODULE_1__levels_level_1__["a" /* default */],
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
      this.game.checkCollissions();
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
    console.log(this.putter.theta);
    switch (e.key) {
      case "s":
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .2;
        break;
      case "w":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .2;
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
        this.ball.hit(this.putter.theta);
        break;
      default:
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__putter__ = __webpack_require__(4);



class Game {
  constructor({ ctx, level }) {
    this.level = level;
    this.gameObjects = { level };
    this.draw(ctx);
  }

  addBall() {
    const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]({
      pos: this.level.ballStartPos,
      vel: [0, 0],
      radius: 5
    });

    this.gameObjects.ball = ball;
    return ball;
  }

  addPutter(pos = this.level.ballStartPos) {
    const putter = new __WEBPACK_IMPORTED_MODULE_1__putter__["a" /* default */]({
      theta: 0,
      thetaDirection: 1,
      pos
    });

    this.gameObjects.putter = putter;
    window.putter = putter;
    return putter;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    Object.keys(this.gameObjects).forEach(
      key => this.gameObjects[key].draw(ctx));
  }

  moveObjects() {
    Object.keys(this.gameObjects).forEach(
      key => this.gameObjects[key].move(this));
  }

  checkCollissions() {
    Object.keys(this.gameObjects).forEach(
      key => this.gameObjects[key].checkCollissions(this.gameObjects)
    );
  }

}

Game.DIM_X = 640;
Game.DIM_Y = 480;

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__physics__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_object__ = __webpack_require__(7);



class Ball extends __WEBPACK_IMPORTED_MODULE_1__game_object__["a" /* default */] {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inObstacle = false;
  }

  draw(ctx) {
    // if (!this.inObstacle) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.stroke();
    // }
  }

  move(game) {
    let [vx, vy] = this.vel;
    if (!this.inObstacle) {
      //calculate adjusted velocity
      if (vx !== 0 || vy !== 0) {
        [vx, vy] = [vx / 1.02, vy / 1.02];
        if (Math.abs(vx) < .1 && Math.abs(vy) < .1) {
          [vx, vy] = [0, 0];
        }
        this.vel = [vx, vy];
      }
    } // check ricochet direction
    else {
      const pos = [
        (this.pos[0] - vx),
        (this.pos[1])
      ];

      const testBall = new Ball({ pos });
      testBall.checkWalls(game.level);

      this.vel = testBall.inObstacle ?  [vx, -Math.abs(vy + .1)] : [-Math.abs(vx + .1), vy];

      this.inObstacle = false;
    }

    //calculate new position
    const x = this.pos[0] + vx;
    const y = this.pos[1] + vy;
    this.pos = [x, y];
  }

  hit(theta, vel = 5) {
    const vx = vel * Math.cos(theta);
    const vy = vel * Math.sin(theta);

    this.vel = [vx, vy];
  }

  checkCollissions(gameObjects) {
    this.checkHole(gameObjects.level);
    this.checkLevelBoundaries(gameObjects.level);
    this.checkWalls(gameObjects.level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (__WEBPACK_IMPORTED_MODULE_0__physics__["a" /* default */].dist(pos, holePos) < minimumDistance){
      this.inObstacle = true;
    }
  }

  checkLevelBoundaries(level) {
    const [x, y] = this.pos;
    const { height, width } = level;
    if (x > width   ||
        y > height  ||
        x < 0       ||
        y < 0        ) {
      this.inObstacle = true;
    }
  }

  checkWalls(level) {
    const [x, y] = this.pos;
    for (let i = 0; i < level.walls.length; i++) {
      let wall = level.walls[i];
      let [x1, y1, width, height] = wall.dimensions;

      let x2 = width + x1;
      let y2 = height + y1;

      if ((y > y1 && y < y2) && (x > x1 && x < x2)) {
        this.inObstacle = true;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(7);


class Putter extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
  }

  draw(ctx, e) {
    const [x, y] = this.pos;
    const lineY = 100 * Math.sin(this.theta) + y;
    const lineX = 100 * Math.cos(this.theta) + x;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
  }

  move(game) {
    
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Putter);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(7);


class Level extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx) {
    this.drawHole(ctx);
    this.drawWalls(ctx);
  }

  drawHole(ctx) {
    const { radius, pos } = this.hole;
    const [x, y] = pos;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  move() {

  }

}

/* harmony default export */ __webpack_exports__["a"] = (Level);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Physics = {

  dist (pos1, pos2) {
    const [x1, y1] = pos1;
    const [x2, y2] = pos2;

    return Math.sqrt(
      Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
  }

};

/* harmony default export */ __webpack_exports__["a"] = (Physics);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameObject {
  draw(ctx) {

  }

  move(ctx) {

  }

  checkCollissions() {
    
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GameObject);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(7);


class Wall extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(dimensions) {
    super();
    this.dimensions = dimensions; // array of dimensions
  }

  draw(ctx) {
    ctx.rect(...this.dimensions);
    ctx.stroke();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Wall);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wall__ = __webpack_require__(8);



const walls = [
  new __WEBPACK_IMPORTED_MODULE_1__wall__["a" /* default */]([200, 150, 40, 40]),
  new __WEBPACK_IMPORTED_MODULE_1__wall__["a" /* default */]([400, 300, 40, 40]),
  new __WEBPACK_IMPORTED_MODULE_1__wall__["a" /* default */]([400, 150, 40, 40]),
  new __WEBPACK_IMPORTED_MODULE_1__wall__["a" /* default */]([200, 300, 40, 40])
];

const level1 = new __WEBPACK_IMPORTED_MODULE_0__level__["a" /* default */] ({
  walls,
  height: 480,
  width: 640,
  ballStartPos: [320, 240],
  hole: {
    pos: [640 * Math.random(), 480 * Math.random()],
    radius: 10
  }
});

/* harmony default export */ __webpack_exports__["a"] = (level1);


/***/ })
/******/ ]);