import Ball from './ball';
import Putter from './putter';

class Game {
  constructor({ ctx, level }) {
    this.level = level;
    this.gameObjects = { level };
    this.draw(ctx);
  }

  addBall() {
    const ball = new Ball({
      pos: this.level.ballStartPos,
      vel: [0, 0],
      radius: 5
    });

    this.gameObjects.ball = ball;
    return ball;
  }

  addPutter() {
    const putter = new Putter({
      theta: 0,
      thetaDirection: 1,
      pos: this.level.ballStartPos
    });

    this.gameObjects.putter = putter;
    return putter;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    Object.keys(this.gameObjects).forEach(
      key => this.gameObjects[key].draw(ctx));
  }

  moveObjects() {
    Object.keys(this.gameObjects).forEach(
      key => this.gameObjects[key].move());
  }

  checkHole() {
    const { ball, level } = this.gameObjects;
    if (ball.isCollidedwithHole(level)) {
      ball.inHole = true;
    }
  }

  checkCanvas() {
    const { ball } = this.gameObjects;
    if (ball.pos[0] > Game.DIM_X || ball.pos[1] > Game.DIM_Y) {
      ball.isOutside = true;
    }
  }

}

Game.DIM_X = 640;
Game.DIM_Y = 480;

export default Game;
