/* eslint-disable */

// regular function
const sum = (x, y) => x + y;

// higher order function
const makeAdder = x => y => x + y;
const add2 = makeAdder(2);

sum(2,2) === add2(2); // DUH




// regular function
const square = x => x * x;

// .map is a higher order function
console.log([1,2,3].map(square)); // [1, 4, 9]


