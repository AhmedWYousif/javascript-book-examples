// Integer Literals
// base-10 integer example:
0
3
10000000

// base-16
0xff // 15*16 + 15 = 255 (base 10)
0xCAFE911

// Floating-Point Literals
3.14
2345.789
.333333333333333333
6.02e23 // 6.02 × 10^23
1.4738223E-32 // 1.4738223 × 10^−32


// Arithmetic in JavaScript
Math.pow(2,53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // The square root of 3
Math.pow(3, 1/3) // The cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed


// JavaScript predefines global variables Infinity and NaN to hold the positive infinity and not-a-number value. 
// In ECMAScript 3, these are read/write values and can be changed.
// ECMAScript 5 corrects this and makes the values read-only. 
// The Number object defines alternatives that are read-only even in ECMAScript 3. 
// Here are some examples:
Infinity // A read/write variable initialized to Infinity.
Number.POSITIVE_INFINITY // Same value, read-only.
1/0 // This is also the same value.
Number.MAX_VALUE + 1 // This also evaluates to Infinity.
Number.NEGATIVE_INFINITY // These expressions are negative infinity.
-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN // A read/write variable initialized to NaN.
Number.NaN // A read-only property holding the same value.
0/0 // Evaluates to NaN.
Number.MIN_VALUE/2 // Underflow: evaluates to 0
-Number.MIN_VALUE/2 // Negative zero
-1/Infinity // Also negative 0
-0

// The negative zero value is also somewhat unusual. It compares equal (even using Java-
// Script’s strict equality test) to positive zero, which means that the two values are almost
// indistinguishable, except when used as a divisor:
var zero = 0; // Regular zero
var negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === 1/negz // => false: infinity and -infinity are not equal

// JavaScript numbers have plenty of precision and can approximate 0.1 very closely. 
// But the fact that this number cannot be represented exactly can lead to problems. 
// Consider this code:
var x = .3 - .2; // thirty cents minus 20 cents
var y = .2 - .1; // twenty cents minus 10 cents
x == y // => false: the two values are not the same!
x == .1 // => false: .3-.2 is not equal to .1
y == .1 // => true: .2-.1 is equal to .1
