// # Functions As Values

// The most important features of functions are that they can be assigned to variables,
// stored in the properties of objects or the elements of arrays, passed as arguments to functions.

function square(x) {
	return x * x;
}

// ## The function can be assigned to another variable and still work the same way:
var s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16

// ## Functions can also be assigned to object properties rather than variables. When you do this, they’re called methods:
var o = {
	square: function (x) {
		return x * x;
	},
}; // An object literal
var y = o.square(16); // y equals 256

// ## Functions don’t even require names at all, as when they’re assigned to array elements:
var a = [
	function (x) {
		return x * x;
	},
	20,
]; // An array literal
a[0](a[1]); // => 400

// Demonstrates the kinds of things that can be done when functions are used as values.
// Using functions as data

// We define some simple functions here
function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}

// Here's a function that takes one of the above functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
	return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
// For the sake of the example, we implement the simple functions again,
// this time using function literals within an object literal;
var operators = {
	add: function (x, y) {
		return x + y;
	},
	subtract: function (x, y) {
		return x - y;
	},
	multiply: function (x, y) {
		return x * y;
	},
	divide: function (x, y) {
		return x / y;
	},
	pow: Math.pow, // Works for predefined functions too
};
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands. Note
// the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
	if (typeof operators[operation] === "function")
		return operators[operation](operand1, operand2);
	else throw "unknown operator";
}
// Compute the value ("hello" + " " + "world") like this:
var j = operate2("add", "hello", operate2("add", " ", "world"));
// Using the predefined Math.pow() function:
var k = operate2("pow", 10, 2);

// ## Defining Your Own Function Properties
// When a function needs a “static” variable whose value persists across invocations

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
	return uniqueInteger.counter++; // Increment and return counter property
}

// As another example, consider the following factorial() function that uses properties
// of itself (treating itself as an array) to cache previously computed results:

// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
	if (isFinite(n) && n > 0 && n == Math.round(n)) {
		// Finite, positive ints only
		if (!(n in factorial))
			// If no cached result
			factorial[n] = n * factorial(n - 1); // Compute and cache it
		return factorial[n]; // Return the cached result
	} else return NaN; // If input was bad
}

factorial[1] = 1; // Initialize the cache to hold this base case.


