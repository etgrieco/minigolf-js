import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText(`Strokes: ${this.game.strokes} / ${this.game.level.par}`, 20, 460);
  }

}

export default StrokeCounter;
