function Note(content = "") {
  this._content = content ;
}

Note.prototype.getContent = function () {
  return this._content;
};

Note.prototype.truncate = function () {
  if (this._content.length < 20) {
    return this.getContent();
  } else {
    return this._content.substring(0, 19) + "..."
  }
};
