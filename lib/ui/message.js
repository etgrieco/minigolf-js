class Message {

  removeMessage() {
    this.message = null;
  }

  displayMessage(message) {
    this.message = message;
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
