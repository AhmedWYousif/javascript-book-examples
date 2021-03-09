// works only for own properties.
Object.getOwnPropertyDescriptor();

// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({ x: 1 }, "x");

// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");

// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited

//To query the attributes of inherited properties, you must explicitly traverse the prototype chain
Object.getPrototypeOf();

var o = {}; // Start with no properties at all
// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", {
	value: 1,
	writable: true,
	enumerable: false,
	configurable: true,
});

// Check that the property is there but is nonenumerable
o.x; // => 1
Object.keys(o); // => []

// Now modify the property x so that it is read-only
Object.defineProperty(o, "x", { writable: false });
// Try to change the value of the property
o.x = 2; // Fails silently or throws TypeError in strict mode
o.x; // => 1
// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
o.x; // => 2
// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", {
	get: function () {
		return 0;
	},
});
o.x; // => 0

// If you want to create or modify more than one property at a time
var p = Object.defineProperties(
	{},
	{
		x: { value: 1, writable: true, enumerable: true, configurable: true },
		y: { value: 1, writable: true, enumerable: true, configurable: true },
		r: {
			get: function () {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			},
			enumerable: true,
			configurable: true,
		},
	}
);

//Example 6-3. Copying property attributes
/*
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the object on which it is called by copying properties
 * from the object passed as its argument. All property attributes are
 * copied, not just the property value. All own properties (even non-
 * enumerable ones) of the argument object are copied unless a property
 * with the same name already exists in the target object.
 */
Object.defineProperty(
	Object.prototype,
	"extend", // Define Object.prototype.extend
	{
		writable: true,
		enumerable: false, // Make it nonenumerable
		configurable: true,
		value: function (o) {
			// Its value is this function
			// Get all own props, even nonenumerable ones
			var names = Object.getOwnPropertyNames(o);
			// Loop through them
			for (var i = 0; i < names.length; i++) {
				// Skip props already in this object
				if (names[i] in this) continue;
				// Get property description from o
				var desc = Object.getOwnPropertyDescriptor(o, names[i]);
				// Use it to create property on this
				Object.defineProperty(this, names[i], desc);
			}
		},
	}
);
