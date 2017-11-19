import GameObject from './game_object';

class Putter extends GameObject {

  constructor({ theta, thetaDirection, pos}) {
    super();
    this.theta = theta;
    this.thetaDirection = thetaDirection;
    this.pos = pos;
    this.vel = 0;
  }

  draw(ctx, game) {
    const ball = game.gameObjects.ball;
    if(ball && !ball.isMoving) {
      const [x, y] = this.pos;

      ctx.beginPath();
      canvasArrow(ctx, x, y, this.theta);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }

  move(game) {
    const ball = game.gameObjects.ball;
    if (ball && !ball.isMoving) {
      this.incrementVel();
      this.pos = game.gameObjects.ball.pos;
    }
  }

  incrementVel() {
    this.vel = (this.vel + 1) % 120;
  }
}

// Adapted from source: https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
function canvasArrow(ctx, fromx, fromy, theta){
  const toy = 100 * Math.sin(theta) + fromy;
  const tox = 100 * Math.cos(theta) + fromx;
  var headlen = 10;   // length of head in pixels
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta-Math.PI/6),toy-headlen*Math.sin(theta-Math.PI/6));
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta+Math.PI/6),toy-headlen*Math.sin(theta+Math.PI/6));
}

export default Putter;
