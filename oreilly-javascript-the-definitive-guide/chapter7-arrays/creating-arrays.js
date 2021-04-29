var empty = []; // An array with no elements
var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

// The values in an array literal need not be constants; they may be arbitrary expressions:
var base = 1024;
var table = [base, base+1, base+2, base+3];

// Array literals can contain object literals or other array literals:
var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];

// If you omit a value from an array literal, the omitted element is given the value undefined:
var count = [1,,3]; // An array with 3 elements, the middle one undefined.
var undefs = [,,]; // An array with 2 elements, both undefined.
// Array literal syntax allows an optional trailing comma, so [,,] has only two elements, not three.

// Another way to create an array is with the Array() constructor. 
// You can invoke this constructor in three distinct ways:

// • Call it with no arguments:
// This method creates an empty array with no elements and is equivalent to the array literal [].
var a = new Array();

// • Call it with a single numeric argument, which specifies a length:
// This technique creates an array with the specified length. This form of the
// Array() constructor can be used to preallocate an array when you know in advance
// how many elements will be required. Note that no values are stored in the array
var a = new Array(10);


// • Explicitly specify two or more array elements or a single non-numeric element for the array:
// In this form, the constructor arguments become the elements of the new array.
var a = new Array(5, 4, 3, 2, 1, "testing, testing");


