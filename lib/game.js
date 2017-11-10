import Ball from './ball';
import Putter from './putter';

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
    const ball = new Ball({
      pos: this.level.ballStartPos,
      vel: [0, 0],
      radius: 5,
      color: null,
    });

    this.gameObjects.push(ball);
    return ball;
  }

  addPutter() {
    const putter = new Putter({
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


export default Game;
