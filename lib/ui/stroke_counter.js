import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText(`Strokes: ${this.game.strokes}`, 20, 460);
  }

}

export default StrokeCounter;
