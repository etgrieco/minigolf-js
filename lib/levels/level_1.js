import Level from '../game/level';
import Wall from '../game/wall';
import Hole from '../game/hole';

const hole = new Hole({
  pos: [600, 250],
  radius: 10
});

const messages = [
  "The monster is hungry. Don't take too long to feed it.",
  "It's getting hungrier...",
  "You're tempting fate, my friend.",
  "It's HAAAANGRY!!!"
];

export default new Level ({
  walls: [],
  height: 200,
  width: 600,
  ballStartPos: [100, 250],
  hole,
  par: 3,
  messages,
  rate: 1.05
});
