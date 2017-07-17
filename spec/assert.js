var assert = {
  isEqual: function(a, b) {
    if (a === b) {
      return true;
    }
    else {
      return false;
    }
  }
  isTruthy: function(a) {
    if (a){
      console.log("Test passed: " + a + " is truthy")
      return true
    }
    else {
      return false
      throw new Error(a + "is not true")
    }
  }
  isFalsey: function(a) {
    if (!a){
      console.log("Test passed: " + a + " is falsey")
      return true
    }
    else {
      return false
      throw new Error(a + "is true")
    }
  }
};
