var note = new Note();
assert.isEqual(note.content, "");

note = new Note("content");
assert.isEqual(note.content, "content")
