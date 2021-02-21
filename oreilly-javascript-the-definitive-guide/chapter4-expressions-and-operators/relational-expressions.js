
1 + 2 // Addition. Result is 3.
"1" + "2" // Concatenation. Result is "12".
"1" + 2 // Concatenation. 2 is converted to "2". Result is "12".
11 < 3 // Numeric comparison. Result is false.
"11" < "3" // String comparison. Result is true.
"11" < 3 // Numeric comparison. "11" converted to 11. Result is false.
"one" < 3 // Numeric comparison. "one" converted to NaN. Result is false.


// the name of a property of the right-side object. For example:
var point = { x:1, y:1 }; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method

var data = [7,8,9]; // An array with elements 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3


var d = new Date(); // Create a new object with the Date() constructor
d instanceof Date; // Evaluates to true; d was created with Date()
d instanceof Object; // Evaluates to true; all objects are instances of Object
d instanceof Number; // Evaluates to false; d is not a Number object

var a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array; // Evaluates to true; a is an array
a instanceof Object; // Evaluates to true; all arrays are objects
a instanceof RegExp; // Evaluates to false; arrays are not regular expressions