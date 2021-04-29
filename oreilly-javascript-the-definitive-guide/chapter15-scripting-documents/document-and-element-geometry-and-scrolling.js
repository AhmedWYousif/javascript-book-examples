// Querying the scrollbar positions of a window
// Return the current scrollbar offsets as the x and y properties of an object
function getScrollOffsets(w) {
	// Use the specified window or the current window if no argument
	w = w || window;
	// This works for all browsers except IE versions 8 and before
	if (w.pageXOffset != null) return { x: w.pageXOffset, y: w.pageYOffset };
	// For IE (or any browser) in Standards mode
	var d = w.document;
	if (document.compatMode == "CSS1Compat")
		return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
	// For browsers in Quirks mode
	return { x: d.body.scrollLeft, y: d.body.scrollTop };
}

// Querying the viewport size of a window
// Return the viewport size as w and h properties of an object
function getViewportSize(w) {
	// Use the specified window or the current window if no argument
	w = w || window;
	// This works for all browsers except IE8 and before
	if (w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };
	// For IE (or any browser) in Standards mode
	var d = w.document;
	if (document.compatMode == "CSS1Compat")
		return {
			w: d.documentElement.clientWidth,
			h: d.documentElement.clientHeight,
		};
	// For browsers in Quirks mode
	return { w: d.body.clientWidth, h: d.body.clientWidth };
}

// Querying the Geometry of an Element
// getBoundingClientRect()
// returns an object with properties left, right, top, and bottom.
// The left and top properties give the X and Y coordinates of the upper-left corner of the element and the right and bottom properties
// give the coordinates of the lower-right corner.

// To convert to document coordinates that remain valid even
// if the user scrolls the browser window, add the scroll offsets:
var box = e.getBoundingClientRect(); // Get position in viewport coordinates
var offsets = getScrollOffsets(); // Utility function defined above
var x = box.left + offsets.x; // Convert to document coordinates
var y = box.top + offsets.y;

// the object returned by getBoundingClientRect() also has width and height properties, but the original IE implementation does not do this.
var box = e.getBoundingClientRect();
var w = box.width || box.right - box.left;
var h = box.height || box.bottom - box.top;

// The coordinates returned by getBoundingClientRect() include the border and the padding of the element but do not include the element margins.

// returned by getBoundingClientRect() and getClientRects() are not live. They are static
// snapshots of the visual state of document when the methods are called. They are not updated when the user scrolls or resizes the browser window.

// Determining the Element at a Point

// determine which element is at a given location in the viewport.
// You can determine this with the elementFromPoint() method of the Document object. Pass X and Y coordinates (using viewport coordinates, not document coordinates)
// this method is that it returns the innermost and uppermost

// Scrolling

// following code scrolls the browser so that the bottom-most page of the document is visible:
// Get the height of the document and viewport. offsetHeight is explained below.
var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight; // Or use getViewportSize() above
// And scroll so the last "page" shows in the viewport
window.scrollTo(0, documentHeight - viewportHeight);

// The scrollBy() method of the Window is similar to scroll() and scrollTo(), but its
// arguments are relative and are added to the current scrollbar offsets.
// Scroll 10 pixels down every 200 ms. Note there is no way to turn this off!
javascript: void setInterval(function () {
	scrollBy(0, 10);
}, 200);

// The behavior of scrollIntoView() is similar to what the browser does when you set
// window.location.hash to the name of a named anchor (an <a name=""> element).

// The getBoundingClientRect() method is defined in all current browsers, but if you need
// to support an older generation of browsers, you can’t rely on this method and must use
// older techniques for determining element size and position.
function getElementPosition(e) {
	var x = 0,
		y = 0;
	while (e != null) {
		x += e.offsetLeft;
		y += e.offsetTop;
		e = e.offsetParent;
	}
	return { x: x, y: y };
}

// every HTML element has all of the following properties:
// offsetWidth clientWidth scrollWidth
// offsetHeight clientHeight scrollHeight
// offsetLeft clientLeft scrollLeft
// offsetTop clientTop scrollTop
// offsetParent

// clientWidth and clientHeight are like offsetWidth and offsetHeight except that they do not include the border size,


// In modern browsers, this getElementPos() method returns the same position values as getBoundingClientRect() does (but is much less efficient).
function getElementPos(elt) {
	var x = 0,
		y = 0;
	// Loop to add up offsets
	for (var e = elt; e != null; e = e.offsetParent) {
		x += e.offsetLeft;
		y += e.offsetTop;
	}
	// Loop again, through all ancestor elements to subtract scroll offsets.
	// This subtracts the main scrollbars, too, and converts to viewport coords.
	for (var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode) {
		x -= e.scrollLeft;
		y -= e.scrollTop;
	}
	return { x: x, y: y };
}

