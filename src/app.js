import './style.css';
import { square } from './math';

const aa = 3;
const vv = 8;
console.warn(aa);
console.warn(vv);
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
console.log(square(4));
const a = new Point(1, 2);
console.log(a);
const testA = 111;
const testB = 222;
const plusOperate = (c, d) => c * d;
console.log(plusOperate(testA, testB));
console.log(`${testA}-${testB}`);
