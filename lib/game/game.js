import Ball from './ball';
import Putter from './putter';

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
      const ball = new Ball({
        pos: this.level.ballStartPos,
        vel: [0, 0],
        radius: 5
      });

      this.gameObjects.ball = ball;
    }

  }

  addPutter(pos = this.level.ballStartPos) {
    const putter = new Putter({
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

export default Game;
