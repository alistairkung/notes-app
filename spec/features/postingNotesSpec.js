// Posting Notes
// -------------
var shortTestInput = "short string",
     longTestInput = "A far longer string so that I can test truncation",
    truncatedInput = "A far longer string...";

(function(){
  window.addEventListener("load", function(){
    new NoteController();

    document.getElementById("notes-input").value = shortTestInput;
    document.getElementById("btn").click();
    assert.isEqual(document.getElementsByTagName("li")[0].innerHTML,
                   shortTestInput, "Short note is successfully posted")

    document.getElementById("notes-input").value = longTestInput;
    document.getElementById("btn").click();
    assert.isEqual(document.getElementsByTagName("li")[1].innerHTML,
                   truncatedInput, "Long note is successfully truncated")
  });
})();
