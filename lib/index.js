(function(){
  window.addEventListener("load", function(){
    console.log("window not yet loaded");
    new NoteController();
    console.log("window loaded");
  });
})();
