var htmlGen = {
  createForm: function (id, target) {
    var form = document.createElement("form");
    form.id     = id;
    target.appendChild(form);
    return form;
  },
  createButton: function (id, buttonLabel, target) {
    var btn = document.createElement("button");
    btn.id = id
    btn.innerHTML = buttonLabel
    target.appendChild(btn)
  },
  createTextarea: function (id, target){
    var textarea = document.createElement("textarea");
    textarea.id = id
    target.appendChild(textarea)
  },
  createHeader: function (subject) {
    var createdHeader = document.createElement("h1");
    createdHeader.innerHTML = subject;
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
