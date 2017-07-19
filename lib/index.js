list = new List();

htmlGen.createHeader();
htmlGen.createForm();
htmlGen.createList();

var handleSubmit = function() {
  var userInput = document.getElementById("notes-input").value;
  var note = new Note(userInput);
  list.addNote(note);
  document.getElementById("notes-input").value = "";
};

document.getElementById("btn").addEventListener("click", function(event) {
  event.preventDefault();
  handleSubmit();
  htmlGen.createListItem(list.lastNote());
});
