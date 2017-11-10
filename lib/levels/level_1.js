import Level from '../level';
import Wall from '../wall';

const walls = [
  new Wall([200, 150, 40, 40]),
  new Wall([400, 300, 40, 40]),
  new Wall([400, 150, 40, 40]),
  new Wall([200, 300, 40, 40])
];

const level1 = new Level ({
  walls,
  height: 480,
  width: 640,
  ballStartPos: [230, 250],
  hole: {
    pos: [640 * Math.random(), 480 * Math.random()],
    radius: 10
  }
});

export default level1;
