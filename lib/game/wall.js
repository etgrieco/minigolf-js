import GameObject from './game_object';

class Wall extends GameObject {

  constructor(dimensions) {
    super();
    this.dimensions = dimensions; // array of dimensions
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(...this.dimensions);
    ctx.fillStyle = "#2F4858";
    ctx.fill();
  }

}

export default Wall;
