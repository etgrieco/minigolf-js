import StrokeCounter from './stroke_counter';
import ScoreCounter from './score_counter';

class UI {

  constructor(game) {
    const strokes = new StrokeCounter(game);
    const score = new ScoreCounter(game);
    this.uiObjects = {
      strokes,
      score
    };
  }

  draw(ctx) {
    Object.values(this.uiObjects).forEach((obj) => obj.draw(ctx));
  }

  advanceLevel(game) {
    this.uiObjects.score.addScore();
    const strokes = new StrokeCounter(game);
    Object.assign(this.uiObjects, {strokes});
  }

}

export default UI;
