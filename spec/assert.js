var assert = {
  isEqual: function(assert, expect) {
    if (assert === expect) {
      console.log("Test Passed: " + assert + " is equal to " + expect);
      return true;
    }
    else {
      console.log("Test Failed: expected " + assert + " to equal " + expect + ".");
      return false
    }
  },
  isTruthy: function(assert) {
    if (assert){
      console.log("Test Passed: " + assert + " is truthy")
      return true
    }
    else {
      console.log("Test Failed: expected " + assert + " to be truthy.");
      return false;
    }
  },
  isFalsy: function(assert) {
    if (!assert){
      console.log("Test Passed: " + assert + " is falsy")
      return true
    }
    else {
      console.log("Test Failed: expected " + assert + " to be falsy.");
      return false;
    }
  }
};
