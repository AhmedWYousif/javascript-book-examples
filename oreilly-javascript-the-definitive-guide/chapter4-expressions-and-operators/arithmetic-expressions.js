
1 + 2 // => 3
"hello" + " " + "there" // => "hello there"
"1" + "2" // => "12"

1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-to-string
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN

1 + 2 + " blind mice"; // => "3 blind mice"
1 + (2 + " blind mice"); // => "12 blind mice"

var i = 1, j = ++i; // i and j are both 2
var i = 1, j = i++; // i is 2, j is 1

