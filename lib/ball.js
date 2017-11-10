import Physics from './physics';
import GameObject from './game_object';

class Ball extends GameObject {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inHole = false;
    this.inCanvas = true;
  }

  draw(ctx) {
    if (!this.inHole && this.inCanvas) {
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

  checkCollissions(gameObjects) {
    this.checkHole(gameObjects.level);
    this.checkLevelBoundaries(gameObjects.level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (Physics.dist(pos, holePos) < minimumDistance){
      this.inHole = true;
    }
  }

  checkLevelBoundaries(level) {
      const { height, width } = level;
      if (this.pos[0] > width   ||
          this.pos[1] > height  ||
          this.pos[0] < 0       ||
          this.pos[1] < 0)          {
        this.inCanvas = false;
      }
  }

}

export default Ball;
