// var

var i; // One simple variable
var j = 0; // One var, one value
var p, q; // Two variables
var greeting = "hello" + name; // A complex initializer
var x = 2.34,
	y = Math.cos(0.75),
	r,
	theta; // Many variables
var x = 2,
	y = x * x; // Second var uses the first
var x = 2, // Multiple variables...
	f = function (x) {
		return x * x;
	}, // each on its own line
	y = f(x);

for (var i = 0; i < 10; i++) console.log(i);
for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
for (var i in o) console.log(i);

// function

var f = function (x) {
	return x + 1;
}; // Expression assigned to a variable
function f(x) {
	return x + 1;
} // Statement includes variable name

// some more examples of function declarations:
function hypotenuse(x, y) {
	return Math.sqrt(x * x + y * y); // return is documented in the next section
}
function factorial(n) {
	// A recursive function
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
