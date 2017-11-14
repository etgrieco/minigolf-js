import GameObject from './game_object';

class Putter extends GameObject {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
    this.vel = 0;
  }

  draw(ctx, game) {
    const ball = game.gameObjects.ball;
    if(!ball.isMoving) {
      const img = new Image();
      img.src = "./sprites/crosshair.png";
      const [x, y] = this.pos;
      const dx = 100 * Math.cos(this.theta) + x;
      const dy = 100 * Math.sin(this.theta) + y;

      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      const slice = {
        img,
        sx: 0,
        sy: 0,
        sWidth: 128,
        sHeight: 128,
        dx: dx - 20,
        dy: dy - 32,
        dWidth: 128,
        dHeight: 128
      };

      ctx.drawImage(...Object.values(slice));

      // DEBUG: LINE
      ctx.beginPath();
      const lineY = 100 * Math.sin(this.theta) + y;
      const lineX = 100 * Math.cos(this.theta) + x;
      ctx.moveTo(x, y);
      ctx.lineTo(lineX, lineY);
      ctx.stroke();
    }
  }

  move(game) {
    const ball = game.gameObjects.ball;
    if (!ball.isMoving) {
      this.incrementVel();
      this.pos = game.gameObjects.ball.pos;
    }
  }

  incrementVel() {
    this.vel = (this.vel + 1) % 120;
  }

}

export default Putter;
