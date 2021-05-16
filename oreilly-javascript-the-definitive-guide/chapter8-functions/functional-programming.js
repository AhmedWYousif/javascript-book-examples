// JS is not a functional programming language like Lisp or Haskell, but the fact
// that JavaScript can manipulate functions as objects means that we can use functional
// programming techniques in JS.

// The ECMAScript 5 array methods such as map() and reduce() lend themselves particularly well to a functional programming style.

// Processing Arrays with Functions
//Suppose we have an array of numbers and we want to compute the mean and standard deviation of those values.

// ## nonfunctional style like this:

var data = [1, 1, 3, 5, 5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements
var total = 0;
for (var i = 0; i < data.length; i++) total += data[i];
var mean = total / data.length; // The mean of our data is 3

// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for (var i = 0; i < data.length; i++) {
	var deviation = data[i] - mean;
	total += deviation * deviation;
}
var stddev = Math.sqrt(total / (data.length - 1)); // The standard deviation is 2

// ## functional style using the array

// First, define two simple functions
var sum = function (x, y) {
	return x + y;
};
var square = function (x) {
	return x * x;
};

// Then use those functions with Array methods to compute mean and stddev
var data = [1, 1, 3, 5, 5];
var mean = data.reduce(sum) / data.length;
var deviations = data.map(function (x) {
	return x - mean;
});
var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));

// ECMAScript 3  We can define our own map() and reduce()

// Call the function f for each element of array a and return
// an array of the results. Use Array.prototype.map if it is defined.
var map = Array.prototype.map
	? function (a, f) {
			return a.map(f);
	  } // Use map method if it exists
	: function (a, f) {
			// Otherwise, implement our own
			var results = [];
			for (var i = 0, len = a.length; i < len; i++) {
				if (i in a) results[i] = f.call(null, a[i], i, a);
			}
			return results;
	  };
// Reduce the array a to a single value using the function f and
// optional initial value. Use Array.prototype.reduce if it is defined.
var reduce = Array.prototype.reduce
	? function (a, f, initial) {
			// If the reduce() method exists.
			if (arguments.length > 2) return a.reduce(f, initial);
			// If an initial value was passed.
			else return a.reduce(f); // Otherwise, no initial value.
	  }
	: function (a, f, initial) {
			// This algorithm from the ES5 specification
			var i = 0,
				len = a.length,
				accumulator;
			// Start with the specified initial value, or the first value in a
			if (arguments.length > 2) accumulator = initial;
			else {
				// Find the first defined index in the array
				if (len == 0) throw TypeError();
				while (i < len) {
					if (i in a) {
						accumulator = a[i++];
						break;
					} else i++;
				}
				if (i == len) throw TypeError();
			}
			// Now call f for each remaining element in the array
			while (i < len) {
				if (i in a) accumulator = f.call(undefined, accumulator, a[i], i, a);
				i++;
			}
			return accumulator;
	  };

// With these map() and reduce() functions defined, our code to compute the mean and standard deviation now looks like this:

var data = [1, 1, 3, 5, 5];
var sum = function (x, y) {
	return x + y;
};
var square = function (x) {
	return x * x;
};
var mean = reduce(data, sum) / data.length;
var deviations = map(data, function (x) {
	return x - mean;
});
var stddev = Math.sqrt(
	reduce(map(deviations, square), sum) / (data.length - 1)
);

// Higher-Order Functions
// A higher-order function is a function that operates on functions

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
	return function () {
		// Return a new function
		var result = f.apply(this, arguments); // that calls f
		return !result; // and negates its result.
	};
}
var even = function (x) {
	// A function to determine if a number is even
	return x % 2 === 0;
};

var odd = not(even); // A new function that does the opposite
[1, 1, 3, 5, 5].every(odd); // => true: every element of the array is odd

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
	return function (a) {
		return map(a, f);
	};
}
var increment = function (x) {
	return x + 1;
};
var incrementer = mapper(increment);
incrementer([1, 2, 3]); // => [2,3,4]

// Here is another, more general, example that takes two functions f and g and returns a new function that computes f(g()):

// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, and then passes
// the return value of g to f, and then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
	return function () {
		// We use call for f because we're passing a single value and
		// apply for g because we're passing an array of values.
		return f.call(this, g.apply(this, arguments));
	};
}
var square = function (x) {
	return x * x;
};
var sum = function (x, y) {
	return x + y;
};
var squareofsum = compose(square, sum);
squareofsum(2, 3); // => 25

// The partial() and memoize() functions defined in the sections that follow are two more important higher-order functions.

// ## Partial Application of Functions

// The bind() method of a function f returns a new function that invokes f in a specified context and with a specified set of arguments.
// We say that it binds the function to an object and partially applies the arguments.
// The bind() method partially applies arguments on the left—that is, the arguments you pass to bind() are placed at the start
// of the argument list that is passed to the original function.
// But it is also possible to partially apply arguments on the right:

// A utility function to convert an array-like object (or suffix of it)
// to a true array. Used below to convert arguments objects to real arrays.
function array(a, n) {
	return Array.prototype.slice.call(a, n || 0);
}

// The arguments to this function are passed on the left
function partialLeft(f /*, ...*/) {
	var args = arguments; // Save the outer arguments array
	return function () {
		// And return this function
		var a = array(args, 1); // Start with the outer args from 1 on.
		a = a.concat(array(arguments)); // Then add all the inner arguments.
		return f.apply(this, a); // Then invoke f on that argument list.
	};
}
// The arguments to this function are passed on the right
function partialRight(f /*, ...*/) {
	var args = arguments; // Save the outer arguments array
	return function () {
		// And return this function
		var a = array(arguments); // Start with the inner arguments.
		a = a.concat(array(args, 1)); // Then add the outer args from 1 on.
		return f.apply(this, a); // Then invoke f on that argument list.
	};
}

// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f /*, ... */) {
	var args = arguments; // Save the outer arguments array
	return function () {
		var a = array(args, 1); // Start with an array of outer args
		var i = 0,
			j = 0;
		// Loop through those args, filling in undefined values from inner
		for (; i < a.length; i++) if (a[i] === undefined) a[i] = arguments[j++];
		// Now append any remaining inner arguments
		a = a.concat(array(arguments, j));
		return f.apply(this, a);
	};
}
// Here is a function with three arguments
var f = function (x, y, z) {
	return x * (y - z);
};
// Notice how these three partial applications differ
partialLeft(f, 2)(3, 4); // => -2: Bind first argument: 2 * (3 - 4)
partialRight(f, 2)(3, 4); // => 6: Bind last argument: 3 * (4 - 2)
partial(f, undefined, 2)(3, 4); // => -6: Bind middle argument: 3 * (2 - 4)

// These partial application functions allow us to easily define interesting functions out
// of functions we already have defined. Here are some examples:
var increment = partialLeft(sum, 1);
var cuberoot = partialRight(Math.pow, 1 / 3);
String.prototype.first = partial(String.prototype.charAt, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);

// Partial application becomes even more interesting when we combine it with other
// higher-order functions. Here, for example, is a way to define the not() function shown
// above using composition and partial application:

var not = partialLeft(compose, function (x) {
	return !x;
});
var even = function (x) {
	return x % 2 === 0;
};
var odd = not(even);
var isNumber = not(isNaN);

// We can also use composition and partial application to redo our mean and standard
// deviation calculations in extreme functional style:
var data = [1, 1, 3, 5, 5]; // Our data
var sum = function (x, y) {
	return x + y;
}; // Two elementary functions
var product = function (x, y) {
	return x * y;
};
var neg = partial(product, -1); // Define some others
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, 0.5);
var reciprocal = partial(Math.pow, undefined, -1);

// Now compute the mean and standard deviation. This is all function
// invocations with no operators, and it starts to look like Lisp code!
var mean = product(reduce(data, sum), reciprocal(data.length));
var stddev = sqrt(
	product(
		reduce(map(data, compose(square, partial(sum, neg(mean)))), sum),
		reciprocal(sum(data.length, -1))
	)
);

// Memoization

// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
	var cache = {}; // Value cache stored in the closure.
	return function () {
		// Create a string version of the arguments to use as a cache key.
		var key = arguments.length + Array.prototype.join.call(arguments, ",");
		if (key in cache) return cache[key];
		else return (cache[key] = f.apply(this, arguments));
	};
}

// The memoize() function creates a new object to use as the cache and assigns this object
// to a local variable, so that it is private to (in the closure of) the returned function. The
// returned function converts its arguments array to a string, and uses that string as a
// property name for the cache object. If a value exists in the cache, it returns it directly.
