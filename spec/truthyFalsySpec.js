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
assert.isTruthy(2 == 2);
assert.isTruthy(1.77 == 1.77)
assert.isTruthy("17" == "17");
assert.isTruthy(assertion == expectation);
assert.isTruthy(true || false);
assert.isTruthy(double(5) == 10);
assert.isTruthy(a.length == 5);
assert.isTruthy(a[0] == 1);
assert.isTruthy(h.three == 3)

// Failing Tests
assertion   = 17,
expectation = 10;

assert.isTruthy(2 == 7);
assert.isTruthy(1.77 == 2.77)
assert.isTruthy(17 === "17");
assert.isTruthy(assertion == expectation);
assert.isTruthy(true == false);
assert.isTruthy(double(5) == 11);
assert.isTruthy(a.length == 7);
assert.isTruthy(a[3] == 7);
assert.isTruthy(h.one == 2);


// Falsy Assertions
// ----------------

// Passing Tests
assert.isFalsy(2 == 7);
assert.isFalsy(1.77 == 2.77)
assert.isFalsy(17 === "17");
assert.isFalsy(assertion == expectation);
assert.isFalsy(true == false);
assert.isFalsy(double(5) == 11);
assert.isFalsy(a.length == 7);
assert.isFalsy(a[3] == 7);
assert.isFalsy(h.one == 2);

// Failing Tests
assertion   = 1 + 1,
expectation = 2;

assert.isFalsy(2 == 2);
assert.isFalsy(1.77 == 1.77)
assert.isFalsy("17" == "17");
assert.isFalsy(assertion == expectation);
assert.isFalsy(true || false);
assert.isFalsy(double(5) == 10);
assert.isFalsy(a.length == 5);
assert.isFalsy(a[0] == 1);
assert.isFalsy(h.three == 3)
