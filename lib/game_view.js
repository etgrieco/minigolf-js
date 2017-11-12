import Game from './game/game';
import UI from './ui/ui';
import levels from './levels/levels';

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.level = 0;
    this.game = new Game({
      level: levels[this.level]
    });
    this.ui = new UI(this.game);

    this.start();
  }

  advanceLevel() {
    this.level++;
    this.game = new Game({
      level: levels[this.level]
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
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .2 * modifier;
        break;
      case "w":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .2 * modifier;
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
        if (this.game.hit()) {
          this.game.addStroke();
        }
        break;
      default:
    }
  }

}

export default GameView;
