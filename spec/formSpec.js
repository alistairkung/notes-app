htmlGen.createForm(document.body);

// form is of the correct type
assert.isEqual(document.getElementById("notes-form").localName, "form",
               "form is of the correct type");

// textarea is of the correct type
assert.isEqual(document.getElementById("notes-input").localName, "textarea",
               "textarea is of the correct type");

// form has the correct ID
assert.isEqual(document.getElementById("notes-form").id, "notes-form",
               "form has the correct ID");

// textarea has the correct ID
assert.isEqual(document.getElementById("notes-input").id, "notes-input",
               "textarea has the correct ID");

// button is of the correct type
assert.isEqual(document.getElementById("btn").localName, "button",
               "button is of the correct type");

// button
assert.isEqual(document.getElementById("btn").innerHTML, "Submit",
               "button has the value 'Submit'");
