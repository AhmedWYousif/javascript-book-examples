// JavaScript’s prototype-based inheritance mechanism is dynamic: an object inherits
// properties from its prototype, even if the prototype changes after the object is created.
// This means that we can augment JavaScript classes simply by adding new methods to their prototype objects.

// Return a complex number that is the complex conjugate of this one.
Complex.prototype.conj = function () {
	return new Complex(this.r, -this.i);
};

// The prototype object of built-in JavaScript classes is also “open” like this, which means
// that we can add methods to numbers, strings, arrays, functions, and so on. We did this
// when we added a bind() method to the function class in ECMAScript 3 implementations where it did not already exist

if (!Function.prototype.bind) {
	Function.prototype.bind = function (o /*, args */) {};
}

//Here are some other examples:
// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
// var n = 3;
// n.times(function(n) { console.log(n + " hello"); });
Number.prototype.times = function (f, context) {
	var n = Number(this);
	for (var i = 0; i < n; i++) f.call(context, i);
};

// Define the ES5 String.trim() method if one does not already exist.
// This method returns a string with whitespace removed from the start and end.
String.prototype.trim =
	String.prototype.trim ||
	function () {
		if (!this) return this; // Don't alter the empty string
		return this.replace(/^\s+|\s+$/g, ""); // Regular expression magic
	};


// Return a function's name. If it has a (nonstandard) name property, use it.
// Otherwise, convert the function to a string and extract the name from that.
// Returns an empty string for unnamed functions like itself.
Function.prototype.getName = function () {
	return this.name || this.toString().match(/function\s*([^(]*)\(/)[1];
};

// It is possible to add methods to Object.prototype, making them available on all objects.
// This is not recommended, however, because prior to ECMAScript 5, there is no way
// to make these add-on methods nonenumerable, and if you add properties to Object.
// prototype, those properties will be reported by all for/in loops.
// example of using the ECMAScript 5 method Object.defineProperty() to safely augment Object.prototype.
// It is implementation-dependent whether classes defined by the host environment (such
// as the web browser) can be augmented in this way. In many web browsers, for example,
// you can add methods to HTMLElement.prototype and those methods will be inherited
// by the objects that represent the HTML tags in the current document. This does not
// work in current versions of Microsoft’s Internet Explorer, however, which severely
// limits the utility of this technique for client-side programming.
