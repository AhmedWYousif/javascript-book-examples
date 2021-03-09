var o = {
	// An ordinary data property
	data_prop: value,
	// An accessor property defined as a pair of functions
	get accessor_prop() {
		/* function body here */
	},
	set accessor_prop(value) {
		/* function body here */
	},
};

var p = {
	// x and y are regular read-write data properties.
	x: 1.0,
	y: 1.0,
	// r is a read-write accessor property with getter and setter.
	// Don't forget to put a comma after accessor methods.
	get r() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	set r(newvalue) {
		var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
		var ratio = newvalue / oldvalue;
		this.x *= ratio;
		this.y *= ratio;
	},
	// theta is a read-only accessor property with getter only.
	get theta() {
		return Math.atan2(this.y, this.x);
	},
};

var q = inherit(p); // Create a new object that inherits getters and setters
(q.x = 0), (q.y = 0); // Create q's own data properties
console.log(q.r); // And use the inherited accessor properties
console.log(q.theta);

// This object generates strictly increasing serial numbers
var serialnum = {
	// This data property holds the next serial number.
	// The $ in the property name hints that it is a private property.
	$n: 0,
	// Return the current value and increment it
	get next() {
		return this.$n++;
	},
	// Set a new value of n, but only if it is larger than current
	set next(n) {
		if (n >= this.$n) this.$n = n;
		else throw "serial number can only be set to a larger value";
	},
};

// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
	get octet() {
		return Math.floor(Math.random() * 256);
	},
	get uint16() {
		return Math.floor(Math.random() * 65536);
	},
	get int16() {
		return Math.floor(Math.random() * 65536) - 32768;
	},
};
