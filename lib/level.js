import GameObject from './game_object';
import Wall from './wall';

class Level extends GameObject {

  constructor(walls) {
    super();
    this.ballStartPos = [100, 100];
    this.hole = {
      pos: [640 * Math.random(), 480 * Math.random()],
      radius: 10
    };
    this.walls = [new Wall([200,200,150,100])];
    // this.walls = walls;
  }

  draw(ctx) {
    this.drawHole(ctx);
    this.drawWalls(ctx);
  }

  drawHole(ctx) {
    const { radius, pos } = this.hole;
    const [x, y] = pos;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  move() {

  }

}

export default Level;
