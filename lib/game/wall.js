import GameObject from './game_object';

class Wall extends GameObject {

  constructor(dimensions) {
    super();
    this.dimensions = dimensions; // array of dimensions
  }

  draw(ctx) {
    ctx.rect(...this.dimensions);
  }

}

export default Wall;
