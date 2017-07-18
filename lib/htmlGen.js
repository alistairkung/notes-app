var htmlGen = {
  createForm: function () {
    var form = document.createElement("form"),
    textarea = document.createElement("textarea");

    form.id     = "notes-form";
    textarea.id = "notes-input";

    form.appendChild(textarea);
    document.body.appendChild(form);
    return form;
  },
  createHeader: function () {
    var createdHeader = document.createElement("h1");
    createdHeader.innerHTML = "Notes";
    document.body.appendChild(createdHeader);
    return createdHeader
  }
}
