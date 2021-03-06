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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameObject {

  draw(ctx, game) {}
  move(ctx) {}

  updateAnimation() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(5);



class Level extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(props) {
    super();
    Object.assign(this, props);
    this.isLevelOver = this.isLevelOver || Level.isLevelOver;
    this.isGameOver = this.isGameOver || Level.isGameOver;
    this.getMessage = this.getMessage || Level.getMessage;
  }

  draw(ctx, game) {
    this.drawBoundaries(ctx);
    this.hole ? this.hole.draw(ctx, game) : null; // allows for holeless levels
    this.drawWalls(ctx);
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  drawBoundaries(ctx) {
    // center the level boundaries
    this.x1 =  (__WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */].DIM_X - this.width) / 2;
    this.y1 = (__WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */].DIM_Y - this.height - 100) / 2;

    // draw level boundaries
    ctx.beginPath();
    ctx.fillStyle = "#9AE19D";
    ctx.rect(this.x1, this.y1, this.width, this.height);
    ctx.fill();
    ctx.strokeStyle = "#2F4858";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.lineWidth = 1;
  }

}

Level.messages = [
  "The monster is hungry.",
  "It's getting hungrier...",
  "You're tempting fate, my friend.",
  "It's HAAAANGRY!!!",
  "You've got nothing to lose... but your arm.",
  "Don't wait any longer!",
  "I would run away if I were you."
];

Level.getMessage = strokes => (
  Level.messages[Math.floor(Math.random() * Level.messages.length)]
);

Level.isLevelOver = game => {
  const ball = game.gameObjects.ball;
  return (ball && ball.inHole);
};

Level.isGameOver = game => {
  return game.strokes >= game.level.par && !game.gameObjects.ball.isMoving;
};

/* harmony default export */ __webpack_exports__["a"] = (Level);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(0);


class Hole extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx, game) {
    const { radius, pos } = this;
    const [dx, dy] = pos;
    const img = new Image();
    img.src = "./sprites/hole_reverse.png";

    // DEBUG: VIEW CIRCLE POSITION
    // ctx.beginPath();
    // ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    const animationIdx = Math.ceil(game.strokes / game.level.par * (Hole.animations.length - 1));
    Object.assign(this, Hole.animations[animationIdx]);

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const props = {
      img,
      sx: 448 - (64 * this.currentFrame),
      sy: this.sy,
      sWidth: 64,
      sHeight: 64,
      dx: dx - 32 * radius / 10,
      dy: dy - 40 * radius / 10,
      dWidth: 64 * radius / 10,
      dHeight: 64 * radius / 10
    };

    this.updateAnimation();
    ctx.drawImage(...Object.values(props));
  }

}

// dy: number of frames
Hole.animations = [
    {endFrame: 4, sy: 0, frameSpeed: 10},
    {endFrame: 5, sy: 64, frameSpeed: 10},
    {endFrame: 5, sy: 64, frameSpeed: 5},
    {endFrame: 6, sy: 128, frameSpeed: 5},
  ];

/* harmony default export */ __webpack_exports__["a"] = (Hole);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UIObject {

  constructor(game) {
    this.game = game;
  }

  draw() {}

}

/* harmony default export */ __webpack_exports__["a"] = (UIObject);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_game__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_ui__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_levels__ = __webpack_require__(16);




class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.level = 0;

    this.createNewLevel();
    this.ui = new __WEBPACK_IMPORTED_MODULE_1__ui_ui__["a" /* default */](this.game);
    this.game.updateMessage();
    this.start();
  }

  createNewLevel() {
    this.game = new __WEBPACK_IMPORTED_MODULE_0__game_game__["a" /* default */]({
      level: __WEBPACK_IMPORTED_MODULE_2__levels_levels__["a" /* default */][this.level],
      gameView: this
    });
    this.putter = this.game.addPutter();
  }

  advanceLevel() {
    this.ui.addScore(this.game);
    this.level = (this.level + 1) % (__WEBPACK_IMPORTED_MODULE_2__levels_levels__["a" /* default */].length - 1);
    if (this.level < 1) { this.level++; }
    this.createNewLevel();
    this.ui.advanceLevel(this.game);
    this.displayMessage();
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.checkLevelEnd(this.game);

    const timeDelta = time - this.lastTime;
    this.ctx.clearRect(0, 0, GameView.DIM_X, GameView.DIM_Y);
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.ui.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }

  checkLevelEnd(game) {
    if (game.level.isLevelOver(game)) {
      this.sleepTime = 1000;
      this.advanceLevel();
    } else if (game.level.isGameOver(game)) {
      this.level = __WEBPACK_IMPORTED_MODULE_2__levels_levels__["a" /* default */].length - 1;
      this.createNewLevel();
      this.ui.advanceLevel(this.game);
      this.displayMessage();
    }
  }

  // Controls:
  bindKeyHandlers() {
    const putter = this.putter;
    document.addEventListener("keydown",
      e => {
        this.changeTheta(e);
        this.changeVelocity(e);
        this.restart(e);
      });
  }

  changeTheta(e) {
    const modifier = e.shiftKey ? .3 : 1;
    e.preventDefault();
    switch (e.key) {
      case "s":
      case "S":
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .2 * modifier;
        break;
      case "w":
      case "W":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .2 * modifier;
        break;
      case "a":
      case "A":
      case "ArrowLeft":
        this.putter.theta = Math.PI;
        this.putter.thetaDirection = -1;
        break;
      case "d":
      case "D":
      case "ArrowRight":
        this.putter.thetaDirection = 1;
        this.putter.theta = 0;
        break;
    }
  }

  restart(e) {
    switch (e.key) {
      case "r":
      case "R":
        this.level = 0;
        this.advanceLevel();
        this.ui.resetScore();
        break;
    }
  }

  changeVelocity(e) {
    e.preventDefault();
    switch (e.key) {
      case " ":
        if (this.game.hit()) {
          this.game.addStroke();
        }
        break;
    }
  }

  displayMessage() {
    this.ui.displayMessage();
  }
}


GameView.DIM_X = 720;
GameView.DIM_Y = 480;

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_view__ = __webpack_require__(5);


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  canvas.tabIndex = 1;

  new __WEBPACK_IMPORTED_MODULE_0__lib_game_view__["a" /* default */](ctx);
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__putter__ = __webpack_require__(10);



class Game {
  constructor({ level, gameView }) {
    this.level = level;
    this.gameObjects = { level };
    this.strokes = 0;
    this.addBall();
    this.gameView = gameView;
  }

  addBall() {
    if (this.level.ballStartPos) { // allows for no ball (end game)
      const ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]({
        pos: this.level.ballStartPos,
        vel: [0, 0],
        radius: 5
      });

      this.gameObjects.ball = ball;
    }

  }

  addPutter(pos = this.level.ballStartPos) {
    const putter = new __WEBPACK_IMPORTED_MODULE_1__putter__["a" /* default */]({
      theta: 0,
      thetaDirection: 1,
      pos
    });

    this.gameObjects.putter = putter;
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
    if (this.gameObjects.ball) {
      this.gameObjects.ball.checkCollissions(this.level);
    }
  }

  addStroke() {
    this.strokes++;
    this.updateMessage();
  }

  updateMessage() {
    this.gameView.displayMessage();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view__ = __webpack_require__(5);




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
      this.decellerate(vx, vy, game.level.rate);
      this.translate(vx, vy, delta);
    }
  }

  decellerate(vx, vy, rate) {
    rate = rate ? rate : 1.02;

    if (vx !== 0 || vy !== 0) {
      [vx, vy] = [vx / rate, vy / rate];
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
    const { vel, theta } = putter;
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
    if (level.hole) { this.checkHole(level); }
    this.checkLevelBoundaries(level);
    this.checkWalls(level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (__WEBPACK_IMPORTED_MODULE_0__physics__["a" /* default */].dist(pos, holePos) < minimumDistance) {
      this.inHole = true;
    }
  }

  checkLevelBoundaries(level) {
    const [x, y] = this.pos;
    const { x1, y1, height, width } = level;

    const x2 = width + x1;
    const y2 = height + y1;

    if (y <= y1 || y >= y2 || x <= x1 || x >= x2) {
      this.inObstacle = true;
    }
  }

  checkWalls(level) {
    const [x, y] = this.pos;
    for (let i = 0; i < level.walls.length; i++) {
      const wall = level.walls[i];
      const [x1, y1, width, height] = wall.dimensions;

      const x2 = width + x1;
      const y2 = height + y1;

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
    if(ball && !ball.isMoving) {
      const [x, y] = this.pos;

      ctx.beginPath();
      canvasArrow(ctx, x, y, this.theta);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }

  move(game) {
    const ball = game.gameObjects.ball;
    if (ball && !ball.isMoving) {
      this.incrementVel();
      this.pos = game.gameObjects.ball.pos;
    }
  }

  incrementVel() {
    this.vel = (this.vel + 1) % 120;
  }
}

// Adapted from source: https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
function canvasArrow(ctx, fromx, fromy, theta){
  const toy = 100 * Math.sin(theta) + fromy;
  const tox = 100 * Math.cos(theta) + fromx;
  var headlen = 10;   // length of head in pixels
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta-Math.PI/6),toy-headlen*Math.sin(theta-Math.PI/6));
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta+Math.PI/6),toy-headlen*Math.sin(theta+Math.PI/6));
}

/* harmony default export */ __webpack_exports__["a"] = (Putter);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stroke_counter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__score_counter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__power_meter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__(15);





class UI {

  constructor(game) {
    const strokes = new __WEBPACK_IMPORTED_MODULE_0__stroke_counter__["a" /* default */](game);
    const score = new __WEBPACK_IMPORTED_MODULE_1__score_counter__["a" /* default */](game);
    const power = new __WEBPACK_IMPORTED_MODULE_2__power_meter__["a" /* default */](game);
    const message = new __WEBPACK_IMPORTED_MODULE_3__message__["a" /* default */](game);
    this.uiObjects = {
      strokes,
      score,
      power,
      message
    };
  }

  draw(ctx) {
    ctx.strokeStyle = "black";
    Object.values(this.uiObjects).forEach((obj) => obj.draw(ctx));
  }

  addScore(game) {
    this.uiObjects.score.addScore(game);
  }

  advanceLevel(game) {
    const strokes = new __WEBPACK_IMPORTED_MODULE_0__stroke_counter__["a" /* default */](game);
    const power = new __WEBPACK_IMPORTED_MODULE_2__power_meter__["a" /* default */](game);
    const message = new __WEBPACK_IMPORTED_MODULE_3__message__["a" /* default */](game);
    Object.assign(this.uiObjects, {strokes, power, message});
  }

  displayMessage() {
    this.uiObjects.message.displayMessage();
  }

  resetScore() {
    this.uiObjects.score.resetScore();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (UI);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(4);


class StrokeCounter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText("Hunger:", 40, 460);

    //hunger interior
    const strokes = this.game.strokes;
    const par = this.game.level.par;
    const fill = strokes * (120 / par);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(150, 435, fill, 30);
    ctx.fill();
    ctx.stroke();

    //power exterior
    ctx.beginPath();
    ctx.rect(150, 435, 120, 30);
    ctx.stroke();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (StrokeCounter);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(4);


class StrokeCounter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  constructor(game) {
    super();
    this.score = 0;
  }

  resetScore() {
    this.score = 0;
  }

  addScore(game) {
    if ((Number(game.level.par))) {
      this.score += (game.level.par + 1 - game.strokes) * 100;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "25px Roboto";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 290, 460);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (StrokeCounter);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(4);


class PowerMeter extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText("Power:", 450, 460);

    //power interior
    const putter = this.game.gameObjects.putter;
    const fill = putter.vel;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(550, 435, fill, 30);
    ctx.fill();
    ctx.stroke();

    //power exterior
    ctx.beginPath();
    ctx.rect(550, 435, 120, 30);
    ctx.stroke();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PowerMeter);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_object__ = __webpack_require__(4);


class Message extends __WEBPACK_IMPORTED_MODULE_0__ui_object__["a" /* default */] {

  removeMessage() {
    this.message = null;
  }

  displayMessage() {
    this.message = this.game.level.getMessage(this.game.strokes);
  }

  draw(ctx, game) {
    if (this.message) {
      ctx.beginPath();
      ctx.font = "25px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.fillText(`${this.message}`,
        Message.POS_X,
        Message.POS_Y
      );
    }
  }

}

Message.POS_X = 60;
Message.POS_Y = 400;

/* harmony default export */ __webpack_exports__["a"] = (Message);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__level_0__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_1__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__level_2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_3__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__end_game__ = __webpack_require__(21);






/* harmony default export */ __webpack_exports__["a"] = ([
  __WEBPACK_IMPORTED_MODULE_0__level_0__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__level_1__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__level_2__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__level_3__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__end_game__["a" /* default */]
]);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(3);




  const messages = [
    "Go ahead, press the space bar (R: skip tutorial)",
    "Press it again",
    "Your speed corresponds to the power meter.        ⬇",
    "Time your hits wisely",
    "Now aim with the arrow keys",
    "That determines your direction",
    "Makes sense?",
    "Time to feed the monster..."
  ];

const isLevelOver = game => (
  game.strokes >= messages.length - 1 && !game.gameObjects.ball.isMoving
);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls: [],
  height: 300,
  width: 600,
  ballStartPos: [360, 250],
  hole: null,
  par: "∞",
  getMessage: strokes => messages[strokes],
  isLevelOver: game => game.strokes >= messages.length - 1 &&
                       !game.gameObjects.ball.isMoving,
  isGameOver: () => false,
  rate: 1.07
}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(3);




const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [600, 250],
  radius: 10
});

const messages = [
  "⬇ The monster is hungry.",
  "⬇ Don't let the meter fill!",
  "⬇ You'll be sorry..."
];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls: [],
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 3,
  rate: 1.05,
  getMessage: (strokes) => messages[strokes],
}));


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(3);




const walls = [
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([250, 200, 60, 140]),
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([400, 40, 60, 140])
];

const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [600, 250],
  radius: 10
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls,
  height: 300,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 4,
  rate: 1.05
}));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(3);




const walls = [
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([160, 150, 30, 140]),
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([300, 90, 30, 140]),
  new __WEBPACK_IMPORTED_MODULE_1__game_wall__["a" /* default */]([440, 150, 30, 140]),
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
  hole,
  par: 4
}));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_level__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_wall__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_hole__ = __webpack_require__(3);




const hole = new __WEBPACK_IMPORTED_MODULE_2__game_hole__["a" /* default */]({
  pos: [350, 250],
  radius: 40
});

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__game_level__["a" /* default */] ({
  walls: [],
  ballStartPos: null,
  hole,
  par: 1,
  isLevelOver: () => false,
  isGameOver: () => false,
  getMessage: () => "The monster got to hungry. Play again? (Press 'r')",
  rate: 1.02,
  draw: function(ctx, game) { game.strokes = 1; this.hole.draw(ctx, game); }
}));


/***/ })
/******/ ]);