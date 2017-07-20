var htmlGen = {
  createForm: function (target, args = {id: "notes-form"}) {
    var form = document.createElement("form");
    this._addAttributes(form, args);
    target.appendChild(form);
    return form;
  },
  createButton: function (target, args = {id: "btn", innerHTML: "Submit"}) {
    var btn = document.createElement("button");
    this._addAttributes(btn, args)
    target.appendChild(btn)
  },
  createTextarea: function (target, args = {id: "notes-input"}) {
    var textarea = document.createElement("textarea");
    this._addAttributes(textarea, args)
    target.appendChild(textarea)
  },
  createHeader: function (target, args = {id: "main-header", innerHTML: "Notes App"}) {
    var createdHeader = document.createElement("h1");
    this._addAttributes(createdHeader, args);
    document.body.appendChild(createdHeader);
  },
  createList: function (target, args = {id: "ls"}) {
    var list = document.createElement("ul");
    this._addAttributes(list, args);
    document.body.appendChild(list);
  },
  createListItem: function (noteSummary) {
    var listItem = document.createElement("li");
    listItem.innerHTML = noteSummary;
    document.getElementById("ls").appendChild(listItem);
  },
  _addAttributes: function(item, args) {
    for (var property in args) {
      eval("item" + "." + property + " = " + "'" + args[property] + "'")
    }
  }
}
