// Set the location property to navigate to a new web page
window.location = "http://www.oreilly.com/";

// Wait 2 seconds and then say hello
setTimeout(function () {
	alert("hello world");
}, 2000);

// Find the element with id="timestamp"
var timestamp = document.getElementById("timestamp");

// If the element is empty, then insert the current date and time into it
if (timestamp.firstChild == null)
	timestamp.appendChild(document.createTextNode(new Date().toString()));

// Explicitly alter the presentation of the heading element
timestamp.style.backgroundColor = "yellow";
// Or just change the class and let the stylesheet specify the details:
timestamp.className = "highlight";

// Update the content of the timestamp element when the user clicks on it
timestamp.onclick = function () {
	this.innerHTML = new Date().toString();
};

// Don't do anything until the entire document has loaded
window.onload = function () {
	// Find all container elements with class "reveal"
	var elements = document.getElementsByClassName("reveal");
	for (var i = 0; i < elements.length; i++) {
		// For each one...
		var elt = elements[i];
		// Find the "handle" element with the container
		var title = elt.getElementsByClassName("handle")[0];
		// When that element is clicked, reveal the rest of the content
		title.onclick = function () {
			if (elt.className == "reveal") elt.className = "revealed";
			else if (elt.className == "revealed") elt.className = "reveal";
		};
	}
};

function factorial(n) {
	// A function to compute factorials
	if (n <= 1) return n;
	else return n * factorial(n - 1);
}

document.write("<table>"); // Begin an HTML table
document.write("<tr><th>n</th><th>n!</th></tr>"); // Output table header
for (var i = 1; i <= 10; i++) {
	// Output 10 rows
	document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}
document.write("</table>"); // End the table
document.write("Generated at " + new Date()); // Output a timestamp

// Asynchronously load and execute a script from a specified URL
function loadasync(url) {
	var head = document.getElementsByTagName("head")[0]; // Find document <head>
	var s = document.createElement("script"); // Create a <script> element
	s.src = url; // Set its src attribute
	head.appendChild(s); // Insert the <script> into head
}

window.onload = function () {};
document.getElementById("button1").onclick = function () {};
function handleResponse() {}
request.onreadystatechange = handleResponse;

window.addEventListener("load", function () {}, false);
request.addEventListener("readystatechange", function () {}, false);

// Register the function f to run when the document finishes loading.
// If the document has already loaded, run it asynchronously ASAP.
function onLoad(f) {
	if (onLoad.loaded)
		// If document is already loaded
		window.setTimeout(f, 0);
	// Queue f to be run as soon as possible
	else if (window.addEventListener)
		// Standard event registration method
		window.addEventListener("load", f, false);
	else if (window.attachEvent)
		// IE8 and earlier use this instead
		window.attachEvent("onload", f);
}
// Start by setting a flag that indicates that the document is not loaded yet.
onLoad.loaded = false;
// And register a function to set the flag when the document does load.
onLoad(function () {
	onLoad.loaded = true;
});



// feature testing 
if (element.addEventListener) {
	// Test for this W3C method before using it
	element.addEventListener("keydown", handler, false);
	element.addEventListener("keypress", handler, false);
} else if (element.attachEvent) {
	// Test for this IE method before using it
	element.attachEvent("onkeydown", handler);
	element.attachEvent("onkeypress", handler);
} else {
	// Otherwise, fall back on a universally supported technique
	element.onkeydown = element.onkeypress = handler;
}


