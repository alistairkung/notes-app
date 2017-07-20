

function NoteController() {

  this.list = new List();
  this.noteView = new NoteViewModel();
  this.initNoteView();
  this.input = this.noteView.getTextArea();
  this.initListener();
};

NoteController.prototype.initNoteView = function() {
  this.noteView.setUpPage();
};

NoteController.prototype.truncateNote = function() {
  return this.list.lastNote();
};

NoteController.prototype.setInput = function () {
  this.input = this.noteView.getTextArea();
}

NoteController.prototype.getInput = function () {
  return this.input
}

NoteController.prototype.initListener = function () {
  document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    handleSubmit();
  })
}



// var btnListener = document.addEventListener("click", function(event) {
//   event.preventDefault();
//   handleSubmit(); // This belongs.
//   NoteViewModel.createListItem(); // This needs to be a note responsibility.
// });
//
