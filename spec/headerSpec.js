
// header spec

var header = document.createElement("h1")
header.id="title";
header.innerHTML = "Some title";
document.body.appendChild(header);
var newHeader = document.getElementsByTagName("H1")[0];
assert.isEqual(header, newHeader)

// header production code.
