var w = window.open(
	"smallwin.html",
	"smallwin",
	"width=400,height=350,status=yes,resizable=yes"
);

var w = window.open(); // Open a new, blank window.
w.alert("About to visit http://example.com"); // Call its alert() method
w.location = "http://example.com"; // Set its location property

w.opener !== null; // True for any window w created by open()
w.open().opener === w; // True for any window w

// the close() method closes one. If you create a Window object w, you can close it with:
w.close();
// JavaScript code running within that window itself can close it with:
window.close();

// window or frame can refer to its own Window object as window or as self. 
// A frame can refer to the Window object of the window or frame that contains it using the parent property:
parent.history.back();


// A Window object that represents a top-level window or tab has no container, and its parent property simply refers to the window itself:
parent == self; // For any top-level window


var iframeElement = document.getElementById("f1");

var childFrame = document.getElementById("f1").contentWindow;


var elt = document.getElementById("f1");
var win = elt.contentWindow;
win.frameElement === elt // Always true for frames
window.frameElement === null // For toplevel windows







