import Level from '../level';
import Wall from '../wall';

const level1 = new Level ({
  walls: [new Wall([200,200,150,100])],
  height: 640,
  width: 480
});

export default level1;
