var listGen = function(){
    var list = document.createElement("ul");
  list.id = "ls"
  document.body.appendChild(list)
}
var noteGen = function(note){
    var listItem =
     document.createElement("li");
  listItem.innerHTML = note.content;
  document.getElementById("ls").appendChild(listItem);
};


noteTest= {content: "whatever"}
noteTest1= {content: "no"}
listModel = {notes: [noteTest,noteTest1]}

listGen()

listModel.notes.forEach(
noteGen);
