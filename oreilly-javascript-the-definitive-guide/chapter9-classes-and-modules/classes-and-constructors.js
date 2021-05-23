// the range class use a constructor function instead of a factory

// range2.js: Another class representing a range of values.
// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.

function Range(from, to) {
	// Store the start and end points (state) of this new range object.
	// These are noninherited properties that are unique to this object.
	this.from = from;
	this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
	// Return true if x is in the range, false otherwise
	// This method works for textual and Date ranges as well as numeric.
	includes: function (x) {
		return this.from <= x && x <= this.to;
	},
	// Invoke f once for each integer in the range.
	// This method works only for numeric ranges.
	foreach: function (f) {
		for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	// Return a string representation of the range
	toString: function () {
		return "(" + this.from + "..." + this.to + ")";
	},
};

// Here are example uses of a range object
var r = new Range(1, 3); // Create a range object
r.includes(2); // => true: 2 is in the range
r.foreach(console.log); // Prints 1 2 3
console.log(r); // Prints (1...3)

// Constructors do not even have to return the newly created object.
// Constructor invocation automatically creates returns the new object.

// Constructors and Class Identity

r instanceof Range; // returns true if r inherits from Range.prototype
// The instanceof operator does not actually check whether r was initialized by the Range constructor.

var F = function () {}; // This is a function object.
var p = F.prototype; // This is the prototype object associated with it.
var c = p.constructor; // This is the function associated with the prototype.
c === F; // => true: F.prototype.constructor==F for any function

var o = new F(); // Create an object o of class F
o.constructor === F; // => true: the constructor property specifies the class

Range.prototype = {
	constructor: Range, // Explicitly set the constructor back-reference
	includes: function (x) {
		return this.from <= x && x <= this.to;
	},
	foreach: function (f) {
		for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
	},
	toString: function () {
		return "(" + this.from + "..." + this.to + ")";
	},
};

// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function (x) {
	return this.from <= x && x <= this.to;
};
Range.prototype.foreach = function (f) {
	for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
};
Range.prototype.toString = function () {
	return "(" + this.from + "..." + this.to + ")";
};
