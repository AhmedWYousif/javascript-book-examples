
var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
p.length // => 1: p consists of 1 16-bit element
e.length // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"

// String Literals
"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"This string\nhas two lines"
"π is the ratio of a circle's circumference to its diameter"

"two\nlines" // A string representing 2 lines written on one line
// "one\ // A one-line string written on 3 lines. ECMAScript 5 only. 
// long\
// line"

// Escape Sequences in String Literals
'You\'re right, it can\'t be a quote'

// Sequence Character represented
// \0 The NUL character (\u0000)
// \b Backspace (\u0008)
// \t Horizontal tab (\u0009)
// \n Newline (\u000A)
// \v Vertical tab (\u000B)
// \f Form feed (\u000C)
// \r Carriage return (\u000D)
// \" Double quote (\u0022)
// \' Apostrophe or single quote (\u0027)
// \\ Backslash (\u005C)
// \x XX The Latin-1 character specified by the two hexadecimal digits XX
// \u XXXX The Unicode character specified by the four hexadecimal digits XXXX

// Working with Strings
msg = "Hello, " + "world"; // Produces the string "Hello, world"
greeting = "Welcome to my blog," + " " + name;

var s = "hello, world" // Start with some text.
s.charAt(0) // => "h": the first character.
s.charAt(s.length-1) // => "d": the last character.
s.substring(1,4) // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.indexOf("l") // => 2: position of first letter l.
s.lastIndexOf("l") // => 10: position of last letter l.
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.split(", ") // => ["hello", "world"] split into substrings
s.replace("h", "H") // => "Hello, world": replaces all instances
s.toUpperCase() // => "HELLO, WORLD"
// In ECMAScript 5, strings can be treated like read-only arrays
s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"

// Pattern Matching
/^HTML/ // Match the letters H T M L at the start of a string
/[1-9][0-9]*/ // Match a non-zero digit, followed by any # of digits
/\bjavascript\b/i // Match "javascript" as a word, case-insensitive

var text = "testing: 1, 2, 3"; // Sample text
var pattern = /\d+/g // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: split on non-digits