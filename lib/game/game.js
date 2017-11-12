import Ball from './ball';
import Putter from './putter';

class Game {
  constructor({ level }) {
    this.level = level;
    this.gameObjects = { level };
    this.strokes = 0;
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

  addPutter(pos = this.level.ballStartPos) {
    const putter = new Putter({
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
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    Object.values(this.gameObjects).forEach(
      (obj) => obj.draw(ctx, this)
    );
  }

  moveObjects() {
    Object.values(this.gameObjects).forEach(
      (obj) => obj.move(this));
  }

  checkCollissions() {
    this.gameObjects.ball.checkCollissions(this.level);
  }

  addStroke() {
    this.strokes++;
  }

}

Game.DIM_X = 640;
Game.DIM_Y = 480;

export default Game;
