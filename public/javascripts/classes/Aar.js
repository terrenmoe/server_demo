//


@@replace: The Symbol.replace value of a regular expression is the method used by String.prototype.replace(..) to replace within a string one or all occurrences of character sequences that match the given regular expression pattern.

The default algorithm for replacing is laid out in section 21.2.5.8 of the ES6 specification (http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype-@@replace).

One cool use for overriding the default algorithm is to provide additional replacer argument options, such as supporting "abaca".replace(/a/g,[1,2,3]) producing "1b2c3" by consuming the iterable for successive replacement values.

