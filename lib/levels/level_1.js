import Level from '../level';
import Wall from '../wall';

const level1 = new Level ({
  walls: [new Wall([200,200,150,100])],
  height: 480,
  width: 640,
  ballStartPos: [100, 100],
  hole: {
    pos: [640 * Math.random(), 480 * Math.random()],
    radius: 10
  }
});

export default level1;
