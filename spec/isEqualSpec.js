
var simpleFunction = function() { return 2 + 2 };
var anotherSimpleFunction = function() { return 3 + 1 };

var oneObject = {};
// Passing tests.
assert.isEqual(2, 2);
assert.isEqual("1", "1");
assert.isEqual(oneObject, oneObject);
assert.isEqual(true, true);
assert.isEqual(false, false);
assert.isEqual(simpleFunction(), anotherSimpleFunction())

// Failing tests.
assert.isEqual(NaN, undefined);
assert.isEqual("diff", "dif")
assert.isEqual(true, false);
assert.isEqual(simpleFunction, anotherSimpleFunction)
