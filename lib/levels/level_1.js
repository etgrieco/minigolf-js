import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const walls = [
];

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

const messages = {
  0: "...",
  1: "hungrier...",
  2: "HAAAANGRY!!!"
};

export default new Level ({
  walls,
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 2,
  messages
});
