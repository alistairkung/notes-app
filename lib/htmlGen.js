function createForm() {
  var form = document.createElement("form");
  var textarea = document.createElement("textarea");

  form.id = "notes-form";
  textarea.id = "notes-input";

  form.appendChild(textarea);
  document.body.appendChild(form);
}
