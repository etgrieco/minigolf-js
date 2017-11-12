import Level from '../game/level';
import Wall from '../game/wall';

const walls = [
  new Wall([160, 140, 30, 140]),
  new Wall([300, 200, 30, 140]),
  new Wall([440, 140, 30, 140]),
];

export default new Level ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [35, 250],
  hole: {
    pos: [550, 250],
    radius: 10
  }
});
