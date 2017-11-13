import GameObject from './game_object';

class Hole extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);

    //Animation variables
    this.endFrame = 4;
    this.frameSpeed = 10;
  }

  draw(ctx) {
    const { radius, pos } = this;
    const [dx, dy] = pos;

    const img = new Image();
    img.src = "./sprites/hole.png";

    this.update();

    // DEBUG: VIEW CIRCLE POSITION
    // ctx.beginPath();
    // ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const slice = {
      img,
      sx: 64 * this.currentFrame,
      sy: 128,
      sWidth: 64,
      sHeight: 64,
      dx: dx - 32,
      dy: dy - 40,
      dWidth: 64,
      dHeight: 64
    };

    ctx.drawImage(...Object.values(slice));
  }

}

export default Hole;
