import GameObject from './game_object';

class Hole extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx) {
    const { radius, pos } = this;
    const [x, y] = pos;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

}

export default Hole;
