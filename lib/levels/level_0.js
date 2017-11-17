import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

  const hole = null;

  const messages = {
    0: "...",
    1: "hungrier...",
    2: "HAAAANGRY!!!"
  };

const isLevelOver = game => {
  const ball = game.gameObjects.ball;
  return (ball && ball.inHole);
};

const isGameOver = game => {
  return game.strokes > game.level.par && !game.gameObjects.ball.isMoving;
};

export default new Level ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [360, 250],
  hole,
  par: 2,
  messages,
  isLevelOver,
  isGameOver
});
