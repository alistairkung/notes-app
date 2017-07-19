function Note(content = "") {
  this._content = content ;
}

Note.prototype.getContent = function () {
  return this._content;
};
