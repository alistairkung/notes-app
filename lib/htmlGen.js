var htmlGen = {
  createForm: function () {
    var form = document.createElement("form"),
    textarea = document.createElement("textarea");

    form.id     = "notes-form";
    textarea.id = "notes-input";
    var btn = document.createElement("button");
    btn.id ="btn"
    btn.innerHTML = "Submit";
    form.appendChild(textarea);
    form.appendChild(btn)
    document.body.appendChild(form);
    return form;
  },
  createHeader: function () {
    var createdHeader = document.createElement("h1");
    createdHeader.innerHTML = "Notes";
    document.body.appendChild(createdHeader);
    return createdHeader
  },
  createList: function () {
    var list = document.createElement("ul");
    list.id = "ls"
    document.body.appendChild(list);
  },
  createListItem: function (note) {
    var listItem = document.createElement("li");
    listItem.innerHTML = note.truncate();
    document.getElementById("ls").appendChild(listItem);
  }
}
