class GameObject {

  draw(ctx, game) {}
  move(ctx) {}

  updateAnimation() {
    this.currentFrame = this.currentFrame || 0;
    this.counter = this.counter || 0;
    const { counter, frameSpeed, endFrame, currentFrame } = this;

    if (counter === (frameSpeed - 1)) {
      this.currentFrame = (currentFrame + 1) % endFrame;
    }
    this.counter = (counter + 1) % frameSpeed;
  }

}

export default GameObject;
