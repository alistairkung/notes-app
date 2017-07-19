var note = new Note();
assert.isEqual(note.getContent(), "");

note = new Note("content");
assert.isEqual(note.getContent(), "content")
