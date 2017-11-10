import GameObject from './game_object';

class Putter extends GameObject {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
  }

  draw(ctx, e) {
    const [x, y] = this.pos;

    const lineX = 150 * Math.cos(this.theta) + y;
    const lineY = 150 * Math.sin(this.theta) + x;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
  }

}

export default Putter;
