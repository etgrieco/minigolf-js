import GameObject from './game_object';

class Hole extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
  }

  draw(ctx, game) {
    const { radius, pos } = this;
    const [dx, dy] = pos;
    const img = new Image();
    img.src = "./sprites/hole_reverse.png";

    // DEBUG: VIEW CIRCLE POSITION
    // ctx.beginPath();
    // ctx.arc(dx, dy, radius, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    const animationIdx = Math.floor(game.strokes / game.level.par * Hole.animations.length);
    Object.assign(this, Hole.animations[animationIdx]);

    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const props = {
      img,
      sx: 448 - (64 * this.currentFrame),
      sy: this.sy,
      sWidth: 64,
      sHeight: 64,
      dx: dx - 32,
      dy: dy - 40,
      dWidth: 64,
      dHeight: 64
    };

    this.updateAnimation();
    ctx.drawImage(...Object.values(props));
  }

}

// dy: number of frames
Hole.animations = [
    {endFrame: 4, sy: 0, frameSpeed: 10},
    {endFrame: 5, sy: 64, frameSpeed: 10},
    {endFrame: 5, sy: 64, frameSpeed: 5},
    {endFrame: 6, sy: 128, frameSpeed: 5},
  ];
// 0: 4,
// 1: 5,
// 2: 6,
// 3: 7,
// 4: 0,
// 5: 8,

export default Hole;
