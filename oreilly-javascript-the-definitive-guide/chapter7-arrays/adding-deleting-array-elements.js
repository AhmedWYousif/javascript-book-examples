
// We’ve already seen the simplest way to add elements to an array: just assign values to new indexes:

a = [] // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";

// You can also use the push() method to add one or more values to the end of an array:
// Pushing a value onto an array a is the same as assigning the value to a[a.length]. 
a = []; // Start with an empty array
a.push("zero") // Add a value at the end. a = ["zero"]
a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]


// You can use the unshift() method to insert a value at the beginning of an array.
// You can delete array elements with the delete operator
a = [1,2,3];
delete a[1]; // a now has no element at index 1
1 in a // => false: no array index 1 is defined
a.length // => 3: delete does not affect array length

// Deleting an array element is similar to (but subtly different than) assigning undefined to that element. 

// Note that using delete on an array element does not alter the length
// property and does not shift elements with higher indexes down to fill in the gap that is
// left by the deleted property. If you delete an element from an array, the array becomes
// sparse.


// Finally, splice() is the general-purpose method for inserting, deleting, or replacing
// array elements. 
// It alters the length property and shifts array elements to higher or lower
// indexes