

  function createHeader() {
    var createdHeader = document.createElement("h1");
    createdHeader.innerHTML = "Notes";
    document.body.appendChild(createdHeader);
    return createdHeader
  };

  var createdHeader = createHeader();

// header spec

var grabbedHeader = document.getElementsByTagName("H1")[0];
assert.isEqual(createdHeader, grabbedHeader)
