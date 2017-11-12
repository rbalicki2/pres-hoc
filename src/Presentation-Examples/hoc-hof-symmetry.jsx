/* eslint-disable */

// regular function
const add = (x, y) => x + y;
// a higher order version of that
const makeAdder = (x) => (y) => x + y;

add(2,2) === makeAdder(2)(2);


