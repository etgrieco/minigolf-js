import Physics from './physics';
import GameObject from './game_object';
import GameView from '../game_view';

class Ball extends GameObject {

  constructor({ pos, vel, radius }) {
    super();
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.inObstacle = false;
    this.inHole = false;
    this.isMoving = false;

    this.sx = Math.floor(Math.random() * 4) * 128;
    this.sy = Math.floor(Math.random() * 5) * 128;
  }

  draw(ctx) {
    if (!this.inHole) {
      const img = new Image();
      img.src = "./sprites/ball.png";
      const { radius, pos } = this;
      const [dx, dy] = pos;

      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      const slice = {
        img,
        sx: this.sx,
        sy: this.sy,
        sWidth: 128,
        sHeight: 128,
        dx: dx - 16,
        dy: dy - 14,
        dWidth: 23,
        dHeight: 23
      };

      ctx.drawImage(...Object.values(slice));

      // DEBUG: TEST BALL CIRCLE
      // ctx.beginPath();
      // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      // ctx.stroke();
    }
  }

  move(game, delta) {
    if (this.isMoving) {
      let [vx, vy] = this.vel;
      if (this.inObstacle) {
        this.ricochet(vx, vy, game.level, delta);
      }

      [vx, vy] = this.vel;
      this.decellerate(vx, vy, game.level.rate);
      this.translate(vx, vy, delta);
    }
  }

  decellerate(vx, vy, rate) {
    rate = rate ? rate : 1.02;

    if (vx !== 0 || vy !== 0) {
      [vx, vy] = [vx / rate, vy / rate];
      if (Math.abs(vx) < .1 && Math.abs(vy) < .1) {
        [vx, vy] = [0, 0];
        this.isMoving = false;
      }
      this.vel = [vx, vy];
    }
  }

  translate(vx, vy, delta) {
    const x = this.pos[0] + vx * delta / Ball.DELTA_ADJUSTMENT;
    const y = this.pos[1] + vy * delta / Ball.DELTA_ADJUSTMENT;
    this.pos = [x, y];
  }

  hit(putter) {
    const audio = new Audio(`./audio/hit_${Math.floor(Math.random() * 4 + 1)}.wav`);
    audio.play();
    const { vel, theta } = putter;
    const vx = vel / 8 * Math.cos(theta);
    const vy = vel / 8 * Math.sin(theta);

    this.vel = [vx, vy];
    this.isMoving = true;
  }

  ricochet(vx, vy, level, delta) {
    const pos = [
      (this.pos[0] - vx * delta / Ball.DELTA_ADJUSTMENT),
      this.pos[1]
    ];

    const testBall = new Ball({ pos });
    testBall.checkCollissions(level);

    this.vel = testBall.inObstacle ? [vx, -vy] : [-vx, vy];

    this.inObstacle = false;
  }

  checkCollissions(level) {
    if (level.hole) { this.checkHole(level); }
    this.checkLevelBoundaries(level);
    this.checkWalls(level);
  }

  checkHole(level) {
    const { pos: holePos, radius: holeRadius } = level.hole;

    const { pos, radius } = this;
    const minimumDistance = holeRadius + radius;

    if (Physics.dist(pos, holePos) < minimumDistance) {
      this.inHole = true;
    }
  }

  checkLevelBoundaries(level) {
    const [x, y] = this.pos;
    const { x1, y1, height, width } = level;

    const x2 = width + x1;
    const y2 = height + y1;

    if (y <= y1 || y >= y2 || x <= x1 || x >= x2) {
      this.inObstacle = true;
    }
  }

  checkWalls(level) {
    const [x, y] = this.pos;
    for (let i = 0; i < level.walls.length; i++) {
      const wall = level.walls[i];
      const [x1, y1, width, height] = wall.dimensions;

      const x2 = width + x1;
      const y2 = height + y1;

      if ((y >= y1 && y <= y2) && (x >= x1 && x <= x2)) {
        this.inObstacle = true;
      }
    }
  }
}

Ball.DELTA_ADJUSTMENT = 12;

export default Ball;
