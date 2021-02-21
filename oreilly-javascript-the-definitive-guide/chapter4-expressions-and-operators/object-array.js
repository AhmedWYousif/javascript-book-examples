

[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7
var matrix = [[1,2,3], [4,5,6], [7,8,9]];

// array contains five elements, including three undefined elements:
var sparseArray = [1,,,,5];


var p = { x:2.3, y:-1.2 }; // An object with 2 properties
var q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

// Object literals can be nested. For example:
var rectangle = { upperLeft: { x: 2, y: 2 }, lowerRight: { x: 4, y: 5 } };

var side = 1;
var square = { "upperLeft": { x: p.x, y: p.y }, 'lowerRight': { x: p.x + side, y: p.y + side}};