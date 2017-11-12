import GameObject from './game_object';

class Hole extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx) {
    const { radius, pos } = this;
    const [dx, dy] = pos;

    const img = new Image();
    img.src = "./sprites/hole.png";

    // test position
    // ctx.beginPath();
    // ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const slice = {
      img,
      sx: 0,
      sy: 0,
      sWidth: 64,
      sHeight: 64,
      dx: dx - this.radius * 3,
      dy: dy - this.radius * 4,
      dWidth: 64,
      dHeight: 64
    };

    ctx.drawImage(...Object.values(slice));
  }

}

export default Hole;
