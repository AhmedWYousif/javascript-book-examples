
// We’ve seen throughout this chapter that arrays are objects with some special behavior.
// Given an unknown object, it is often useful to be able to determine whether it is an
// array or not. 

Array.isArray([]) // => true
Array.isArray({}) // => false
// The typeof operator does not help here: it returns “object” for arrays
//  The instanceof operator works in simple cases:
[] instanceof Array // => true
({}) instanceof Array // => false

// The problem with using instanceof is that in web browsers, there can be more than
// one window or frame open. Each has its own JavaScript environment, with its own
// global object. And each global object has its own set of constructor functions. Therefore
// an object from one frame will never be an instance of a constructor from another frame.
// While interframe confusion does not arise often, it is enough of a problem that the
// instanceof operator is not deemed a reliable test for arrays.
// The solution is to inspect the class attribute (see §6.8.2) of the object. For arrays

var isArray = Function.isArray || function(o) {
return typeof o === "object" &&
Object.prototype.toString.call(o) === "[object Array]";
};
//This test of the class attribute is, in fact, exactly what the ECMAScript 5 Array.isArray() function does. 