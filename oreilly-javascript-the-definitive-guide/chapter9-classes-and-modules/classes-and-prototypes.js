// In JavaScript, a class is a set of objects that inherit properties from the same prototype
// object. The prototype object, therefore, is the central feature of a class.
// In Example
// 6-1 we defined an inherit() function that returns a newly created object that inherits
// from a specified prototype object.
// If we define a prototype object, and then use
// inherit() to create objects that inherit from it, we have defined a JavaScript class.
// Usually, the instances of a class require further initialization, and it is common to define
// a function that creates and initializes the new object. Example 9-1 demonstrates this:
// it defines a prototype object for a class that represents a range of values and also defines
// a “factory” function that creates and initializes a new instance of the class.

// range.js: A class representing a range of values.
// This is a factory function that returns a new range object.
function range(from, to) {
	// Use the inherit() function to create an object that inherits from the
	// prototype object defined below. The prototype object is stored as
	// a property of this function, and defines the shared methods (behavior)
	// for all range objects.
	var r = inherit(range.methods);
	// Store the start and end points (state) of this new range object.
	// These are noninherited properties that are unique to this object.
	r.from = from;
	r.to = to;
	// Finally return the new object
	return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
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

// Here are example uses of a range object.
var r = range(1, 3); // Create a range object
r.includes(2); // => true: 2 is in the range
r.foreach(console.log); // Prints 1 2 3
console.log(r); // Prints (1...3)

// Notice:
// methods as a convenient place to store the prototype object that defines the class.
// the range() function defines from and to properties on each range object.
// These are the unshared, noninherited properties that define the unique state of each individual range object.
// methods all use the this keyword to refer to the object through which they were invoked.
