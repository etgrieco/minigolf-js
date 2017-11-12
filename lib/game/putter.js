import GameObject from './game_object';

class Putter extends GameObject {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
  }

  draw(ctx, game) {
    const ball = game.gameObjects.ball;
    if(!ball.isMoving) {
      const [x, y] = this.pos;
      const lineY = 100 * Math.sin(this.theta) + y;
      const lineX = 100 * Math.cos(this.theta) + x;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(lineX, lineY);
      ctx.stroke();
    }
  }

  move(game) {
    const ball = game.gameObjects.ball;
    if (!ball.isMoving) {
      this.pos = game.gameObjects.ball.pos;
    }
  }

}

export default Putter;
