window.location === document.location; // always true

/*
 * This function parses ampersand-separated name=value argument pairs from
 * the query string of the URL. It stores the name=value pairs in
 * properties of an object and returns that object. Use it like this:
 *
 * var args = urlArgs(); // Parse args from URL
 * var q = args.q || ""; // Use argument, if defined, or a default value
 * var n = args.n ? parseInt(args.n) : 10;
 */
function urlArgs() {
	var args = {}; // Start with an empty object
	var query = location.search.substring(1); // Get query string, minus '?'
	var pairs = query.split("&"); // Split at ampersands
	for (var i = 0; i < pairs.length; i++) {
		// For each fragment
		var pos = pairs[i].indexOf("="); // Look for "name=value"
		if (pos == -1) continue; // If not found, skip it
		var name = pairs[i].substring(0, pos); // Extract the name
		var value = pairs[i].substring(pos + 1); // Extract the value
		value = decodeURIComponent(value); // Decode the value
		args[name] = value; // Store as a property
	}
	return args; // Return the parsed arguments
}


// The assign() method of the Location object makes the window load and display the
// document at the URL you specify. The replace() method is similar, but it removes the
// current document from the browsing history before loading the new document.
window.location.assign("url");
window.location.replace("url");
// makes the browser reload the document.
window.location.reload();
//make the browser navigate to a new page is to simply assign the new URL directly to the location property:
window.location = "http://www.oreilly.com"; // Go buy some books!
window.location = "page2.html"; // Load the next page
window.location = "#top"; // Jump to the top of the document
window.location.search = "?page=2"; // load the next page


// If the browser does not support the XMLHttpRequest object
// redirect to a static page that does not require it.
if (!XMLHttpRequest) location.replace("staticpage.html");

