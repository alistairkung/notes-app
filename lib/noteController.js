function NoteController() {
  this.list = new List();
  this.noteView = new NoteViewModel();
  this.input = this.noteView.getTextArea();
  this.initListener();
  this.urlListener();
};

NoteController.prototype.truncateNote = function() {
  return this.list.lastNoteTruncated();
};
NoteController.prototype.noteContent = function() {
  return this.list.lastNoteContent();
}

NoteController.prototype.setInput = function () {
  this.input = this.noteView.getTextArea();
};

NoteController.prototype.getInput = function () {
  return this.input;
};

NoteController.prototype.handleSubmit = function () {
  this.setInput();
  this.list.addNote(new Note(this.getInput()));
  var content = "#" + this.noteContent();
  this.noteView.createListItem(content, this.truncateNote());
  this.noteView.clearTextArea();
};

NoteController.prototype.initListener = function () {
  var self = this;
  document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    self.handleSubmit();
  });
}

NoteController.prototype.urlListener = function () {
  var self = this;
  window.addEventListener("hashchange", function(){
    self.noteView.showNoteOnPage()
  });
}
