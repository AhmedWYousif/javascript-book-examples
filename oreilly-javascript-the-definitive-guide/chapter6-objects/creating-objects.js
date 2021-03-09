// Object Literals

var empty = {}; // An object with no properties
var point = { x: 0, y: 0 }; // Two properties
var point2 = { x: point.x, y: point.y + 1 }; // More complex values
var book = {
	"main title": "JavaScript", // Property names include spaces,
	"sub-title": "The Definitive Guide", // and hyphens, so use string literals
	for: "all audiences", // for is a reserved word, so quote
	author: {
		// The value of this property is
		firstname: "David", // itself an object. Note that
		surname: "Flanagan", // these property names are unquoted.
	},
};

// Creating Objects with new
var o = new Object(); // Create an empty object: same as {}.
var a = new Array(); // Create an empty array: same as [].
var d = new Date(); // Create a Date object representing the current time
var r = new RegExp("js"); // Create a RegExp object for pattern matching.

// Object.create()
var o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
var o2 = Object.create(null); // o2 inherits no props or methods.
var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
	if (p == null) throw TypeError(); // p must be a non-null object
	if (Object.create)
		// If Object.create() is defined...
		return Object.create(p); // then just use it.
	var t = typeof p; // Otherwise do some more type checking
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {} // Define a dummy constructor function.
	f.prototype = p; // Set its prototype property to p.
	return new f(); // Use f() to create an "heir" of p.
}
