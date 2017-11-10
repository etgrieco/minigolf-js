import Physics from './physics';
import GameObject from './game_object';

class Ball extends GameObject {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inHole = false;
    this.isOutside = false;
  }

  draw(ctx) {
    if (!this.inHole && !this.isOutside) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }

  }

  move() {
    const x = this.pos[0] + this.vel[0];
    const y = this.pos[1] + this.vel[1];

    this.pos = [x, y];
  }

  calcVelocity(theta) {
    const velX = 5 * Math.cos(theta);
    const velY = 5 * Math.sin(theta);

    return [velX, velY];
  }

  isCollidedwithHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    return Physics.dist(pos, holePos) < minimumDistance;
  }

}

export default Ball;
