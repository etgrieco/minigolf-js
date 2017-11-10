import Level from '../level';
import Wall from '../wall';

const walls = [
  new Wall([200, 200, 40, 40]),
  new Wall([20, 20, 40, 40])
];

const level1 = new Level ({
  walls,
  height: 480,
  width: 640,
  ballStartPos: [320, 240],
  hole: {
    pos: [640 * Math.random(), 480 * Math.random()],
    radius: 10
  }
});

export default level1;
