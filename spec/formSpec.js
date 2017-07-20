htmlGen.createForm(document.body);

// form is of the correct type
assert.isEqual(document.getElementById("notes-form").localName, "form")

// textarea is of the correct type
assert.isEqual(document.getElementById("notes-input").localName, "textarea")

// form has the correct ID
assert.isEqual(document.getElementById("notes-form").id, "notes-form");

// textarea has the correct ID
assert.isEqual(document.getElementById("notes-input").id, "notes-input");

// button is of the correct type
assert.isEqual(document.getElementById("btn").localName, "button")

// button
assert.isEqual(document.getElementById("btn").innerHTML, "Submit")
