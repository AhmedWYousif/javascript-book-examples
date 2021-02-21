if (username == null)
	// If username is null or undefined,
	username = "John Doe"; // define it

// Or similarly:
// If username is null, undefined, false, 0, "", or NaN, give it a new value
if (!username) username = "John Doe";

if (!address) {
	address = "";
	message = "Please specify a mailing address.";
}

if (n == 1) console.log("You have 1 new message.");
else console.log("You have " + n + " new messages.");

i = j = 1;
k = 2;
if (i == j)
	if (j == k) console.log("i equals k");
	else console.log("i doesn't equal j"); // WRONG!!

if (i == j) {
	if (j == k) {
		console.log("i equals k");
	}
} else {
	// What a difference the location of a curly brace makes!
	console.log("i doesn't equal j");
}

// when repeated if/else statements are used:
if (n == 1) {
	// Execute code block #1
} else if (n == 2) {
	// Execute code block #2
} else if (n == 3) {
	// Execute code block #3
} else {
	// If all else fails, execute block #4
}

// equivalent, fully nested form:
if (n == 1) {
	// Execute code block #1
} else {
	if (n == 2) {
		// Execute code block #2
	} else {
		if (n == 3) {
			// Execute code block #3
		} else {
			// If all else fails, execute block #4
		}
	}
}

// switch case
switch (n) {
	case 1: // Start here if n == 1
		// Execute code block #1.
		break;
	// Stop here
	case 2: // Start here if n == 2
		// Execute code block #2.
		break; // Stop here
	case 3: // Start here if n == 3
		// Execute code block #3.
		break; // Stop here
	default:
		// If all else fails...
		// Execute code block #4.
		break; // stop here
}

function convert(x) {
	switch (typeof x) {
		case "number": // Convert the number to a hexadecimal integer
			return x.toString(16);
		case "string": // Return the string enclosed in quotes
			return '"' + x + '"';
		default:
			// Convert any other type in the usual way
			return String(x);
	}
}
