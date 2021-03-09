var p = { x: 1 }; // Define a prototype object.
var o = Object.create(p); // Create an object with that prototype.
p.isPrototypeOf(o); // => true: o inherits from p
Object.prototype.isPrototypeOf(o); // => true: p inherits from Object.prototype

// Note that isPrototypeOf() performs a function similar to the instanceof operator

// The class Attribute

function classof(o) {
	if (o === null) return "Null";
	if (o === undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8, -1);
}

classof(null); // => "Null"
classof(1); // => "Number"
classof(""); // => "String"
classof(false); // => "Boolean"
classof({}); // => "Object"
classof([]); // => "Array"
classof(/./); // => "Regexp"
classof(new Date()); // => "Date"
classof(window); // => "Window" (a client-side host object)
function f() {} // Define a custom constructor
classof(new f()); // => "Object"

// The extensible Attribute
const o = {};
// To make an object non-extensible
const nonExtendObject = Object.preventExtensions(o);
// check object is extendible
Object.isExtensible(nonExtendObject);


// to making the object non-extensible, it also makes all of the own properties of that object non-configurable.
const sealObject =  Object.seal(o);
// to determine whether an object is sealed.
Object.isSealed(sealObject);

// In addition to making the object non-extensible and its properties non-configurable, 
// it also makes all of the object’s own data properties read-only. 
const freezeObject = Object.freeze(o);
// to determine if an object is frozen.
Object.isFrozen(freezeObject); 


// Create a sealed object with a frozen prototype and a nonenumerable property
var o = Object.seal(Object.create(Object.freeze({x:1}), {y: {value: 2, writable: true}}));