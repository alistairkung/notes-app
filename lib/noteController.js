function NoteController() {
  this.list = new List();
  this.noteView = new NoteViewModel();
  this.input = this.noteView.getTextArea();
  this.initListener();
};

NoteController.prototype.truncateNote = function() {
  return this.list.lastNote();
};

NoteController.prototype.setInput = function () {
  this.input = this.noteView.getTextArea();
};

NoteController.prototype.getInput = function () {
  return this.input;
};

NoteController.prototype.handleSubmit = function () {
  this.setInput();
  var userInput = this.getInput();
  var note = new Note(userInput);
  this.list.addNote(note);
  this.noteView.createListItem(this.truncateNote().truncate());
  console.log(this.truncateNote());
  this.noteView.clearTextArea();
};

NoteController.prototype.initListener = function () {
  var self = this;
  document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    self.handleSubmit();
  });
}
