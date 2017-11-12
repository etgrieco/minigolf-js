import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  constructor(game) {
    super(game);
    this.score = 0;
  }

  addScore() {
    this.score += this.game.strokes;
  }

  draw(ctx) {
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 200, 460);
  }

}

export default StrokeCounter;
