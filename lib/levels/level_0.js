import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

  const messages = [
    "Go ahead, press the space bar (R: skip tutorial)",
    "Press it again",
    "Your speed corresponds to the power meter.        ⬇",
    "Time your hits wisely",
    "Now aim with the arrow keys",
    "That determines your direction",
    "Makes sense?",
    "Time to feed the monster..."
  ];

const isLevelOver = game => (
  game.strokes >= messages.length - 1 && !game.gameObjects.ball.isMoving
);

export default new Level ({
  walls: [],
  height: 300,
  width: 600,
  ballStartPos: [360, 250],
  hole: null,
  par: "∞",
  getMessage: strokes => messages[strokes],
  isLevelOver: game => game.strokes >= messages.length - 1 &&
                       !game.gameObjects.ball.isMoving,
  isGameOver: () => false,
  rate: 1.07
});
