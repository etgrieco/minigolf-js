import Physics from './physics';
import GameObject from './game_object';

class Ball extends GameObject {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inObstacle = false;
  }

  draw(ctx) {
    if (!this.inObstacle) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  move(game) {
    let [vx, vy] = this.vel;
    if (!this.inObstacle) {
      //calculate adjusted velocity
      if (vx !== 0 || vy !== 0) {
        [vx, vy] = [vx / 1.02, vy / 1.02];
        if (Math.abs(vx) < .1 && Math.abs(vy) < .1) {
          [vx, vy] = [0, 0];
        }
        this.vel = [vx, vy];
      }
    } else { // check ricochet direction
      this.checkRicochet(vx, vy, game);
    }

    //calculate new position
    const x = this.pos[0] + this.vel[0];
    const y = this.pos[1] + this.vel[1];
    this.pos = [x, y];
  }

  hit(theta, vel = 5) {
    const vx = vel * Math.cos(theta);
    const vy = vel * Math.sin(theta);

    this.vel = [vx, vy];
  }

  checkRicochet(vx, vy, game) {
    const pos = [
      (this.pos[0] - vx),
      (this.pos[1])
    ];

    const testBall = new Ball({ pos });
    testBall.checkWalls(game.level);

    if (testBall.inObstacle) {
      this.vel = [vx, -vy];
    } else {
      this.vel = [-vx, vy];
    }

    this.inObstacle = false;
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

      let x2 = width + x1;
      let y2 = height + y1;

      if ((y > y1 && y < y2) && (x > x1 && x < x2)) {
        this.inObstacle = true;
      }
    }
  }
}

export default Ball;
