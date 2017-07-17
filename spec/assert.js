var assert = {
  isEqual: function(a, b) {
    if (a === b) {
      return true;
    }
    else {
      return false;
    }
  }
  isTruthy: function(assert) {
    if (assert){
      console.log("Test passed: " + assert + " is truthy")
      return true
    }
    else {
      throw new Error(assert + " is not true")
    }
  }
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
