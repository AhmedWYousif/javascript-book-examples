// Wrapper Objects
var s = "test"; // Start with a string value.
s.len = 4; // Set a property on it.
var t = s.len; // Now query the property.

var s = "test",
	n = 1,
	b = true; // A string, number, and boolean value.
var S = new String(s); // A String object
var N = new Number(n); // A Number object
var B = new Boolean(b); // A Boolean object

// Immutable Primitive Values and Mutable Object References
// There is a fundamental difference in
// JavaScript between primitive values (undefined, null, booleans, numbers, and strings)
// and objects (including arrays and functions).
// Primitives are immutable

var s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
s; // => "hello": the original string has not changed
