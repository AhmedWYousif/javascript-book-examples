// Asynchronously load and execute a script from a specified URL
function loadasync(url) {
	var head = document.getElementsByTagName("head")[0]; // Find document <head>
	var s = document.createElement("script"); // Create a <script> element
	s.src = url; // Set its src attribute
	head.appendChild(s); // Insert the <script> into head
}

// create text node
var newnode = document.createTextNode("text node content");

// createComment(), createDocumentFragment(),createElementNS(),cloneNode()

// Inserting Nodes
// appendChild() or insertBefore().

// Insert the child node into parent so that it becomes child node n
function insertAt(parent, child, n) {
	if (n < 0 || n > parent.childNodes.length) throw new Error("invalid index");
	else if (n == parent.childNodes.length) parent.appendChild(child);
	else parent.insertBefore(child, parent.childNodes[n]);
}

// Sort the rows in first <tbody> of the specified table according to
// the value of nth cell within each row. Use the comparator function
// if one is specified. Otherwise, compare the values alphabetically.
function sortrows(table, n, comparator) {
	var tbody = table.tBodies[0]; // First <tbody>; may be implicitly created
	var rows = tbody.getElementsByTagName("tr"); // All rows in the tbody
	rows = Array.prototype.slice.call(rows, 0); // Snapshot in a true array
	// Now sort the rows based on the text in the nth <td> element
	rows.sort(function (row1, row2) {
		var cell1 = row1.getElementsByTagName("td")[n]; // Get nth cell
		var cell2 = row2.getElementsByTagName("td")[n]; // of both rows
		var val1 = cell1.textContent || cell1.innerText; // Get text content
		var val2 = cell2.textContent || cell2.innerText; // of the two cells
		if (comparator) return comparator(val1, val2); // Compare them!
		if (val1 < val2) return -1;
		else if (val1 > val2) return 1;
		else return 0;
	});
	// Now append the rows into the tbody in their sorted order.
	// This automatically moves them from their current location, so there
	// is no need to remove them first. If the <tbody> contains any
	// nodes other than <tr> elements, those nodes will float to the top.
	for (var i = 0; i < rows.length; i++) tbody.appendChild(rows[i]);
}
// Find the <th> elements of the table (assuming there is only one row of them)
// and make them clickable so that clicking on a column header sorts
// by that column.
function makeSortable(table) {
	var headers = table.getElementsByTagName("th");
	for (var i = 0; i < headers.length; i++) {
		(function (n) {
			// Nested funtion to create a local scope
			headers[i].onclick = function () {
				sortrows(table, n);
			};
		})(i); // Assign value of i to the local variable n
	}
}

// Removing and Replacing Nodes
// removeChild(), replaceChild()
n.parentNode.removeChild(n);
n.parentNode.replaceChild(document.createTextNode("[ REDACTED ]"), n);

// Replace the node n with a new <b> element and make n a child of that element.
function embolden(n) {
	// If we're passed a string instead of a node, treat it as an element id
	if (typeof n == "string") n = document.getElementById(n);
	var parent = n.parentNode; // Get the parent of n
	var b = document.createElement("b"); // Create a <b> element
	parent.replaceChild(b, n); // Replace n with the <b> element
	b.appendChild(n); // Make n a child of the <b> element
}

// Implement the outerHTML property for browsers that don't support it.
// Assumes that the browser does support innerHTML, has an extensible
// Element.prototype, and allows getters and setters to be defined.
(function () {
	// If we already have outerHTML return without doing anything
	if (document.createElement("div").outerHTML) return;
	// Return the outer HTML of the element referred to by this
	function outerHTMLGetter() {
		var container = document.createElement("div"); // Dummy element
		container.appendChild(this.cloneNode(true)); // Copy this to dummy
		return container.innerHTML; // Return dummy content
	}
	// Set the outer HTML of the this element to the specified value
	function outerHTMLSetter(value) {
		// Create a dummy element and set its content to the specified value
		var container = document.createElement("div");
		container.innerHTML = value;
		// Move each of the nodes from the dummy into the document
		while (container.firstChild)
			// Loop until container has no more kids
			this.parentNode.insertBefore(container.firstChild, this);
		// And remove the node that has been replaced
		this.parentNode.removeChild(this);
	}
	// Now use these two functions as getters and setters for the
	// outerHTML property of all Element objects. Use ES5 Object.defineProperty
	// if it exists and otherwise fall back on __defineGetter__ and Setter__.
	if (Object.defineProperty) {
		Object.defineProperty(Element.prototype, "outerHTML", {
			get: outerHTMLGetter,
			set: outerHTMLSetter,
			enumerable: false,
			configurable: true,
		});
	} else {
		Element.prototype.__defineGetter__("outerHTML", outerHTMLGetter);
		Element.prototype.__defineSetter__("outerHTML", outerHTMLSetter);
	}
})();

// Using DocumentFragments
var frag = document.createDocumentFragment();

// Reverse the order of the children of Node n
function reverse(n) {
	// Create an empty DocumentFragment as a temporary container
	var f = document.createDocumentFragment();
	// Now loop backward through the children, moving each one to the fragment.
	// The last child of n becomes the first child of f, and vice-versa.
	// Note that appending a child to f automatically removes it from n.
	while (n.lastChild) f.appendChild(n.lastChild);
	// Finally, move the children of f all at once back to n, all at once.
	n.appendChild(f);
}

// Implementing insertAdjacentHTML() using innerHTML
// This module defines Element.insertAdjacentHTML for browsers that don't
// support it, and also defines portable HTML insertion functions that have
// more logical names than insertAdjacentHTML:
// Insert.before(), Insert.after(), Insert.atStart(), Insert.atEnd()
var Insert = (function () {
	// If elements have a native insertAdjacentHTML, use it in four HTML
	// insertion functions with more sensible names.
	if (document.createElement("div").insertAdjacentHTML) {
		return {
			before: function (e, h) {
				e.insertAdjacentHTML("beforebegin", h);
			},
			after: function (e, h) {
				e.insertAdjacentHTML("afterend", h);
			},
			atStart: function (e, h) {
				e.insertAdjacentHTML("afterbegin", h);
			},
			atEnd: function (e, h) {
				e.insertAdjacentHTML("beforeend", h);
			},
		};
	}
	// Otherwise, we have no native insertAdjacentHTML. Implement the same
	// four insertion functions and then use them to define insertAdjacentHTML.
	// First, define a utility method that takes a string of HTML and returns
	// a DocumentFragment containing the parsed representation of that HTML.
	function fragment(html) {
		var elt = document.createElement("div"); // Create empty element
		var frag = document.createDocumentFragment(); // Create empty fragment
		elt.innerHTML = html; // Set element content
		while (elt.firstChild)
			// Move all nodes
			frag.appendChild(elt.firstChild); // from elt to frag
		return frag; // And return the frag
	}
	var Insert = {
		before: function (elt, html) {
			elt.parentNode.insertBefore(fragment(html), elt);
		},
		after: function (elt, html) {
			elt.parentNode.insertBefore(fragment(html), elt.nextSibling);
		},
		atStart: function (elt, html) {
			elt.insertBefore(fragment(html), elt.firstChild);
		},
		atEnd: function (elt, html) {
			elt.appendChild(fragment(html));
		},
	};
	// Now implement insertAdjacentHTML based on the functions above
	Element.prototype.insertAdjacentHTML = function (pos, html) {
		switch (pos.toLowerCase()) {
			case "beforebegin":
				return Insert.before(this, html);
			case "afterend":
				return Insert.after(this, html);
			case "afterbegin":
				return Insert.atStart(this, html);
			case "beforeend":
				return Insert.atEnd(this, html);
		}
	};
	return Insert; // Finally return the four insertion function
})();
