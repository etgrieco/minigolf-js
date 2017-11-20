import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
  new Wall([250, 200, 60, 140]),
  new Wall([400, 40, 60, 140])
];

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

export default new Level ({
  walls,
  height: 300,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 4,
  rate: 1.05
});
