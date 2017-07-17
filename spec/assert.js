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
      return false
      throw new Error(assert + "is not true")
    }
  }
  isFalsey: function(assert) {
    if (!assert){
      console.log("Test passed: " + assert + " is falsey")
      return true
    }
    else {
      return false
      throw new Error(assert + "is true")
    }
  }
};
