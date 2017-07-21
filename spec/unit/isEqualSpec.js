
var simpleFunction = function() { return 2 + 2 };
var anotherSimpleFunction = function() { return 3 + 1 };

var oneObject = {};
// Passing tests.
assert.isEqual(2, 2, "Two integers are equal");
assert.isEqual("1", "1", "Two strings are equal");
assert.isEqual(oneObject, oneObject, "Two objects are equal");
assert.isEqual(true, true, "two trues are equal");
assert.isEqual(false, false, "two falses are equal");
assert.isEqual(simpleFunction(), anotherSimpleFunction(),
               "Result of two functions is equal")

// Failing tests.
assert.isEqual(NaN, undefined, "NaN and undefined are unequal");
assert.isEqual("diff", "dif", "Different strings are unequal")
assert.isEqual(true, false, "True and false are unequal");
assert.isEqual(simpleFunction, anotherSimpleFunction,
               "Result of two functions differ")
