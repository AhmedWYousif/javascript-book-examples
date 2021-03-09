

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.


o = {x:1}; // o has own property x and inherits property toString
delete o.x; // Delete x, and return true
delete o.x; // Do nothing (x doesn't exist), and return true
delete o.toString; // Do nothing (toString isn't an own property), return true
delete 1; // Nonsense, but evaluates to true

// delete does not remove properties that have a configurable attribute of false.
delete Object.prototype; // Can't delete; property is non-configurable
var x = 1; // Declare a global variable
delete this.x; // Can't delete this property
function f() {} // Declare a global function
delete this.f; // Can't delete this property either


this.x = 1; // Create a configurable global property (no var)
delete x; // And delete it

// In strict mode, however, delete raises
delete x; // SyntaxError in strict mode
delete this.x; // This works