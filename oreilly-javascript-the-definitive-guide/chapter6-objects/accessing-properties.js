// Querying and Setting Properties
var author = book.author; // Get the "author" property of the book.
var name = author.surname; // Get the "surname" property of the author.
var title = book["main title"]; // Get the "main title" property of the book.

var addr = "";
for (i = 0; i < 4; i++) addr += customer["address" + i] + "\n";

function addstock(portfolio, stockname, shares) {
	portfolio[stockname] = shares;
}

function getvalue(portfolio) {
	var total = 0.0;
	for (stock in portfolio) {
		// For each stock in the portfolio:
		var shares = portfolio[stock]; // get the number of shares
		var price = getquote(stock); // look up share price
		total += shares * price; // add stock value to total value
	}
	return total; // Return total value.
}

// Inheritance

var o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and has an own property x.
var p = inherit(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
var q = inherit(p); // q inherits properties from p, o, and Object.prototype
q.z = 3; // and has an own property z.
var s = q.toString(); // toString is inherited from Object.prototype
q.x + q.y; // => 3: x and y are inherited from o and p

var unitcircle = { r: 1 }; // An object to inherit from
var c = inherit(unitcircle); // c inherits the property r
c.x = 1;
c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r; // => 1: the prototype object is not affected

// Property Access Errors
book.subtitle; // => undefined: property doesn't exist
// Raises a TypeError exception. undefined doesn't have a length property
var len = book.subtitle.length;

// A verbose and explicit technique
var len = undefined;
if (book) {
	if (book.subtitle) len = book.subtitle.length;
}

// A concise and idiomatic alternative to get subtitle length or undefined
var len = book && book.subtitle && book.subtitle.length;

// The prototype properties of built-in constructors are read-only.
Object.prototype = 0; // Assignment fails silently; Object.prototype unchanged

