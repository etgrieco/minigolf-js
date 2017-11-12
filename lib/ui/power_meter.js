import UIObject from './ui_object';

class PowerMeter extends UIObject {

  draw(ctx) {
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Power:", 400, 460);

    //power exterior
    ctx.rect(500, 435, 120, 30);
    ctx.stroke();

    //power interior
    const putter = this.game.gameObjects.putter;
    const fill = putter.vel;

    ctx.rect(500, 435, fill, 30);
    ctx.stroke();
  }

}

export default PowerMeter;
