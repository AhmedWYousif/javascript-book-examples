// The forEach() method iterates through an array, invoking a function you specify for each element.

var data = [1, 2, 3, 4, 5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function (value) {
	sum += value;
}); // Add each value to sum
sum; // => 15

// Now increment each array element
data.forEach(function (v, i, a) {
	a[i] = v + 1;
});
data; // => [2,3,4,5,6]

// Note that forEach() does not provide a way to terminate iteration before all elements
// If you need to terminate early, you must throw an exception, and place the call to forEach() within a try block.

function foreach(a, f, t) {
	try {
		a.forEach(f, t);
	} catch (e) {
		if (e === foreach.break) return;
		else throw e;
	}
}
foreach.break = new Error("StopIteration");

// The map() method passes each element of the array on which it is invoked to the function
// you specify, and returns an array containing the values returned by that function.

a = [1, 2, 3];
b = a.map(function (x) {
	return x * x;
}); // b is [1, 4, 9]

// The filter() method returns an array containing a subset of the elements of the array
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function (x) {
	return x < 3;
}); // [2, 1]
everyother = a.filter(function (x, i) {
	return i % 2 == 0;
}); // [5, 3, 1]

// Note that filter() skips missing elements in sparse arrays, and that its return value is
// always dense. To close the gaps in a sparse array, you can do this:
var dense = sparse.filter(function () {
	return true;
});
// And to close gaps and remove undefined and null elements you can use filter like this:
a = a.filter(function (x) {
	return x !== undefined && x != null;
});

// The every() and some() methods are array predicates: they apply a predicate function
// you specify to the elements of the array, and then return true or false.
// The every() method is like the mathematical “for all” quantifier ∀

a = [1, 2, 3, 4, 5];
a.every(function (x) {
	return x < 10;
}); // => true: all values < 10.
a.every(function (x) {
	return x % 2 === 0;
}); // => false: not all values even.

// The some() method is like the mathematical “there exists” quantifier ∃: it returns
// true if there exists at least one element in the array for which the predicate returns true
a = [1, 2, 3, 4, 5];
a.some(function (x) {
	return x % 2 === 0;
}); // => true a has some even numbers.
a.some(isNaN); // => false: a has no non-numbers.
// Note that both every() and some() stop iterating array elements as soon as they know what value to return.

// The reduce() and reduceRight() methods combine the elements of an array, using the function you specify, to produce a single value.
var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) {
	return x + y;
}, 0); // Sum of values
var product = a.reduce(function (x, y) {
	return x * y;
}, 1); // Product of values
var max = a.reduce(function (x, y) {
	return x > y ? x : y;
}); // Largest value
// When you invoke reduce() with no initial value, it uses the first element of the array as the initial value.

// reduceRight() works just like reduce(), except that it processes the array from highest
// index to lowest (right-to-left), rather than from lowest to highest.
// You might want to do this if the reduction operation has right-to-left precedence, for example:
var a = [2, 3, 4];
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function (accumulator, value) {
	return Math.pow(value, accumulator);
});

// Note that neither reduce() nor reduceRight() accepts an optional argument that specifies
// the this value on which the reduction function is to be invoked.

var objects = [{ x: 1 }, { y: 2 }, { z: 3 }];
var merged = objects.reduce(union); // => {x:1, y:2, z:3}

var objects = [
	{ x: 1, a: 1 },
	{ y: 2, a: 2 },
	{ z: 3, a: 3 },
];
var leftunion = objects.reduce(union); // {x:1, y:2, z:3, a:1}
var rightunion = objects.reduceRight(union); // {x:1, y:2, z:3, a:3}

// indexOf() and lastIndexOf() search an array for an element with a specified value, and
// return the index of the first such element found, or –1 if none is found.
a = [0, 1, 2, 1, 0];
a.indexOf(1); // => 1: a[1] is 1
a.lastIndexOf(1); // => 3: a[3] is 1
a.indexOf(3); // => -1: no element has value 3

// Find all occurrences of a value x in an array a and return an array
// of matching indexes
function findall(a, x) {
	var results = [], // The array of indexes we'll return
		len = a.length, // The length of the array to be searched
		pos = 0; // The position to search from
	while (pos < len) {
		// While more elements to search...
		pos = a.indexOf(x, pos); // Search
		if (pos === -1) break; // If nothing found, we're done.
		results.push(pos); // Otherwise, store index in array
		pos = pos + 1; // And start next search at next element
	}
	return results; // Return array of indexes
}
//Note that strings have indexOf() and lastIndexOf() methods that work like these array methods.
