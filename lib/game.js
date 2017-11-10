import Ball from './ball';
import Putter from './putter';

class Game {
  constructor({ ctx, level }) {
    this.level = level;
    this.gameObjects = [];
    this.draw(ctx);
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
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.gameObjects.forEach( (obj) => obj.draw(ctx));
  }

  moveObjects() {
    this.gameObjects.forEach( (obj) => obj.move());
  }

}

Game.DIM_X = 640;
Game.DIM_Y = 480;

export default Game;
