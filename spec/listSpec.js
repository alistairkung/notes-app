//List initializes with an array
var list = new List();
var arr = [];
assert.isEqual(list.notes.constructor,arr.constructor);
//The array is empty
assert.isEqual(list.notes[0], undefined)
//addNote adds an object to the array
var note = {content:"test"}
list.addNote(note)
assert.isEqual(list.notes[0], note)
