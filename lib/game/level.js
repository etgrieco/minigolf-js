import GameObject from './game_object';
import GameView from '../game_view';

class Level extends GameObject {

  constructor(props) {
    super();
    Object.assign(this, props);
    this.isLevelOver = this.isLevelOver || Level.isLevelOver;
    this.isGameOver = this.isGameOver || Level.isGameOver;
  }

  draw(ctx) {
    this.drawBoundaries(ctx);
    this.hole ? this.hole.draw(ctx) : null; // allows for holeless levels
    this.drawWalls(ctx);
  }

  drawWalls(ctx) {
    this.walls.forEach((wall) => wall.draw(ctx));
  }

  drawBoundaries(ctx) {
    // center the level boundaries
    this.x1 =  (GameView.DIM_X - this.width) / 2;
    this.y1 = (GameView.DIM_Y - this.height - 100) / 2;

    // draw level boundaries
    ctx.beginPath();
    ctx.fillStyle = "#9AE19D";
    ctx.rect(this.x1, this.y1, this.width, this.height);
    ctx.fill();
    ctx.strokeStyle = "#2F4858";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.lineWidth = 1;
  }

}

Level.isLevelOver = game => {
  const ball = game.gameObjects.ball;
  return (ball && ball.inHole);
};

Level.isGameOver = game => {
  return game.strokes >= game.level.par && !game.gameObjects.ball.isMoving;
};

export default Level;
