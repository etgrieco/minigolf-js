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

export default Game;
