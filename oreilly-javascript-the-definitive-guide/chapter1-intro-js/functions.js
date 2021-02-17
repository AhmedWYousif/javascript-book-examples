
// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) { // Define a function named "plus1" with parameter "x"
    return x+1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces

plus1(y) // => 4: y is 3, so this invocation returns 3+1


var square = function(x) { // Functions are values and can be assigned to vars
    return x*x; // Compute the function's value
}; // Semicolon marks the end of the assignment.

square(plus1(y)) // => 16: invoke two functions in one expression


// When we combine functions with objects, we get methods:
// When functions are assigned to the properties of an object, we call
// them "methods". All JavaScript objects have methods:
var a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements


var points = [
    {x:0, y:0}, 
    {x:1, y:1}
];
// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
points.dist = function() { // Define a method to compute distance between points
    var p1 = this[0]; // First element of array we're invoked on
    var p2 = this[1]; // Second element of the "this" object
    var a = p2.x-p1.x; // Difference in X coordinates
    var b = p2.y-p1.y; // Difference in Y coordinates
    return Math.sqrt(a*a + b*b); // The Pythagorean theorem
};
points.dist() // => 1.414: distance between our 2 points