// Function Properties, Methods, and Constructor

// The typeof operator returns the string “function” when applied to a function
// but functions are really a specialized kind of JavaScript object.
// Since functions are objects, they can have properties and methods, just like any other object.
// There is even a Function() constructor to create new function objects.

// The length Property

// This function uses arguments.callee, so it won't work in strict mode.
function check(args) {
	var actual = args.length; // The actual number of arguments
	var expected = args.callee.length; // The expected number of arguments
	if (actual !== expected)
		// Throw an exception if they differ.
		throw Error("Expected " + expected + "args; got " + actual);
}

function f(x, y, z) {
	check(arguments); // Check that the actual # of args matches expected #.
	return x + y + z; // Now do the rest of the function normally.
}

// The prototype Property
// Every function has a prototype property that refers to an object known as the prototype
// object. Every function has a different prototype object. When a function is used as a
// constructor, the newly created object inherits properties from the prototype object.

// The call() and apply() Methods
// call() and apply() allow you to indirectly invoke (§8.2.4) a function as if it were a method of some other object.

f.call(o);
f.apply(o);

//Either of the lines of code above are similar to the following (which assume that o does not already have a property named m):

o.m = f; // Make f a temporary method of o.
o.m(); // Invoke it, passing no arguments.
delete o.m; // Remove the temporary method.

// In ECMAScript 5 strict mode the first arg to call() or apply() becomes the value of this, even if it is a primitive value or null or undefined.
// In ECMAScript 3 and nonstrict mode, a value of null or undefined is replaced with the global object and a primitive value is replaced with the corresponding wrapper object.

f.call(o, 1, 2);
f.apply(o, [1, 2]);

var biggest = Math.max.apply(Math, array_of_numbers);

// Note that apply() works with array-like objects as well as true arrays.

// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
	var original = o[m]; // Remember original method in the closure.
	o[m] = function () {
		// Now define the new method.
		console.log(new Date(), "Entering:", m); // Log message.
		var result = original.apply(this, arguments); // Invoke original.
		console.log(new Date(), "Exiting:", m); // Log message.
		return result; // Return result.
	};
}

// This trace() function is passed an object and a method name. It replaces the specified
// method with a new method that “wraps” additional functionality around the original
// method. This kind of dynamic alteration of existing methods is sometimes called
// “monkey-patching.”

// The bind() Method
// The bind() method was added in ECMAScript 5, but it is easy to simulate in ECMAScript 3. As its name implies,
// the primary purpose of bind() is to bind a function to an object.
// When you invoke the bind() method on a function f and pass an object o, the method returns a new function.

function f(y) {
	return this.x + y;
} // This function needs to be bound
var o = { x: 1 }; // An object we'll bind to
var g = f.bind(o); // Calling g(x) invokes o.f(x)
g(2); // => 3

//It is easy to accomplish this kind of binding with code like the following:
// Return a function that invokes f as a method of o, passing all its arguments.
function bind(f, o) {
	if (f.bind) return f.bind(o);
	// Use the bind method, if there is one
	else
		return function () {
			// Otherwise, bind it like this
			return f.apply(o, arguments);
		};
}

// The ECMAScript 5 bind() method does more than just bind a function to an object.
// It also performs partial application:
// any arguments you pass to bind() after the first are bound along with the this value.
// Partial application is a common technique in functional programming and is sometimes called currying.
var sum = function (x, y) {
	return x + y;
}; // Return the sum of 2 args
// Create a new function like sum, but with the this value bound to null
// and the 1st argument bound to 1. This new function expects just one arg.
var succ = sum.bind(null, 1);
succ(2); // => 3: x is bound to 1, and we pass 2 for the y argument
function f(y, z) {
	return this.x + y + z;
} // Another function that adds
var g = f.bind({ x: 1 }, 2); // Bind this and y
g(3); // => 6: this.x is bound to 1, y is bound to 2 and z is 3

// We can bind the this value and perform partial application in ECMAScript 3.
if (!Function.prototype.bind) {
	Function.prototype.bind = function (o /*, args */) {
		// Save the this and arguments values into variables so we can
		// use them in the nested function below.
		var self = this,
			boundArgs = arguments;
		// The return value of the bind() method is a function
		return function () {
			// Build up an argument list, starting with any args passed
			// to bind after the first one, and follow those with all args
			// passed to this function.
			var args = [],
				i;
			for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
			for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
			// Now invoke self as a method of o, with those arguments
			return self.apply(o, args);
		};
	};
}

// The bind() method defined by ECMAScript 5 does have some features that cannot be
// simulated with the ECMAScript 3 code shown above.

// ## The Function() Constructor
// functions can also be defined with the Function() constructor. For example:
var f = new Function("x", "y", "return x*y;");

// This line of code creates a new function that is more or less equivalent to a function defined with the familiar syntax:
var f = function (x, y) {
	return x * y;
};

// • the Function() constructor creates anonymous functions.
// • The Function() constructor allows JavaScript functions to be dynamically created and compiled at runtime.
// • The Function() constructor parses the function body and creates a new function object each time it is called.
//   If the call to the constructor appears within a loop or within a frequently called function, this process can be inefficient.
//   By contrast, nested functions and function definition expressions that appear within loops are not recompiled each time they are encountered.
// • A last, very important point about the Function() constructor is that the functions
//   it creates do not use lexical scoping; instead, they are always compiled as if they were top-level functions, as the following code demonstrates:

var scope = "global";
function constructFunction() {
	var scope = "local";
	return new Function("return scope"); // Does not capture the local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
constructFunction()(); // => "global"

// The Function() constructor is best thought of as a globally-scoped version of eval() that defines new variables and functions in its own private scope.

//Callable Objects
// a “array-like” objects are not true arrays but can be treated like arrays for most purposes.
// A similar situation, A callable object is any object that can be invoked in a function invocation expression.
// All functions are callable, but not all callable objects are functions.

// Callable objects that are not functions are encountered in two situations in today’s JavaScript implementations.
// First, the IE web browser (version 8 and before) implements client-side methods such as Window.alert() and Document.getElementsById()
// using callable host objects rather than native Function objects.

// These methods work the same in IE as they do in other browsers, but they are not actually Function objects.
// IE9 switches to using true functions, so this kind of callable object will gradually become less common.

// The other common form of callable objects are RegExp objects—in many browsers,
// you can invoke a RegExp object directly as a shortcut for invoking its exec() method.

// This is a completely nonstandard feature of JavaScript that was introduced by Netscape and copied by other vendors for compatibility.
// Do not write code that relies on the callability of RegExp objects: this feature is likely to be deprecated and removed in the future.

// The typeof operator is not interoperable for callable RegExps.  In some browsers it returns “function” and in others it returns “object”.
// If you want to determine whether an object is a true function object (and has function methods) you can test its class attribute.

function isFunction(x) {
	return Object.prototype.toString.call(x) === "[object Function]";
}
