import UIObject from './ui_object';

class StrokeCounter extends UIObject {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText("Hunger:", 40, 460);

    //hunger interior
    // const putter = this.game.gameObjects.putter;
    // const fill = putter.vel;

    const strokes = this.game.strokes;
    const par = this.game.level.par;
    const fill = strokes * (120 / par);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(150, 435, fill, 30);
    ctx.fill();
    ctx.stroke();

    //power exterior
    ctx.beginPath();
    ctx.rect(150, 435, 120, 30);
    ctx.stroke();
  }

}

export default StrokeCounter;
