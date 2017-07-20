

function NoteController() {

  this.list = new List();
  this.noteView = new NoteViewModel();

};

NoteController.prototype.initNoteView = function() {
  this.noteView.setUpPage();
};
 
