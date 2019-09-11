// Destructuring => Breaking up the structure
// 1. Object Destructuring
// 2. Array Destructuring

var rect = { x: 0, y: 20, width: 20, height: 22 };

//Destructuring

var { x, y, width, height }: { x: number; y: number, width: number, height: number } = rect;

console.log(x, y, width, height);
rect.x = 30;

console.log(x);

var foo = { bar: { bas: 23 } };
var { bar: { bas } } = foo;