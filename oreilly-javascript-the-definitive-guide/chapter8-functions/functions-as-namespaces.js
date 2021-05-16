// Functions As Namespaces

// variables declared within a function are visible only throughout the function (including within nested functions).
// Variables declared outside of a function are global variables and are visible throughout your JavaScript program.
// a function simply to act as a temporary namespace in which you can define variables without polluting the global namespace.

function mymodule() {
	// Module code goes here.
	// Any variables used by the module are local to this function
	// instead of cluttering up the global namespace.
}
mymodule(); // But don't forget to invoke the function!

// This code defines only a single global variable: the function name “mymodule”.
// If defining even a single property is too much, you can define and invoke an anonymous function in a single expression:
(function () {
	// mymodule function rewritten as an unnamed expression
	// Module code goes here.
})(); // end the function literal and invoke it now.

// Define an extend function that copies the properties of its second and
// subsequent arguments onto its first argument.
// We work around an IE bug here: in many versions of IE, the for/in loop
// won't enumerate an enumerable property of o if the prototype of o has
// a nonenumerable property by the same name. This means that properties
// like toString are not handled correctly unless we explicitly check for them.
var extend = (function () {
	// Assign the return value of this function
	// First check for the presence of the bug before patching it.
	for (var p in { toString: null }) {
		// If we get here, then the for/in loop works correctly and we return
		// a simple version of the extend() function
		return function extend(o) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var prop in source) o[prop] = source[prop];
			}
			return o;
		};
	}
    
	// If we get here, it means that the for/in loop did not enumerate
	// the toString property of the test object. So return a version
	// of the extend() function that explicitly tests for the nonenumerable
	// properties of Object.prototype.
	return function patched_extend(o) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			// Copy all the enumerable properties
			for (var prop in source) o[prop] = source[prop];
			// And now check the special-case properties
			for (var j = 0; j < protoprops.length; j++) {
				prop = protoprops[j];
				if (source.hasOwnProperty(prop)) o[prop] = source[prop];
			}
		}
		return o;
	};
	// This is the list of special-case properties we check for
	var protoprops = [
		"toString",
		"valueOf",
		"constructor",
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString",
	];
})();
