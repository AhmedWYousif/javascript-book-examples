// Defining JavaScript functions

// Print the name and value of each property of o. Return undefined.
function printprops(o) {
	for (var p in o) console.log(p + ": " + o[p] + "\n");
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.sqrt(dx * dx + dy * dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function (x) {
	return x * x;
};

// Function expressions can include names, which is useful for recursion.
var f = function fact(x) {
	if (x <= 1) return 1;
	else return x * fact(x - 1);
};

// Function expressions can also be used as arguments to other functions:
data.sort(function (a, b) {
	return a - b;
});

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function (x) {
	return x * x;
})(10);

// Nested Functions
// they can access the parameters and variables of the function they are nested within.
// but they cannot appear inside of loops, conditionals, or try/catch/finally or with statements.
function hypotenuse(a, b) {
	function square(x) {
		return x * x;
	}
	return Math.sqrt(square(a) + square(b));
}



