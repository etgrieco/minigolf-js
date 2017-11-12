import StrokeCounter from './stroke_counter';
import ScoreCounter from './score_counter';
import PowerMeter from './power_meter';

class UI {

  constructor(game) {
    const strokes = new StrokeCounter(game);
    const score = new ScoreCounter(game);
    const power = new PowerMeter(game);
    this.uiObjects = {
      strokes,
      score,
      power
    };
  }

  draw(ctx) {
    Object.values(this.uiObjects).forEach((obj) => obj.draw(ctx));
  }

  advanceLevel(game) {
    this.uiObjects.score.addScore();
    const strokes = new StrokeCounter(game);
    const power = new PowerMeter(game);
    Object.assign(this.uiObjects, {strokes, power});
  }

}

export default UI;
