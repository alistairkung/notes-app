// Truthy Assertions
// ------------------
var assertion   = 1 + 1,
    expectation = 2,
    a = [1, 2, 3, 4, 5],
    h = {"one": 1, "two": 2, "three": 3}

function double(num) {
  return num * 2;
}

// Passing Tests
assert.isTruthy(2 == 2, "two equal strings are true");
assert.isTruthy(1.77 == 1.77, "two equal floats are true")
assert.isTruthy("17" == "17", "two equal strings are true");
assert.isTruthy(assertion == expectation, "two equal vars are true");
assert.isTruthy(true || false, "true or false is true");
assert.isTruthy(double(5) == 10, "function result and equal integer are true");
assert.isTruthy(a.length == 5, "array length and equal integer are true");
assert.isTruthy(a[0] == 1, "array index and equal integer are true");
assert.isTruthy(h.three == 3, "object attribute and equal integer are true");

// Failing Tests
assertion   = 17,
expectation = 10;

assert.isTruthy(2 == 7, "unequal integers are not true");
assert.isTruthy(1.77 == 2.77, "unequal floats are not true")
assert.isTruthy(17 === "17", "string and integer are not true");
assert.isTruthy(assertion == expectation, "unequal vars are not true");
assert.isTruthy(true == false, "true && false are not true");
assert.isTruthy(double(5) == 11, "function result and unequal integer are not true");
assert.isTruthy(a.length == 7, "array lenght and unequal integer are not true");
assert.isTruthy(a[3] == 7, "array index and unequal integer are not true");
assert.isTruthy(h.one == 2, "object attribute and unequal integer are not true");


// Falsy Assertions
// ----------------

// Passing Tests
assert.isFalsy(2 == 7, "unequal integers are false");
assert.isFalsy(1.77 == 2.77, "unequal floats are false")
assert.isFalsy(17 === "17", "string and integer are false");
assert.isFalsy(assertion == expectation, "unequal vars are false");
assert.isFalsy(true == false, "true && flse are false");
assert.isFalsy(double(5) == 11, "function result and unequal integer are false");
assert.isFalsy(a.length == 7, "array length and unequal integer are false");
assert.isFalsy(a[3] == 7, "array index and unequal integer are false");
assert.isFalsy(h.one == 2, "object attribute and unequal integer are false");

// Failing Tests
assertion   = 1 + 1,
expectation = 2;

assert.isFalsy(2 == 2, "equal integers are not false");
assert.isFalsy(1.77 == 1.77, "equal floats are not false")
assert.isFalsy("17" == "17", "equal strings are not false");
assert.isFalsy(assertion == expectation, "equal vars are not false");
assert.isFalsy(true || false, "true || false is not false");
assert.isFalsy(double(5) == 10, "function result and equal integer are not false");
assert.isFalsy(a.length == 5, "array length and equal integer are not false");
assert.isFalsy(a[0] == 1, "array index and equal integer are not false");
assert.isFalsy(h.three == 3, "object attribute and equal integer are not false")
