import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  constructor(game) {
    super();
    this.score = 0;
  }

  resetScore() {
    this.score = 0;
  }

  addScore(game) {
    if ((Number(game.level.par))) {
      this.score += (game.level.par + 1 - game.strokes) * 100;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "25px Roboto";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 290, 460);
  }

}

export default StrokeCounter;
