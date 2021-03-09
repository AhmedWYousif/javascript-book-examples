var image = document.getElementById("myimage");
var imgurl = image.src; // The src attribute is the URL of the image
image.id === "myimage"; // Since we looked up the image by id

var f = document.forms[0]; // First <form> in the document
f.action = "http://www.example.com/submit.php"; // Set URL to submit it to.
f.method = "POST"; // HTTP request type

// Getting and Setting Non-HTML Attributes
var image = document.images[0];
var width = parseInt(image.getAttribute("WIDTH"));
image.setAttribute("class", "thumbnail");

// hasAttribute() and removeAttribute()

// Dataset Attributes

/* 
<span class="sparkline" data-ymin="0" data-ymax="10">
1 1 1 2 2 3 4 5 5 4 3 5 6 7 7 4 2 1
</span> 
*/

// Assumes the ES5 Array.map() method (or a work-alike) is defined
var sparklines = document.getElementsByClassName("sparkline");
for (var i = 0; i < sparklines.length; i++) {
	var dataset = sparklines[i].dataset;
	var ymin = parseFloat(dataset.ymin);
	var ymax = parseFloat(dataset.ymax);
	var data = sparklines[i].textContent.split(" ").map(parseFloat);
	drawSparkline(sparklines[i], ymin, ymax, data); // Not yet implemented
}

// At the time of this writing, the dataset property is not implemented in current browsers,
// and the code above would have to be written like this:
var sparklines = document.getElementsByClassName("sparkline");
for (var i = 0; i < sparklines.length; i++) {
	var elt = sparklines[i];
	var ymin = parseFloat(elt.getAttribute("data-ymin"));
	var ymin = parseFloat(elt.getAttribute("data-ymax"));
	var points = elt.getAttribute("data-points");
	var data = elt.textContent.split(" ").map(parseFloat);
	drawSparkline(elt, ymin, ymax, data); // Not yet implemented
}

// Attributes As Attr Nodes
document.body.attributes[0]; // The first attribute of the <body> elt
document.body.attributes.bgcolor; // The bgcolor attribute of the <body> elt
document.body.attributes["ONLOAD"]; // The onload attribute of the <body> elt

// Element Content

// Element Content As Plain Text
var para = document.getElementsByTagName("p")[0]; // First <p> in the document
var text = para.textContent; // Text is "This is a simple document."
para.textContent = "Hello World!"; // Alter paragraph content

/**
 * With one argument, return the textContent or innerText of the element.
 * With two arguments, set the textContent or innerText of element to value.
 */
function textContent(element, value) {
	var content = element.textContent; // Check if textContent is defined
	if (value === undefined) {
		// No value passed, so return current text
		if (content !== undefined) return content;
		else return element.innerText;
	} else {
		// A value was passed, so set text
		if (content !== undefined) element.textContent = value;
		else element.innerText = value;
	}
}

// Element Content As Text Nodes

// Return the plain-text content of element e, recursing into child elements.
// This method works like the textContent property
function textContent(e) {
	var child,
		type,
		s = ""; // s holds the text of all children
	for (child = e.firstChild; child != null; child = child.nextSibling) {
		type = child.nodeType;
		if (type === 3 || type === 4)
			// Text and CDATASection nodes
			s += child.nodeValue;
		else if (type === 1)
			// Recurse for Element nodes
			s += textContent(child);
	}
	return s;
}

// Recursively convert all Text node descendants of n to uppercase.
function upcase(n) {
	if (n.nodeType == 3 || n.nodeTyep == 4)
		// If n is Text or CDATA
		n.data = n.data.toUpperCase();
	// ...convert content to uppercase.
	// Otherwise, recurse on child nodes
	else for (var i = 0; i < n.childNodes.length; i++) upcase(n.childNodes[i]);
}
