import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';


const walls = [
  new Wall([160, 140, 30, 140]),
  new Wall([300, 200, 30, 140]),
  new Wall([440, 140, 30, 140]),
];

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

export default new Level ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole
});
