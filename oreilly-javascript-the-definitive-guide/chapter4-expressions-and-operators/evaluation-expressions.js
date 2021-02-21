
// Like many interpreted languages, JavaScript has the ability to interpret strings of Java-
// Script source code, evaluating them to produce a value. JavaScript does this with the
// global function eval():
eval("3+2") // => 5

// declare a local function with code like this:
eval("function f() { return x+1; }");


var geval = eval; // Using another name does a global eval
var x = "global", y = "global"; // Two global variables
function f() { // This function does a local eval
    var x = "local"; // Define a local variable
    eval("x += 'changed';"); // Direct eval sets local variable
    return x; // Return changed local variable
}
function g() { // This function does a global eval
    var y = "local"; // A local variable
    geval("y += 'changed';"); // Indirect eval sets global variable
    return y; // Return unchanged local variable
}
console.log(f(), x); // Local variable changed: prints "localchanged global":
console.log(g(), y); // Global variable changed: prints "local globalchanged":