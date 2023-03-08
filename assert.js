/* assert:  Provides a set of assertion tests
If an expression evaluates to 0 or false, an error is thrown and the program is terminated. */

const assert = require('assert');

// Test if a value is truthy
assert(true); // passes
assert(1); // passes
assert('hello'); // passes

assert(false); // throws AssertionError

// Test if two objects are deeply equal
const actual = { a: 1, b: 2 };
const expected = { a: 1, b: 2 };
assert.deepEqual(actual, expected); // passes

const actual2 = { a: 1, b: 2 };
const expected2 = { a: 1, c: 2 };
assert.deepEqual(actual2, expected2); // throws AssertionError
