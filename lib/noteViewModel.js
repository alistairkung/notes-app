

function NoteViewModel() {

  this.list = new List();

};

NoteViewModel.prototype.setUpPage = function() {
   this.addHeader();
   this.addForm();
};


NoteViewModel.prototype.addHeader = function() {
  htmlGen.createHeader("Note App");
};


NoteViewModel.prototype.addForm = function() {
   htmlGen.createForm("form", document.body);
   htmlGen.createTextarea("textarea", document.getElementById("form"));
   htmlGen.createButton("button", "Submit", document.getElementById("form"));
};
