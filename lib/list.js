function List() {
  this._notes = []
};

List.prototype.addNote = function (note) {
  this._notes.push(note)
};

List.prototype.lastNote = function () {
  return this._notes[this._notes.length - 1];
};

List.prototype.lastNoteTruncated = function () {
  return this.lastNote().truncate();
};
