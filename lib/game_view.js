import Game from './game';
import Level from './level';

class GameView {

  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game({
      level: new Level(),
      ctx
    });

    this.putter = this.game.addPutter();
    this.ball = this.game.addBall();
    this.start();
  }

  start() {
    this.bindKeyHandlers();
    setInterval(() => {
      this.game.moveObjects();
      
      // this.game.checkHole();
      // this.game.checkCanvas();
      this.game.draw(this.ctx);
    }, 1000 / 60 );
  }

  bindKeyHandlers() {
    const putter = this.putter;
    document.addEventListener("keydown",
      e => {
        this.changeTheta(e);
        this.changeVelocity(e);
      });
  }

  changeTheta(e) {
    switch (e.key) {
      case "s":
      case "ArrowDown":
        this.putter.theta += this.putter.thetaDirection * .017;
        break;
      case "w":
      case "ArrowUp":
        this.putter.theta -= this.putter.thetaDirection * .017;
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
        this.ball.vel = this.ball.calcVelocity(this.putter.theta);
        break;
      default:
    }
  }

}

export default GameView;
