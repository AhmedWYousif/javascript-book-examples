
[].length // => 0: the array has no elements
['a','b','c'].length // => 3: highest index is 2, length is 3


// The special behavior that arrays implement in order to maintain the length
// invariant is that if you set the length property to a non-negative integer n smaller than
// its current value, any array elements whose index is greater than or equal to n are deleted from the array:
a = [1,2,3,4,5]; // Start with a 5-element array.
a.length = 3; // a is now [1,2,3].
a.length = 0; // Delete all elements. a is [].
a.length = 5; // Length is 5, but no elements, like new Array(5)


// In ECMAScript 5, you can make the length property of an array read-only with Object.defineProperty() 
a = [1,2,3]; // Start with a 3-element array.
Object.defineProperty(a, "length", // Make the length property
{writable: false}); // readonly.
a.length = 0; // a is unchanged.

// Similarly, if you make an array element nonconfigurable, it cannot be deleted. If it
// cannot be deleted, then the length property cannot be set to less than the index of the
// nonconfigurable element. the Object.seal() and Object.freeze()