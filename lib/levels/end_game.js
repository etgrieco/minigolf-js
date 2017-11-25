import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const hole = new Hole({
  pos: [350, 250],
  radius: 40
});

export default new Level ({
  walls: [],
  ballStartPos: null,
  hole,
  par: 1,
  isLevelOver: () => false,
  isGameOver: () => false,
  getMessage: () => "The monster got to hungry. Play again? (Press 'r')",
  rate: 1.02,
  draw: function(ctx, game) { game.strokes = 1; this.hole.draw(ctx, game); }
});
