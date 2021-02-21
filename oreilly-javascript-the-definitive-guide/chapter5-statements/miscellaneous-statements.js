// with

with (document.forms[0]) {
	// Access form elements directly here. For example:
	name.value = "";
	address.value = "";
	email.value = "";
}

// o avoid the with statement and write the code above like this:
var f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";

// debugger
// like a breakpoint: execution of JavaScript code stops and you can use the debugger to print variables
function f(o) {
	if (o === undefined) debugger; // Temporary line for debugging purposes
	// The rest of the function goes here.
}

