var controller = new NoteController();

var handleSubmit = function() {
  controller.setInput();
  var userInput = controller.getInput();
  var note = new Note(userInput);
  controller.list.addNote(note);
  controller.noteView.clearTextArea();
};
