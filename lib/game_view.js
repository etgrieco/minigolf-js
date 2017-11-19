import Game from './game/game';
import UI from './ui/ui';
import levels from './levels/levels';

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.level = 0;

    this.createNewLevel();

    this.ui = new UI(this.game);
    this.game.updateMessage();
    this.start();
  }

  advanceLevel() {
    this.ui.addScore(this.game);
    this.level += 1;

    this.createNewLevel();
    this.ui.advanceLevel(this.game);
    this.game.updateMessage();
  }

  createNewLevel() {
    this.game = new Game({
      level: levels[this.level],
      gameView: this
    });
    this.putter = this.game.addPutter();
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
      this.advanceLevel();
    } else if (game.level.isGameOver(game)) {
      this.level = levels.length - 1;
      this.createNewLevel();
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
    }
  }

  displayMessage(message) {
    this.ui.displayMessage(message);
  }

}

GameView.DIM_X = 720;
GameView.DIM_Y = 480;

export default GameView;
