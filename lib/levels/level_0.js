import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

  const messages = {
    0: "Go ahead, press the space bar",
    1: "Press it again",
    2: "Notice your speed.",
    3: "It corresponds to the power meter",
    4: "Do you get it yet?",
    5: "Move the arrow keys",
    6: "That determines your direction",
    7: "Makes sense?",
  };

const isLevelOver = game => {
  return game.strokes > 7;
};

const isGameOver = game => {
  return game.strokes > game.level.par && !game.gameObjects.ball.isMoving;
};

export default new Level ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [360, 250],
  hole: null,
  par: "∞",
  messages,
  isLevelOver,
  isGameOver,
  rate: 1.1
});
