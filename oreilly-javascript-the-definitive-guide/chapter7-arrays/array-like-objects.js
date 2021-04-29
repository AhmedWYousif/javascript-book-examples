// As we’ve seen, JavaScript arrays have some special features that other objects do
// not have:
// • The length property is automatically updated as new elements are added to the list.
// • Setting length to a smaller value truncates the array.
// • Arrays inherit useful methods from Array.prototype.
// • Arrays have a class attribute of “Array”.

var a = {}; // Start with a regular empty object
// Add properties to make it "array-like"
var i = 0;
while (i < 10) {
	a[i] = i * i;
	i++;
}
a.length = i;
// Now iterate through it as if it were a real array
var total = 0;
for (var j = 0; j < a.length; j++) total += a[j];

// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.
function isArrayLike(o) {
	if (
		o && // o is not null, undefined, etc.
		typeof o === "object" && // o is an object
		isFinite(o.length) && // o.length is a finite number
		o.length >= 0 && // o.length is non-negative
		o.length === Math.floor(o.length) && // o.length is an integer
		o.length < 4294967296
	)
		// o.length < 2^32
		return true;
	// Then o is array-like
	else return false; // Otherwise it is not
}

// Array.prototype, you cannot invoke array methods on them directly. You can invoke
// them indirectly using the Function.call method, however:
var a = { 0: "a", 1: "b", 2: "c", length: 3 }; // An array-like object
Array.prototype.join.call(a, "+"); // => "a+b+c"
Array.prototype.slice.call(a, 0); // => ["a","b","c"]: true array copy
Array.prototype.map.call(a, function (x) {
	return x.toUpperCase();
}); // => ["A","B","C"]:

// The ECMAScript 5 array methods were introduced in Firefox 1.5. Because they were
// written generically, Firefox also introduced versions of these methods as functions defined
// directly on the Array constructor.
// With these versions of the methods defined,
// the examples above can be rewritten like this:
var a = { 0: "a", 1: "b", 2: "c", length: 3 }; // An array-like object
Array.join(a, "+");
Array.slice(a, 0);
Array.map(a, function (x) {
	return x.toUpperCase();
});

// These static function versions of the array methods are quite useful when working with
// array-like objects, but since they are nonstandard, you can’t count on them to be defined
// in all browsers. You can write code like this to ensure that the functions you need
// exist before you use them:

Array.join =
	Array.join ||
	function (a, sep) {
		return Array.prototype.join.call(a, sep);
	};

Array.slice =
	Array.slice ||
	function (a, from, to) {
		return Array.prototype.slice.call(a, from, to);
	};

Array.map =
	Array.map ||
	function (a, f, thisArg) {
		return Array.prototype.map.call(a, f, thisArg);
	};

// Strings As Arrays
// In ECMAScript 5 strings behave like read-only arrays. Instead of accessing individual
// characters with the charAt() method, you can use square brackets:

var s = "test";
s.charAt(0); // => "t"
s[1]; // => "e"

// The typeof operator still returns “string” for strings, of course, and the
// Array.isArray() method returns false if you pass it a string.
// The fact that strings behave like arrays also means, however, that we
// can apply generic array methods to them. For example:

s = "JavaScript";
Array.prototype.join.call(s, " "); // => "J a v a S c r i p t"
Array.prototype.filter
	.call(
		s, // Filter the characters of the string
		function (x) {
			return x.match(/[^aeiou]/); // Only match nonvowels
		}
	)
	.join(""); // => "JvScrpt"

// Strings are immutable values, so when they are treated as arrays, they are read-only arrays.
// Array methods like push(), sort(), reverse(), and splice() modify an array in place and do not work on strings.
