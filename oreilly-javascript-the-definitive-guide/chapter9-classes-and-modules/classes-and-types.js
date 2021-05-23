// JavaScript defines a small set of types: null, undefined, boolean, number, string, function, and object. 
// The typeof operator allows us to distinguish among these types. 
// Often, however, it is useful to treat each class as its own type and to be able to distinguish objects based on their class. 

// there are three techniques for determining the class of an arbitrary object: 
// - the instanceof operator 
// - the constructor property 
// - the name of the constructor function

// None of these techniques is entirely satisfactory, however, and the section concludes with a discussion of duck-typing, 
// a programming philosophy that focuses on what an object can do rather than what its class is.


// The instanceof operator was described in The left-hand operand should be the

// object whose class is being tested, and the right-hand operand should be a constructor function that names a class. 
// The expression o instanceof c evaluates to true if o inherits from c.prototype. 
// The inheritance need not be direct. If o inherits from an object that
// inherits from an object that inherits from c.prototype, the expression will still evaluate to true.

As noted earlier constructors act as the public identity of classes, but prototypes are the fundamental identity. 
Despite the use of a constructor function with instanceof, this operator is really testing what an object inherits from, not what constructor was used to create it.

If you want to test the prototype chain of an object for a specific prototype object and
do not want to use the constructor function as an intermediary, you can use the
isPrototypeOf() method. For example, we could test whether an object r was a member
of the range class defined in Example 9-1 with this code:

range.methods.isPrototypeOf(r); // range.methods is the prototype object.

One shortcoming of the instanceof operator and the isPrototypeOf() method is that
they do not allow us to query the class of an object, only to test an object against a class
we specify. A more serious shortcoming arises in client-side JavaScript where a web
application uses more than one window or frame. Each window or frame is a distinct
execution context, and each has its own global object and its own set of constructor
functions. Two arrays created in two different frames inherit from two identical but
distinct prototype objects, and an array created in one frame is not instanceof the
Array() constructor of another frame.