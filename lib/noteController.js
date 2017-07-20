

function NoteController() {

  this.list = new List();
  this.noteView = new NoteViewModel();
  this.initNoteView();
};

NoteController.prototype.initNoteView = function() {
  this.noteView.setUpPage();
};

NoteController.prototype.truncateNote = function() {
  return this.list.lastNote();
};

var btnListener = document.addEventListener("click", function(event) {
  event.preventDefault();
  handleSubmit(); // This belongs.
  NoteViewModel.createListItem(); // This needs to be a note responsibility.
});

var handleSubmit = function() {
  var userInput = NoteViewModel.getTextArea();
  var note = new Note(userInput);
  list.addNote(note);
  NoteViewModel.clearTextArea();
};


// document.getElementById("btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   handleSubmit(); // This belongs.
//   NoteViewModel.createListItem(); // This needs to be a note responsibility.
// });


