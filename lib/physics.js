const Physics = {

  dist (pos1, pos2) {
    const [x1, y1] = pos1;
    const [x2, y2] = pos2;

    return Math.sqrt(
      Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
  }

};

export default Physics;
