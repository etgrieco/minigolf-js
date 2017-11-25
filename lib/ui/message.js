import UIObject from './ui_object';

class Message extends UIObject {

  removeMessage() {
    this.message = null;
  }

  displayMessage() {
    this.message = this.game.level.getMessage(this.game.strokes);
  }

  draw(ctx, game) {
    if (this.message) {
      ctx.beginPath();
      ctx.font = "25px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.fillText(`${this.message}`,
        Message.POS_X,
        Message.POS_Y
      );
    }
  }

}

Message.POS_X = 60;
Message.POS_Y = 400;

export default Message;
