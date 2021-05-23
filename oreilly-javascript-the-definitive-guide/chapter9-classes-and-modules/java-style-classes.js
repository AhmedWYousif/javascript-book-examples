// in JavaScript. In JavaScript, there are three different objects involved in any class definition,
// and the properties of these three objects act like different kinds of class members:

// Constructor object
// As we’ve noted, the constructor function (an object) defines a name for a JavaScript class.
// Properties you add to this constructor object serve as class fields and class methods (depending on whether the property values are functions or not).

// Prototype object
// The properties of this object are inherited by all instances of the class, and properties
// whose values are functions behave like instance methods of the class.

// Instance object
// Each instance of a class is an object in its own right, and properties defined directly
// on an instance are not shared by any other instances.
// Nonfunction properties defined on instances behave as the instance fields of the class.

// We can reduce the process of class definition in JavaScript to a three-step algorithm.
// First, write a constructor function that sets instance properties on new objects.
// Second, define instance methods on the prototype object of the constructor.
// Third, define class fields and class properties on the constructor itself.
// We can even implement this algorithm as a simple defineClass() function.

// A simple function for defining simple classes
function defineClass(
	constructor, // A function that sets instance properties
	methods, // Instance methods: copied to prototype
	statics
) {
	// Class properties: copied to constructor
	if (methods) extend(constructor.prototype, methods);
	if (statics) extend(constructor, statics);
	return constructor;
}
// This is a simple variant of our Range class
var SimpleRange = defineClass(
	function (f, t) {
		this.f = f;
		this.t = t;
	},
	{
		includes: function (x) {
			return this.f <= x && x <= this.t;
		},
		toString: function () {
			return this.f + "..." + this.t;
		},
	},
	{
		upto: function (t) {
			return new SimpleRange(0, t);
		},
	}
);

// It creates a class that represents complex numbers and demonstrates how to simulate Java-style class members using JavaScript.
// It does this “manually”—without relying on the defineClass() function above.

/*
 * Complex.js:
 * This file defines a Complex class to represent complex numbers.
 * Recall that a complex number is the sum of a real number and an
 * imaginary number and that the imaginary number i is the square root of -1.
 */
/*
 * This constructor function defines the instance fields r and i on every
 * instance it creates. These fields hold the real and imaginary parts of
 * the complex number: they are the state of the object.
 */
function Complex(real, imaginary) {
	if (isNaN(real) || isNaN(imaginary))
		// Ensure that both args are numbers.
		throw new TypeError(); // Throw an error if they are not.
	this.r = real; // The real part of the complex number.
	this.i = imaginary; // The imaginary part of the number.
}

/*
 * The instance methods of a class are defined as function-valued properties
 * of the prototype object. The methods defined here are inherited by all
 * instances and provide the shared behavior of the class. Note that JavaScript
 * instance methods must use the this keyword to access the instance fields.
 */
// Add a complex number to this one and return the sum in a new object.
Complex.prototype.add = function (that) {
	return new Complex(this.r + that.r, this.i + that.i);
};

// Multiply this complex number by another and return the product.
Complex.prototype.mul = function (that) {
	return new Complex(
		this.r * that.r - this.i * that.i,
		this.r * that.i + this.i * that.r
	);
};
// Return the real magnitude of a complex number. This is defined
// as its distance from the origin (0,0) of the complex plane.
Complex.prototype.mag = function () {
	return Math.sqrt(this.r * this.r + this.i * this.i);
};
// Return a complex number that is the negative of this one.
Complex.prototype.neg = function () {
	return new Complex(-this.r, -this.i);
};
// Convert a Complex object to a string in a useful way.
Complex.prototype.toString = function () {
	return "{" + this.r + "," + this.i + "}";
};
// Test whether this Complex object has the same value as another.
Complex.prototype.equals = function (that) {
	return (
		that != null && // must be defined and non-null
		that.constructor === Complex && // and an instance of Complex
		this.r === that.r &&
		this.i === that.i
	); // and have the same values.
};
/*
 * Class fields (such as constants) and class methods are defined as
 * properties of the constructor. Note that class methods do not
 * generally use the this keyword: they operate only on their arguments.
 */
// Here are some class fields that hold useful predefined complex numbers.
// Their names are uppercase to indicate that they are constants.
// (In ECMAScript 5, we could actually make these properties read-only.)
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// This class method parses a string in the format returned by the toString
// instance method and returns a Complex object or throws a TypeError.
Complex.parse = function (s) {
	try {
		// Assume that the parsing will succeed
		var m = Complex._format.exec(s); // Regular expression magic
		return new Complex(parseFloat(m[1]), parseFloat(m[2]));
	} catch (x) {
		// And throw an exception if it fails
		throw new TypeError("Can't parse '" + s + "' as a complex number.");
	}
};

// A "private" class field used in Complex.parse() above.
// The underscore in its name indicates that it is intended for internal
// use and should not be considered part of the public API of this class.
Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2, 3); // Create a new object with the constructor
var d = new Complex(c.i, c.r); // Use instance properties of c
c.add(d).toString(); // => "{5,5}": use instance methods
// A more complex expression that uses a class method and field
Complex.parse(c.toString()) // Convert c to a string and back again,
	.add(c.neg()) // add its negative to it,
	.equals(Complex.ZERO); // and it will always equal zero

// you could achieve a similar effect using a with statement (this is not recommended, however):

Complex.prototype.toString = function () {
	with (this) {
		return "{" + r + "," + i + "}";
	}
};


