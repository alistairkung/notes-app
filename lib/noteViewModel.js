function NoteViewModel() {
  this.addHeader();
  this.addForm();
  this.addList();
};

NoteViewModel.prototype.addHeader = function() {
  htmlGen.createHeader("Note App");
};

NoteViewModel.prototype.addForm = function() {
   htmlGen.createForm(document.body);
   htmlGen.createTextarea(document.getElementById("notes-form"));
   htmlGen.createButton(document.getElementById("notes-form"));
};

NoteViewModel.prototype.addList = function () {
  htmlGen.createList(document.body);
};

NoteViewModel.prototype.createListItem = function(content) {
  htmlGen.createListItem(content);
};

NoteViewModel.prototype.getTextArea = function() {
  return document.getElementById("notes-input").value;
};

NoteViewModel.prototype.clearTextArea = function() {
  document.getElementById("notes-input").value = "";
};
