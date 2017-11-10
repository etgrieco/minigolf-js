import Physics from './physics';
import GameObject from './game_object';

class Ball extends GameObject {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inObstacle = false;
    this.accel = [-.1, -.1];
  }

  draw(ctx) {
    if (!this.inObstacle) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
  }

  move() {
    let [vx, vy] = this.vel;
    if (vx !== 0 || vy !== 0) {
      [vx, vy] = [vx / 1.02, vy / 1.02];
      if (vx < .1 && vy < .1) {
        [vx, vy] = [Math.floor(vx), Math.floor(vy)];
      }
      this.vel = [vx, vy];
    }

    //calculate new position
    const x = this.pos[0] + vx;
    const y = this.pos[1] + vy;
    this.pos = [x, y];
  }

  hit(theta, vel = 5) {
    const velX = vel * Math.cos(theta);
    const velY = vel * Math.sin(theta);

    this.vel = [velX, velY];
  }

  checkCollissions(gameObjects) {
    this.checkHole(gameObjects.level);
    this.checkLevelBoundaries(gameObjects.level);
    this.checkWalls(gameObjects.level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (Physics.dist(pos, holePos) < minimumDistance){
      this.inObstacle = true;
    }
  }

  checkLevelBoundaries(level) {
    const [x, y] = this.pos;
    const { height, width } = level;
    if (x > width   ||
        y > height  ||
        x < 0       ||
        y < 0        ) {
      this.inObstacle = true;
    }
  }

  checkWalls(level) {
    const [x, y] = this.pos;
    for (let i = 0; i < level.walls.length; i++) {
      let wall = level.walls[i];
      let [x1, y1, width, height] = wall.dimensions;

      let x2 = width + x1
      let y2 = height + y1;

      if ((y > y1 && y < y2) && (x > x1 && x < x2)) {
        this.inObstacle = true;
      }
    }
  }

}

export default Ball;
