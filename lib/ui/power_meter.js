import UIObject from './ui_object';

class PowerMeter extends UIObject {

  draw(ctx) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText("Power:", 450, 460);

    //power interior
    const putter = this.game.gameObjects.putter;
    const fill = putter.vel;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(550, 435, fill, 30);
    ctx.fill();
    ctx.stroke();

    //power exterior
    ctx.beginPath();
    ctx.rect(550, 435, 120, 30);
    ctx.stroke();
  }

}

export default PowerMeter;
