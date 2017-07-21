// List Spec
// ---------

var list = new List();
var arr = [];
var noteMock = {
  truncate: function () {
    return "This is a very, ver..."
  },
  content: "test"
}

assert.isEqual(list._notes.constructor,arr.constructor,
               "List initializes with an array");

assert.isEqual(list._notes[0], undefined, "The array is empty")

list.addNote(noteMock)
assert.isEqual(list._notes[0], noteMock, "addNote adds an object to the array")

assert.isEqual(list.lastNote(), noteMock,
               "lastNote returns the object at the end of the array")

assert.isEqual(list.lastNoteTruncated(), noteMock.truncate(),
               "lastNoteTruncated returns the summary of the object at the end of the array")
