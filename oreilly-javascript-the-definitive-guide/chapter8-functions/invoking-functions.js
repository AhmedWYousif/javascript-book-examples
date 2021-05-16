// Function Invocation ways:
// • as functions,
// • as methods,
// • as constructors, and
// • indirectly through their call() and apply() methods.

// Function Invocation

printprops({ x: 1 });
var total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
var probability = factorial(5) / factorial(13);

// the invocation context (the this value) is the global object. In strict mode, however, the invocation context is undefined.

// Define and invoke a function to determine if we're in strict mode.
var strict = (function () {
	return !this;
})();

// Method Invocation

// A method is nothing more than a JavaScript function that is stored in a property of an object.
// If you have a function f and an object o, you can define a method named m of o

o.m = f;
o.m();

// The function body can refer to that object by using the keyword this. Here is a

var calculator = {
	// An object literal
	operand1: 1,
	operand2: 1,
	add: function () {
		// Note the use of the this keyword to refer to this object.
		this.result = this.operand1 + this.operand2;
	},
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result; // => 2

// property access expressions using square brackets to method invocation.
o["m"](x, y); // Another way to write o.m(x,y).
a[0](z); // Also a method invocation (assuming a[0] is a function).

// Method invocations may also involve more complex property access expressions
customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()

// the method-invocation syntax is an elegant way to express a function is operating on an object.
rect.setSize(width, height);
setRectSize(rect, width, height);

// Method Chaining
// Find all headers, map to their ids, convert to an array and sort them
$(":header")
	.map(function () {
		return this.id;
	})
	.get()
	.sort();

// When you write a method that does not have a return value of its own,
// consider having the method return this. If you do this consistently
// throughout your API, you will enable a style of programming known as method chaining2
shape.setX(100).setY(100).setSize(50).setOutline("red").setFill("blue").draw();

// Note that this is a keyword, not a variable or property name.
// JavaScript syntax does not allow you to assign a value to this.
// Unlike variables, the this keyword does not have a scope, and nested functions do not inherit the this value of their caller.
// It is common to use the variable self for this purpose.

var o = {
	// An object o.
	m: function () {
		// Method m of the object.
		var self = this; // Save the this value in a variable.
		console.log(this === o); // Prints "true": this is the object o.
		f(); // Now call the helper function f().
		function f() {
			// A nested function f
			console.log(this === o); // "false": this is global or undefined
			console.log(self === o); // "true": self is the outer this value.
		}
	},
};
o.m(); // Invoke the method m on the object o.

// Constructor Invocation
// If a function or method invocation is preceded by the keyword new, then it is a constructor invocation.
// Constructor invocations differ from regular function and method invocations in their handling of arguments, invocation context, and return value.

var o = new Object();
var o = new Object();

// Indirect Invocation
// JavaScript functions are objects and like all JavaScript objects, they have methods.
// Two of these methods, call() and apply(), invoke the function indirectly.
