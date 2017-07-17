// Equality Assertions
// ------------------
var assertion   = 1 + 1,
    expectation = 2,
    a = [1, 2, 3, 4, 5],
    h = {"one": 1, "two": 2, "three": 3}

function double(num) {
  return num * 2;
}

// Passing Tests
assert.isEqual(2, 2);
assert.isEqual(1.77, 1.77)
assert.isEqual("17", "17");
assert.isEqual(assertion, expectation);
assert.isEqual(false, false);
assert.isEqual(double(5), 10);
assert.isEqual(a.length, 5);
assert.isEqual(a[0], 1);
assert.isEqual(h.three, 3)

// Failing Tests
assertion   = 17,
expectation = 10;

assert.isEqual(2, 7);
assert.isEqual(1.77, 2.77)
assert.isEqual(17, "17");
assert.isEqual(assertion, expectation);
assert.isEqual(true, false);
assert.isEqual(double(5), 11);
assert.isEqual(a.length, 7);
assert.isEqual(a[3], 7);
assert.isEqual(h.one, 2);
