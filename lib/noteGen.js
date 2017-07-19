var listGen = function() {
  var list = document.createElement("ul");
  list.id = "ls"
  document.body.appendChild(list);
}
listGen();
var noteGen = function(note) {
  var listItem = document.createElement("li");
  listItem.innerHTML = note.content;
  document.getElementById("ls").appendChild(listItem);
};
var listNotes = function(list) {
  list.notes.forEach(noteGen); 
}
