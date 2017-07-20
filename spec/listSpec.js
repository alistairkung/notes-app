//List initializes with an array
var list = new List();
var arr = [];
assert.isEqual(list._notes.constructor,arr.constructor,
               "List initializes with an array");
//The array is empty
assert.isEqual(list._notes[0], undefined, "The array is empty")
//addNote adds an object to the array
var note = {content:"test"}
list.addNote(note)
assert.isEqual(list._notes[0], note, "addNote adds an object to the array")
