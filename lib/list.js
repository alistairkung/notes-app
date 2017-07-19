function List() {
  this.notes = []
};

List.prototype.addNote = function (note) {
  this.notes.push(note)
};

List.prototype.lastNote = function () {
  return this.notes[this.notes.length - 1];
};
