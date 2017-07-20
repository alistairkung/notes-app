list = new List();

// If we had a viewm model, this should belong to it.
htmlGen.createHeader();
htmlGen.createForm();
htmlGen.createList();

// The event that belongs to a handler somewhere.
var handleSubmit = function() {
  var userInput = document.getElementById("notes-input").value;
  var note = new Note(userInput);
  list.addNote(note);
  document.getElementById("notes-input").value = "";
};


document.getElementById("btn").addEventListener("click", function(event) {
  event.preventDefault();
  handleSubmit(); // This belongs.
  htmlGen.createListItem(list.lastNote()); // This needs to be a note responsibility.
});
