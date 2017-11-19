import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

  const messages = [
    "You made the monster too hungry",
    "Press space to try again."
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
  rate: 1.1
});
