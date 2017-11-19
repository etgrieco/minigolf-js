import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

  const messages = [
    "Go ahead, press the space bar",
    "Press it again",
    "Notice your speed.",
    "It corresponds to the power meter",
    "Do you get it yet?",
    "Move the arrow keys",
    "That determines your direction",
    "Makes sense?",
  ];

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
  rate: 1.05
});
