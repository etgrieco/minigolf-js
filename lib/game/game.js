import Ball from './ball';
import Putter from './putter';

class Game {
  constructor({ level, gameView }) {
    this.level = level;
    this.gameObjects = { level };
    this.strokes = 0;
    this.addBall();
    this.addPutter();
    this.gameView = gameView;
  }

  addBall() {
    const ball = new Ball({
      pos: this.level.ballStartPos,
      vel: [0, 0],
      radius: 5
    });

    this.gameObjects.ball = ball;
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
    this.gameObjects.ball.checkCollissions(this.level);
  }

  addStroke() {
    this.strokes++;
    this.updateMessage();
  }

  updateMessage() {
    const message = this.level.messages ? this.level.messages[this.strokes] : "...";
    this.gameView.displayMessage(message);
  }

  step(delta) {
    this.checkCollissions();
    this.moveObjects(delta);
  }

}

export default Game;
