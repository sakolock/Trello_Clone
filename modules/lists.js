var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/lists.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },
  get: function() {
    return this.__readFile().data;
  },
  set: function(data) {
    data.id = this.getLastId() + 1;
    data.position = this.getLastPosition() + 1;
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      last_position: data.position,
      data: data
    }), "utf8");
  },
  update: function(data) {
    data.id = this.getLastId();
    data.position = this.getLastPosition();
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      last_position: data.position,
      data: data
    }), "utf8");
  },
  getLastId: function() {
    return this.__readFile().last_id;      
  },
  getLastPosition: function() {
    return this.__readFile().last_position;
  }
};