var assert = {
  isEqual: function(assert, expect) {
    if (assert === expect) {
      console.log("Test passed: " + assert + " is equal to " + expect)
      return true;
    }
    else {
      console.log("Expected " + assert + " to equal " + expect + ".");
    }
  },
  isTruthy: function(assert) {
    if (assert){
      console.log("Test passed: " + assert + " is truthy")
      return true
    }
    else {
      throw new Error(assert + " is not true")
    }
  },
  isFalsy: function(assert) {
    if (!assert){
      console.log("Test passed: " + assert + " is falsy")
      return true
    }
    else {
      throw new Error(assert + " is true")
    }
  }
};
