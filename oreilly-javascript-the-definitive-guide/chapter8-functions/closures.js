// # Closures

var scope = "global scope"; // A global variable
function checkscope() {
	var scope = "local scope"; // A local variable
	function f() {
		return scope;
	} // Return the value in scope here
	return f();
}
checkscope(); // => "local scope"

// The checkscope() function declares a local variable and then defines and invokes a
// function that returns the value of that variable. It should be clear to you why the call
// to checkscope() returns “local scope”.

var scope = "global scope"; // A global variable
function checkscope() {
	var scope = "local scope"; // A local variable
	function f() {
		return scope;
	} // Return the value in scope here
	return f;
}
checkscope()(); // What does this return?

// f() was defined under a scope chain in which the variable scope was bound to the value
// “local scope”. That binding is still in effect when f is executed, wherever it is executed
// from. So the last line of code above returns “local scope”, not “global scope”. This, in
// a nutshell, is the surprising and powerful nature of closures: they capture the local
// variable (and parameter) bindings of the outer function within which they are defined.

// rewrite the uniqueInteger() function using closures:
var uniqueInteger = (function () {
	// Define and invoke
	var counter = 0; // Private state of function below
	return function () {
		return counter++;
	};
})();

//Private variables like counter need not be exclusive to a single closure: it is perfectly
//possible for two or more nested functions to be defined within the same outer function
// and share the same scope chain.
function counter() {
	var n = 0;
	return {
		count: function () {
			return n++;
		},
		reset: function () {
			n = 0;
		},
	};
}
var c = counter(),
	d = counter(); // Create two counters
c.count(); // => 0
d.count(); // => 0: they count independently
c.reset(); // reset() and count() methods share state
c.count(); // => 0: because we reset c
d.count(); // => 1: d was not reset

// It is worth noting here that you can combine this closure technique with property getters and setters.

function counter(n) {
	// Function argument n is the private variable
	return {
		// Property getter method returns and increments private counter var.
		get count() {
			return n++;
		},
		// Property setter doesn't allow the value of n to decrease
		set count(m) {
			if (m >= n) n = m;
			else throw Error("count can only be set to a larger value");
		},
	};
}

var c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
c.count = 2000; // => Error!

// This function adds property accessor methods for a property with
// the specified name to the object o.
function addPrivateProperty(o, name, predicate) {
	var value; // This is the property value
	// The getter method simply returns the value.
	o["get" + name] = function () {
		return value;
	};
	// The setter method stores the value or throws an exception if
	// the predicate rejects the value.
	o["set" + name] = function (v) {
		if (predicate && !predicate(v))
			throw Error("set" + name + ": invalid value " + v);
		else value = v;
	};
}
// The following code demonstrates the addPrivateProperty() method.
var o = {}; // Here is an empty object
// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", function (x) {
	return typeof x == "string";
});
o.setName("Frank"); // Set the property value
console.log(o.getName()); // Get the property value
o.setName(0); // Try to set a value of the wrong type

// We’ve now seen a number of examples in which two closures are defined in the same
// scope chain and share access to the same private variable or variables. This is an

// important technique, but it is just as important to recognize when closures inadvertently
// share access to a variable that they should not share. Consider the following code:

// This function returns a function that always returns v
function constfunc(v) {
	return function () {
		return v;
	};
}
// Create an array of constant functions:
var funcs = [];
for (var i = 0; i < 10; i++) funcs[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs[5](); // => 5

// When working with code like this that creates multiple closures using a loop, it is a
// common error to try to move the loop within the function that defines the closures.
// Think about the following code, for example:
// Return an array of functions that return the values 0-9
function constfuncs() {
	var funcs = [];
	for (var i = 0; i < 10; i++)
		funcs[i] = function () {
			return i;
		};
	return funcs;
}
var funcs = constfuncs();
funcs[5](); // returns, the value of the variable i is 10, and all 10 closures share
