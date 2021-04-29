// The Array.join() method converts all the elements of an array to strings and concatenates them, returning the resulting string.
var a = [1, 2, 3]; // Create a new array with these three elements
a.join(); // => "1,2,3"
a.join(" "); // => "1 2 3"
a.join(""); // => "123"

var b = new Array(10); // An array of length 10 with no elements
b.join("-"); // => '---------': a string of 9 hyphens

// The Array.join() method is the inverse of the String.split() method,
// which creates an array by breaking a string into pieces.

// The Array.reverse() method reverses the order of the elements of an array
// it doesn’t create a new array
var a = [1, 2, 3];
a.reverse().join(); // => "3,2,1" and a is now [3,2,1]

// Array.sort() sorts the elements of an array in place and returns the sorted array.
// it sorts the array elements in alphabetical order
// If an array contains undefined elements, they are sorted to the end of the array.
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"

var a = [33, 4, 1111, 222];
a.sort(); // Alphabetical order: 1111, 222, 33, 4
a.sort(function (a, b) {
	// Numerical order: 4, 33, 222, 1111
	return a - b; // Returns &lt; 0, 0, or &gt; 0, depending on order
});

a.sort(function (a, b) {
	return b - a;
}); // Reverse numerical order

a = ["ant", "Bug", "cat", "Dog"];
a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function (s, t) {
	// Case-insensitive sort
	var a = s.toLowerCase();
	var b = t.toLowerCase();
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}); // => ['ant','Bug','cat','Dog']

// The Array.concat() method creates and returns a new array that contains the elements
// of the original array on which concat() was invoked, followed by each of the arguments to concat().
var a = [1, 2, 3];
a.concat(4, 5); // Returns [1,2,3,4,5]
a.concat([4, 5]); // Returns [1,2,3,4,5]
a.concat([4, 5], [6, 7]); // Returns [1,2,3,4,5,6,7]
a.concat(4, [5, [6, 7]]); // Returns [1,2,3,4,5,[6,7]]

// The Array.slice() method returns a slice, or subarray, of the specified array. Its two
// arguments specify the start and end of the slice to be returned.

var a = [1, 2, 3, 4, 5];
a.slice(0, 3); // Returns [1,2,3]

a.slice(3); // Returns [4,5]
a.slice(1, -1); // Returns [2,3,4]
a.slice(-3, -2); // Returns [3]

// The Array.splice() method is a general-purpose method for inserting or removing elements from an array.
// Unlike slice() and concat(), splice() modifies the array on which it is invoked.

var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1, 2); // Returns [2,3]; a is [1,4]
a.splice(1, 1); // Returns [4]; a is [1]

// The first two arguments to splice() specify which array elements are to be deleted.
// These arguments may be followed by any number of additional arguments that specify elements to be inserted into the array,
// starting at the position specified by the first argument.
var a = [1, 2, 3, 4, 5];
a.splice(2, 0, "a", "b"); // Returns []; a is [1,2,'a','b',3,4,5]
a.splice(2, 2, [1, 2], 3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]

// Note that, unlike concat(), splice() inserts arrays themselves, not the elements of those arrays.


// The push() and pop() methods allow you to work with arrays as if they were stacks.
var stack = []; // stack: []
stack.push(1,2); // stack: [1,2] Returns 2
stack.pop(); // stack: [1] Returns 2
stack.push(3); // stack: [1,3] Returns 2
stack.pop(); // stack: [1] Returns 3
stack.push([4,5]); // stack: [1,[4,5]] Returns 2
stack.pop() // stack: [1] Returns [4,5]
stack.pop(); // stack: [] Returns 1



// The unshift() and shift() methods behave much like push() and pop(), except that
// they insert and remove elements from the beginning of an array rather than from the end. 
var a = []; // a:[]
a.unshift(1); // a:[1] Returns: 1
a.unshift(22); // a:[22,1] Returns: 2
a.shift(); // a:[1] Returns: 22
a.unshift(3,[4,5]); // a:[3,[4,5],1] Returns: 3
a.shift(); // a:[[4,5],1] Returns: 3
a.shift(); // a:[1] Returns: [4,5]
a.shift(); // a:[] Returns: 1


// toString() and toLocaleString()

[1,2,3].toString() // Yields '1,2,3'
["a", "b", "c"].toString() // Yields 'a,b,c'
[1, [2,'c']].toString() // Yields '1,2,c'
// Note that the join() method returns the same string when it is invoked with no arguments.

// toLocaleString() is the localized version of toString(). It converts each array element
// to a string by calling the toLocaleString() method of the element, and then it concatenates
// the resulting strings using a locale-specific (and implementation-defined) separator string.
