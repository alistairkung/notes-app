

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
}

NoteController.prototype.getInput = function () {
  return this.input
}

NoteController.prototype.handleSubmit = function () {
  console.log("idontgettodowhatiwant")
}

NoteController.prototype.initListener = function () {
  document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("hi")
    this.handleSubmit();
  })
}
// var handleSubmit = function() {
//   controller.setInput();
//   var userInput = controller.getInput();
//   var note = new Note(userInput);
//   controller.list.addNote(note);
//   controller.noteView.clearTextArea();
// };






// var btnListener = document.addEventListener("click", function(event) {
//   event.preventDefault();
//   handleSubmit(); // This belongs.
//   NoteViewModel.createListItem(); // This needs to be a note responsibility.
// });
//
