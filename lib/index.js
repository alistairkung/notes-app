

(function(){
  window.addEventListener("load", function(){
    new NoteController();
  });
})();


//list = new List();
//
//
// // If we had a viewm model, this should belong to it.
// htmlGen.createHeader();
// htmlGen.createForm();
// htmlGen.createList();
//
// // The event that belongs to a handler somewhere.
// var handleSubmit = function() {
//   var userInput = document.getElementById("notes-input").value;
//   var note = new Note(userInput);
//   console.log("i am in handleSubmit")
//   list.addNote(note);
//   document.getElementById("notes-input").value = "";
// };
//
//
// document.getElementById("btn").addEventListener("click", function(event) {
//   console.log("i am inside clickhandler");
//   event.preventDefault();
//   handleSubmit(); // This belongs.
//   NoteViewModel.createListItem(); // This needs to be a note responsibility.
// });
