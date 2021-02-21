// while

var count = 0;
while (count < 10) {
	console.log(count);
	count++;
}

// do while

function printArray(a) {
	var len = a.length,
		i = 0;
	if (len == 0) console.log("Empty Array");
	else {
		do {
			console.log(a[i]);
		} while (++i < len);
	}
}

// for

for (var count = 0; count < 10; count++) console.log(count);

var i, j;
for (i = 0, j = 10; i < 10; i++, j--) sum += i * j;

function tail(o) {
	// Return the tail of linked list o
	for (; o.next; o = o.next /* empty */); // Traverse while o.next is truthy
	return o;
}

// for in

// Assign array indexes to variable i
for (var i = 0; i < a.length; i++) console.log(a[i]); // Print the value of each array element
// The for/in loop makes it easy to do the same for the properties of an object:
for (var p in o) // Assign property names of o to variable p
	console.log(o[p]); // Print the value of each property


// copy the names of all object properties into an array:
var o = { x: 1, y: 2, z: 3 };
var a = [],
	i = 0;
for (a[i++] in o /* empty */);
