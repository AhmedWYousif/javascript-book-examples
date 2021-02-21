// Objects are different than primitives. First, they are mutable—their values can change:
var o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
var a = [1, 2, 3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element

var o = { x: 1 },
	p = { x: 1 }; // Two objects with the same properties
o === p; // => false: distinct objects are never equal
var a = [],
	b = []; // Two distinct, empty arrays
a === b; // => false: distinct arrays are never equal

var a = []; // The variable a refers to an empty array.
var b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0]; // => 1: the change is also visible through variable a.
a === b; // => true: a and b refer to the same object, so they are equal.

var a = ["a", "b", "c"]; // An array we want to copy
var b = []; // A distinct array we'll copy into
for (var i = 0; i < a.length; i++) {
	// For each index of a[]
	b[i] = a[i]; // Copy an element of a into b
}

function equalArrays(a, b) {
	if (a.length != b.length) return false; // Different-size arrays not equal
	for (
		var i = 0;
		i < a.length;
		i++ // Loop through all elements
	)
		if (a[i] !== b[i]) return false; // If any differ, arrays not equal
	return true; // Otherwise they are equal
}
