// Function Arguments and Parameters

// Optional Parameters

// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, /* optional */ a) {
	if (a === undefined) a = []; // If undefined, use a new array
	for (var property in o) a.push(property);
	return a;
}
// This function can be invoked with 1 or 2 arguments:
var a = getPropertyNames(o); // Get o's properties into a new array
getPropertyNames(p, a); // append p's properties to that array

// Instead of using an if statement in the first line of this function, you can use the || operator in this idiomatic way:
a = a || [];

// Variable-Length Argument Lists: The Arguments Object

function f(x, y, z) {
	// First, verify that the right number of arguments was passed
	if (arguments.length != 3) {
		throw new Error(
			"function f called with " +
				arguments.length +
				"arguments, but it expects 3 arguments."
		);
	}
	// Now do the actual function...
}

// Note that missing arguments are undefined and extra arguments are simply ignored.
// One important use of the Arguments object is to write functions that operate on any number of args.
function max(/* ... */) {
	var max = Number.NEGATIVE_INFINITY;
	// Loop through the arguments, looking for, and remembering, the biggest.
	for (var i = 0; i < arguments.length; i++)
		if (arguments[i] > max) max = arguments[i];
	// Return the biggest
	return max;
}
var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6); // => 10000

// Remember that arguments is not really an array; it is an Arguments object.

// Changing the value of an argument with an argument name changes the value that is retrieved through the arguments[] array.
function f(x) {
	console.log(x); // Displays the initial value of the argument
	arguments[0] = null; // Changing the array element also changes x!
	console.log(x); // Now displays "null"
}

// The callee and caller properties

// In addition to its array elements, the Arguments object defines callee and caller properties.
// In ECMAScript 5 strict mode, these properties are guaranteed to raise a Type-Error if you try to read or write them.
// The caller property gives access to the call stack
// The callee property is occasionally useful to allow unnamed functions to call themselves

var factorial = function (x) {
	if (x <= 1) return 1;
	return x * arguments.callee(x - 1);
};

// Using Object Properties As Arguments

// Copy length elements of the array from to the array to.
// Begin copying with element from_start in the from array
// and copy that element to to_start in the to array.
// It is hard to remember the order of the arguments.
function arraycopy(
	/* array */ from,
	/* index */ from_start,
	/* array */ to,
	/* index */ to_start,
	/* integer */ length
) {
	// code goes here
}
// This version is a little less efficient, but you don't have to
// remember the order of the arguments, and from_start and to_start
// default to 0.
function easycopy(args) {
	arraycopy(
		args.from,
		args.from_start || 0, // Note default value provided
		args.to,
		args.to_start || 0,
		args.length
	);
}
// Here is how you might invoke easycopy():
var a = [1, 2, 3, 4],
	b = [];
easycopy({ from: a, to: b, length: 4 });

// Argument Types
// JavaScript method params have no declared types, and no type checking.
// You can help to make your code selfdocumenting by choosing descriptive names for function arguments and also by including
// argument types in comments, as in the arraycopy() method just shown.
// For arguments that are optional, you can include the word “optional” in the comment. And
// when a method can accept any number of arguments, you can use an ellipsis:
function max(/* number... */) {
	/* code here */
}

// function that performs type-checking.
// Return the sum of the elements of array (or array-like object) a.
// The elements of a must all be numbers or null and undefined are ignored.
function sum(a) {
	if (isArrayLike(a)) {
		var total = 0;
		for (var i = 0; i < a.length; i++) {
			// Loop though all elements
			var element = a[i];
			if (element == null) continue; // Skip null and undefined
			if (isFinite(element)) total += element;
			else throw new Error("sum(): elements must be finite numbers");
		}
		return total;
	} else throw new Error("sum(): argument must be array-like");
}

// This sum() method is fairly strict about the argument it accepts and throws suitably
// informative errors if it is passed bad values.
// It does offer a bit of flexibility, however,
// by working with array-like objects as well as true arrays and by ignoring null and
// undefined array elements.

// JavaScript is a very flexible and loosely typed language, and sometimes it is appropriate
// to write functions that are flexible about the number and type of arguments they are
// passed. The following flexisum() method takes this approach (probably to an extreme).
// For example, it accepts any number of arguments but recursively processes any
// arguments that are arrays. In this way, it can be used as a varargs method or with an
// array argument. Furthermore, it tries its best to convert nonnumeric values to numbers
// before throwing an error:

function flexisum(a) {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		var element = arguments[i],
			n;
		if (element == null) continue; // Ignore null and undefined arguments
		if (isArray(element))
			// If the argument is an array
			n = flexisum.apply(this, element);
		// compute its sum recursively
		else if (typeof element === "function")
			// Else if it's a function...
			n = Number(element());
		// invoke it and convert.
		else n = Number(element); // Else try to convert it
		if (isNaN(n))
			// If we couldn't convert to a number, throw an error
			throw Error("flexisum(): can't convert " + element + " to number");
		total += n; // Otherwise, add n to the total
	}
	return total;
}
