// header spec
var createdHeader = htmlGen.createHeader();

var grabbedHeader = document.getElementsByTagName("H1")[0];
assert.isEqual(createdHeader, grabbedHeader)
