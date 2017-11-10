import Level from '../level';
import Wall from '../wall';

const walls = [
  new Wall([150, 150, 200, 200])
];


const level1 = new Level ({
  walls,
  height: 480,
  width: 640,
  ballStartPos: [100, 100],
  hole: {
    pos: [640 * Math.random(), 480 * Math.random()],
    radius: 10
  }
});

export default level1;
