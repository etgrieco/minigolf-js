import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const hole = new Hole({
  pos: [350, 250],
  radius: 40
});

const messages = [
  "You made the monster too hungry. Play again? (Press \"R\")",
];

export default new Level ({
  walls: [],
  ballStartPos: null,
  hole,
  par: 1,
  messages,
  isLevelOver: () => false,
  isGameOver: () => false,
  rate: 1.02,
  draw: function(ctx, game) { game.strokes = 1; this.hole.draw(ctx, game); }
});
