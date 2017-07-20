

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
   htmlGen.createButton("btn", "Submit", document.getElementById("form"));
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
  return document.getElementById("textarea").value;
};

NoteViewModel.prototype.clearTextArea = function() {
  document.getElementById("textarea").value = "";
};
