import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

export default new Level ({
  walls: [],
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 3,
  rate: 1.05
});
