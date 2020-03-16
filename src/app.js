import './style.css';
import join from 'lodash/join';
import _ from 'lodash';
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
console.log(join(['Hello', 'webpack'], ' ')); // static import, good
console.log(_.join(['Hello', 'webpack'], ' '));
console.log(square(4));
const a = new Point(1, 2);
console.log(a);
const testA = 111;
const testB = 222;
const plusOperate = (c, d) => c * d;
console.log(plusOperate(testA, testB));
console.log(`${testA}-${testB}`);

const button = document.createElement('button');
button.innerHTML = 'Click me and look at the console!';
button.onclick = (e) => import(/* webpackChunkName: "lazy" */ './lazyLoad.js').then(({ default: test }) => {
  test(e); // lazy import
});
document.body.appendChild(button);


import(/* webpackPreload: true */ './prefetchLoad'); // eslint-disable-line
