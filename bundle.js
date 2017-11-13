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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameObject {

  constructor() {

  }

  draw(ctx, game) {

  }

  move(ctx) {

  }

  checkCollissions() {

  }

  update() {
    this.currentFrame = this.currentFrame || 0;
    this.counter = this.counter || 0;
    const { counter, frameSpeed, endFrame, currentFrame } = this;

    if (counter === (frameSpeed - 1)) {
      this.currentFrame = (currentFrame + 1) % endFrame;
    }
    this.counter = (counter + 1) % frameSpeed;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (GameObject);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UIObject {

  constructor(game) {
    this.game = game;
  }

  draw() {
    
  }

}

/* harmony default export */ __webpack_exports__["a"] = (UIObject);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(6);



class Level extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx) {
    this.drawBoundaries(ctx);
    this.drawHole(ctx);
    this.drawWalls(ctx);
  }

  drawHole(ctx) {
    this.hole.draw(ctx);
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  drawBoundaries(ctx) {
    const x =  (__WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */].DIM_X - this.width) / 2;
    const y = (__WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */].DIM_Y - this.height) / 2;
    ctx.beginPath();
    ctx.fillStyle = "#9AE19D";
    ctx.rect(x, y, this.width, this.height);
    ctx.fill();
    ctx.strokeStyle = "#2F4858";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.lineWidth = 1;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Level);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);


class Wall extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(dimensions) {
    super();
    this.dimensions = dimensions; // array of dimensions
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(...this.dimensions);
    ctx.fillStyle = "#2F4858";
    ctx.fill();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Wall);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(props) {
    super();
    Object.assign(this, props);

    //Animation variables
    this.endFrame = 4;
    this.frameSpeed = 10;
  }

  draw(ctx) {
    const { radius, pos } = this;
    const [dx, dy] = pos;

    const img = new Image();
    img.src = "./sprites/hole.png";

    this.update();

    // DEBUG: VIEW CIRCLE POSITION
    // ctx.beginPath();
    // ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const slice = {
      img,
      sx: 64 * this.currentFrame,
      sy: 128,
      sWidth: 64,
      sHeight: 64,
      dx: dx - 32,
      dy: dy - 40,
      dWidth: 64,
      dHeight: 64
    };

    ctx.drawImage(...Object.values(slice));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Hole);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_view__ = __webpack_require__(6);


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  canvas.tabIndex = 1;

  new __WEBPACK_IMPORTED_MODULE_0__lib_game_view__["a" /* default */](ctx);
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_game__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_ui__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_levels__ = __webpack_require__(15);




class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.level = 0;
    this.game = new __WEBPACK_IMPORTED_MODULE_0__game_game__["a" /* default */]({
      level: __WEBPACK_IMPORTED_MODULE_2__levels_levels__["a" /* default */][this.level]
    });
    this.ui = new __WEBPACK_IMPORTED_MODULE_1__ui_ui__["a" /* default */](this.game);

    this.start();
  }

  advanceLevel() {
    this.level++;
    this.game = new __WEBPACK_IMPORTED_MODULE_0__game_game__["a" /* default */]({
      level: __WEBPACK_IMPORTED_MODULE_2__levels_levels__["a" /* default */][this.level]
    });
    this.ui.advanceLevel(this.game);
    this.ball = this.game.addBall();
    this.putter = this.game.addPutter();
  }

  start() {
    this.ball = this.game.addBall();
    this.putter = this.game.addPutter();
    this.bindKeyHandlers();
    this.lastTime = 0;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.checkHole(this.game);

    const timeDelta = time - this.lastTime;
    this.ctx.clearRect(0, 0, GameView.DIM_X, GameView.DIM_Y);
    // drawBackground(this.ctx);
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.ui.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }

  checkHole(game) {
    const { ball } = this.game.gameObjects;
    if (ball && ball.inHole) {
      this.advanceLevel();
    }
  }

  // Controls:
  bindKeyHandlers() {
    const putter = this.putter;
    document.addEventListener("keydown",
      e => {
        this.changeTheta(e);
        this.changeVelocity(e);
      });
  }

  changeTheta(e) {
    const modifier = e.shiftKey ? .3 : 1;
    switch (e.key) {
      case "s":
      case "S":
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .2 * modifier;
        e.preventDefault();
        break;
      case "w":
      case "W":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .2 * modifier;
        e.preventDefault();
        break;
      case "a":
      case "A":
      case "ArrowLeft":
        this.putter.theta = Math.PI;
        this.putter.thetaDirection = -1;
        e.preventDefault();
        break;
      case "d":
      case "D":
      case "ArrowRight":
        this.putter.thetaDirection = 1;
        this.putter.theta = 0;
        e.preventDefault();
        break;
    }
  }

  changeVelocity(e) {
    switch (e.key) {
      case " ":
        if (this.game.hit()) {
          this.game.addStroke();
        }
        e.preventDefault();
        break;
      default:
    }
  }

}

GameView.DIM_X = 720;
GameView.DIM_Y = 480;

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__putter__ = __webpack_require__(10);



class Game {
  constructor({ level }) {
    this.level = level;
    this.gameObjects = { level };
    this.strokes = 0;
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

  hit() {
    const { ball, putter } = this.gameObjects;
    if (!ball.isMoving) {
      ball.hit(putter);
      return true;
    }
    return false;
  }

  draw(ctx) {
    Object.values(this.gameObjects).forEach(
      (obj) => obj.draw(ctx, this)
    );
  }

  moveObjects(delta) {
    Object.values(this.gameObjects).forEach(
      (obj) => obj.move(this, delta));
  }

  checkCollissions() {
    this.gameObjects.ball.checkCollissions(this.level);
  }

  addStroke() {
    this.strokes++;
  }

  step(delta) {
    this.checkCollissions();
    this.moveObjects(delta);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__physics__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_object__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view__ = __webpack_require__(6);




class Ball extends __WEBPACK_IMPORTED_MODULE_1__game_object__["a" /* default */] {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inObstacle = false;
    this.inHole = false;
    this.isMoving = false;

    this.sx = Math.floor(Math.random() * 4) * 128;
    this.sy = Math.floor(Math.random() * 5) * 128;
  }

  draw(ctx) {
    if (!this.inHole) {
      const img = new Image();
      img.src = "./sprites/ball.png";
      const { radius, pos } = this;
      const [dx, dy] = pos;

      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      const slice = {
        img,
        sx: this.sx,
        sy: this.sy,
        sWidth: 128,
        sHeight: 128,
        dx: dx - 16,
        dy: dy - 14,
        dWidth: 23,
        dHeight: 23
      };

      ctx.drawImage(...Object.values(slice));

      // DEBUG: TEST BALL CIRCLE
      // ctx.beginPath();
      // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      // ctx.stroke();
    }
  }

  move(game, delta) {
    if (this.isMoving) {
      let [vx, vy] = this.vel;
      if (this.inObstacle) {
        this.ricochet(vx, vy, game.level, delta);
      }

      [vx, vy] = this.vel;
      this.decellerate(vx, vy);
      this.translate(vx, vy, delta);
    }

  }

  decellerate(vx, vy) {
    if (vx !== 0 || vy !== 0) {
      [vx, vy] = [vx / 1.02, vy / 1.02];
      if (Math.abs(vx) < .1 && Math.abs(vy) < .1) {
        [vx, vy] = [0, 0];
        this.isMoving = false;
      }
      this.vel = [vx, vy];
    }
  }

  translate(vx, vy, delta) {
    const x = this.pos[0] + vx * delta / Ball.DELTA_ADJUSTMENT;
    const y = this.pos[1] + vy * delta / Ball.DELTA_ADJUSTMENT;
    this.pos = [x, y];
  }

  hit(putter) {
    const audio = new Audio(`./audio/hit_${Math.floor(Math.random() * 4 + 1)}.wav`);
    audio.play();
    let { vel, theta } = putter;
    const vx = vel / 8 * Math.cos(theta);
    const vy = vel / 8 * Math.sin(theta);

    this.vel = [vx, vy];
    this.isMoving = true;
  }

  ricochet(vx, vy, level, delta) {
    const pos = [
      (this.pos[0] - vx * delta / Ball.DELTA_ADJUSTMENT),
      this.pos[1]
    ];

    const testBall = new Ball({ pos });
    testBall.checkCollissions(level);

    this.vel = testBall.inObstacle ? [vx, -vy] : [-vx, vy];

    this.inObstacle = false;
  }

  checkCollissions(level) {
    this.checkHole(level);
    this.checkLevelBoundaries(level);
    this.checkWalls(level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (__WEBPACK_IMPORTED_MODULE_0__physics__["a" /* default */].dist(pos, holePos) < minimumDistance){
      this.inHole = true;
    }
  }

  checkLevelBoundaries(level) {
    const [x, y] = this.pos;
    const { height, width } = level;

    const x1 = (__WEBPACK_IMPORTED_MODULE_2__game_view__["a" /* default */].DIM_X - width) / 2;
    const y1 = (__WEBPACK_IMPORTED_MODULE_2__game_view__["a" /* default */].DIM_Y - height) / 2;
    const x2 = width + x1;
    const y2 = height + y1;

    if (y <= y1 || y >= y2 || x <= x1 || x >= x2) {
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

      if ((y >= y1 && y <= y2) && (x >= x1 && x <= x2)) {
        this.inObstacle = true;
      }
    }
  }
}

Ball.DELTA_ADJUSTMENT = 12;

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);


class Putter extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
    this.vel = 0;
  }

  draw(ctx, game) {
    const ball = game.gameObjects.ball;
    if(!ball.isMoving) {
      const img = new Image();
      img.src = "./sprites/crosshair.png";
      const [x, y] = this.pos;
      const dx = 100 * Math.cos(this.theta) + x;
      const dy = 100 * Math.sin(this.theta) + y;

      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      const slice = {
        img,
        sx: 0,
        sy: 0,
        sWidth: 128,
        sHeight: 128,
        dx: dx - 20,
        dy: dy - 32,
        dWidth: 128,
        dHeight: 128
      };

      ctx.drawImage(...Object.values(slice));

      // DEBUG: LINE
      // const lineY = 100 * Math.sin(this.theta) + y;
      // const lineX = 100 * Math.cos(this.theta) + x;
      ctx.beginPath();
      // ctx.moveTo(x, y);
      // ctx.lineTo(lineX, lineY);
      ctx.stroke();
    }
  }

  move(game) {
    const ball = game.gameObjects.ball;
    if (!ball.isMoving) {
      this.incrementVel();
      this.pos = game.gameObjects.ball.pos;
    }
  }

  incrementVel() {
    this.vel = (this.vel + 1) % 120;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Putter);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stroke_counter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__score_counter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__power_meter__ = __webpack_require__(14);




class UI {

  constructor(game) {
    const strokes = new __WEBPACK_IMPORTED_MODULE_0__stroke_counter__["a" /* default */](game);
    const score = new __WEBPACK_IMPORTED_MODULE_1__score_counter__["a" /* default */](game);
    const power = new __WEBPACK_IMPORTED_MODULE_2__power_meter__["a" /* default */](game);
    this.uiObjects = {
      strokes,
      score,
      power
    };
  }

  draw(ctx) {
    Object.values(this.uiObjects).forEach((obj) => obj.draw(ctx));
  }

  advanceLevel(game) {
    this.uiObjects.score.addScore();
    const strokes = new __WEBPACK_IMPORTED_MODULE_0__stroke_counter__["a" /* default */](game);
    const power = new __WEBPACK_IMPORTED_MODULE_2__power_meter__["a" /* default */](game);
    Object.assign(this.uiObjects, {strokes, power});
  }

}

/* harmony default export */ __webpack_exports__["a"] = (UI);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(1);


class StrokeCounter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText(`Strokes: ${this.game.strokes}`, 20, 460);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (StrokeCounter);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(1);


class StrokeCounter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  constructor(game) {
    super(game);
    this.score = 0;
  }

  addScore() {
    this.score += this.game.strokes;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 200, 460);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (StrokeCounter);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(1);


class PowerMeter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText("Power:", 400, 460);

    //power interior
    const putter = this.game.gameObjects.putter;
    const fill = putter.vel;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(500, 435, fill, 30);
    ctx.fill();
    ctx.stroke();

    //power exterior
    ctx.beginPath();
    ctx.rect(500, 435, 120, 30);
    ctx.stroke();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PowerMeter);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level_1__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_2__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level_3__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["a"] = ([
  __WEBPACK_IMPORTED_MODULE_0__level_1__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__level_2__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__level_3__["a" /* default */]
]);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(4);




const walls = [
];

const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [600, 250],
  radius: 10
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole
}));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(4);




const walls = [
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([300, 180, 60, 140])
];

const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [600, 250],
  radius: 10
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole
}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(4);





const walls = [
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([160, 140, 30, 140]),
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([300, 200, 30, 140]),
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([440, 140, 30, 140]),
];

const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [600, 250],
  radius: 10
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole
}));


/***/ })
/******/ ]);