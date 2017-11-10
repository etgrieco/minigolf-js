import GameObject from './game_object';

class Level extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
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
