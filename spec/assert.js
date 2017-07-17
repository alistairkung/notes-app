var assert = {
  isEqual: function(assert, expect) {
    if (assert === expect) {
      console.log("Test passed: " + assert + " is equal to " + expect)
      return true;
    }
    else {
      throw new Error("Expected " + assert + " to equal " + expect + ".");
    }
  }
};
