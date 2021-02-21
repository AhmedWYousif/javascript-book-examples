// Labeled Statements

mainloop: while (token != null) {
	// Code omitted...
	continue mainloop; // Jump to the next iteration of the named loop
	// More code omitted...
}

// break
for (var i = 0; i < a.length; i++) {
	if (a[i] == target) break;
}

var matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
var sum = 0,
	success = false;
// Start with a labeled statement that we can break out of if errors occur
compute_sum: if (matrix) {
	for (var x = 0; x < matrix.length; x++) {
		var row = matrix[x];
		if (!row) break compute_sum;
		for (var y = 0; y < row.length; y++) {
			var cell = row[y];
			if (isNaN(cell)) break compute_sum;
			sum += cell;
		}
	}
	success = true;
}
// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise sum contains the sum of all cells of the matrix.

// continue

for (i = 0; i < data.length; i++) {
	if (!data[i]) continue; // Can't proceed with undefined data
	total += data[i];
}

// return

function square(x) {
	return x * x;
} // A function that has a return statement
square(2); // This invocation evaluates to 4

function display_object(o) {
	// Return immediately if the argument is null or undefined.
	if (!o) return;
	// Rest of function goes here...
}

// throw
function factorial(x) {
	// If the input argument is invalid, throw an exception!
	if (x < 0) throw new Error("x must not be negative");
	// Otherwise, compute a value and return normally
	for (var f = 1; x > 1; f *= x, x-- /* empty */);
	return f;
}

// try catch

try {
	// Normally, this code runs from the top of the block to the bottom
	// without problems. But it can sometimes throw an exception,
	// either directly, with a throw statement, or indirectly, by calling
	// a method that throws an exception.
} catch (e) {
	// The statements in this block are executed if, and only if, the try
	// block throws an exception. These statements can use the local variable
	// e to refer to the Error object or other value that was thrown.
	// This block may handle the exception somehow, may ignore the
	// exception by doing nothing, or may rethrow the exception with throw.
} finally {
	// This block contains statements that are always executed, regardless of
	// what happens in the try block. They are executed whether the try
	// block terminates:
	// 1) normally, after reaching the bottom of the block
	// 2) because of a break, continue, or return statement
	// 3) with an exception that is handled by a catch clause above
	// 4) with an uncaught exception that is still propagating
}

try {
	// Ask the user to enter a number
	var n = Number(prompt("Please enter a positive integer", ""));
	// Compute the factorial of the number, assuming the input is valid
	var f = factorial(n);
	// Display the result
	alert(n + "! = " + f);
} catch (ex) {
	// If the user's input was not valid, we end up here
	alert(ex); // Tell the user what the error is
}


