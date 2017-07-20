var note = new Note();
assert.isEqual(note.getContent(), "", "getContent can return an empty string");

note = new Note("content");
assert.isEqual(note.getContent(), "content",
               "getContent returns the content of the note")

var noteTwo = new Note("This is a very, very, very long string");
assert.isEqual(noteTwo.truncate(), "This is a very, ver...",
               "strings longer than 20 chars are truncated")
