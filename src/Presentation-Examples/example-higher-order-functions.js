/* eslint-disable */

// regular function
const sum = (x, y) => x + y;

// higher order function
const addX = x => y => x + y;
const add2 = addX(2);
console.log(add2(10)); // 12




// regular function
const square = x => x * x;

// .map is a higher order function
console.log([1,2,3].map(square)); // [1, 4, 9]


