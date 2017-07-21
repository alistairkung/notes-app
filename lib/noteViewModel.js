

function NoteViewModel() {

  this.addHeader();
  this.addForm();

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
  createList();
 };

NoteViewModel.prototype.createListItem = function() {
  var listItem = document.createElement("li");
  listItem.innerHTML = NoteController.truncateNote();
  document.getElementById("ls").appendChild(listItem);
};

NoteViewModel.prototype.getTextArea = function() {
  return document.getElementById("notes-input").value;
};

NoteViewModel.prototype.clearTextArea = function() {
  document.getElementById("notes-input").value = "";
};
