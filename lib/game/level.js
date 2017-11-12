import GameObject from './game_object';

class Level extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx) {
    this.drawBoundaries(ctx);
    this.drawHole(ctx);
    this.drawWalls(ctx);
  }

  drawHole(ctx) {
    this.hole.draw(ctx);
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  drawBoundaries(ctx) {
    const x =  (640 - this.width) / 2;
    const y = (480 - this.height) / 2;
    ctx.rect(x, y, this.width, this.height);
    ctx.stroke();
  }

}

export default Level;
