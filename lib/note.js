function Note(content = "") {
  this.content = content ;
}

Note.prototype.getContent = function () {
  return this.content;
};
