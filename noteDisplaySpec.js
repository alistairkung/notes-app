list = new List();
note1 = new Note("note1");
note2 = new Note("note2");
list.addNote(note1);
list.addNote(note2);
var listGen = function() {
  var list = document.createElement("ul")
  list.id = "ls"
  document.body.appendChild(list)
};
listGen();
list.notes.forEach(noteGen);
var retrievedNote = document.getElementByTag("li")[1]
assert.isEqual(retrievedNote, note2)
