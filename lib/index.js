list = new List();
var hello = function() {
  var userInput = document.getElementById("notes-input").value;
  var note = new Note(userInput);
  list.addNote(note);
  document.getElementById("notes-input").value = "";
}
htmlGen.createHeader();
htmlGen.createForm();
document.getElementById("btn").addEventListener("click", function(event) {
  event.preventDefault()
  hello()
} ) 
    

