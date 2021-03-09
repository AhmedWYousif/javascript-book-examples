// HTML element               Type property    Event handler     Description and events

// <input type="button"> or
// <button type="button">       “button”       onclick           A push button

// <input type="checkbox">      “checkbox”     onchange          A toggle button without radio button behavior

// <input type="file">           “file”        onchange          An input field for entering the name of a file to upload to the web server; value property is read-only

// <input type="hidden">         “hidden”      none              Data submitted with the form but not visible to the user

// <option>                      none          none              A single item within a Select object; event handlers are on the Select object, not on individual Option objects

// <input type="password">      “password”     onchange          An input field for password entry—typed characters are not visible

// <input type="radio">         “radio”        onchange          A toggle button with radio button behavior—only one selected at a time

// <input type="reset"> or
// <button type="reset">        “reset”        onclick           A push button that resets a form

// <select>                     “select-one”   onchange          A list or drop-down menu from which one item may be selected (also see <option>)

// <select multiple>         “select-multiple” onchange          A list from which multiple items may be selected (also see <option>)

// <input type="submit"> or
// <button type="submit">       “submit”       onclick           A push button that submits a form

// <input type="text">           “text”        onchange          A single-line text entry field; the default <input> element it type attribute is omitted or unrecognized

// <textarea>                   “textarea”     onchange          A multiline text entry field

// Selecting Forms and Form Elements

var fields = document.getElementById("address").getElementsByTagName("input");

// All radio buttons in the form with id "shipping"
document.querySelectorAll('#shipping input[type="radio"]');
// All radio buttons with name "method" in form with id "shipping"
document.querySelectorAll('#shipping input[type="radio"][name="method"]');

// a <form> element with a name or id attribute can be selected in a number of other ways. A <form> with a
// name="address" attribute can be selected in any of these ways:
window.address; // Brittle: do not use
document.address; // Only works for forms with name attribute
document.forms.address; // Explicit access to a form with name or id
document.forms[n]; // Brittle: n is the form's numerical position

// Form objects themselves act like HTMLCollections of form elements and can be indexed by name or number.
document.forms.address[0];
document.forms.address.street;
document.address.street; // only for name="address", not id="address"

// If you want to be explicit about selecting a form element, you can index the elements property of the form object instead:
document.forms.address.elements[0];
document.forms.address.elements.street;

// Create a new Option object
var zaire = new Option(
	"Zaire", // The text property
	"zaire", // The value property
	false, // The defaultSelected property
	false
); // The selected property
// Display it in a Select element by appending it to the options array:
var countries = document.address.country; // Get the Select object
countries.options[countries.options.length] = zaire;
