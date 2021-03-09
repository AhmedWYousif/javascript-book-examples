// Selecting Elements By ID
var section1 = document.getElementById("section1");

/**
 * This function expects any number of string arguments. It treats each
 * argument as an element id and calls document.getElementById() for each.
 * Returns an object that maps ids to the corresponding Element object.
 * Throws an Error object if any of the ids is undefined.
 */
function getElements(/*ids...*/) {
	var elements = {}; // Start with an empty map
	for (var i = 0; i < arguments.length; i++) {
		// For each argument
		var id = arguments[i]; // Argument is an element id
		var elt = document.getElementById(id); // Look up the Element
		if (elt == null)
			// If not defined,
			throw new Error("No element with id: " + id); // throw an error
		elements[id] = elt; // Map id to element
	}
	return elements; // Return id to element map
}

// Selecting Elements by Name
var radiobuttons = document.getElementsByName("favorite_color");

// Get the Element object for the <form name="shipping_address"> element
var form = document.shipping_address;

// Selecting Elements by Type
var spans = document.getElementsByTagName("span");

var firstpara = document.getElementsByTagName("p")[0];

for (
	var i = 0;
	i < document.images.length;
	i++ // Loop through all images
)
	document.images[i].style.display = "none"; // ...and hide them.

var content = Array.prototype.map.call(
	document.getElementsByTagName("p"),
	function (e) {
		return e.innerHTML;
	}
);


// Selecting Elements by CSS Class

// Find all elements that have "warning" in their class attribute
var warnings = document.getElementsByClassName("warning");
// Find all descendants of the element named "log" that have the class
// "error" and the class "fatal"
var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");
