var note = new Note();
assert.isEqual(note.getContent(), "");

note = new Note("content");
assert.isEqual(note.getContent(), "content")

var noteTwo = new Note("This is a very, very, very long string");
assert.isEqual(noteTwo.truncate(), "This is a very, ver...")
