// Displaying Notes
// ----------------
list = new List();
note1 = new Note("note1");
note2 = new Note("note2");

// Add notes to list
list.addNote(note1);
list.addNote(note2);

// Create a unordered list element
htmlGen.createList();

// Add notes to unordered list
list._notes.forEach(htmlGen.createListItem);

var retrievedNote = document.getElementsByTagName("li")[1].innerHTML;

assert.isEqual(retrievedNote, "note2");
