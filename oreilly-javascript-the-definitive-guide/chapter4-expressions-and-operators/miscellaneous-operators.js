// The Conditional Operator (?:)
x > 0 ? x : -x; // The absolute value of x

greeting = "hello " + (username ? username : "there");
// This is equivalent to, but more compact than, the following if statement:
greeting = "hello ";
if (username) greeting += username;
else greeting += "there";

// The typeof Operator

// x        typeof x
// undefined   // "undefined"
// null        // "object"
// true or false  // "boolean"
// any number or NaN  // "number"
// any string          // "string"
// any function // "function"
// any nonfunction native object  // "object"
// any host object    // An implementation-defined string, but not “undefined”, “boolean”, “number”, or “string”.

// You might use the typeof operator in an expression like this:
typeof value == "string" ? "'" + value + "'" : value;

// The delete Operator
var o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore

var a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
a.length // => 2: array only has two elements now



// Here are some example uses of the delete operator:
var o = {x:1, y:2}; // Define a variable; initialize it to an object
delete o.x; // Delete one of the object properties; returns true
typeof o.x; // Property does not exist; returns "undefined"
delete o.x; // Delete a nonexistent property; returns true
delete o; // Can't delete a declared variable; returns false.
// Would raise an exception in strict mode.
delete 1; // Argument is not an lvalue: returns true
this.x = 1; // Define a property of the a global object without var
delete x; // Try to delete it: returns true in non-strict mode


// The void Operator

// void is a unary operator that appears before its single operand, 
// which evaluates its operand, then discards the value and returns undefined. 
//  For example, you might use the void operator in an HTML <a> tag as follows:
<a href="javascript:void window.open();">Open New Window</a>


// The Comma Operator (,)

// The comma operator is a binary operator whose operands may be of any type. It evaluates
// its left operand, evaluates its right operand, and then returns the value of the right
// operand. Thus, the following line:

i=0, j=1, k=2;

// evaluates to 2 and is basically equivalent to:
i = 0; j = 1; k = 2;


// The first comma below is part of the syntax of the var statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for(var i=0,j=10; i < j; i++,j--)
    console.log(i+j);
