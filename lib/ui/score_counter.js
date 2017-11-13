import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  constructor(game) {
    super();
    this.score = 0;
  }

  addScore(game) {
    this.score +=  game.strokes - game.level.par;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 280, 460);
  }

}

export default StrokeCounter;
