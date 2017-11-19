import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  constructor(game) {
    super();
    this.score = 0;
  }

  addScore(game) {
    if ((Number(game.level.par))) {
      this.score += (game.level.par - game.strokes) * 100;
    }
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.font = "30px Roboto";
    // ctx.fillStyle = "black";
    // ctx.textAlign = "left";
    // ctx.fillText(`Score: ${this.score}`, 300, 460);
  }

}

export default StrokeCounter;
