import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

const messages = [
  "The monster is hungry. Don't take too long.",
  "hungrier...",
  "You're tempting fate, my friend.",
  "HAAAANGRY!!!"
];

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
  ballStartPos: [100, 250],
  hole,
  par: 4,
  messages,
  isLevelOver,
  isGameOver,
  rate: 1.05
});
