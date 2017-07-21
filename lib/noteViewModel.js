function NoteViewModel() {
  this.addHeader();
  this.addForm();
  this.addList();
  this.addNoteDiv();
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

NoteViewModel.prototype.addNoteDiv = function () {
  htmlGen.createDiv();
}

NoteViewModel.prototype.createListItem = function(content, truncated) {
  htmlGen.createListItem(truncated, {href: content});
};

NoteViewModel.prototype.getTextArea = function() {
  return document.getElementById("notes-input").value;
};

NoteViewModel.prototype.clearTextArea = function() {
  document.getElementById("notes-input").value = "";
};

NoteViewModel.prototype.showNoteOnPage = function() {
  if (this.splitHashString(window.location)){
    this.showNote(this.splitHashString(window.location))
  } else {
    this.showNote("")
  };
};

NoteViewModel.prototype.showNote = function (note) {
  document.getElementById("notes").innerHTML = note
};

NoteViewModel.prototype.splitHashString = function (location) {
  return location.hash.split("#")[1];
};
