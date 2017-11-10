class Ball {

  constructor({ pos, vel, radius, color }) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  move() {
    const x = this.pos[0] + this.vel[0];
    const y = this.pos[1] + this.vel[1];

    this.pos = [x, y];
  }

  calcVelocity(theta) {
    const velX = 5 * Math.cos(theta);
    const velY = 5 * Math.sin(theta);

    return [velX, velY];
  }

}

export default Ball;
