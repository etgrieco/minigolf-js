import StrokeCounter from './stroke_counter';
import ScoreCounter from './score_counter';
import PowerMeter from './power_meter';
import Message from './message';

class UI {

  constructor(game) {
    const strokes = new StrokeCounter(game);
    const score = new ScoreCounter(game);
    const power = new PowerMeter(game);
    const message = new Message(game);
    this.uiObjects = {
      strokes,
      score,
      power,
      message
    };
  }

  draw(ctx) {
    ctx.strokeStyle = "black";
    Object.values(this.uiObjects).forEach((obj) => obj.draw(ctx));
  }

  addScore(game) {
    this.uiObjects.score.addScore(game);
  }

  advanceLevel(game) {
    const strokes = new StrokeCounter(game);
    const power = new PowerMeter(game);
    const message = new Message(game);
    Object.assign(this.uiObjects, {strokes, power, message});
  }

  displayMessage() {
    this.uiObjects.message.displayMessage();
  }

}

export default UI;
