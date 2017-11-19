import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

  const messages = [
    "Go ahead, press the space bar",
    "Press it again",
    "Your speed corresponds to the power meter.",
    "Time your hits wisely",
    "Now aim with the arrow keys",
    "That determines your direction",
    "Makes sense?",
    "Time to feed the monster..."
  ];

const isLevelOver = game => {
  return game.strokes >= messages.length - 1  && !game.gameObjects.ball.isMoving;
};

const isGameOver = game => {
  return false;
};

export default new Level ({
  walls: [],
  height: 300,
  width: 600,
  ballStartPos: [360, 250],
  hole: null,
  par: "∞",
  messages,
  isLevelOver,
  isGameOver,
  rate: 1.07
});
