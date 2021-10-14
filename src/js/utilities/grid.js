export default class Grid {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  plus(xy) {
    return new Grid(this.x + xy.x, this.y + xy.y);
  }

  minus(xy) {
    return this.plus(xy.scale(-1));
  }

  scale(sx, sy = sx) {
    return new Grid(this.x * sx, this.y * sy);
  }
}
