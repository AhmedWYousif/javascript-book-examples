

var a = ["world"]; // Start with a one-element array
var value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1

i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer


a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.000] // Array index 1. Same as a[1]


a = [true, false]; // This array has elements at indexes 0 and 1
a[2] // => undefined. No element at this index.
a[-1] // => undefined. No property with this name.